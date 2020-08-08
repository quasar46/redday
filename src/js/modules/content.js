// import config from './config.js'
import * as func from './functions.js'

$(function() {

    //adaptive block about company
    var windowW = $(window).width()
    var ratio = 1800 / 1903
    var mobR = 1800 / 700
    if (windowW < 1920) {
        $('.container-about').css({
            'height': windowW * ratio
        })
    }
    if (windowW < 1025) {
        $('.container-about-mobile').css({
            'height': windowW * mobR
        })
    }
    $(window).resize(function() {
        windowW = $(window).width()
        if (windowW < 1920) {
            $('.container-about').css({
                'height': windowW * ratio
            })
        }
        if (windowW < 1025) {
            $('.container-about-mobile').css({
                'height': windowW * mobR
            })
        }
    })


    //footer contacts position
    var getLastID = $('.footer__nav-list').children('li:last-child')

    $(window).resize(function() {
        let lastElOffL = getLastID.children('a').position().left
        let lastElOffT = getLastID.children('a').position().top
        let lastElH = getLastID.children('a').height()
        func.footerAdapt(lastElOffL, lastElOffT, lastElH, getLastID)
    }).trigger('resize')


    var headerH = $('header').height()

    $('.elementor').css({
        'padding-top': headerH
    })

    $(window).resize(function() {
        headerH = $('header').height()
        $('.elementor').css({
            'padding-top': headerH
        })
    })

})
