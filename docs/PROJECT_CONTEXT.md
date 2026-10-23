# Del Mar Congelados — Project Context

Fonte principal de contexto para retomada. Estado inspecionado no repositório em **23/10/2026**, por leitura de código, configuração, assets e dependências locais. Esta tarefa é exclusivamente documental: não executou lint, build, navegador ou testes no ambiente publicado. Implementação existente não significa aprovação comercial ou prontidão para lançamento.

## Identidade e contexto comercial

- **Projeto e marca principal:** Del Mar Congelados.
- **Operação original:** Casa del Mar Meriti, peixaria de São João de Meriti, RJ.
- **Nova operação:** expansão voltada à comercialização de pescados e frutos do mar congelados, com foco na Barra Olímpica, Rio de Janeiro. Não confundir a expansão com a loja física original.
- **Instagram conhecido:** [@casadelmar.meriti](https://www.instagram.com/casadelmar.meriti/), já referenciado pelo site. A existência desse link no código não comprova atualização automática do feed.
- **Cliente responsável pelas confirmações:** Carol.

Valorizar praticidade, conservação, variedade e a relação com a operação original. Não comunicar congelados como frescos nem afirmar procedência garantida, entregas rápidas, certificações, datas de fundação ou outras promessas sem confirmação.

Objetivo: site institucional e comercial responsivo que apresente marca, produtos, história, receitas e canais de contato. A implementação da V1 é um frontend com conteúdo local; não é uma operação de e-commerce.

## Escopo implementado da V1

Rotas declaradas em [`frontend/src/App.jsx`](../frontend/src/App.jsx), sob um único `BrowserRouter`:

| URL | Arquivo em `frontend/src/` | Comportamento |
| --- | --- | --- |
| `/` | `pages/Home/Home.jsx` | Home com seções de apresentação |
| `/produtos` | `pages/Products/Products.jsx` | Catálogo demonstrativo, busca, filtros e ordenação |
| `/nossa-historia` | `pages/About/About.jsx` | Página institucional |
| `/contato` | `pages/Contact/Contact.jsx` | Contato e pedidos; canal comercial ainda em configuração |
| `/receitas` | `pages/Recipes/Recipes.jsx` | Listagem de três receitas demonstrativas |
| `/receitas/:slug` | `pages/RecipeDetail/RecipeDetail.jsx` | Detalhe baseado nos dados locais |
| `*` | `pages/NotFound/NotFound.jsx` | Página não encontrada, mantendo a URL |

Slugs desconhecidos de receita têm estado específico em RecipeDetail e retorno a `/receitas`. Não existe rota individual de produto. A página NotFound é um estado do frontend; não há implementação de resposta HTTP 404 por servidor próprio.

## Arquitetura e arquivos de referência

O frontend fica em `frontend/`. `backend/` existe, mas está vazio na inspeção. `docs/` contém este contexto, o [design system](DESIGN_SYSTEM.md) e o [roadmap](ROADMAP.md).

| Responsabilidade | Caminho real |
| --- | --- |
| Dependências e scripts | `frontend/package.json`, `frontend/package-lock.json` |
| Entrada, StrictMode e CSS global | `frontend/src/main.jsx` |
| Rotas e provedor único | `frontend/src/App.jsx` |
| Layout compartilhado | `frontend/src/components/layout/MainLayout/MainLayout.jsx` |
| TopBar / Header / Footer | `frontend/src/components/layout/TopBar/`, `Header/`, `Footer/` |
| Voltar ao topo | `frontend/src/components/ui/BackToTop/` |
| Seções da Home | `frontend/src/components/sections/` |
| Card de destaque da Home | `frontend/src/components/ui/ProductCard/` |
| Cards e filtros do catálogo | `frontend/src/components/products/ProductCard/`, `ProductFilters/` |
| Card e visual reutilizável de receitas | `frontend/src/components/recipes/RecipeCard/RecipeCard.jsx` e `.module.css` |
| Dados locais | `frontend/src/data/products.js`, `recipes.js`, `categories.js`, `benefits.js`, `instagramPosts.js` |
| Serviço opcional do Instagram | `frontend/src/services/instagramService.js` |
| Tokens / estilos base | `frontend/src/styles/variables.css`, `global.css` |
| HTML inicial / Vite / lint | `frontend/index.html`, `frontend/vite.config.js`, `frontend/eslint.config.js` |
| Fallback da Vercel | `frontend/vercel.json` |
| Assets públicos | `frontend/public/assets/` e `frontend/public/favicon.svg` |

### Stack local verificada

React e React DOM **19.2.8**, React Router DOM **7.18.4**, Vite **8.2.2**, JavaScript/JSX e CSS Modules. Ícones: `lucide-react` **1.34.0** e `react-icons` **5.7.0**. Ferramentas: ESLint **10.9.0**, `@eslint/js` **10.0.1**, `@vitejs/plugin-react` **6.1.0**, plugins ESLint de hooks/refresh e `globals`. Existem pacotes `@types/react`/`@types/react-dom`, mas a aplicação está em JavaScript, não TypeScript.

Versões instaladas conferidas com `npm ls --depth=0 --offline` dentro de `frontend`; intervalos declarados estão no package.json e resoluções no lockfile. Nenhuma dependência foi instalada nesta tarefa. Não há script `test`; os scripts disponíveis são `dev`, `build`, `lint` e `preview`.

### Layout e navegação

MainLayout mantém a ordem **TopBar → Header → Outlet → Footer → BackToTop**. Cada página fornece seu próprio `main`; não renderizar outro Header/Footer dentro dela.

MainLayout trata rolagem por `useLocation` e `useLayoutEffect`: navegação sem hash vai ao topo; hash existente busca o ID após o commit da página. Mudança de página usa rolagem instantânea; na mesma página, suave quando movimento reduzido não estiver ativo.

Header: Início `/`, Produtos `/produtos`, Receitas Del Mar `/receitas`, Nossa História `/nossa-historia`, Contato `/contato`. O CTA rotulado WhatsApp leva atualmente a `/contato`, não a um número ou grupo. Hero também aponta para `/contato`. Footer usa as páginas reais e mantém Instagram externo; WhatsApp fica indisponível enquanto o número estiver vazio.

Menu mobile até 768px: estado React, dropdown sobreposto abaixo do Header, sem deslocar o conteúdo; atributos ARIA; Escape, seleção e transição ao desktop fecham o menu; foco visível e gerenciamento de foco; links fechados não são tabuláveis por estarem em `display: none`.

## Funcionalidades existentes

### Home

Ordem do conteúdo de `Home.jsx`: Hero → Categories → Benefits → FeaturedProducts → BrandStory → OurStory → InstagramFeed. TopBar/Header/Footer/BackToTop vêm do layout global.

- TopBar: localização/horários, ticker CSS com pausa manual/hover/foco, cópia visual oculta de leitores de tela e alternativa estática com movimento reduzido. Sem item WhatsApp nessa faixa.
- Hero: imagem estática com overlay/onda, CTA para Contato e âncora real `#categorias`. Não há vídeo/autoplay.
- Categories: Peixes, Frutos do Mar, Combos e Promoções, com URLs `/produtos?categoria=...`.
- Benefits: apresentação visual dos diferenciais; textos ainda precisam de validação comercial.
- FeaturedProducts: filtra `featured`, grade desktop/tablet e carrossel nativo com scroll-snap até 600px; controles acessíveis e estados nas extremidades. Não é uma seção de promoções semanais automatizadas.
- BrandStory: imagem existente de pescados e texto curto sobre seleção/qualidade. Sem vídeo ou play funcional.
- OurStory: prévia institucional e link para `/nossa-historia`.
- BackToTop global: aparece após rolagem significativa, respeita movimento reduzido e remove listeners no cleanup.

### Catálogo

Products lê o export default de `data/products.js`. Há quatro produtos demonstrativos: IDs 1–4, Filé de Salmão, Camarão Cinza, Filé de Merluza e Combo do Mar. Preservar IDs, export default, imagens e propriedades até revisão deliberada.

Busca por nome/descrição com normalização de acentos e caixa; filtro local Todos/Peixes/Frutos do Mar/Combos; ordenação padrão, nome A–Z, menor e maior preço; contagem com `aria-live`; estado vazio e botão de limpar. Cards mostram categoria, descrição, preço em BRL/unidade e imagem com lazy loading. Grid responsivo de quatro/três/duas colunas.

**Limitação concreta:** Products inicia a categoria em `todos` e não lê `?categoria=`. Os links de Categories abrem o catálogo, mas não aplicam automaticamente o filtro. Também não há filtro específico de Promoções, embora exista a propriedade `promotion` nos dados. Não documentar essa integração como concluída.

### Institucionais e contato

About apresenta origem, relação com a Casa del Mar, valores e CTA para Produtos; texto histórico é provisório. Contact apresenta canal WhatsApp em configuração, Instagram funcional como link, região/condições pendentes e CTA para Produtos. Não existe formulário nem envio/gestão de pedidos.

### Receitas

`data/recipes.js` exporta três objetos com `id`, `slug`, `name`, `description`, `image`, `prepTime`, `servings`, `difficulty`, `ingredients` e `steps`:

| Slug | Receita | Tempo demonstrativo |
| --- | --- | --- |
| `moqueca-de-peixe` | Moqueca de peixe | 45 min |
| `camarao-ao-alho-e-oleo` | Camarão ao alho e óleo | 20 min |
| `peixe-assado-com-legumes` | Peixe assado com legumes | 60 min |

As três indicam quatro porções e dificuldade Fácil. Os tempos são aproximados e consideram pescados descongelados. `image` está `null`: RecipeImage mostra placeholder acessível “Foto em breve”. Não há fotografias dos pratos nem referências quebradas nesse mecanismo.

Listagem com cards e CTA para Produtos; página única reutilizável por slug com ingredientes, etapas numeradas, metadados, retorno à listagem e outras receitas. O CTA é genérico para o catálogo, sem associação estruturada de ingredientes a produtos específicos. Dados locais estruturados **não são** marcação SEO Recipe/JSON-LD. Não há filtro de receitas, adequado ao conjunto inicial de três itens.

### Instagram

Sem `VITE_API_URL`, o serviço retorna quatro posts locais de `data/instagramPosts.js`. Se a variável for definida, tenta `GET {VITE_API_URL}/api/instagram/posts`, com timeout de 8s, validação básica e limite de oito itens; falhas retornam os posts locais. O componente tem loading, skeleton e estado vazio.

Não existe backend desse endpoint no repositório. Os posts locais apontam para o perfil, não URLs individuais de publicações; suas quatro imagens estão ausentes. Não afirmar feed oficial sincronizado. Não configurar uma API inexistente apenas para preencher a variável.

## Conteúdo provisório e dependências da Carol

| Tema | Evidência no código | Próxima confirmação necessária |
| --- | --- | --- |
| WhatsApp comercial | `WHATSAPP_NUMBER = ""` no Footer; Contact mostra configuração pendente | Número comercial, texto de atendimento e autorização para publicar; nunca usar grupo promocional como pedido |
| Produtos/disponibilidade/preços | Quatro objetos, preços numéricos e aviso de catálogo demonstrativo | Relação oficial, disponibilidade, unidades, valores e política de atualização |
| Identidade/assets | Logo, Hero, categorias e fotos dos quatro produtos presentes em `public/assets` | Aprovação e direitos de uso; presença do arquivo não prova que seja fotografia oficial |
| Região/localização | TopBar/Footer mostram Barra Olímpica; Contact declara regiões/condições pendentes | Endereço publicável, entregas, retirada, abrangência e condições; não confundir com Meriti |
| Horários | TopBar: Seg–Sex 5h–19h, Sáb 5h–17h, Dom 5h–13h; Contact: “A confirmar” | Carol confirmar se esses horários se aplicam à nova operação; uniformizar depois |
| História e promessas | Textos institucionais e frases de confiança/qualidade já existem | Aprovar fatos, origem, histórico e linguagem comercial; não inferir datas ou certificações |
| Instagram | URL conhecida já utilizada em Footer, Home e Contact | Confirmar publicações/imagens e eventual integração, sem tratar a URL como pendente inexistente |
| Receitas | Três receitas explicitamente demonstrativas e fotos nulas | Revisão culinária/editorial e fotografias aprovadas |

### Pendências de conteúdo verificáveis antes do lançamento

Referências locais sem arquivo correspondente em `frontend/public`:

- `/assets/images/story/nossa-historia.jpg` — seção OurStory da Home.
- `/assets/images/nossa-historia.jpg` — página About.
- `/assets/images/instagram/post-1.jpg`, `post-2.jpg`, `post-3.jpg`, `post-4.jpg` — dados locais de Instagram.

Não confundir essas seis ausências com os placeholders intencionais de receitas. Não há imagem ausente da antiga BrandStory: ela reutiliza `/assets/images/home/hero-seafood.png`.

O alt do Hero ainda descreve “frutos do mar frescos”. Há também frases como “Conservação garantida”, “Entrega na sua região”, “entregues até você”, “todos os dias” e “Qualidade que atravessa gerações”. São textos existentes para revisão, não fatos comprovados nem autorização para novas promessas. Esta tarefa não alterou esses conteúdos.

## SEO, acessibilidade, performance e deploy

Implementado: HTML semântico, títulos/headings, labels e foco em controles, links internos reais, imagens com alt, lazy loading em alguns cards e preferências de movimento em vários componentes. Não equivale a auditoria completa de acessibilidade ou performance.

`frontend/index.html` contém charset, viewport, favicon e título estático “Del Mar Congelados”, mas ainda usa `lang="en"`. Não há metadados específicos por rota, meta description, canonical, Open Graph, JSON-LD, sitemap ou robots.txt nos arquivos inspecionados. CSR com slugs legíveis não deve ser descrito como SEO finalizado. Revisar idioma, títulos, metadados e estratégia de indexação no fechamento.

A prévia na Vercel foi informada pela responsável pelo projeto; o painel, URL publicada, domínio e build remoto não foram verificados nesta tarefa. O **Root Directory esperado é `frontend`**, com build `npm run build` e saída `dist`, conforme scripts e comportamento padrão do Vite usado pelo projeto.

`frontend/vercel.json` faz rewrite de `/(.*)` para `/index.html`, permitindo que React Router resolva URLs diretas como `/produtos` e `/receitas/moqueca-de-peixe`. Isso é fallback SPA, não redirecionamento de todas as rotas à Home: URLs desconhecidas mostram NotFound no cliente. Confirmar configuração efetiva e testar reload das rotas na prévia antes da publicação final. Não existe pipeline de deploy documentado/configurado por CI no repositório inspecionado.

## Limites de escopo e decisões técnicas

Fora da V1: backend, CMS/painel, estoque automatizado, carrinho, checkout, pagamentos, autenticação e gestão de pedidos. A pasta backend vazia e o adaptador opcional de Instagram não representam backend implementado. Admin, e-commerce e Clube Del Mar são possibilidades futuras, condicionadas a nova definição de escopo com a cliente.

Decisões a preservar:

- Reutilizar componentes e manter dados separados da apresentação; evitar overengineering e dependências sem necessidade.
- Um Router e um layout compartilhado; não duplicar componentes globais em páginas.
- Preservar funcionalidades concluídas e trabalho manual existente; alterar apenas com justificativa e validação.
- Priorizar acessibilidade, SEO, performance e responsividade como critérios de evolução, sem declará-los certificados/concluídos antes de revisão.
- Manter conteúdo demonstrativo explicitamente identificado e preservar dados oficiais confirmados.
- Não implantar funcionalidades comerciais adicionais nem fazer commit/push/deploy sem instrução correspondente.

## Como retomar o projeto

1. Ler este documento, [ROADMAP.md](ROADMAP.md) e [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). A base funcional já tem Home, catálogo, institucionais, receitas e navegação compartilhada; o foco seguinte é conteúdo oficial e preparo para lançamento.
2. Inspecionar `git status --short` e os arquivos reais antes de editar. Começar por `frontend/package.json`, `src/App.jsx`, `src/components/layout/MainLayout/MainLayout.jsx`, Header/Footer e a página envolvida. Não presumir que o código continua idêntico a esta revisão.
3. Consultar `src/data/products.js`, `recipes.js`, `categories.js`, `benefits.js` e `instagramPosts.js` para conteúdo; `src/styles/variables.css`/`global.css` para identidade. Conferir Contact e TopBar ao atualizar atendimento.
4. Executar localmente a partir da raiz do repositório:

   ```sh
   cd frontend
   npm ci
   npm run dev
   ```

   `npm ci` instala conforme o lockfile; não foi executado nesta tarefa. Abrir o endereço informado pelo Vite no terminal. Não há variável de ambiente obrigatória para as páginas locais; `VITE_API_URL` é opcional para a tentativa de feed externo.
5. Validar alterações de aplicação, quando retomadas:

   ```sh
   # Dentro de frontend/
   npm run lint
   npm run build
   npm run preview
   ```

   Na raiz, executar `git diff --check`. Os scripts existem e foram inspecionados; lint/build/navegador não foram reexecutados nesta tarefa documental. `preview` serve o build local, não publica na Vercel. Não há suíte automatizada nem script `test` configurado.
6. Repetir testes manuais em 393px, 768px e 1440px: navegação, menu por clique/teclado/Escape, carrossel, busca/filtros/ordenação, estados vazios, receitas e slugs inválidos, movimento reduzido e ausência de overflow. No ambiente publicado, abrir e recarregar todas as rotas diretamente.
7. Ao receber respostas da Carol, comparar cada informação com os avisos e dados atuais. Atualizar apenas conteúdo confirmado, obter fotografias e revisar história/benefícios/receitas; resolver divergências entre TopBar, Footer e Contact. Em seguida, corrigir as seis imagens ausentes e a integração de categorias/query string, revisar SEO/acessibilidade/performance e solicitar validação da prévia.
8. Para o deploy, conferir Root Directory `frontend`, saída `dist`, scripts e rewrite em `frontend/vercel.json`. Seguir o fluxo de publicação acordado; não assumir branch, domínio ou deploy automático sem verificar o painel e autorização.
