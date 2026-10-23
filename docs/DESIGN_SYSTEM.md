# Del Mar Congelados — Design System

Referência da implementação inspecionada em 23/10/2026. Este documento distingue padrões existentes, diretrizes para evoluções e pendências. A revisão foi documental, sem nova auditoria visual ou certificação de acessibilidade.

## Identidade e direção visual

A marca principal do site é **Del Mar Congelados**. Casa del Mar Meriti é a operação original relacionada à marca, não o nome desta experiência digital.

A direção permanece: **fresh, premium, trustworthy, established, clean, human, professional e accessible**. “Fresh” descreve a leveza visual; não autoriza apresentar pescados congelados como frescos.

A linguagem combina identidade marítima e editorial gastronômico: azul-marinho, azul oceano, aqua, neutros claros, títulos expressivos, fotografias valorizadas e espaço em branco. Confiança deve vir de informações confirmadas, sem inventar certificações, procedência, rapidez de entrega ou tempo de mercado.

## 1. Padrões implementados

### Fontes de verdade

- Tokens: [`frontend/src/styles/variables.css`](../frontend/src/styles/variables.css).
- Reset, importação de fontes e regras globais: [`frontend/src/styles/global.css`](../frontend/src/styles/global.css), importado por `src/main.jsx`.
- Estilos de componentes e páginas: arquivos `*.module.css` junto ao JSX.
- Não existe componente universal de botão nem uma escala global de espaçamento/breakpoints. Há valores locais e cores literais além dos tokens. `src/App.css` contém estilos de template e não é importado pelo fluxo atual; não usá-lo como referência de identidade.

### Cores declaradas em `variables.css`

| Token real | Valor | Papel observado |
| --- | --- | --- |
| `--color-primary` | `#073b70` | Títulos, botões e TopBar |
| `--color-primary-dark` | `#032b55` | Variação escura |
| `--color-primary-deep` | `#021f3d` | Fundos/gradientes escuros |
| `--color-secondary` | `#0f71c5` | Links, CTAs, ícones e destaques |
| `--color-secondary-hover` | `#0b5fa7` | Hover de CTAs |
| `--color-accent` | `#63c3ed` | Detalhes e títulos editoriais sobre azul |
| `--color-accent-soft` | `#eaf6fc` | Fundos suaves |
| `--color-white` | `#ffffff` | Fundo e texto sobre azul |
| `--color-off-white` | `#f8fafc` | Alternância entre seções |
| `--color-gray-100` | `#edf2f6` | Bordas e fundos |
| `--color-gray-300` | `#b7c9dc` | Bordas e detalhes |
| `--color-gray-500` | `#7b8b9c` | Texto auxiliar |
| `--color-gray-700` | `#44566a` | Corpo e informações secundárias |
| `--color-text` | `#082f5b` | Texto global |
| `--color-text-light` | `#ffffff` | Texto claro |

Nem todas as cores estão centralizadas. Exemplos reais: Footer usa `#073765`, detalhes `#8bd5ec` e texto `#c3d9e9`; páginas institucionais usam gradiente com `#eaf5fb`; placeholders de receita usam `#cde5f4`. Esses valores são locais, não novos tokens.

### Tipografia

| Token real | Valor |
| --- | --- |
| `--font-primary` | `"Poppins", sans-serif` |
| `--font-editorial` | `"Cormorant Garamond", serif` |
| `--font-regular` | `400` |
| `--font-medium` | `500` |
| `--font-semibold` | `600` |
| `--font-bold` | `700` |
| `--font-extrabold` | `800` |

As fontes são importadas do Google Fonts em `global.css`: Poppins 400/500/600/700/800 e Cormorant Garamond normal 400/500/600, itálico 500/600.

Poppins atende navegação, corpo, botões, preços e títulos fortes. Cormorant Garamond dá contraste editorial a palavras/frases, frequentemente em itálico. Títulos usam `clamp()` em componentes, sem tokens globais de tamanho. Exemplos: título de Recipes `clamp(2.7rem, 6vw, 5rem)`; RecipeDetail `clamp(2.2rem, 4.5vw, 4rem)`.

