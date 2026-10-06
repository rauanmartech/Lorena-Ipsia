# Lorena Ípsia Advocacia — landing page

Prévia visual da landing page institucional em **Astro + TypeScript + Tailwind CSS**, com saída estática. O projeto está dentro de `site-advocacia/` para poder ser preparado e publicado separadamente depois.

Neste estágio, o objetivo é aprovar **composição, hierarquia, ritmo, espaçamento e responsividade**. Nome, logo e contatos foram fornecidos pelo usuário; os textos editoriais e demais dados profissionais ainda precisam de revisão. A identidade visual usa azul-marinho, dourado e superfícies claras. Não há banco de dados, formulário ativo ou integração externa.

## Executar localmente

Requisitos: Node.js 22 ou superior e npm.

```bash
cd site-advocacia
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:4321/`.

Outros comandos:

```bash
npm run check   # valida tipos e componentes Astro
npm run build   # gera o site estático em dist/
npm run preview # visualiza o build localmente
```

## Estrutura

```text
site-advocacia/
├── astro.config.mjs                 # Astro estático + plugin Tailwind/Vite
├── package.json                     # scripts e dependências
├── tsconfig.json                    # TypeScript em modo strict
├── public/
│   └── images/
│       ├── hero-advogada-v1.png         # fotografia aplicada ao background da hero
│       ├── logo-lorena-ipsia-horizontal.png # logo ativa no header e footer
│       ├── marca-agua-lorena-ipsia.webp # monograma decorativo da seção Atuação
│       └── logo-lorena-ipsia.png        # versão anterior, preservada para comparação
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro          # marca e navegação
│   │   │   └── Footer.astro          # rodapé institucional
│   │   ├── sections/
│   │   │   ├── Hero.astro            # 1. apresentação
│   │   │   ├── PracticeAreas.astro   # 2. áreas de atuação
│   │   │   ├── About.astro           # 3. sobre o escritório
│   │   │   ├── Process.astro         # 4. como funciona
│   │   │   └── Contact.astro         # 5. contato
│   │   └── ui/
│   │       ├── AboutFeatureIcon.astro  # ícones dos diferenciais da seção Sobre
│   │       ├── BrandLogo.astro         # apresentação responsiva da logo fornecida
│   │       ├── PracticeIcon.astro      # ícones ilustrativos dos três cards
│   │       ├── ProcessIcon.astro       # ícones das três etapas de atendimento
│   │       └── SectionIntro.astro      # cabeçalho visual reutilizável
│   ├── assets/
│   │   ├── about-consultation-v1.png  # imagem da seção Sobre
│   │   ├── process-advogada-v1.png    # retrato da seção de atendimento
│   │   ├── practice-writing.png       # card 1: documento em escrita
│   │   ├── practice-columns.png       # card 2: colunas do Partenon
│   │   └── practice-justice.png       # card 3: estatueta dourada da Justiça
│   ├── content/
│   │   └── site.ts                   # textos e contatos centralizados
│   ├── layouts/
│   │   └── BaseLayout.astro          # HTML, metadados e moldura da página
│   ├── pages/
│   │   └── index.astro               # composição e ordem das seções
│   └── styles/
│       └── global.css                # Tailwind, tokens e estilos base
└── dist/                             # gerado pelo build; ignorado no Git
```

## Decisões de arquitetura

