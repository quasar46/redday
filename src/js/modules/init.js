import config from './config.js'


$(function() {

    $('.smile').on('click', function() {
        window.location = $(this).data('href')
    })

    $('#header .menu-item a').on('click', function(event) {
        event.stopPropagation()
    })

    $('#header .menu-item').on('click', function() {
        location.href = $(this).find('a').attr('href')
    })

    //init stickybits
    stickybits('.child')

    // Init slick on block slider >>>
    $('.slider').slick({
        centerMode: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        centerPadding: '360px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: config.sliderDelay,
        mobileFirst: true
    })
    // Init slick on block slider <<<

    try {

        $('.container-about .par-block').each(function(index, el) {
            new Parallax(el)
        })

        //init parallax on background title
        $('.back-paralax').each(function(index, el) {
            new Parallax(el)
        })

        //Init parallax on slider
        var parallaxInstance
        $('.img-container').each(function(index, el) {
            parallaxInstance = new Parallax(el)
            parallaxInstance.destroy()
        })
        var scene = $('.slider').find('#slick-slide00').find('.img-container').get(0)
        parallaxInstance = new Parallax(scene)
        $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            parallaxInstance.destroy()
            var sceneNext = $('.slider').find('#slick-slide0' + nextSlide).find('.img-container').get(0)
            parallaxInstance = new Parallax(sceneNext)

        })
    } catch (err) {
        // console.log('Not home page: ' + err)
    }

    // Compony Slider >>>
    $('.compony-slider-carousel').slick({
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        focusOnSelect: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        touchMove: false,
        autoplaySpeed: config.sliderDelay,
        mobileFirst: true
    })

    $('.compony-slider-carousel').each(function() {
        let item = $(this).find('.compony-slider-carousel-item')
        if (item.length > 1) {
            $(this).append(
                `<button class="slick-prev-custom slick-arrow-custom"><span class="btn-prev"></span></button>
                <button class="slick-next-custom slick-arrow-custom"><span class="btn-next"></span></button>`)
        }
    })

    $('.compony-slider-carousel').find('.slick-dots').addClass('redday-container')

    $('.compony-slider-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(this).parent().find('.gallary-slider-item__desc').eq(currentSlide).stop().fadeOut(600)
    })

    $('.compony-slider-carousel').on('afterChange', function(event, slick, currentSlide) {
        $(this).parent().find('.gallary-slider-item__desc').eq(currentSlide).stop().fadeIn(600)
    })

    $('.compony-slider-carousel').slick('slickGoTo', 0)

    // Compony Slider <<<


    //Init slick on block slider
    let swipers = document.querySelectorAll('.swiper-container')
    if (swipers) {
        for (let swiper of swipers) {
            swiper.swiper.destroy()
        }
    }

    $('.elementor-image-carousel').each(function() {
        let root = $(this).parents('.elementor-widget-image-carousel')
        let settings = root.data('settings')

        root.find('.swiper-pagination').remove()
        root.find('.elementor-swiper-button').remove()

        $(this).slick({
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: settings.navigation == 'both' || settings.navigation == 'dots',
            arrows: false,
            infinite: settings.infinite == 'yes',
            autoplay: false,
            autoplaySpeed: config.sliderDelay,
            mobileFirst: true
        })
    })

    // Навигаци по салдам
    var slideCount = 0
    var curSlide = 0
    var slideCountElem = 0
    var curSlideElem = 0

    // set parameters on blocks
    $('.slick-dots').each(function(index, el) {
        $(el).find('button').html('<div class="cliiik" style="display: none;"></div><div class="bar"></div>')
        // $(el).children('li').eq(0).css('flex-grow', '2')
        $(el).find('.bar').eq(0).addClass('progress')
    })

    // setTimeout(function() {
    //     $('.progress').css('width', '0')
    //     $('.progress').stop().animate({
    //         width: '100%'
    //     }, config.sliderDelay - 100)

    // }, 100)


    // On before slide change
    $('.slider').find('#slick-slide00').find('.slide-content').addClass('active')

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        slideCount = slick['slideCount']
        curSlide = nextSlide

        $(this).find('.progress').stop().css('width', '0')
        $(this).find('.slick-dots').children('li').css('flex-grow', '1')
        $(this).find('.slick-dots').children('li').eq(currentSlide).find('.bar').removeClass('progress')
        $(this).find('.slick-dots').children('li').eq(nextSlide).find('.bar').addClass('progress')
        // $(this).find('.slick-dots').children('li').eq(currentSlide).children('button').css('background', '#494d52')

        for (var i = 0; i < nextSlide; i++) {
            $(this).find('.slick-dots').children('li').eq(i).children('button').css('background', '#DD1F3B')
        }

        for (var i = nextSlide; i < slideCount; i++) {
            $(this).find('.slick-dots').children('li').eq(i).children('button').css('background', '#494d52')
        }

        $(this).find('.progress').stop().animate({
            width: '100%'
        }, config.sliderDelay, 'linear', () => {
            $(this).slick('slickNext')
        })


        $(this).find('.slick-dots').children('li').eq(nextSlide).css('flex-grow', '2')

        setTimeout(() => {
            $(this).find('.progress').css('width', '0')
        }, 150)

        $(this).find('.slide-content').removeClass('light')

        $(`.back-paralax[data-id="${currentSlide}"]`).removeClass('fadeAct')
        $(`.post-info[data-id="${currentSlide}"]`).removeClass('fadeAct')

        $(this).find('#slick-slide0' + currentSlide).find('.slide-content').removeClass('active')

        $(`.back-paralax[data-id="${nextSlide}"]`).addClass('fadeAct')
        $(`.post-info[data-id="${nextSlide}"]`).addClass('fadeAct')

        $(this).find('#slick-slide0' + nextSlide).find('.slide-content').addClass('active')

        if (nextSlide == 0) {
            $(this).find(`[data-slick-index="${slideCount}"]`)
                .find('.slide-content')
                .addClass('active')
        } else {
            $(this).find(`[data-slick-index="${slideCount}"]`)
                .find('.slide-content')
                .removeClass('active')
        }

        if (nextSlide + 1 == slideCount) {
            $(this).find('[data-slick-index="-1"]')
                .find('.slide-content')
                .addClass('active')
        } else {
            $(this).find('[data-slick-index="-1"]')
                .find('.slide-content')
                .removeClass('active')
        }

    })


    $('.slider > .slick-dots').children('li').click(function() {
        for (var i = curSlide; i < slideCount + 1; i++) {
            $('.slick-dots').children('li').eq(i).children('button').css('background', '#494d52')
        }
    })

    // $('.elementor-image-carousel > .slick-dots, .compony-slider-carousel > .slick-dots')
    //     .children('li').eq(0).css('flex-grow', '2')

    $('.elementor-image-carousel > .slick-dots, .compony-slider-carousel > .slick-dots')
        .children('li').children('button').css('background', '#fff')

    $('.elementor-image-carousel').each(function() {
        let root = $(this).parents('.elementor-widget-image-carousel')
        let settings = root.data('settings')

        if (settings.navigation == 'both' || settings.navigation == 'arrows') {
            root.find('.elementor-image-carousel').append(
                `<button class="slick-prev-custom slick-arrow-custom"><span class="btn-prev"></span></button>
                <button class="slick-next-custom slick-arrow-custom"><span class="btn-next"></span></button>`)
        }
    })

    $('.elementor-image-carousel,.compony-slider-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        slideCountElem = slick['slideCount']
        curSlideElem = nextSlide

        $(this).find('.progress').stop().css('width', '0')
        $(this).find('.slick-dots').children('li').css('flex-grow', '1')
        $(this).find('.slick-dots').children('li').eq(currentSlide).find('.bar').removeClass('progress')
        $(this).find('.slick-dots').children('li').eq(nextSlide).find('.bar').addClass('progress')

        for (var i = 0; i < nextSlide; i++) {
            $(this).find('.slick-dots li').eq(i).find('button').css('background', '#DD1F3B')
        }

        for (var i = nextSlide; i < slideCountElem; i++) {
            $(this).find('.slick-dots li').eq(i).find('button').css('background', '#fff')
        }

        $(this).find('.progress').stop().animate({
            width: '100%'
        }, config.sliderDelay, 'linear', () => {
            $(this).slick('slickNext')
        })

        $(this).find('.slick-dots li').eq(nextSlide).css('flex-grow', '2')
    })

    $('.elementor-image-carousel > .slick-dots, .compony-slider-carousel > .slick-dots').children('li').click(function() {
        for (var i = curSlideElem; i < slideCountElem + 1; i++) {
            $('.slick-dots').children('li').eq(i).children('button').css('background', '#fff')
        }
    })

    // After change slick
    $('.slider').on('afterChange', function(event, slick, currentSlide) {
        if ($('.slider .slick-next:hover').length) {
            $('.slider .slick-next').trigger('mouseenter')
        } else if ($('.slider .slick-prev:hover').length) {
            $('.slider .slick-prev').trigger('mouseenter')
        }
        if (currentSlide == 0) {
            $('.slick-dots').children('li').children('button').css('background', '#494d52')
        }
    })

    // Сладер на главной
    $('.slick-next-custom').click(function() {
        $('.slider').slick('slickNext')
    })

    // Сладер на главной
    $('.slick-prev-custom').click(function() {
        $('.slider').slick('slickPrev')
    })

    $('.slick-next-custom').click(function() {
        $(this).parents('.slick-initialized').slick('slickNext')
    })

    // Сладер на главной
    $('.slick-prev-custom').click(function() {
        $(this).parents('.slick-initialized').slick('slickPrev')
    })

    // Hover on next btn: light
    $('.slick-next-custom').hover(function() {
        $('.slider .slick-current').next().find('.slide-content').addClass('light')
    }, function() {
        $('.slider .slick-current').next().find('.slide-content').removeClass('light')
    })
    $('.slick-next-custom').on('click', function() {
        $('.slider .slick-current').next().find('.slide-content').toggleClass('light')
    })

    // Hover on prev btn: light
    $('.slick-prev-custom').hover(function() {
        $('.slider .slick-current').prev().find('.slide-content').addClass('light')
    }, function() {
        $('.slider .slick-current').prev().find('.slide-content').removeClass('light')
    })
    $('.slick-prev-custom').on('click', function() {
        $('.slider .slick-current').prev().find('.slide-content').toggleClass('light')
    })

    //refactor slick buttons
    $('.slide-home').find('.slick-arrow').empty()
    $('.slide-home').find('.slick-next').html('<span class="btn-next"></span>')
    $('.slide-home').find('.slick-prev').html('<span class="btn-prev"></span>')
    $('.feed_slick').find('.slick-arrow').empty()
    $('.feed_slick').find('.slick-next').html('<span class="btn-next"></span>')
    $('.feed_slick').find('.slick-prev').html('<span class="btn-prev"></span>')


    //Init slick on block feedback
    $('#slick_feed').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        infinite: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    variableWidth: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1580,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    draggable: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }).on('breakpoint', function(event, slick, breakpoint) {
        $('.feed_slick').find('.slick-arrow').empty()
        $('.feed_slick').find('.slick-next').html('<span class="btn-next"></span>')
        $('.feed_slick').find('.slick-prev').html('<span class="btn-prev"></span>')
    }).trigger('breakpoint')


    // Запуск салдера при поподпние в экран просмотра
})
