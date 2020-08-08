function show_modal(video, className = '') {
    let modal = $(`<div class="compony-video-madal-wrap"><div class="compony-video-madal ${className}"><div class="compony-video-madal-inner redday-container"><div class="compony-video-madal-close"><span></span></div><iframe src="${video}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div></div>`)

    $('body').append(modal)

    let close = function() {
        $('.compony-video-madal-wrap').fadeOut(400, function() {
            $('.compony-video-madal-wrap').remove()
        })
    }

    modal.on('click', function() {
        close()
    })

    $('.compony-video-madal-close').on('click', function() {
        close()
    })

    modal.fadeIn(400)
}


$(function() {

    if ($('[data-video-play]').length) {
        $('[data-video-play]').on('click', function() {
            let video = $(this).data('video-play')
            let className = $(this).data('video-play-class')
            show_modal(video, className)
        })
    }

    $('#f-nav-menu-item-537 a').on('click', function() {
        let video = $(this).attr('href')
        show_modal(video, 'compony-video-if')
        return false
    })

    $('.history-slider').each(function() {
        let dots = $(this).find('.slick-dots li')
        $(this).find('.slick-slide:not(.slick-cloned)').each(function() {
            let index = $(this).data('slick-index')
            let title = $(this).find('.compony-slider-carousel-item').data('title')
            dots.eq(index).prepend(`<span class="label">${title}</span>`)
        })
    })

    if ($('.page-id-27').length) {
        $(document).on('scroll', function() {
            let scrollPage = $(document).scrollTop() + window.innerHeight
            let boxHeight = $('.compony-info').height()
            let fiexBox = $('.compony-info').position().top + boxHeight

            if (scrollPage > fiexBox) {
                $('.compony-info-inner').css('min-height', `${boxHeight}px`)
                $('.compony-info').css('min-height', `${boxHeight}px`).addClass('fixed')
            } else if (scrollPage < fiexBox) {
                $('.compony-info').removeAttr('style').removeClass('fixed')
                $('.compony-info-inner').removeAttr('style')
            }

            // let headerLimit = $('.header-limit').height()
            // let opacity = ((headerLimit * 1) / scrollPage) - 1

            // if (opacity > 1) {
            //     opacity = 1
            // } else if (opacity < 0) {
            //     opacity = 0
            // }

            // $('.compony-main_bg').css('opacity', opacity)

        }).trigger('scroll')
    }
})