- **Componentes por responsabilidade:** cada seção tem marcação e estilos próprios. `index.astro` apenas compõe a página na ordem aprovada.
- **Conteúdo centralizado:** `src/content/site.ts` contém os textos que serão trocados quando a identidade e a redação forem definidas. O arquivo está tipado por inferência com `as const`.
- **Cards de atuação:** cada card é uma grade de quatro partes iguais: foto no primeiro quarto, ícone e título no segundo, texto e traço decorativo nos dois quartos finais. A altura de 400 px preserva essas proporções em todos os tamanhos de tela.
- **Fotografias dos cards:** os arquivos originais ficam em `src/assets/` e são transformados pelo `astro:assets` em imagens WebP de 900 px no build. O conteúdo de cada card aponta para sua própria imagem, descrição alternativa e variante de ícone.
- **Seção de atendimento:** estrutura bipartida, com conteúdo e três etapas à esquerda e retrato da advogada à direita. Os ícones são SVGs locais; os quadrados na transição entre texto e foto são CSS, não parte da imagem.
- **Estilos organizados:** cores, tipografia e regras comuns estão em `global.css`; estilos específicos ficam junto do componente Astro correspondente. O Tailwind 4 está instalado e disponível para a evolução do projeto, sem exigir um arquivo de configuração separado.
- **Interatividade mínima:** o menu móvel usa `<details>` com uma pequena lógica para fechar após escolher um link. O restante da página é HTML/CSS estático.
- **Acessibilidade inicial:** HTML semântico, link para pular ao conteúdo, navegações identificadas, estados de foco, rolagem ajustada ao cabeçalho e respeito a `prefers-reduced-motion`.
- **Dados fornecidos e conteúdo a validar:** nome, logo, e-mail, telefone e localização são os fornecidos pelo usuário. A inscrição OAB ainda não foi inserida. As fotografias geradas e os textos editoriais são propostas visuais, não registros de clientes ou atendimentos reais. Os canais são exibidos como texto, sem links ativos.

## Guia visual desta prévia

- **Hero e cabeçalho:** azul-marinho profundo `#07111f` com dourado `#c9a86f` e dourado claro `#d8bd8c` para realces.
- **Logo:** o PNG horizontal e transparente fornecido pelo usuário é reutilizado no header e no footer pelo componente `BrandLogo.astro`, sem edição do arquivo nem mesclagem CSS. A versão anterior permanece arquivada, mas não é carregada pela página. O header voltou a uma altura mais compacta, com menu móvel antecipado para evitar que a navegação quebre em telas médias.
- **Superfícies claras:** fundo principal `#f8f8f6`, seção de atendimento `#f3f1ed` e texto escuro. A seção de contato usa `#101f33`; o footer usa `#07111f`.
- Títulos com serifada do sistema (`Georgia`) e textos de interface com fonte sem serifa do sistema.
- A hero usa a fotografia local `public/images/hero-advogada-v1.png` como fundo integral (`cover`). O gradiente preserva a leitura do texto; no celular, a foto permanece na parte superior e o texto fica sobre uma área mais escura na parte inferior.
- Linhas e losangos dourados na borda esquerda da hero são criados com CSS. A coluna esquerda da seção Sobre usa a fotografia de consulta aprovada, um painel azul-marinho com frase institucional provisória e quadrados decorativos feitos somente com CSS.
- A seção Atuação usa fundo marfim e um painel azul-marinho para o título, descrição e detalhes dourados. Em telas largas, os cards brancos são mais estreitos que o painel e se sobrepõem discretamente à sua base. Até 900 px, a grade passa para uma coluna e fica separada do painel, sem sobreposição. A divisão interna dos cards permanece: foto panorâmica curta, ícone circular azul-marinho, título serifado e separador dourado.
- O painel da seção Atuação usa o monograma fornecido pelo usuário como marca d'água azul na área livre à direita do título. Uma máscara CSS preserva sua transparência; o elemento é decorativo, não recebe foco nem bloqueia cliques e é ocultado abaixo de 1051 px, quando começa a competir com o título.
- A parte direita da seção Sobre segue a referência de título serifado em duas cores, texto introdutório e quatro diferenciais com ícones dourados em grade 2 × 2; em telas estreitas, a grade se adapta a uma coluna.
- A seção de atendimento segue a referência de título com acento dourado, três ícones circulares e retrato à direita. Em telas menores, o retrato passa para baixo do conteúdo e as etapas viram linhas compactas.
- A mesma marca d'água azul-marinho aparece em baixa opacidade no canto inferior esquerdo de **Como funciona**, atrás do conteúdo. A seção Contato fica em uma camada acima, impedindo que o ornamento seja visto fora dos limites de Como funciona. A marca é ocultada quando o layout passa para uma coluna para preservar a leitura.
- A seção Contato traz um convite à conversa à esquerda e um painel de canais à direita, com ornamentos geométricos em CSS; exibe os contatos informados pelo usuário.
- O footer tem três áreas: logo e frase institucional à esquerda, navegação em **Explorar** e os três dados fornecidos em **Contatos**. A marca tem escala própria para o rodapé e a frase é alinhada a um filete dourado; o retorno ao topo fica na faixa inferior.
- Seções amplas, com bastante espaço em branco, divisórias finas e cartões simples.

