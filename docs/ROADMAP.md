# Del Mar Congelados — Roadmap

Estado do repositório inspecionado em **23/10/2026**. Marca principal: Del Mar Congelados; operação original relacionada: Casa del Mar Meriti.

**Legenda:** `[x]` = implementação localizada e conferida no código; `[ ]` = trabalho ainda necessário. **Em validação** = implementação existente que depende de revisão visual, editorial ou comercial. A marcação não representa aprovação da cliente, teste publicado ou auditoria WCAG. Nesta tarefa documental não foram executados lint, build ou testes de navegador; foi executado `git diff --check` ao finalizar.

## Phase 01 — Foundation

- [x] Setup React + Vite, dependências e scripts de desenvolvimento/lint/build/preview.
- [x] React Router com um BrowserRouter e rotas reais Home, Produtos, Nossa História, Contato e Receitas.
- [x] Organização por páginas, componentes, dados, serviços e CSS Modules.
- [x] Tokens de cores, fontes, raios, container e transições; estilos globais.
- [x] MainLayout com TopBar, Header, Outlet, Footer e BackToTop, sem duplicação nas páginas.
- [x] Navegação desktop horizontal e menu mobile sobreposto com estado React e atributos ARIA.
- [x] Fechamento por seleção, Escape e passagem ao desktop; foco e ocultação dos links fechados.
- [x] Rolagem por rota/hash e retorno ao topo no layout.
- [x] Regras responsivas por componente, grades e containers adaptáveis.
- [x] NotFound para URLs desconhecidas, sem redirecionamento silencioso à Home.
- [x] Configuração local de fallback SPA em `frontend/vercel.json`.

**Em validação:** revisão final visual, teclado/leitores de tela e configuração efetiva da Vercel; a cobertura de estilos responsivos não elimina os testes de lançamento da Phase 06.

## Phase 02 — Homepage

- [x] TopBar com ticker de localização/horários, pausas e modo estático para movimento reduzido.
- [x] Header/Footer globais e BackToTop com preferência de movimento e cleanup.
- [x] Hero com imagem, overlay, onda, âncora de categorias e CTA para `/contato`.
- [x] Categories com quatro entradas e links para o catálogo.
- [x] Benefits separado em dados locais.
- [x] FeaturedProducts por flag `featured`, grade desktop/tablet e carrossel mobile nativo com scroll-snap.
- [x] Controles anterior/próximo com estados nas extremidades e título “Del Mar” sem quebra entre palavras.
- [x] BrandStory com foco em seleção/qualidade, imagem e texto curto, sem play falso.
- [x] Prévia OurStory com link para `/nossa-historia`.
- [x] InstagramFeed com estados de carregamento/vazio, dados locais e adaptador opcional para API externa.
- [x] Crédito discreto com link para Lorena Ferreira.
- [ ] Conectar `?categoria=` enviado pela Home ao filtro inicial do catálogo; definir o comportamento de Promoções.
- [ ] Fornecer imagem da seção OurStory e quatro imagens dos posts locais de Instagram.
- [ ] Aprovar textos de benefícios, história e entrega; revisar alt do Hero que ainda diz “frescos”.

**Em validação:** identidade/assets já presentes, horários do ticker, conteúdo e permalinks oficiais do Instagram. O adaptador não é uma integração de feed oficial validada.

Hero e BrandStory usam **imagens**, não vídeo. Vídeo é uma possibilidade futura dependente de mídia e decisão de escopo; não é funcionalidade concluída nem bloqueio obrigatório da V1. Não existem ofertas semanais automatizadas ou módulo separado de “produto da semana”.

## Phase 03 — Products

- [x] Página `/produtos` e aviso de catálogo demonstrativo.
- [x] Quatro produtos estruturados em `src/data/products.js`, com export default e IDs estáveis.
- [x] Cards com imagem, categoria, descrição, preço/unidade e lazy loading.
- [x] Busca por nome/descrição com normalização de acentos e caixa.
- [x] Filtros locais Todos, Peixes, Frutos do Mar e Combos.
- [x] Ordenação padrão, nome A–Z, menor preço e maior preço.
- [x] Contagem acessível, estado sem resultados e limpeza dos filtros.
- [x] Grid responsivo de quatro/três/duas colunas e filtros roláveis no mobile.

**Em validação:** produtos, fotos, preços, unidades e disponibilidade oficiais, junto à Carol. Filtro local concluído não significa integração com os parâmetros de URL; pendência da Phase 02. Página individual de produto **não existe** e não deve ser tratada como concluída ou obrigatória sem nova definição.

## Phase 04 — Institutional Pages

- [x] `/nossa-historia`: origem, relação com Casa del Mar, valores e CTA de produtos.
- [x] `/contato`: apresentação dos canais, Instagram externo e CTA para o catálogo.
- [x] Estados explícitos de WhatsApp em configuração e informações de atendimento a confirmar.
- [x] Header aponta às duas páginas reais; Footer aponta Nossa História à página institucional.
- [x] Layout e regras responsivas para as páginas institucionais.
- [ ] Fornecer a imagem `/assets/images/nossa-historia.jpg` usada por About.

**Em validação:** fatos históricos e textos; WhatsApp, horários e condições de atendimento dependem da cliente. Página de contato implementada não significa canal de pedidos operacional, formulário funcional ou gestão de pedidos.

