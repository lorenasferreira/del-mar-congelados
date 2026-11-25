# Del Mar Congelados — Roadmap

## V1 implementada

- [x] Home e catálogo de apresentação com filtros, busca e ordenação.
- [x] Quem Somos, Contato, receitas e página de endereço inexistente.
- [x] Canal comercial configurável em um único ponto.
- [x] Curadoria local de publicações da matriz e link para o perfil.
- [x] Imagem de compartilhamento e metadados no HTML inicial.
- [x] SEO por rota no cliente e geração de sitemap com domínio confirmado.
- [x] Consulta de endereço por CEP e regras locais de cobertura prontas para receber a lista aprovada.

## Checklist de publicação

- [ ] Receber e revisar catálogo final, com nomes, categorias, pesos/unidades, preços, descrições e imagens aprovadas. Confirmar se os preços serão exibidos ou consultados pelo WhatsApp.
- [ ] Confirmar número do WhatsApp comercial da Del Mar Congelados e testar link e mensagem em celular e desktop.
- [ ] Confirmar se a TopBar pode publicar “Barra Olímpica” e os horários restaurados (seg–sex 5h–19h, sáb 5h–17h, dom 5h–13h). Verificar se pertencem à Del Mar Congelados ou à Casa Del Mar Meriti.
- [ ] Aprovar a afirmação “Conservação garantida” antes da publicação.
- [ ] Confirmar ruas, CEPs, condomínios e limites efetivamente atendidos. Se aplicáveis, confirmar taxa, pedido mínimo e demais condições. Só marcar a lista como completa depois da aprovação.
- [x] Integrar a animação aprovada da Home em MP4 e extrair o poster.
- [ ] Validar a apresentação dos materiais ilustrativos na revisão final.
- [x] Integrar a logo clara transparente do Footer.
- [ ] Aprovar a remoção dos arquivos da montagem fotográfica anterior.
- [ ] Receber a foto real da fachada da matriz e, se disponível, vídeo autorizado de 20–30 segundos. Confirmar poster, legendas e alternativa textual conforme o conteúdo do vídeo.
- [ ] Validar as quatro imagens do Instagram da matriz para publicação e adicionar os permalinks originais quando enviados.
- [ ] Aprovar as receitas existentes e suas imagens ilustrativas ou definir quais sairão da versão publicada.
- [ ] Confirmar o domínio definitivo e configurar `VITE_SITE_URL` somente em produção.
- [ ] Validar redirecionamento da rota institucional antiga, recarga de páginas internas e comportamento de 404 na Vercel.
- [ ] Conferir sitemap, robots, canonical, imagem de compartilhamento e resposta aos robôs no domínio público.
- [ ] Repetir lint, build, auditoria npm e verificação de links na versão final.
- [ ] Validar teclado e leitor de tela e testar atendimento no domínio publicado.

## Decisões futuras

A V1 usa SPA estática. Considerar geração de HTML por rota ou regras de hospedagem se houver requisito de compartilhamento por página ou HTTP 404 real. Alterações de arquitetura, remoção de arquivos existentes e eventual adoção de ecommerce dependem de decisão futura. A área administrativa e o Clube Del Mar continuam como possibilidades após a V1.

Consulte o [contexto e a auditoria técnica](PROJECT_CONTEXT.md) e o [design system](DESIGN_SYSTEM.md).