Para mudar a paleta ou tipografia, comece pelas variáveis em `src/styles/global.css`. Para mudar a ordem ou remover seções, edite `src/pages/index.astro`.

## Prompts das imagens dos cards

As imagens finais foram geradas com o gerador de imagens integrado. O anexo fornecido pelo usuário serviu como referência visual para o primeiro card; a segunda e a terceira imagens foram geradas como cenas distintas.

1. **Escrita de documento:** “Photorealistic editorial law-office photograph for the top quarter of a card. Close-up of a professional in a deep navy suit writing with a black pen on a legal document on a dark wooden desk; hands, pen and paper centered. Very wide crop around 3:1, natural hand anatomy, real paper and wood grain, warm gold highlights against navy shadows. No readable text, UI, logo or watermark.”
2. **Colunas de Atenas:** “Photorealistic close-up of the ancient Greek columns of the Parthenon in Athens. Authentic weathered Pentelic marble Doric columns with visible fluting, capitals and stone texture; slightly low angle, ultra-wide crop around 3:1, warm late-afternoon light and deep blue shadows. No people, text, UI, logo or watermark.”
3. **Justiça dourada:** “Photorealistic intimate close-up of a small golden Lady Justice statuette on a dark navy law-office desk. Gilt bronze blindfolded figure with balanced scales, tight focus on upper body, face and scales, ultra-wide crop around 3:1, warm amber light, realistic metal patina and softly blurred background. No people, text, UI, logo or watermark.”

## Prompt do retrato da seção de atendimento

Imagem gerada com a ferramenta integrada. A foto da hero foi a referência de identidade; o anexo do usuário orientou apenas a posição do retrato na seção.

> Use case: photorealistic-natural / identity-preserve. Asset type: portrait photograph for the RIGHT half of the fourth section of a Brazilian law firm's landing page. Input image 1 is the identity anchor: depict the SAME adult female attorney with the same recognizable face, natural complexion, long dark-brown wavy hair, navy blazer and white blouse. Input image 2 is a layout and framing reference ONLY: use the portrait on the right-hand half of the page as inspiration; do not reproduce its male subject or any of its typography, icons, colored squares, or page design. Create one clean edge-to-edge editorial photograph of this woman standing alone in a modest contemporary office, waist-up / three-quarter portrait, body angled slightly toward the left, looking calmly just off camera, arms naturally and loosely folded, confident but approachable rather than severe. Background: warm neutral plaster/stone wall with subtle real texture and a hint of window light, uncluttered. Portrait-oriented roughly 4:5, leave safe space above her head and around the shoulders for responsive cropping. Soft natural side light, realistic skin pores, slight fabric texture and real hand anatomy, restrained navy/cream/warm-gold palette. Avoid glamour retouching, AI sheen, staged stock-photo smile, extra people, scales, legal props, text, logos, watermark, graphic squares, borders, or UI elements. The photograph alone should be generated; all decorative geometry will be added in CSS later.

## Antes da publicação

1. Revisar os textos editoriais, os placeholders restantes em `src/content/site.ts` e as legendas de imagens nas seções.
2. Inserir fotos e identidade visual autorizadas; preferir arquivos locais otimizados.
3. Confirmar os dados de contato informados, decidir sobre links de e-mail e telefone e revisar o texto de cada botão.
4. Confirmar a grafia do nome profissional, inserir a inscrição OAB e validar áreas de atuação e redação institucional.
5. Atualizar `title` e `description` em `src/pages/index.astro`; configurar domínio, favicon, imagem social e demais metadados.
6. Avaliar a necessidade de política de privacidade conforme as integrações e dados que o site vier a usar.
7. Validar a versão final em celular e desktop, executar `npm run check` e `npm run build`.

## GitHub e Vercel

