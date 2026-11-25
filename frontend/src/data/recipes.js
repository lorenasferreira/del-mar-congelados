// Conteúdo demonstrativo para revisão editorial. Imagens ilustrativas geradas por IA.
const recipes = [
  {
    "id": "recipe-001",
    "slug": "moqueca-de-peixe",
    "name": "Moqueca de peixe",
    "description": "Peixe cozido suavemente com tomate, pimentões e leite de coco. Uma receita para servir com arroz branco.",
    "image": "/assets/images/recipes/moqueca-de-peixe.webp",
    "imageAlt": "Moqueca com pedaços de peixe branco, tomate, pimentões e coentro em uma panela escura.",
    "prepTime": 45,
    "servings": 4,
    "difficulty": "Fácil",
    "ingredients": [
      "800 g de filé de peixe firme, descongelado e cortado em pedaços grandes",
      "Suco de 1 limão",
      "1 colher de chá de sal",
      "2 colheres de sopa de azeite",
      "1 cebola grande em rodelas",
      "1 pimentão vermelho em tiras",
      "1 pimentão amarelo em tiras",
      "3 tomates maduros em rodelas",
      "2 dentes de alho picados",
      "200 ml de leite de coco",
      "100 ml de água",
      "2 colheres de sopa de coentro ou salsinha picados"
    ],
    "steps": [
      "Tempere o peixe com o limão e o sal. Reserve na geladeira por 10 minutos enquanto prepara os legumes.",
      "Em uma panela larga, aqueça o azeite em fogo médio. Refogue a cebola e o alho por 3 minutos. Junte os pimentões e refogue por mais 3 minutos.",
      "Distribua os tomates e os pedaços de peixe sobre os legumes. Acrescente o leite de coco e a água, sem mexer os pedaços.",
      "Tampe e cozinhe em fogo baixo por 15 a 20 minutos, até o peixe ficar opaco no centro e se separar facilmente com um garfo. Se necessário, adicione um pouco de água para não secar.",
      "Desligue o fogo, finalize com coentro ou salsinha e sirva com arroz branco."
    ]
  },
  {
    "id": "recipe-002",
    "slug": "camarao-ao-alho-e-oleo",
    "name": "Camarão ao alho e óleo",
    "description": "Alho dourado, limão e salsinha em um preparo rápido que valoriza o sabor do camarão.",
    "image": "/assets/images/recipes/camarao-ao-alho-e-oleo.webp",
    "imageAlt": "Camarões rosados salteados com lâminas de alho dourado e salsinha em uma frigideira.",
    "prepTime": 20,
    "servings": 4,
    "difficulty": "Fácil",
    "ingredients": [
      "600 g de camarão médio limpo e descongelado, sem casca",
      "4 dentes de alho fatiados",
      "3 colheres de sopa de azeite",
      "1/2 colher de chá de sal",
      "1 pitada de pimenta-do-reino",
      "Suco de 1/2 limão",
      "2 colheres de sopa de salsinha picada"
    ],
    "steps": [
      "Seque bem os camarões com papel-toalha. Tempere com o sal e a pimenta-do-reino.",
      "Aqueça o azeite em uma frigideira larga, em fogo médio. Acrescente o alho e mexa por 1 a 2 minutos, até começar a dourar. Retire o alho com uma escumadeira e reserve.",
      "Aumente para fogo médio-alto e disponha os camarões em uma só camada. Prepare em duas levas se necessário. Cozinhe por cerca de 2 minutos de cada lado, até ficarem rosados e opacos por inteiro.",
      "Desligue o fogo, devolva o alho à frigideira e acrescente o suco de limão e a salsinha. Misture delicadamente e sirva em seguida."
    ]
  },
  {
    "id": "recipe-003",
    "slug": "peixe-assado-com-legumes",
    "name": "Peixe assado com legumes",
    "description": "Filés de peixe com batatas, cenoura e abobrinha, perfumados com ervas e assados na mesma travessa.",
    "image": "/assets/images/recipes/peixe-assado-com-legumes.webp",
    "imageAlt": "Filés de peixe dourados com batatas, cenoura, abobrinha e cebola em uma travessa.",
    "prepTime": 60,
    "servings": 4,
    "difficulty": "Fácil",
    "ingredients": [
      "800 g de filé de peixe descongelado",
      "400 g de batatas cortadas em fatias de 0,5 cm",
      "1 cenoura em fatias finas",
      "1 abobrinha média em meias-luas",
      "1 cebola em pétalas",
      "2 dentes de alho picados",
      "3 colheres de sopa de azeite",
      "Suco de 1 limão",
      "1 colher de chá de sal, dividida entre o peixe e os legumes",
      "1 colher de chá de tomilho seco",
      "1 pitada de pimenta-do-reino",
      "50 ml de água"
    ],
    "steps": [
      "Preaqueça o forno a 200 °C. Tempere o peixe com o limão, metade do sal, o alho e a pimenta. Reserve na geladeira.",
      "Coloque as batatas, a cenoura e a cebola em uma assadeira. Misture com 2 colheres de sopa de azeite, o restante do sal e o tomilho. Adicione a água, cubra com papel-alumínio e asse por 25 minutos.",
      "Retire o papel com cuidado. Acrescente a abobrinha e acomode o peixe sobre os legumes. Regue com a colher de azeite restante.",
      "Volte ao forno sem cobrir por 20 a 25 minutos, até os legumes ficarem macios e o peixe opaco no centro, separando-se facilmente com um garfo. O tempo pode variar conforme a espessura dos filés.",
      "Retire do forno e sirva o peixe com os legumes e o caldo da assadeira."
    ]
  },
  {
    "id": "recipe-004",
    "slug": "arroz-de-peixe-e-camarao",
    "name": "Arroz de peixe e camarão",
    "description": "Arroz úmido com tomate, pimentão, peixe em cubos e camarão, finalizado com salsinha e limão.",
    "image": "/assets/images/recipes/arroz-de-peixe-e-camarao.webp",
    "imageAlt": "Arroz com tomate, pedaços de peixe, camarões e salsinha em uma travessa escura.",
    "prepTime": 45,
    "servings": 4,
    "difficulty": "Média",
    "ingredients": [
      "300 g de filé de peixe branco firme, em cubos de 3 cm",
      "250 g de camarão cru limpo e sem casca",
      "1½ xícara de arroz agulhinha",
      "3 xícaras de caldo de legumes quente",
      "1 cebola pequena picada",
      "2 dentes de alho picados",
      "½ pimentão vermelho picado",
      "2 tomates maduros picados",
      "2 colheres de sopa de azeite",
      "½ colher de chá de sal, ou a gosto",
      "1 colher de sopa de suco de limão",
      "2 colheres de sopa de salsinha picada"
    ],
    "steps": [
      "Se o peixe ou o camarão estiverem congelados, descongele na geladeira antes do preparo. Mantenha os pescados refrigerados enquanto prepara os legumes.",
      "Em uma panela larga, aqueça o azeite em fogo médio. Refogue a cebola e o pimentão por 4 minutos. Junte o alho e, depois de 30 segundos, acrescente os tomates. Cozinhe por mais 3 minutos.",
      "Junte o arroz, misture por 1 minuto e acrescente o caldo e o sal. Quando ferver, reduza o fogo e cozinhe com a panela semitampada por cerca de 10 minutos.",
      "Distribua o peixe sobre o arroz ainda úmido. Tampe e cozinhe por 4 minutos. Acrescente o camarão e cozinhe por mais 3 a 5 minutos, até o arroz ficar macio, o peixe atingir 63 °C no centro e o camarão ficar firme e opaco. Se necessário, adicione água quente aos poucos.",
      "Desligue o fogo, finalize com salsinha e suco de limão e sirva em seguida."
    ]
  },
  {
    "id": "recipe-005",
    "slug": "bacalhau-a-gomes-de-sa",
    "name": "Bacalhau à Gomes de Sá",
    "description": "Lascas de bacalhau com batatas, cebolas macias, azeitonas pretas e ovos cozidos.",
    "image": "/assets/images/recipes/bacalhau-a-gomes-de-sa.webp",
    "imageAlt": "Travessa com lascas de bacalhau, batatas, cebola, azeitonas pretas e rodelas de ovo cozido.",
    "prepTime": 75,
    "servings": 4,
    "difficulty": "Avançada",
    "ingredients": [
      "600 g de lombo de bacalhau já dessalgado",
      "750 g de batatas",
      "2 cebolas médias em rodelas finas",
      "3 dentes de alho fatiados",
      "5 colheres de sopa de azeite",
      "3 ovos",
      "70 g de azeitonas pretas sem caroço",
      "3 colheres de sopa de salsinha picada",
      "¼ de colher de chá de pimenta-do-reino",
      "Sal a gosto, se necessário"
    ],
    "steps": [
      "Use bacalhau já dessalgado. Se estiver congelado, descongele na geladeira antes do preparo. Preaqueça o forno a 200 °C.",
      "Cozinhe as batatas inteiras em água até ficarem macias sem desmanchar, cerca de 20 minutos. Escorra, deixe amornar e corte em rodelas de aproximadamente 1 cm.",
      "Em outra panela, cubra o bacalhau com água e cozinhe em fervura branda por cerca de 8 a 12 minutos, conforme a espessura, até o centro atingir 63 °C. Escorra, retire pele e espinhas e separe a carne em lascas grandes.",
      "Cozinhe os ovos em água fervente por 10 a 12 minutos, até claras e gemas ficarem firmes. Resfrie em água fria, descasque e corte em rodelas.",
      "Aqueça 4 colheres de azeite e cozinhe as cebolas em fogo médio-baixo por 10 a 12 minutos, até ficarem macias. Junte o alho e a pimenta e mexa por mais 1 minuto.",
      "Em uma travessa, intercale batata, cebola e bacalhau. Prove antes de ajustar o sal. Regue com o azeite restante e asse por 15 a 20 minutos, até aquecer bem e dourar levemente. Finalize com os ovos, as azeitonas e a salsinha."
    ]
  }
];

export default recipes;
