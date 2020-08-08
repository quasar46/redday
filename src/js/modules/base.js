import config from './config.js'

$(document).ready(function() {

    $('#navToggle').click(function() {
        $(this).toggleClass('active')
        $('.overlay').toggleClass('open')
        $('body').toggleClass('locked')
    })



    $('.back-paralax').stop().hide()
    $('.back-paralax').eq(0).stop().show()

    //settings for header
    if (!$('.header').hasClass('flag-nhp')) {
        if ($(document).scrollTop() > 450) {
            $('.header').addClass('header-scroll')
        }
        $(document).scroll(function() {
            var sctop = $(document).scrollTop()
            if (sctop > 30) {
                $('.header').addClass(' hide-scroll')
            } else {
                $('.header').removeClass('hide-scroll')
            }
            if (sctop < $('.header-limit').height()) {
                $('.header').removeClass('header-scroll')
            } else {
                $('.header').addClass('header-scroll')
            }
            if ((config.currentOffset > sctop)) {
                $('.header').removeClass('hide-scroll')
            }
            if (sctop == 0) {
                $('.header').removeClass('hide-scroll header-scroll')
            }
            config.currentOffset = sctop
        })
    } else {
        $('.header').addClass('header-nhp')
        $(document).scroll(function() {
            var sctop = $(document).scrollTop()
            if (sctop > 30) {
                $('.header').addClass(' hide-scroll')
            } else {
                $('.header').removeClass('hide-scroll')
            }
            if ((config.currentOffset > sctop)) {
                $('.header').removeClass('hide-scroll')
            }
            if (sctop == 0) {
                $('.header').removeClass('hide-scroll')
            }
            config.currentOffset = sctop
        })
    }

})