O repositório Git está na pasta acima do projeto. Ao importar o repositório na Vercel, defina **Root Directory** como `site-advocacia`. A Vercel detecta o Astro; o comando de build é `npm run build` e o diretório de saída é `dist`.

O arquivo `package-lock.json` deve ser versionado para reproduzir as versões instaladas. `node_modules/`, `.astro/`, `dist/` e `.vercel/` são ignorados pelo `.gitignore` da raiz.

## Registro de alterações

### 2026-10-06 — Limite inferior da marca d'água em Como funciona

- A marca d'água foi elevada 57 px no canto inferior esquerdo da seção.
- Ajustada a ordem de empilhamento: Como funciona fica abaixo de Contato, de modo que qualquer pequena sobra do ornamento seja encoberta pela seção seguinte.
- Conferida a transição visual em desktop, sem invasão perceptível do fundo azul de Contato.

### 2026-10-06 — Recuo dos cards e separação no mobile

- Reduzida a largura da grade dos cards em telas largas, criando recuos simétricos dentro das bordas do painel azul para acentuar a sobreposição.
- Removida a sobreposição quando a grade passa para uma coluna (até 900 px); no celular, o painel e o primeiro card ficam separados por 32 px.
- Reiniciado `npm run dev` na porta 4321 e confirmado retorno HTTP 200 na página local.

### 2026-10-06 — Painel azul na seção Áreas de atuação

- Substituído o acabamento marfim pouco perceptível do cabeçalho por um painel azul-marinho de alto contraste, com título claro, descrição suave e chamadas douradas.
- Mantido o fundo marfim da seção e os cards brancos; a grade de cards se sobrepõe levemente à base do painel, criando uma transição intencional entre as duas superfícies.
- A marca d'água foi preservada no lado direito do painel com azul mais claro para continuar visível sobre o fundo escuro. No celular ela permanece oculta e o painel se adapta a uma coluna.

### 2026-10-06 — Refinamento das seções Atuação e Como funciona

- Ajustada a marca d'água de **Como funciona** para 10% de opacidade e deslocada 70 px para a direita, mantendo a pequena extensão além das bordas esquerda e inferior. O tom azul da parte inferior permanece perceptível sobre a seção seguinte sem cobrir a leitura das etapas.
- Substituído o cinza chapado da seção **Áreas de atuação** por uma superfície marfim em degradê suave. Título, chamada, divisória e legenda lateral agora retomam o azul-marinho e o dourado do site.
- Refinadas as superfícies dos cards com branco quente, borda sutil e sombra leve, sem alterar sua divisão interna ou conteúdo.

### 2026-10-06 — Marca d'água na seção Como funciona

- Reutilizado `public/images/marca-agua-lorena-ipsia.webp` na seção de atendimento, tingido com o azul-marinho da paleta por máscara CSS.
- Posicionado o monograma atrás da primeira etapa, parcialmente para fora das bordas esquerda e inferior, com opacidade reduzida para não competir com os textos e ícones.
- No layout de até 980 px, o elemento decorativo é ocultado; a imagem original e o conteúdo da seção permanecem inalterados.

### 2026-10-06 — Marca d'água na seção de atuação

- Copiado o monograma branco com transparência enviado pelo usuário para `public/images/marca-agua-lorena-ipsia.webp`, sem alterar o arquivo original.
- Inserida uma máscara CSS azul-marinho de baixa opacidade no espaço vazio à direita do título da seção Atuação, conforme a área marcada na referência. O conteúdo permanece acima do ornamento e a imagem não participa da árvore de acessibilidade.
- A marca d'água é exibida somente acima de 1050 px, onde há espaço livre suficiente; em telas menores é omitida para preservar a leitura do título.

### 2026-10-06 — Contatos fornecidos e footer em três colunas

