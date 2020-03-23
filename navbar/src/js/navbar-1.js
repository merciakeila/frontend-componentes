//Ativar Toogle Navbar
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('.logo-hidden').toggleClass('active')
        $('nav').toggleClass('active')
        $('.navlink li a').toggleClass('nav')
    })
//Fechar Toogle Navbar
    $('nav ul li a').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('.logo-hidden').toggleClass('active')
        $('nav').toggleClass('active')
        $('.navlink li a').toggleClass('nav')
    })
})
