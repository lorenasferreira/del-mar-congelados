# Del Mar Congelados — Contexto do projeto

## Marca e escopo aprovado

A Del Mar Congelados está ligada à Casa Del Mar Meriti, proprietária da loja física em São João de Meriti, RJ. A Del Mar Congelados opera com uma proposta comercial própria voltada a produtos congelados e práticos, e atualmente não possui loja física própria. O Instagram pertence à matriz. A operação terá um WhatsApp comercial próprio.

O site apresenta a marca, um catálogo pequeno e receitas. A consulta de disponibilidade, preços e condições de atendimento ficará no WhatsApp comercial. Carrinho, checkout, pagamento online, estoque automático e painel administrativo ficam fora da V1. A proposta local é atender a Barra Olímpica, no Rio de Janeiro. A abrangência e as condições de atendimento ainda estão pendentes. O site mantém produtos e preços provisórios sinalizados como demonstração.

## Como atualizar o conteúdo

- **Catálogo** — editar `frontend/src/data/products.js` e, quando necessário, `categories.js`. Preservar IDs únicos e usar o ID da categoria no produto. Cada item aceita nome, descrição, preço numérico, unidade, endereço de imagem, dimensões opcionais (`imageWidth`, `imageHeight`), destaque e promoção. Registrar pesos confirmados na descrição enquanto o conjunto de dados for pequeno. O preço publicado deve refletir o conteúdo aprovado. Ajustar o aviso demonstrativo quando o conteúdo definitivo substituir os dados atuais.
- **WhatsApp** — configurar `VITE_WHATSAPP_NUMBER` com o número internacional exclusivo da operação, somente dígitos. A mensagem está em `frontend/src/config/contact.js`. O número da Casa Del Mar Meriti pertence à matriz.
- **Cobertura** — editar `frontend/src/config/deliveryCoverage.js`. Use CEPs de oito dígitos em `postalCodes` e regras `{ street, city, state }` em `streets` somente para logradouros inteiros confirmados. Para atendimento parcial por condomínio, cadastrar os CEPs específicos se forem exclusivos. Se um CEP também identificar endereços fora da cobertura, mantenha esse caso para confirmação manual. Mantenha `complete: false` até a cliente aprovar a lista integral. A consulta usa o [ViaCEP](https://viacep.com.br/) para identificar o endereço. O bairro retornado não comprova cobertura. O CEP fica no estado da página e é enviado ao ViaCEP na consulta explícita, sem armazenamento pela aplicação. Se a consulta falhar ou não encontrar o CEP, a tela informa o problema sem concluir sobre cobertura.
- **Instagram** — quatro imagens fornecidas pela cliente foram convertidas para WebP e estão em `frontend/public/assets/images/instagram/post-01.webp` a `post-04.webp`. Os arquivos originais permanecem preservados. A ordem atual é 02, 01, 03, 04. Para publicar um permalink confirmado, adicione `permalink` no item correspondente de `frontend/src/data/instagramPosts.js`. Até lá, os itens permanecem visuais e o botão leva ao perfil da matriz.
- **Quem Somos** — adicionar os arquivos autorizados em `frontend/src/assets/brand-story/`, com os nomes da tabela abaixo. O Vite incorpora os arquivos presentes no próximo build e as seções de mídia são exibidas somente quando os arquivos correspondentes existem.
- **SEO** — definir `VITE_SITE_URL` apenas em produção com a origem HTTPS confirmada. O build gera `robots.txt` e, quando a origem está presente, `sitemap.xml`, canonical base e URLs absolutas para compartilhamento. Sem a origem, o HTML usa `noindex, follow`. Permitir rastreamento em `robots.txt` dá aos robôs acesso à diretiva `noindex`. Em prévias públicas, manter o domínio em branco ou usar a proteção do ambiente de hospedagem.

| Material da matriz | Arquivo recomendado |
| --- | --- |
| Fachada horizontal com o nome visível, WebP 4:3 | `frontend/src/assets/brand-story/casa-del-mar-fachada.webp` |
| Vídeo de 20–30 segundos, MP4 | `frontend/src/assets/brand-story/casa-del-mar-video.mp4` |
| Poster do vídeo, WebP | `frontend/src/assets/brand-story/casa-del-mar-poster.webp` |
| Legendas sincronizadas, WebVTT | `frontend/src/assets/brand-story/casa-del-mar-video.pt-BR.vtt` |

## Materiais institucionais

As imagens institucionais foram fornecidas pela responsável pelo projeto e geradas por IA com referências da Casa Del Mar Meriti. Os textos alternativos descrevem seu conteúdo, e a origem dos materiais fica registrada nesta documentação. Os arquivos de origem ficam em `docs/media-sources/casa-del-mar/`. O site carrega os arquivos indicados abaixo a partir de `frontend/src/assets/`.

| Uso | Original | Derivado | Bytes |
| --- | --- | --- | --- |
| Home · Quem Somos | `Casa del Mar Fish Market-1.png` | `brand-story/market-facade-home.webp` | 2.517.834 → 161.254 |
| Quem Somos · Nossas raízes | `Casa del Mar Seafood Market-2.png` | `brand-story/market-facade-about.webp` | 2.674.592 → 167.128 |
| Quem Somos · Qualidade | `Busy Seafood Market Counter-4.png` | `brand-story/seafood-counter-preparation.webp` | 2.475.866 → 107.386 |
| Quem Somos · Praticidade | `Fresh Fish Market Exchange-3.png` | `brand-story/seafood-counter-service.webp` | 2.292.954 → 93.284 |
| Home · Fundo da seção de qualidade | `Casa del Mar Seafood Showcase (1.75x).gif` | `home-brand/casa-del-mar-background.mp4` | 608.096 → 428.432 |

Os WebP institucionais têm 1.200 px de largura e carregamento lazy. `Casa del Mar Fish Market.png` e `Casa del Mar Fish Market-1.png` são cópias idênticas. Os dois originais foram preservados e usam um único derivado. A foto real da fachada e o vídeo autorizado da matriz, quando fornecidos, continuam com os caminhos da seção anterior.

O MP4 H.264 de fundo tem **554 × 308 px**, **3,33 s** e nenhuma trilha de áudio. O GIF aprovado contém nove quadros de 370 ms e veio identificado como 1,75×. A conversão preserva essa cadência sem interpolar quadros ou mudar novamente a velocidade. O poster `home-brand/casa-del-mar-background-poster.webp` foi extraído do primeiro quadro e tem 28.260 bytes. O MP4 é solicitado somente quando entra na área visível, com pausa ao sair de vista, controle manual, loop e poster no modo de movimento reduzido. Mantivemos o MP4 como único formato servido para evitar outro arquivo de vídeo.

O loop fotográfico anterior e seu poster permanecem em `frontend/public/assets/video/` para revisão. A Home não os solicita. A montagem anterior usava dois registros da curadoria da Casa Del Mar Meriti, as capturas de 15:26:12 e 15:28:25 na pasta de Instagram.

A logo clara do Footer usa `frontend/src/assets/footer/del-mar-congelados-footer.webp`, WebP transparente de 480 × 432 px e 45.942 bytes. O PNG fornecido tem 822.315 bytes e está preservado em `docs/media-sources/casa-del-mar/`. O vídeo institucional real de 20–30 segundos continua previsto separadamente em Quem Somos.

## Ilustrações das receitas

As ilustrações foram criadas especificamente para o site com ImageGen integrado e convertidas para WebP 1080 × 810 px. A origem gerada por IA das imagens das receitas é registrada internamente nesta seção. Os pedidos usaram enquadramento 4:3, luz natural lateral, mesa cinza-azulada e composição de livro de receitas, sem marca ou pessoas.

| Arquivo em `frontend/public/assets/images/recipes/` | Descrição solicitada |
| --- | --- |
| `moqueca-de-peixe.webp` | Moqueca em panela escura de barro com pedaços de peixe branco, caldo de coco, tomate, pimentões, coentro e arroz à parte |
| `camarao-ao-alho-e-oleo.webp` | Camarão descascado em frigideira escura com alho dourado fatiado, salsinha, azeite e limão |
| `peixe-assado-com-legumes.webp` | Filé de peixe branco assado em travessa com batatas, cenoura, abobrinha, cebola e tomilho |
| `arroz-de-peixe-e-camarao.webp` | Arroz úmido de tomate, cubos de peixe branco, camarão descascado, pimentão e salsinha em uma travessa escura |
| `bacalhau-a-gomes-de-sa.webp` | Bacalhau em lascas, batatas em rodelas, cebola, azeitonas e ovos cozidos em uma travessa escura |

As novas instruções de preparo foram revisadas com as orientações de [manuseio seguro de pescados](https://www.foodsafety.gov/blog/safe-selection-and-handling-fish-and-shellfish) e [temperaturas de cocção](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures) do FoodSafety.gov.

## Arquitetura

O `frontend/` concentra a aplicação React e Vite. `MainLayout` reúne TopBar, Header, Outlet, Footer e BackToTop. React Router controla as páginas, os links ativos, o redirecionamento da rota institucional anterior e as buscas por categoria. A pasta `backend/` estava vazia na inspeção. A V1 pode ser servida estaticamente, com o fallback SPA da Vercel. A curadoria, o catálogo e as regras de cobertura são locais. A identificação de endereço por CEP consulta o ViaCEP diretamente do navegador.

O HTML inicial tem Open Graph e Twitter Card globais. Robôs de compartilhamento que não executam JavaScript recebem esse conjunto em todas as rotas do fallback. Título, descrição, canonical e diretiva de robots são atualizados por página no navegador. A página 404 e receitas inexistentes usam `noindex` após o carregamento do cliente. O fallback normalmente devolve HTTP 200, inclusive para endereços inexistentes. Metadados sociais exclusivos sem JavaScript e status HTTP 404 real exigem uma decisão de hospedagem ou geração estática para as rotas. Documentação de referência: [Open Graph Protocol](https://ogp.me/) e [Vercel Project Configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Auditoria técnica

- **Organização** — os dois componentes `ProductCard` atendem a apresentações diferentes, uma para os destaques e outra para o catálogo. A origem dos filtros e categorias foi unificada. O serviço do Instagram ficou como reexportação local sem chamada de rede. A TopBar preserva pausa e preferência de movimento reduzido com Barra Olímpica e horários restaurados, pendentes de validação comercial. Os SVGs iniciais do Vite, o favicon antigo, a imagem de template e PNGs originais seguem preservados.
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

### Validação do refinamento local

- Lint, build e `git diff --check` passaram. O Chrome repetiu a matriz de oito caminhos nas seis larguras da entrega anterior, sem overflow horizontal, imagens quebradas ou exceções JavaScript observadas.
- Foram verificados a fixação do Header, reaparecimento em ambas as direções, recolhimento em repouso, menu mobile, foco e Escape. A TopBar manteve o ciclo original de 55 segundos e o botão de pausa.
- A consulta de CEP foi exercitada no navegador com respostas simuladas de carregamento, endereço localizado, CEP inexistente e erro de conexão. Também foram testados o formato de entrada e o cancelamento de resultados antigos. As regras foram verificadas separadamente para correspondência por CEP ou rua, área fora da lista aprovada e cobertura pendente.
- As capturas da Home, Produtos e Quem Somos foram atualizadas. As quatro imagens do Instagram entregues à galeria passaram de 3,08 MB em PNG para 185 KB em WebP. As três ilustrações de receitas somam aproximadamente 473 KB. Os WebP existentes do Hero, catálogo e logo foram preservados.

### Validação do acabamento

- Lint, build e `git diff --check` passaram. O Chrome percorreu dez rotas em 320, 375, 393, 768, 1024 e 1440 px sem overflow horizontal, imagens quebradas ou exceções JavaScript observadas.
- O Header foi exercitado em desktop e mobile com rolagem até o fim, mudanças rápidas de direção, retorno ao topo, permanência próxima ao topo, troca de rota, foco e Escape. A lógica anterior mantinha o timer entre rotas e podia disparar com a posição medida no evento anterior. Agora a troca de rota invalida o timer e o callback confere novamente a posição.
- A consulta real no navegador com `22775-040` retornou Avenida Embaixador Abelardo Bueno, Barra Olímpica, Rio de Janeiro–RJ. O site exibiu a cobertura como pendente. A lista de atendimento continua vazia.
- Foram conferidos a sequência 02, 01, 03, 04 do Instagram, o ano dinâmico do Footer e o fallback estático da seção de qualidade. A Home não solicitou o MP4 anterior. As seis capturas do README foram atualizadas.


### Validação da integração visual

- Lint, build e `git diff --check` passaram. O Chrome percorreu dez rotas nas larguras de 320, 375, 393, 768, 1024 e 1440 px sem overflow horizontal, imagens quebradas ou erros JavaScript observados.
- No Header mobile, foram testados clique dentro do painel, toque fora, Escape com retorno de foco, troca de rota e o comportamento sticky. Em 320 px, o centro do CTA coincide com o centro da viewport e o botão do menu mede 44 × 44 px.
- A coleção de cinco receitas foi portada para rolagem horizontal até 600 px. Testamos navegação por seta no teclado e a prévia parcial do segundo card.
- O vídeo manteve 3,33 s e `playbackRate` igual a 1. Foram verificados carregamento em vista, loop, pausa manual, pausa fora da área visível, retomada e poster para movimento reduzido. As seis capturas existentes foram atualizadas e duas capturas abaixo da dobra mostram os novos materiais.


### Validação dos últimos refinamentos

- Lint, build e `git diff --check` passaram. O Chrome percorreu dez rotas em 320, 375, 393, 768, 1024 e 1440 px, sem overflow horizontal, imagens quebradas ou exceções JavaScript observadas.
- Nas três menores larguras, foram conferidos busca, filtros, opções de ordenação, foco por Tab e a área de toque de 48 px. As opções são apresentadas pelo seletor nativo.
- A logo do Footer mantém o canal alfa. A altura da seção do vídeo é 510 px no desktop de 1440 px e 330 px no celular de 393 px, onde um quadro menos alto reduz o recorte lateral. Loop, carregamento em vista, pausa, retomada e movimento reduzido passaram na prévia.