## Phase 05 — Recipes

- [x] `/receitas` com hero, introdução, aviso demonstrativo, grid e CTA para Produtos.
- [x] RecipeCard reutilizável e RecipeImage com placeholder acessível quando não há fotografia.
- [x] Três receitas demonstrativas: Moqueca de peixe, Camarão ao alho e óleo e Peixe assado com legumes.
- [x] Dados separados em `src/data/recipes.js`: ID, slug, descrição, imagem, tempo, porções, dificuldade, ingredientes e etapas.
- [x] Página única `/receitas/:slug` com listas de ingredientes e preparo numerado.
- [x] Retorno à listagem, outras receitas e CTA genérico para `/produtos`.
- [x] Estado de receita não encontrada para slug inválido.
- [x] Links funcionais de Receitas no Header/Footer, sem “Em breve”.
- [x] Regras responsivas: listagem em três/duas/uma coluna e detalhe adaptado ao mobile.
- [x] Estrutura HTML com headings, listas, metadados legíveis e links por slug.
- [ ] Revisar receitas/tempos/porções com a cliente e substituir placeholders por fotos aprovadas.
- [ ] Definir metadados por receita e marcação Recipe/JSON-LD, ainda não implementados.

**Em validação:** conteúdo culinário/editorial. Dados JavaScript estruturados não são rich results/SEO estruturado. Não há associação de ingredientes a produtos individuais, filtro de receitas ou CMS; apenas CTA para o catálogo.

## Phase 06 — Client Content & Launch Readiness

**Principal fase pendente: aguardar informações da Carol, consolidar conteúdo oficial e validar a prévia.** Não reabrir páginas já construídas para preencher lacunas com dados fictícios.

### Conteúdo e operação

- [x] Logo e assets base presentes; URL conhecida do Instagram já configurada.
- [x] Avisos de catálogo/receitas demonstrativos e estados pendentes de contato existentes.
- [ ] Aprovar logo, fotografias e direitos de uso com a cliente; arquivos presentes não comprovam aprovação.
- [ ] Confirmar produtos reais, disponibilidade, categorias, preços e unidades.
- [ ] Confirmar número comercial de WhatsApp e ativar os acessos apropriados, sem inventar número ou usar grupo como pedido.
- [ ] Confirmar localização, regiões, condições de entrega/retirada e horários; resolver divergência entre TopBar e Contact.
- [ ] Aprovar história, relação entre as operações e textos comerciais, eliminando promessas não confirmadas.
- [ ] Aprovar receitas demonstrativas e fotografias dos pratos.
- [ ] Resolver as seis referências de imagens ausentes, listadas em PROJECT_CONTEXT.
- [ ] Confirmar posts/imagens/permalinks de Instagram e decidir se haverá integração externa; não há backend no repositório.

### Qualidade técnica e publicação

- [x] Título HTML estático, charset, viewport e favicon configurados.
- [ ] Corrigir `lang="en"` para o idioma apropriado do conteúdo na futura tarefa de código.
- [ ] Revisar SEO por página: title, description, canonical, Open Graph, sitemap/robots e indexação.
- [ ] Definir JSON-LD apropriado após aprovação dos dados; não existe no código atual.
- [ ] Revisar acessibilidade: contraste, foco, teclado, leitores de tela, alt e movimento reduzido em toda a experiência.
- [ ] Revisar performance, peso/dimensões de imagens, lazy loading e carregamento das fontes.
- [ ] Executar novamente lint, build e `git diff --check` após alterações de aplicação.
- [ ] Fazer regressão manual de todas as páginas em 393px, 768px e 1440px, sem overflow horizontal.
- [ ] Verificar menu mobile, carrossel, catálogo, receitas, estados vazios e links internos/externos no ambiente publicado.
- [ ] Confirmar Root Directory `frontend`, build/saída `dist` e rewrite efetivo na Vercel.
- [ ] Testar acesso direto e recarga em todas as rotas publicadas, incluindo receitas e URLs inexistentes.
- [ ] Obter aprovação final da cliente e autorização para publicação final.

Existe uma prévia na Vercel conforme informado pela responsável; URL, painel, domínio, branch e resultado do build remoto não foram verificados nesta revisão. Revisar a implementação local de NotFound não comprova status HTTP 404 no host.

## Future — Admin, Ecommerce & Clube Del Mar

Possibilidades **fora do escopo contratado da V1**, sem cronograma assumido. Exigem nova proposta, priorização e definição com a cliente.

### Admin e backend

- [ ] Backend/API e modelo de persistência.
- [ ] CMS/painel, autenticação e permissões.
- [ ] Gestão de produtos, promoções, receitas e conteúdo institucional.
- [ ] Integrações externas com operação e manutenção definidas.

### Ecommerce

- [ ] Carrinho, contas de clientes, checkout e pagamentos.
- [ ] Gestão de pedidos e estoque automatizado.
- [ ] Regras de entrega e operação comercial integradas.

### Clube Del Mar

- [ ] Hub editorial ampliado, dicas de preparo e conservação.
- [ ] Conteúdo sazonal e vídeos aprovados.
- [ ] Definição comercial/editorial do clube; a seção de receitas atual não equivale a um clube implementado.

Para caminhos, pendências detalhadas e comandos de retomada: [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Para padrões reais e diretrizes visuais: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).
