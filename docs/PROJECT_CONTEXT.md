### 3. `PROJECT_CONTEXT.md`

Aqui colocamos o cérebro do projeto, inclusive para você poder jogar esse arquivo pra mim no futuro e eu entender rapidamente onde estamos.

```bash
cat > docs/PROJECT_CONTEXT.md <<'EOF'
# Casa del Mar — Project Context

## Cliente

Casa del Mar  
Peixaria localizada em São João de Meriti, Rio de Janeiro, Brasil.

Instagram:
@casadelmar.meriti

## Business Context

Del Mar Congelados é uma extensão da operação existente Casa del Mar Meriti.

A Casa del Mar já atua como peixaria em São João de Meriti, RJ.

A nova operação Del Mar Congelados tem como objetivo expandir a presença da marca para a região da Barra Olímpica, no Rio de Janeiro, com foco na comercialização e entrega de pescados e frutos do mar congelados.

O site deve refletir essa nova proposta de negócio e não simplesmente reproduzir digitalmente a experiência da peixaria física de Meriti.

### Core Offering

- pescados congelados
- frutos do mar congelados
- conveniência
- qualidade
- conservação
- facilidade de compra
- entrega na região atendida
- não comunicar produtos como frescos quando forem comercializados congelados
- valorizar qualidade, conservação e praticidade dos produtos congelados
- utilizar a reputação da Casa del Mar Meriti como elemento de confiança para a nova operação

### Brand Relationship

Casa del Mar Meriti:
marca/operação original.

Del Mar Congelados:
extensão da marca voltada à expansão geográfica e venda de produtos congelados.

A relação entre as duas marcas deve ajudar a transferir confiança e credibilidade da operação já existente para a nova operação.

## Objetivo

Criar uma presença digital moderna, profissional e memorável para a Casa del Mar.

O website deve fortalecer a percepção de qualidade da marca, apresentar produtos e promoções, contar a história da empresa e facilitar o relacionamento com clientes.

A experiência deve transmitir que a Casa del Mar é uma empresa consolidada e referência no segmento de pescados.

## Estratégia do Projeto

Frontend-first, backend-ready.

A primeira versão será construída em React.

Mesmo antes da existência de um backend, produtos, promoções, receitas e outros conteúdos repetitivos devem ser tratados como dados estruturados.

Isso permitirá futuramente substituir dados locais por dados provenientes de uma API sem reconstruir os componentes visuais.

## MVP

A primeira versão deverá priorizar:

- Homepage
- Identidade visual
- Navegação responsiva
- Categorias de produtos
- Produtos/ofertas em destaque
- Diferenciais da marca
- WhatsApp
- História da Casa del Mar
- Instagram
- Informações da loja
- Receitas

## Homepage

Estrutura inicial:

1. Top Bar
2. Header
3. Navigation
4. Hero
5. Product Categories
6. Brand Benefits
7. Weekly Offers
8. Featured Product
9. Brand Video / Conheça a Casa del Mar
10. Our Story
11. Instagram
12. Footer

## Hero

A hero deverá ser uma das áreas de maior impacto visual do projeto.

Ideia principal:

Vídeo em autoplay mostrando:

- pescados frescos
- produtos no gelo
- camarões
- cortes de salmão
- preparação
- atendimento
- movimento da loja

Fallback:
Imagem de alta qualidade caso o vídeo não esteja disponível.

Mensagem inicial sugerida:

"O frescor do mar direto para sua mesa."

CTA principal:

"Fazer pedido pelo WhatsApp"

## Categorias

Categorias iniciais:

- Peixes
- Frutos do Mar
- Congelados
- Promoções

Devem funcionar como entrada para futuras páginas ou filtros do catálogo.

## Diferenciais

Exemplos:

- Produtos selecionados
- Procedência garantida
- Atendimento especializado
- Entrega rápida

## Ofertas

A homepage poderá apresentar produtos em destaque através de cards.

Exemplos:

- Tilápia
- Salmão
- Camarão
- Merluza

Os dados inicialmente poderão vir de arquivos locais.

No futuro poderão vir de uma API e ser administrados pela própria cliente.

## Produto em Destaque

Possível feature:

- Produto da Semana
- Destaque da Semana
- Produto do Mês
- Produto em Destaque

Campos possíveis:

- nome
- foto
- preço
- descrição
- promoção
- sugestão de preparo
- receita relacionada

Em uma fase futura poderá ser gerenciado através de área administrativa.

## Receitas

Criar conteúdo editorial relacionado aos produtos vendidos pela Casa del Mar.

Objetivos:

- oferecer conteúdo útil
- aumentar tempo de permanência no site
- incentivar visitas recorrentes
- conectar produtos a formas de preparo
- criar conteúdo indexável por mecanismos de busca
- fortalecer autoridade da marca

Exemplos:

- Moqueca
- Salmão grelhado
- Bobó de camarão
- Peixe assado
- Risoto de frutos do mar

## Clube Casa del Mar

Possibilidade futura.

Poderá reunir:

- receitas
- dicas de preparo
- conservação
- limpeza de pescados
- vídeos
- produtos sazonais
- conteúdo editorial

Não faz parte obrigatoriamente do MVP.

## E-commerce

Não assumir e-commerce completo nesta primeira fase.

O frontend deve permitir evolução futura para:

- carrinho
- login
- checkout
- pagamentos
- pedidos
- estoque
- área do cliente

Essas funcionalidades só serão implementadas caso façam sentido comercialmente para a cliente.

## Backend Futuro

Possíveis responsabilidades:

- produtos
- categorias
- promoções
- produto em destaque
- receitas
- usuários
- autenticação
- pedidos
- estoque
- administração de conteúdo

## Princípios

- evitar overengineering
- criar apenas o necessário para a fase atual
- manter responsabilidades separadas
- componentes reutilizáveis
- dados separados da apresentação
- componentes preparados para receber dados externos
- mobile-first / responsive
- acessibilidade
- SEO
- performance