Em FeaturedProducts, “Del Mar” tem `white-space: nowrap`, com bloco separado abaixo de “Destaques” até 600px. Não separar as palavras da marca em mudanças futuras.

### Dimensões, espaçamento e superfícies

| Token real | Valor |
| --- | --- |
| `--container-width` | `1200px` |
| `--radius-sm` | `0.5rem` |
| `--radius-md` | `0.75rem` |
| `--radius-lg` | `1.25rem` |
| `--radius-pill` | `999px` |
| `--transition-fast` | `180ms ease` |
| `--transition-default` | `250ms ease` |

Containers são centralizados com `max-width` ou `width: min(100% - 3rem, 1200px)`/token equivalente. No mobile, várias páginas passam a `calc(100% - 2rem)`. Há paddings locais entre 1rem e 3rem em cards/containers e entre 2.5rem e 7rem em seções; não existe token de espaçamento.

Raios são moderados em cards e fotografias; filtros e alguns CTAs usam pílula. Também existem valores locais de 8px, 10px, 12px, 14px e 16px. Sombras são discretas: catálogo `0 12px 30px rgba(7, 55, 101, 0.08)`; dropdown `0 12px 24px rgba(3, 43, 85, 0.12)`.

### Layout, Header e Footer

`MainLayout/MainLayout.jsx` renderiza TopBar → Header → Outlet → Footer → BackToTop. Páginas renderizam seu próprio `main`, sem duplicar esses elementos globais.

- **TopBar:** azul-marinho, localização/horários em sequência sem quebra durante a animação, separadores, ticker CSS de 55s. Cópia visual com `aria-hidden`. Pausa manual, hover/foco; versão estática reorganizada em movimento reduzido. Sem WhatsApp nessa faixa.
- **Header:** logo e CTA de atendimento; cinco itens horizontais acima de 768px. Até 768px, botão Menu com `aria-expanded`, `aria-controls` e label; dropdown absoluto abaixo do Header, fundo branco, sombra, `max-height: 65dvh` e rolagem interna. Não empurra o conteúdo. Fecha por seleção, Escape ou passagem ao desktop; foco retorna ao botão em Escape. Links fechados ficam em `display: none`.
- **CTA circular do Header:** até 480px, 45 × 45px, SVG 21 × 21px, texto oculto por `display: none`, sem gap residual.
- **Footer:** quatro colunas no desktop, duas até 1024px, uma até 600px. Marca Del Mar, navegação, atendimento e Instagram. WhatsApp condicionado à existência de número. Crédito com link discreto para `https://lorenaferreira.dev`, nova aba, `noopener noreferrer` e foco visível.
- **BackToTop:** círculo 48 × 48px, fixo no canto inferior direito; aparece após `scrollY > Math.max(600, innerHeight)`. Respeita safe area, usa scroll suave ou instantâneo conforme preferência de movimento, com cleanup dos listeners. Não existe WhatsApp flutuante implementado.

### Botões, links e cards

CTAs usam azul-marinho/azul, texto branco, ícone discreto, padding generoso e hover por mudança de cor, às vezes leve elevação. Links editoriais usam texto com seta. Links externos de Instagram/crédito abrem com `target="_blank"` e `rel="noopener noreferrer"`.

- `components/ui/ProductCard`: card simples de destaque da Home; fotografia, nome e preço por unidade; imagem 1.3:1. Não é botão de compra.
- `components/products/ProductCard`: card do catálogo; imagem 4:3, categoria, nome, descrição e preço, `loading="lazy"`; hover com elevação e zoom. Existe separadamente do card da Home: não unificar sem necessidade.
- `ProductFilters`: botões de categoria com `aria-pressed`, estado ativo e grupo rotulado; rolagem lateral interna até 600px.
- `RecipeCard`: imagem/placeholder 4:3, tempo, dificuldade, nome, descrição e link “Ver receita”. `RecipeImage` é exportado pelo mesmo arquivo e reutilizado no detalhe. Sem foto, apresenta ilustração de panela, “Foto em breve” e label acessível, sem URL inexistente.

### Páginas e conteúdo editorial

