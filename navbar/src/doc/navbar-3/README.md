# NAVBAR 3

A Navbar 3, é o tipo mais usado hoje em dia na construção de layouts. Veja as estilizaçoes que podem ser adaptadas.

<img src=".src/../../../img/Navbar3-Desktop.gif"></img>

Veja abaixo: 

* [Mudança da logotipo](#Mudança-da-logotipo), vai ser trabalhada duas logotipos com cores diferentes.

* [Navbar Toggle Menu](#Navbar-toggle-menu)
  

## Vamos começar !

Esse documento é um passo a passo para implementar em seus projetos.

## Mudança da logotipo

1. No mesmo html, para que durante o sticky collapse scroll a brand (logotipo) e outros itens da navbar mude de estilo, é necessário manter a classe principal que se chama `shrink`.

```
 <header class="shrink">
        <div class="container fluid">
            <nav class="navbar">
```

2. É recomendável que altere a classe `brand` para `brand-dark`, assim será mais fácil identificar a que passará de logotipo principal para secundária, você também pode substituir por outras expressões, mas como estou colocando duas logotipos com tonalidades diferentes (Preto e branco) o ideal é essa forma, em seguida, duplique a tag da logotipo e adicione a imagem que vai aparecer quando Scroll Navbar funcionar e altere a classe para `brand-light` e adicione ambos dentro da tag `<a>`

```
<a href="#">
<img class="brand-dark" src="src/img/brand-dark.png" alt="DigitaList">
<img class="brand-light" src="src/img/brand-light.png" alt="DigitaList">
</a>
```
Observação: Caso sua Brand (logotipo) não seja uma imagem, não é necessário duplicar tags para ter uma maior elaboração no JS, a classe `.shrink ` é o suficiebte.

Veja em seguida

3. Após os primeiros passos, vamos começar. Adicione as estilizações do sticky collapse scroll da brand (logotipo) e outros itens da navbar elaboradas abaixo.


```
.shrink {
background-color: white;
transition: .5s;
color: black;
box-shadow: 0 2px 5px #00000033; 
}

.shrink li a {
  color: black;
}


```

Se for Tag, faltaria adicionar o seguinte estilo:

```
.shrink h1{
color: black;
font-size: 30px;
font-weight: 600;
padding: 10px 0px 10px 0px;
}
```
4. Agora, é preciso adicionar o efeito do Sticky Scroll no JavaScript. 

```
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 86) {
        $("header").addClass("shrink");
        $("#search-icon").css("color", "black");
        $(".brand-light").css("display", "none");
        $(".brand-dark").css("display", "block");
        
    }
    else {
        $("header").removeClass("shrink");
        $("#search-icon").css("color", "white");
        $(".brand-dark").css("display", "none");
        $(".brand-light").css("display", "block");
    }
})
```
Observação: O Id `#search-icon` é a estilização da Lupa antes e depois do Scroll, nesse caso é optativo. Se preferir retirar a barra de pesquisa do projeto, você pode retirar a linha `$("#search-icon").css("color", "white");` e `$("#search-icon").css("color", "black");` que não vai quebrar a navbar.

## Navbar Toggle Menu

1. A classe `.menu-toggle .bar` é estilizada com `background-color: white;` para o menu hamburguer ficar branco.

```
.menu-toggle .bar{
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
```

2. A classe `.shrink .menu-toggle .bar` estiliza o menu hamburguer para ficar com a cor diferente após o scroll navbar.

```
.shrink .menu-toggle .bar {
  background-color: black;
}
```
1. Quando estiliza a navbar, principalmente nesse caso que ficou transparente de primeiro momento, o toggle menu ativado pode ficar oculto, na verdade, ele da mesma cor do background fullscreen causada pela classe `.menu-toggle .bar`, para evitar esse problema manter da mesma cor tanto antes e depois do scroll, basta adicionar `background-color: #000;` na classe de modelagem do menu.

```
#mobile-menu.is-active .bar:nth-child(1){
  -webkit-transform: translateY(8px) rotate(45deg);
  -ms-transform: translateY(8px) rotate(45deg);
  -o-transform: translateY(8px) rotate(45deg);
  transform: translateY(8px) rotate(45deg);
  background-color: #000;
}

#mobile-menu.is-active .bar:nth-child(3){
  -webkit-transform: translateY(-8px) rotate(-45deg);
  -ms-transform: translateY(-8px) rotate(-45deg);
  -o-transform: translateY(-8px) rotate(-45deg);
  transform: translateY(-8px) rotate(-45deg);
  background-color: #000;
}

```
<br>
<hr>
<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Desenvolvido por <a src"https://github.com/merciakeila">Mércia Keila</a>