- Atualizados e-mail, telefone e localização em `src/content/site.ts` exatamente como informados: `lorenaípsia@gmail.com`, `(11) 99999-9999` e `São Paulo - SP • Atendimentos Online`.
- A seção Contato reutiliza esses dados e não os apresenta mais como ilustrativos. Os valores seguem como texto, sem inferir um canal de WhatsApp ou alterar a grafia do e-mail.
- Reestruturado o footer em marca e subtítulo, **Explorar** e **Contatos**. A coluna de contatos lê a mesma fonte da seção Contato para evitar divergências; o retorno ao topo foi movido para a faixa inferior.
- Reduzida a escala da logo no footer e alinhado o subtítulo com um detalhe dourado. Ajustada a grade para desktop, tablet e celular.

### 2026-10-06 — Logo horizontal e conteúdo da seção Contato

- Copiada a nova logo horizontal e transparente fornecida pelo usuário para `public/images/logo-lorena-ipsia-horizontal.png` e atualizados o header e o footer para usar essa versão. A logo anterior foi preservada, sem uso no site.
- Removida a mesclagem CSS necessária à arte antiga; ajustadas as larguras da marca, a altura do header, o ponto de entrada do menu móvel e os offsets de rolagem.
- Substituído o `lorem ipsum` da seção Contato por texto editorial provisório e título com destaque dourado, sem inventar dados reais de contato.
- Refeito `Contact.astro` com duas colunas no desktop, painel para os canais e quadrados decorativos em CSS; no celular, o conteúdo é empilhado.
- Conferidas a nova logo e a seção Contato em desktop e celular. E-mail, telefone e localização permanecem explicitamente ilustrativos e sem links ativos.

### 2026-10-06 — Nome e logo de Lorena Ípsia Advocacia

- Substituído `NOME DO ESCRITÓRIO` por `Lorena Ípsia Advocacia` no conteúdo centralizado, nos créditos do footer e nos metadados da página.
- Copiada a imagem anexada pelo usuário, sem redesenho, para `public/images/logo-lorena-ipsia.png`.
- Criado `src/components/ui/BrandLogo.astro` e aplicado o mesmo arquivo no header e no footer, substituindo o monograma `N·` provisório.
- Ajustadas a altura do cabeçalho, as dimensões responsivas da marca, a rolagem até as seções e a altura de referência da hero.
- Conferidos o header e o footer em desktop e celular; os contatos e demais dados profissionais continuam provisórios.

### 2026-10-06 — Seção de atendimento e footer

- Gerado e aplicado `src/assets/process-advogada-v1.png` com a mesma advogada usada na hero; a imagem da referência orientou somente o enquadramento da coluna direita. O retrato é uma imagem gerada, não uma fotografia real do escritório.
- Refeito `Process.astro` em composição de duas colunas com título em azul-marinho e dourado, descrição, três etapas e imagem otimizada pelo Astro. Os quadrados da divisória foram feitos em CSS.
- Criado `src/components/ui/ProcessIcon.astro` com SVGs próprios para primeiro contato, análise e orientação. A redação das etapas foi centralizada em `src/content/site.ts` e evita promessas de resultado, tempo de experiência ou credenciais não fornecidas.
- Refeito o footer em azul-marinho profundo e dourado, com texto provisório, navegação e retorno ao topo; removido seu `lorem ipsum`.
- Atualizada a seção Contato de cinza para azul-marinho, para manter a continuidade visual até o footer. Os dados de contato ali continuam ilustrativos e sem links ativos.
- Conferidos os layouts em viewport desktop e celular; `npm run check` e `npm run build` passaram.

### 2026-10-06 — Card fotográfico da seção Sobre

- Aplicada a imagem `src/assets/about-consultation-v1.png` à coluna esquerda da seção Sobre, otimizada para WebP pelo Astro no build.
- Substituído o placeholder por uma composição inspirada na referência: fotografia superior, painel azul-marinho sobreposto, aspas e filete dourados, e quadrados decorativos em azul-marinho e dourado criados exclusivamente em CSS.
- Incluídas descrição alternativa da foto e frase institucional provisória em `src/content/site.ts`. A frase não é depoimento de cliente; a cena é uma imagem gerada, não uma fotografia documental do escritório.
- Ajustadas as proporções para telas menores, sem incluir texto ou ornamentos no arquivo da fotografia.

### 2026-10-06 — Imagem candidata para o card da seção Sobre

