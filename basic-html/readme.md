# HTML

## O que é HTML ?
- É uma linguagem de marcação de texto, basicamente um documento de texto.

## O que são tags html ?
- São estruturas que tem uma marca de inicio e uma de fim, as quais tem diferentes comportamentos, são usadas no html para todas ações.

## Quais as principais tags do HTML?
 - `<html> </html>` ( o html inteiro )
 - `<head> </head>` ( onde ficam as configurações da página html )
 - `<body> </body>` ( onde fica o conteúdo do html, o que vemos na página )
 - Percebmos que todas essas tags tem um padrão, no qual ela começa com `<nome da tag>` e termina com `</nome da tag>`
 - Algumas tags fecham em si mesmas, sem necessitar de outra parte, que é o caso da tag para adicionar imagens: `<img src="" alt="" />` ( não é necessário gravar isso )

## O que são atributos das tags HTML ?
 - São propriedades dentro das tags que recebem valores
 - Colocamos valores dentro das `""`, cada atributo e cada tag tem seu funcionamento, para entender cada um podemos simplesmente pesquisar no google: "o que o atributo `nome do atributo` da tag `nome da tag` faz ?
    - Exemplo de tag com atributo:
    `<img src="caminho do arquivo da imagem" alt="texto alternativo se a imagem nao carregar" />`

## O que é o "caminho" dos arquivos ?
 - O que deve ser percorrido para chegar neles, isso será melhor detalhado nas aulas sincronas, no entanto, você pode verificar nesse video: https://www.youtube.com/watch?v=9p5E69VQoxY

## O que é um container em html ?
 - É uma espécie de limitação onde colocamos conteúdo dentro, por exemplo, uma caixa onde colocamos coisas dentro. Um exemplo de container genérico ( sem significado específico ) é uma `<div></div>`
 - Alguns containers tem significado, outros como a `div` nenhum significado. Normalmente buscamos utilizar as tags com os significados adequados para cada caso, no entanto, isso não é obrigatório.

 ### Vale ressaltar que sempre utilizamos um container dentro de outro container, pois eles servem basicamente para delimitar espaços.

## Alguns containers muito utilizados no HTML são:
 - `<header></header>` ( é a parte de cima de um container, normalmente utilizado para a parte de cima de uma página )
    - Exemplo de um `header`:
    <img src="./../site-final/images/readme/header.png" />

 - `<main></main>` ( onde fica o conteúdo principal da página )
    - Exemplo de um `main`:
    <img src="./../site-final/images/readme/main.png" />

 - `<nav></nav>` ( utilizamos para colocar um menu de navegação do site - colocar links que levam para outras paǵinas ) Dentro do header temos uma navegação, e em volta desses links de navegação temos uma `nav`.
    - Exemplo de uma `nav`: ( para mostrar melhor utilizei a função de inspecionar do google chrome - irei comentar sobre ao percorrer da oficina )
    <img src="./../site-final/images/readme/nav.png" />

 - `<div> </div>` ( como já foi comentado, div é um container sem significado algum e muito utilizado )
    - div não irá ter um exemplo, pois podemos utilizar div para literalmente qualquer coisa.

## Como "colocar" textos no html?
 - Para **exclusivamente mostrar textos em tela** temos algumas tags, as mais comuns são:
  - `<p>Olá sou um parágrafo no HTML</p>` ( os parágrafos são blocos de textos que ficam em uma única linha )

  - `<h1>Olá sou um título principal no HTML</h1>` ( também pode ser usado para destacar o conteúdo mais importante da página, normalmente temos 1 `h1` por página )

  - `<h2></h2>` - `<h3></h3>` - `<h4></h4>` ( temos alguns números, quanto maior, "menos importante", mas é importante utilizar `tipos de titulos` diferentes para cada texto e não utilizar apenas `h1` e `h2` para tudo )

  - `<a href="www.google.com"></a>` ( são as "ancoras" ou "links", basicamente nos fazem navegar de uma página a outra e tem um atributo chamado `href` no qual o valor é a página que queremos ir ao clicar nele )
      - Exemplo de navegação com ancoras `<a></a>`:
      <img src="./../site-final/images/readme/navegar.gif">

  - `<span>Sem significado, normalmente usado para colocar um estilo em um único trecho de texto</span>` ( o span é legal de ser utilizado juntamente com as classes css, no futuro você irá entender )