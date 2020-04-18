# Ladingpage

#### Significado de cada pasta ou arquivo do projeto

1. `Build` ou `Dist`

2. `source (src)`



#### Exemplo 1

````
build
  js
    app.min.js
  css
    app.min.css

source
  scss
     0-base
         _normalize.scss (arquivo reset ou normalize)
         _buttons.scss (Botões)
         _links.scss (Tudo o que é relacionado com icones
         _typography.scss (Fontes importadas)
     1-helpers
         _functions.scss (Mixins mas de estrturas e estilizações repetitivas)
         _mixins.scss (Estilização de fontes)
         _variables.scss (Cores)
     2-layout
         _page-home.scss (Todo o layout da ladingpage)
     3-modules
         _carousel.scss 
    app.scss
  
   Js
      modules.js
Pages
  about.html
  services.html
index.html
gulpfile.html
README.md
````
