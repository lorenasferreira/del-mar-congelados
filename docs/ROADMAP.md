# Del Mar Congelados — Roadmap

## V1 implementada

- [x] Home e catálogo de apresentação com filtros, busca e ordenação.
- [x] Quem Somos, Contato, receitas e página de endereço inexistente.
- [x] Canal comercial configurável em um único ponto.
- [x] Curadoria local de publicações da matriz e link para o perfil.
- [x] Imagem de compartilhamento e metadados no HTML inicial.
- [x] SEO por rota no cliente e geração de sitemap com domínio confirmado.

## Checklist de publicação

- [ ] Receber e revisar catálogo final, com nomes, categorias, pesos/unidades, preços, descrições, fotos e direitos de uso.
- [ ] Confirmar número do WhatsApp comercial da Del Mar Congelados e testar link e mensagem em celular e desktop.
- [ ] Confirmar condições e horários de atendimento antes de qualquer divulgação comercial.
- [ ] Receber a seleção de publicações da Casa Del Mar Meriti com imagens e permalinks disponíveis.
- [ ] Aprovar as receitas existentes ou definir quais sairão da versão publicada.
- [ ] Confirmar o domínio definitivo e configurar `VITE_SITE_URL` somente em produção.
- [ ] Validar redirecionamento da rota institucional antiga, recarga de páginas internas e comportamento de 404 na Vercel.
- [ ] Conferir sitemap, robots, canonical, imagem de compartilhamento e resposta aos robôs no domínio público.
- [ ] Repetir lint, build, auditoria npm e verificação de links na versão final.
- [ ] Validar teclado e leitor de tela e testar atendimento no domínio publicado.

## Decisões futuras

A V1 usa SPA estática. Considerar geração de HTML por rota ou regras de hospedagem se houver requisito de compartilhamento por página ou HTTP 404 real. Alterações de arquitetura, remoção de arquivos existentes e eventual adoção de ecommerce dependem de decisão futura. A área administrativa e o Clube Del Mar continuam como possibilidades após a V1.

Consulte o [contexto e a auditoria técnica](PROJECT_CONTEXT.md) e o [design system](DESIGN_SYSTEM.md).
