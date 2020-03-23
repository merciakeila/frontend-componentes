//Search navbar
$("#search-icon").click(function () {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
});

//Ativar Toogle Navbar
$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(".navitem").toggleClass("is-active");
    $(this).toggleClass("is-active");
});

//Fechar Toogle Navbar

$('nav.navbar ul a').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(".navitem").toggleClass("is-active");
    $(this).toggleClass("is-active");
});
