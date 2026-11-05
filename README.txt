SITE DO MINISTÉRIO DE LOUVOR SM1
=================================

ESTRUTURA
- index.html: página inicial do ministério.
- patrocinador.html: página dinâmica dos patrocinadores.
- styles.css: estilos, identidade visual e adaptação para celular.
- app.js: navegação, filtros, catálogo e links de contato.
- data.js: dados do ministério e cadastro das empresas.
- images/: logotipos e fotografias otimizadas.

TESTE NO COMPUTADOR
1. Extraia todos os arquivos do ZIP para uma pasta.
2. Abra index.html no navegador.
3. Para testar a página da JBS, clique no cartão JBS Estofados.
   Também é possível abrir patrocinador.html?empresa=jbs-estofados
   (recomendado testar por um servidor local, como a extensão Live Server do VS Code).

PUBLICAÇÃO GRATUITA NO GITHUB PAGES
1. Crie uma conta em https://github.com/ (se ainda não tiver).
2. Clique em New repository.
3. Dê um nome ao repositório, por exemplo: site-sm1.
4. Marque Public e crie o repositório.
5. Envie TODOS os arquivos e pastas deste ZIP para a raiz do repositório.
   Importante: index.html deve ficar na raiz, não dentro de uma segunda pasta.
6. No repositório, abra Settings > Pages.
7. Em Build and deployment, escolha Deploy from a branch.
8. Selecione a branch main e a pasta /(root), depois clique em Save.
9. Aguarde a publicação. O GitHub mostrará o endereço público do site na mesma tela.

ATUALIZAR CONTEÚDO
- Para alterar textos, contatos, patrocinadores ou produtos, edite data.js.
- Para adicionar fotos, coloque os arquivos dentro de images/ e informe o caminho
  correspondente no campo image ou cover do data.js.
- Depois envie as alterações ao mesmo repositório do GitHub.

CONTATOS CADASTRADOS
- SM1: WhatsApp 558191953578 | Instagram @ministeriosm1
- JBS Estofados: No briefing foi digitado (81) 9920-7109, mas a logo da empresa parece exibir
  (81) 99920-7109. O site foi configurado provisoriamente com o número da logo:
  5581999207109. CONFIRME o número correto antes de divulgar o site.

OBSERVAÇÕES
- A hospedagem GitHub Pages é gratuita para repositórios públicos.
- O site é estático: não possui painel administrativo nem banco de dados.
- As fontes Google Fonts carregam pela internet; sem conexão, serão usadas fontes
  alternativas do sistema.
- Não foram cadastrados preços, medidas ou especificações técnicas dos produtos,
  pois essas informações não foram fornecidas. O botão direciona o cliente para
  consultar diretamente a JBS.
