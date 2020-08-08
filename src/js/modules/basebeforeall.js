import config from './config.js'
import * as func from './functions.js'


// Mansory settings
var $container = $('#container-man')
$('.item-man').css('margin-bottom', config.wbbl)

$('.parent div[data-flag-switch="1"]').hide()
$('.parent div[data-flag-switch="0"]').hide()
$('#port').show()

// switcher
var ls
$('.switcher svg').children('rect').css({
    'fill': '#cccccc'
})

if (localStorage.getItem('flag-switcher') == null) {
    ls = localStorage.setItem('flag-switcher', '0')
    $('.switcher svg[data-flag="0"]').children('rect').css({
        'fill': '#0d1319'
    })
    $('.parent div[data-flag-switch="0"]').fadeIn(200)
} else {
    ls = localStorage.getItem('flag-switcher')
    $('.switcher svg[data-flag="' + ls + '"]').children('rect').css({
        'fill': '#0d1319'
    })
    $('.parent div[data-flag-switch="' + ls + '"]').fadeIn(200)

}

$('.switcher svg').click(function () {
    var df = $(this).data('flag')
    localStorage.setItem('flag-switcher', df)
    ls = localStorage.getItem('flag-switcher')
    if (ls == 0) {

        $('.switcher svg[data-flag="0"]').children('rect').css({
            'fill': '#0d1319'
        })

        $('.parent div[data-flag-switch="1"]').fadeOut(200)
        $('.parent div[data-flag-switch="0"]').fadeIn(200, function () {
            $container.masonry('destroy')
            $container.masonry({
                itemSelector: '.item-man',
                columnWidth: '.item-man',
                gutter: '.gutter-sizer',
                percentPosition: true
            })
        })

        $('.switcher svg[data-flag="1"]').children('rect').css({
            'fill': '#cccccc'
        })

    } else if (ls == 1) {
        $('.switcher svg[data-flag="1"]').children('rect').css({
            'fill': '#0d1319'
        })
        $('.parent div[data-flag-switch="1"]').fadeIn(200)
        $('.parent div[data-flag-switch="0"]').fadeOut(200)
        $('.switcher svg[data-flag="0"]').children('rect').css({
            'fill': '#cccccc'
        })
    }
})

$('.line').animate({
    'width': '100%'
}, 2500)

window.onload = function () {

    $('.loader').css({
        'display': 'none'
    })

    $container.masonry({
        itemSelector: '.item-man',
        columnWidth: '.item-man',
        gutter: '.gutter-sizer',
        percentPosition: true
    })

    $('.parent').animate({
        'opacity': 1
    }, 300)

    $('html').removeClass('lock')

    if ($('svg.smile').length) {
        var svg = Snap('#svg')
        var btn = svg.select('#btn')
        var text = svg.select('#text')
        // var textLink = svg.select('#textLink');

        let menter = () => {
            btn.animate({
                d: 'M 108 0 A 153 153 0 0 0 372 0 L 460 50 M 460 50 C 350 220 130 220 20 50 L 108 0'
            }, 100);
            text.animate({
                d: 'M 64 50 Q 220 220 416 50'
            }, 100);
        }

        let mlevel = () => {
            btn.animate({
                d: 'M 0 50 A 0 0 0 0 0 480 50 L 480 150 M 480 150 C 480 150 0 150 0 150 L 0 50'
            }, 100)
            text.animate({
                d: 'M 40 110 Q 240 110 480 110'
            }, 100)
        }

        $('svg.smile').hover(function () {
            if ($(window).width() > 1024) {
                menter()
            }
        }, function () {
            if ($(window).width() > 1024) {
                mlevel()
            }
        })

        $(window).on('resize', function () {
            if ($(window).width() < 1024) {
                menter()
            } else {
                mlevel()
            }
        }).trigger('resize')
    }

    setTimeout(function () {
        $(document).on('scroll', function () {
            let scrollPage = $(document).scrollTop() + window.innerHeight
            $('.compony-slider-carousel,.elementor-image-carousel,.slider').each(function () {
                let boxHeight = $(this).offset().top + $(this).height()
                if (scrollPage > boxHeight && !$(this).hasClass('autoplay')) {
                    $(this)
                        .slick('slickSetOption', 'autoplay', 1)
                        .slick('slickGoTo', 0)
                        .addClass('autoplay')
                }
            })
        }).trigger('scroll')
    }, 1000)
}