Home: Hero com fotografia, overlay e onda; categorias circulares; benefícios; destaques; BrandStory de qualidade/seleção com imagem; prévia Nossa História; Instagram. **Não existe vídeo funcional** no Hero ou na BrandStory.

Páginas institucionais usam hero claro em gradiente, eyebrow, títulos com itálico editorial, textos curtos, grids e CTA. Catálogo inclui aviso demonstrativo, busca e ordenação. Receitas inclui aviso demonstrativo, cards e CTA; detalhe inclui título, descrição, `dl` de metadados, ingredientes em `ul`, preparo em `ol` e outras receitas.

### Breakpoints encontrados

Não há variáveis CSS de breakpoint. As regras são locais, predominantemente `max-width`:

| Largura | Uso real |
| --- | --- |
| 380px | Ajuste das imagens de Categories |
| 480px | Header circular; textos/cards do catálogo; benefícios em uma coluna; About e OurStory |
| 600px | FeaturedProducts vira carrossel; Footer em uma coluna; filtros com scroll; Recipes e receitas relacionadas em uma coluna; Contact em uma coluna |
| 700px | OurStory da Home passa a uma coluna |
| 768px | Header mobile; catálogo em duas colunas; About e RecipeDetail em uma coluna; grids de categorias/Instagram em duas colunas |
| 900px | Destaques em duas colunas; Recipes em duas colunas; Contact em duas colunas e bloco de informações em uma; ajustes de OurStory/RecipeDetail |
| 1024px | Catálogo em três colunas; Footer em duas colunas |

Acima desses limites: catálogo/destaques usam quatro colunas; listagem de receitas usa três. Até 600px, destaques usam scroll-snap horizontal com cards de 88% do trilho, prévia do seguinte e controles de 44 × 44px desabilitados nas extremidades. O catálogo mantém duas colunas no mobile, com ajustes de texto até 480px.

### Movimento e acessibilidade existentes

Existem `aria-label`, ícones decorativos com `aria-hidden`, foco visível em menu, filtros, CTAs, receitas e controles de destaque, `aria-live` na contagem do catálogo e labels de campos. Não há reset global que remova todos os outlines.

`prefers-reduced-motion` é tratado no scroll global, TopBar, BackToTop, catálogo, filtros, Instagram e CTAs de páginas novas/institucionais. Isso não equivale a cobertura integral: outros hovers da Home ainda têm transformações/transições locais. Contraste, leitores de tela e fluxo de foco completo precisam de auditoria final.

## 2. Diretrizes para futuras alterações

- Reutilizar tokens, fontes, containers e padrões do contexto local; não criar um novo sistema visual por página.
- Manter hierarquia semântica, foco visível, navegação por teclado e legibilidade. Medir contraste antes de aprovar uma combinação, sobretudo textos pequenos em azul/cinza.
- Reorganizar conteúdo no mobile, em vez de apenas reduzir o desktop. Validar 393px, 768px e 1440px, além dos limites dos breakpoints.
- Fotografias devem mostrar produtos/pratos adequados ao contexto, com autorização e aprovação da cliente, recorte consistente e otimização. Não trocar imagens oficiais por criações sem autorização.
- Manter gradientes/ondas como apoio, raios moderados, sombras discretas, espaço generoso e animações suaves e controláveis.
- Usar placeholders explícitos enquanto fotografias não existirem; não apresentar play sem vídeo funcional.
- Não transformar cards de produto em checkout nem fazer promessas comerciais para preencher lacunas de conteúdo.

## 3. Melhorias pendentes

- Fotografias oficiais, revisão editorial e aprovação visual da cliente. Há seis referências de imagem sem arquivo no repositório; caminhos em [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).
- Revisar alt do Hero, que ainda usa “frescos”, e textos de garantia/entrega/história antes do lançamento.
- Auditar contraste, teclado, leitores de tela e movimento reduzido em todas as páginas; não declarar conformidade WCAG sem avaliação.
- Revisar idioma/SEO do documento HTML, otimização de imagens e carregamento externo de fontes.
- Harmonizar valores locais somente se houver benefício concreto; não centralizar tudo por refatoração estética nem alterar páginas concluídas sem justificativa.

Estado funcional e prioridades de entrega: [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) e [ROADMAP.md](ROADMAP.md).
