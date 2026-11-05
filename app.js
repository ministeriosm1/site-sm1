const $ = (selector) => document.querySelector(selector);
const sponsors = (typeof SM1_SITE !== "undefined" && Array.isArray(SM1_SITE.sponsors)) ? SM1_SITE.sponsors : [];

function waLink(number, message = "Olá! Vi a empresa no site do SM1 e gostaria de mais informações.") {
  const clean = (number || "").replace(/\D/g, "");
  return clean
    ? `https://wa.me/${clean}?text=${encodeURIComponent(message)}`
    : "#";
}

function initMenu() {
  const toggle = $(".menu-toggle");
  const nav = $(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    toggle.textContent = open ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
      toggle.textContent = "☰";
    });
  });
}

function renderHome() {
  const grid = $("#sponsorGrid");
  if (!grid) return;

  const filters = $("#categoryFilters");
  const categories = ["Todos", ...new Set(sponsors.map((s) => s.category).filter(Boolean))];

  filters.innerHTML = categories.map((category, index) =>
    `<button class="filter-chip${index === 0 ? " active" : ""}" data-category="${category}" type="button">${category}</button>`
  ).join("");

  const logoRibbon = $("#heroPartnerLogos");
  if (logoRibbon) {
    logoRibbon.innerHTML = sponsors.filter((sponsor) => sponsor.logo).map((sponsor) => `
      <a class="hero-partner-logo" href="patrocinador.html?empresa=${encodeURIComponent(sponsor.slug)}" aria-label="Conheça ${sponsor.name}">
        <img src="${sponsor.logo}" alt="${sponsor.name}" loading="lazy">
      </a>
    `).join("");
  }

  const draw = (category) => {
    const visible = category === "Todos"
      ? sponsors
      : sponsors.filter((sponsor) => sponsor.category === category);

    grid.innerHTML = visible.length ? visible.map((sponsor) => `
      <a class="sponsor-card" href="patrocinador.html?empresa=${encodeURIComponent(sponsor.slug)}">
        <div class="sponsor-card-image sponsor-logo-stage">
          ${sponsor.logo ? `<img class="sponsor-card-logo" src="${sponsor.logo}" alt="Logo ${sponsor.name}" loading="lazy">` : `<span class="card-monogram">${sponsor.name.split(/\\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase()}</span>`}
          <span class="card-category">${sponsor.category || "PARCEIRO SM1"}</span>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </div>
        <div class="sponsor-card-info">
          <h3>${sponsor.name}</h3>
          <p>${sponsor.tagline || "Conheça a empresa e seus produtos."}</p>
          <span class="card-link">CONHECER EMPRESA ↗</span>
        </div>
      </a>
    `).join("") : `<div class="empty-state">Ainda não há empresas nesta categoria.</div>`;
  };

  draw("Todos");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    filters.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    draw(button.dataset.category);
  });

  const ministryWhatsapp = $("#ministryWhatsapp");
  const ministryInstagram = $("#ministryInstagram");
  if (ministryWhatsapp) {
    ministryWhatsapp.href = waLink(SM1_SITE.ministry.whatsapp, "Olá! Gostaria de falar com o Ministério de Louvor SM1.");
  }
  if (ministryInstagram && SM1_SITE.ministry.instagram) {
    ministryInstagram.href = SM1_SITE.ministry.instagram;
  }
}

function renderSponsor() {
  const root = $("#sponsorPage");
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get("empresa");
  const sponsor = sponsors.find((item) => item.slug === slug);

  if (!sponsor) {
    root.innerHTML = `
      <section class="section-wrap not-found">
        <p class="eyebrow">SM1 PARCEIROS</p>
        <h1>Empresa não encontrada.</h1>
        <a class="button button-light" href="index.html#parceiros">Voltar aos parceiros</a>
      </section>`;
    return;
  }

  document.title = `${sponsor.name} | SM1`;
  $("#sponsorCategory").textContent = `${sponsor.category || "PARCEIRO"} · PARCEIRO SM1`;
  $("#sponsorName").textContent = sponsor.name;
  $("#sponsorDescription").textContent = sponsor.description || sponsor.tagline || "";

  const logo = $("#sponsorLogo");
  if (logo && sponsor.logo) {
    logo.src = sponsor.logo;
    logo.alt = `Logo ${sponsor.name}`;
    logo.hidden = false;
  }

  const cover = $("#sponsorCover");
  if (cover) {
    if (sponsor.cover) {
      cover.hidden = false;
      cover.style.backgroundImage = `linear-gradient(0deg,rgba(0,0,0,.16),rgba(0,0,0,.02)),url("${sponsor.cover}")`;
      cover.classList.add("has-image");
      cover.innerHTML = "";
      cover.setAttribute("role", "img");
      cover.setAttribute("aria-label", `Produto da ${sponsor.name}`);
    } else {
      cover.hidden = true;
    }
  }

  const sponsorWhatsapp = $("#sponsorWhatsapp");
  if (sponsorWhatsapp) {
    if (sponsor.whatsapp) {
      sponsorWhatsapp.href = waLink(
        sponsor.whatsapp,
        `Olá! Encontrei a ${sponsor.name} pelo site do SM1 e gostaria de mais informações.`
      );
      sponsorWhatsapp.hidden = false;
    } else {
      sponsorWhatsapp.hidden = true;
    }
  }

  const products = sponsor.products || [];
  $("#productCount").textContent = `${products.length} ${products.length === 1 ? "produto" : "produtos"}`;

  $("#productGrid").innerHTML = products.length ? products.map((product) => `
    <article class="product-card">
      <div class="product-image">
        ${product.image
          ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
          : `<span>FOTO DO PRODUTO</span>`}
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description || ""}</p>
        ${product.price ? `<strong>${product.price}</strong>` : ""}
        <a href="${waLink(sponsor.whatsapp, `Olá! Tenho interesse em ${product.name}. Vi no site do SM1.`)}" target="_blank" rel="noopener noreferrer">CONSULTAR PRODUTO ↗</a>
      </div>
    </article>
  `).join("") : `<div class="empty-state">O catálogo desta empresa será atualizado em breve.</div>`;

  const links = $("#companyLinks");
  links.innerHTML = `
    ${sponsor.whatsapp ? `<a class="button button-light" href="${waLink(sponsor.whatsapp)}" target="_blank" rel="noopener noreferrer">WhatsApp da empresa ↗</a>` : ""}
    ${sponsor.instagram ? `<a class="underlined-link" href="${sponsor.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a>` : ""}
    ${sponsor.address ? `<span class="muted">${sponsor.address}</span>` : ""}
    ${!sponsor.whatsapp && !sponsor.instagram && !sponsor.address ? `<span class="muted">Informações de contato em atualização.</span>` : ""}
  `;
}

initMenu();
renderHome();
renderSponsor();

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();