- Gerada `src/assets/about-consultation-v1.png` como proposta fotográfica para a coluna esquerda da seção Sobre, integrada à página após aprovação visual.
- A advogada da hero foi usada como referência de identidade; a imagem do card fornecida pelo usuário guiou apenas a composição de uma consulta entre duas pessoas.
- A nova cena mostra uma cliente em roupa cotidiana conversando com a advogada sobre um documento, em ambiente menos institucional. A imagem contém somente a fotografia: citação, blocos e demais ornamentos serão implementados em CSS após aprovação.

### 2026-10-06 — Conteúdo e composição da seção Sobre

- Refeito somente o conteúdo da coluna direita da seção Sobre, seguindo a hierarquia visual da referência: chamada, título com destaque dourado, descrição e quatro diferenciais.
- Criado `src/components/ui/AboutFeatureIcon.astro` para os ícones decorativos de escuta, análise, comunicação e ética.
- Substituídos os parágrafos `lorem ipsum` e a assinatura provisória dessa coluna por conteúdo editorial inicial centralizado em `src/content/site.ts`.
- Mantido o placeholder fotográfico da coluna esquerda para a próxima etapa. Os diferenciais devem ser validados com as características reais do escritório antes da publicação.

### 2026-10-06 — Conteúdo inicial dos três cards

- Substituídos os títulos e textos `lorem ipsum` dos cards por redação provisória: Consultoria jurídica, Assessoria preventiva e Defesa de direitos.
- Mantida a estrutura visual e as imagens existentes. Os temas são frentes genéricas de atuação e devem ser confirmados ou trocados pelas áreas reais do escritório antes da publicação.

### 2026-10-06 — Cards de áreas de atuação

- Geradas três fotografias distintas: escrita de documento, colunas do Partenon em Atenas e estatueta dourada da Justiça.
- Criado `src/components/ui/PracticeIcon.astro` com três ícones vetoriais correspondentes.
- Refeito `PracticeAreas.astro` em cards independentes de 400 px, divididos em 1/4 imagem, 1/4 ícone e título, 2/4 descrição e separador final.
- Imagens integradas ao conteúdo centralizado e otimizadas pelo Astro no build.
- Duas imagens intermediárias de consulta e pesquisa foram substituídas pelos temas definidos para os cards 2 e 3.

### 2026-10-06 — Hero com fotografia, azul-marinho e dourado

- Aplicada a fotografia gerada como background de toda a hero, removendo o bloco de imagem separado.
- Reorganizados título, descrição, linha decorativa e dois botões segundo a hierarquia visual da referência anexada, sem copiar o texto da imagem.
- Criados ornamentos geométricos dourados à esquerda somente com CSS.
- Ajustados enquadramento, gradiente e empilhamento do conteúdo para telas pequenas.
- Cabeçalho adaptado à nova paleta para formar uma transição contínua com a hero.
- Inseridos tokens de azul-marinho e dourado em `src/styles/global.css` e alterada a cor de tema do navegador.

### 2026-10-06 — Fotografia candidata para a hero

- Gerada uma fotografia horizontal a partir da imagem fornecida como referência de cenário e iluminação, com advogada adulta à direita, escritório jurídico e balança dourada.
- Salvo o arquivo em `public/images/hero-advogada-v1.png` (1672 × 941 px, proporção próxima de 16:9). Ele foi aplicado à hero na etapa seguinte.
- Registrada a nova direção de cores: azul-marinho profundo e dourado discreto.

### 2026-10-06 — Estrutura visual inicial

- Criado projeto Astro estático com TypeScript estrito e Tailwind CSS 4. TypeScript 6 foi escolhido por ser compatível com `@astrojs/check`.
- Implementadas as cinco seções aprovadas: hero, áreas de atuação, sobre, funcionamento do atendimento e contato.
- Criados cabeçalho responsivo, menu móvel e rodapé.
- O menu móvel fecha ao selecionar uma seção.
- Organizados textos provisórios em `src/content/site.ts`.
- Definidos tokens de cor e tipografia em tons de branco e cinza.
- Adicionados placeholders visuais para fotografia institucional e dados de contato.
- Documentada a execução local, estrutura de pastas e preparação para GitHub/Vercel.
