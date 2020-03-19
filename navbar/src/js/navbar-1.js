$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('.logo-hidden').toggleClass('active')
        $('nav').toggleClass('active')
        $('.navlink li a').toggleClass('nav')
    })

})
