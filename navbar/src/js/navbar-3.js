
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

//Scroll Navbar

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