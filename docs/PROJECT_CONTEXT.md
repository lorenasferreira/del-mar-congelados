# Del Mar Congelados — Contexto do projeto

## Marca e escopo aprovado

A Del Mar Congelados está ligada à Casa Del Mar Meriti, proprietária da loja física em São João de Meriti, RJ. A Del Mar Congelados opera com uma proposta comercial própria voltada a produtos congelados e práticos, e atualmente não possui loja física própria. O Instagram pertence à matriz. A operação terá um WhatsApp comercial próprio.

O site apresenta a marca, um catálogo pequeno e receitas. A consulta de disponibilidade, preços e condições de atendimento ficará no WhatsApp comercial. Carrinho, checkout, pagamento online, estoque automático e painel administrativo ficam fora da V1. As condições de atendimento ainda estão pendentes. O site mantém produtos, preços e receitas provisórios sinalizados como demonstração.

## Como atualizar o conteúdo

- **Catálogo** — editar `frontend/src/data/products.js` e, quando necessário, `categories.js`. Preservar IDs únicos e usar o ID da categoria no produto. Cada item aceita nome, descrição, preço numérico, unidade, endereço de imagem, dimensões opcionais (`imageWidth`, `imageHeight`), destaque e promoção. Registrar pesos confirmados na descrição enquanto o conjunto de dados for pequeno. O preço publicado deve refletir o conteúdo aprovado. Ajustar o aviso demonstrativo quando o conteúdo definitivo substituir os dados atuais.
- **WhatsApp** — configurar `VITE_WHATSAPP_NUMBER` com o número internacional exclusivo da operação, somente dígitos. A mensagem está em `frontend/src/config/contact.js`. O número da Casa Del Mar Meriti pertence à matriz.
- **Instagram** — adicionar quatro imagens reais selecionadas em `frontend/public/assets/images/instagram/`. Recomenda-se WebP quadrado de 1080 × 1080 px, em sRGB, com nomes `post-01.webp` a `post-04.webp`. Preencher `frontend/src/data/instagramPosts.js` com `{ image: "/assets/images/instagram/post-01.webp", alt: "Descrição objetiva do conteúdo visível", permalink: "URL HTTPS do post original" }`. O campo `permalink` é opcional. A curadoria é local e manual, e enquanto não há posts a Home apresenta apenas o perfil da matriz.
- **Quem Somos** — a página usa uma composição editorial e detalhes marítimos. Caso a matriz autorize uma fotografia real, identificá-la como Casa Del Mar Meriti e fornecer um texto alternativo adequado.
- **SEO** — definir `VITE_SITE_URL` apenas em produção com a origem HTTPS confirmada. O build gera `robots.txt` e, quando a origem está presente, `sitemap.xml`, canonical base e URLs absolutas para compartilhamento. Sem a origem, o HTML usa `noindex, follow`. Permitir rastreamento em `robots.txt` dá aos robôs acesso à diretiva `noindex`. Em prévias públicas, manter o domínio em branco ou usar a proteção do ambiente de hospedagem.

## Arquitetura

O `frontend/` concentra a aplicação React e Vite. `MainLayout` reúne TopBar, Header, Outlet, Footer e BackToTop. React Router controla as páginas, os links ativos, o redirecionamento da rota institucional anterior e as buscas por categoria. A pasta `backend/` estava vazia na inspeção. A V1 pode ser servida estaticamente, com o fallback SPA da Vercel. A curadoria, o catálogo e as configurações públicas são locais e dispensam API ou credenciais.

O HTML inicial tem Open Graph e Twitter Card globais. Robôs de compartilhamento que não executam JavaScript recebem esse conjunto em todas as rotas do fallback. Título, descrição, canonical e diretiva de robots são atualizados por página no navegador. A página 404 e receitas inexistentes usam `noindex` após o carregamento do cliente. O fallback normalmente devolve HTTP 200, inclusive para endereços inexistentes. Metadados sociais exclusivos sem JavaScript e status HTTP 404 real exigem uma decisão de hospedagem ou geração estática para as rotas. Documentação de referência: [Open Graph Protocol](https://ogp.me/) e [Vercel Project Configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Auditoria técnica

- **Organização** — os dois componentes `ProductCard` atendem a apresentações diferentes, uma para os destaques e outra para o catálogo. A origem dos filtros e categorias foi unificada. O serviço do Instagram ficou como reexportação local sem chamada de rede. A TopBar preserva pausa e preferência de movimento reduzido com texto institucional confirmado. Os SVGs iniciais do Vite, o favicon antigo, a imagem de template e PNGs originais seguem preservados.
- **Navegação** — os atalhos da Home alimentam os filtros do catálogo pela query string. A rota anterior `/nossa-historia` redireciona para `/quem-somos`. O layout preserva âncoras, foco de entrada e mudança de rota sem forçar o topo em alterações de filtro.
- **Acessibilidade** — link de salto para o conteúdo, estado ativo no menu, controle por Escape, foco visível, imagens decorativas com alt vazio, estrutura de headings e preferência de movimento reduzido. A avaliação local não representa certificação de conformidade. Recomenda-se uma sessão com leitor de tela antes de publicar.
- **Imagens** — os originais permanecem disponíveis. A aplicação usa derivados WebP com dimensões declaradas e imagens abaixo da dobra em lazy loading. O Hero tem carregamento prioritário. A logo original fornecida é RGB opaca. A versão WebP mantém a aparência, e o favicon e a imagem social usam a mesma marca sem camarão.
- **Segurança** — o Git ignora arquivos de ambiente locais e permite versionar apenas o modelo. As configurações da aplicação são públicas. A inspeção dos arquivos versionados não identificou credenciais de integração. O escopo não exige backend, tokens ou autenticação. O npm reportou sete alertas na árvore de desenvolvimento (quatro altos e três moderados), envolvendo Vite, ESLint, @eslint/config-array, minimatch, brace-expansion, source-map-js e Zod. A execução com `--omit=dev` reportou zero. A simulação de correção inclui atualizações amplas e trocas de versões principais transitivas. O lockfile foi mantido para uma revisão específica dessas atualizações.

### Verificação local desta entrega

- `npm run lint`, `npm run build` e `git diff --check` concluídos. O repositório não tem script ou suíte de testes automatizados.
- Chrome local, build de produção, oito caminhos em 320, 375, 393, 768, 1024 e 1440 px. Home, Produtos, Quem Somos, Contato, lista e detalhe de receitas, receita inexistente e rota inexistente foram carregados sem overflow horizontal, imagens indisponíveis ou erros JavaScript observados.
- Passaram as verificações do link de salto, Escape e foco do menu, navegação institucional, filtros e busca, âncora de categorias, BackToTop com movimento reduzido e redirecionamento da rota anterior.
- O build temporário com domínio e número de teste confirmou os metadados sociais no HTML sem JavaScript, sitemap, robots, canonical por rota, noindex em rota inexistente e os CTAs com a mensagem prevista.
- Dez imagens foram derivadas em WebP. Os arquivos usados pela aplicação passaram de 27,57 MB para 0,99 MB (−96,4%). O Hero passou de 3,42 MB para 433 KB e a logo, de 1,20 MB para 26 KB.
- Seis capturas reais em `docs/screenshots/` registram Home, Produtos e Quem Somos em desktop e mobile. Os READMEs de Portuguese with Thais e BMV Makeup foram consultados como referência de apresentação.
