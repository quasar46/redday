$(document).ready(function() {

    if ($('.feed_slick').length) {

        let ptb = $('.feed_slick').find('.slick-current').offset().left
        let wb = $('.feed_slick').find('.slick-current').width()
        let listOff = $('.feed_slick').find('.slick-list').offset().left
        let listW = $('.feed_slick').find('.slick-list').width()
        let wt = $('.feed_triangle').width()
        let detailW = $('.feed_detail').width()
        let rast = detailW - listW
        let positionB = ptb + rast - listOff
        $('.feed_triangle').stop().animate({
            left: positionB + (wb / 2)
        }, 300)


        //click on feedback item
        $('.emo_block[data-id="0"]').addClass('aniIn')

        let count_slide = $('.emo_block').length

        let nav_slick_feed_timeout = undefined

        let feed_slick_nav = function() {
            if (nav_slick_feed_timeout) {
                clearTimeout(nav_slick_feed_timeout)
            }

            if ($('.aniIn').length > 1) {
                $('.aniIn').eq(0).css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                }).removeClass('aniIn')
            }


            // $('.aniOut').removeClass('aniOut').css({
            //     'display': 'none',
            //     'position': 'relative',
            //     'padding': '0'
            // })


            let currentS
            let slide = $(this).data('slick-index')

            $('.emo_block').each(function() {
                if ($(this).css('display') != 'none') {
                    currentS = $(this).data('id')
                }
            })

            // console.log(currentS + '  :  ' + slide)

            if (currentS == slide) {
                currentS = slide - 1
            }

            if (slide < 0) {
                slide = count_slide - 1
            }

            if (currentS == undefined) {
                currentS = slide - 1
            }

            if (slide >= count_slide) {
                slide = 0
            }

            // console.log(currentS + '  :  ' + slide)

            $('.emo_block[data-id="' + currentS + '"]').css({
                'position': 'absolute',
                'top': '0',
                'padding': '1.5rem'
            })
            $('.emo_block[data-id="' + slide + '"]').css({
                'position': 'absolute',
                'top': '0',
                'padding': '1.5rem'
            })

            $('.emo_block[data-id="' + slide + '"]').css({
                'position': 'relative',
                'padding': '0'
            })

            $('.emo_block[data-id="' + slide + '"]').show()
            $('.emo_block[data-id="' + slide + '"]').addClass('aniIn')
            $('.emo_block[data-id="' + currentS + '"]').addClass('aniOut')

            setTimeout(function() {
                $('.emo_block[data-id="' + currentS + '"]').css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                })
                $('.emo_block[data-id="' + currentS + '"]').removeClass('aniIn')
                $('.emo_block[data-id="' + currentS + '"]').removeClass('aniOut')
                $('.emo_block[data-id="' + slide + '"]').removeClass('aniOut')
            }, 400)

            ptb = $(this).offset().left
            wb = $(this).width()
            listOff = $('.feed_slick').find('.slick-list').offset().left
            listW = $('.feed_slick').find('.slick-list').width()
            wt = $('.feed_triangle').width()
            detailW = $('.feed_detail').width()
            rast = detailW - listW
            positionB = ptb + rast - listOff
            $('.feed_triangle').stop().animate({
                left: positionB + (wb / 2)
            }, 300)

            if ($(window).width() < 1024) {
                let _slideIndex = $(this).data('slick-index')
                $('.feed_slick').slick('slickGoTo', _slideIndex)
            }
        }

        $('.feed_slick').find('.slick-slide').on('click', feed_slick_nav)

        $('.feed_slick').on('breakpoint', function() {
            $('.feed_slick').find('.slick-slide').on('click', feed_slick_nav)
            $('.feed_slick').find('.slick-current').trigger('click')
        })

        let arrow_slick_feed_timeout = undefined
        let arrow_slick_feed_timeout_inner = undefined 

        //show feedback detail for slider
        $('#slick_feed').on('click', '.slick-arrow', function() {

            if (arrow_slick_feed_timeout) {
                clearTimeout(arrow_slick_feed_timeout)
            }

            if (arrow_slick_feed_timeout_inner) {
                clearTimeout(arrow_slick_feed_timeout_inner)
            }

            let currentS
            $('.emo_block').each(function() {
                if ($(this).css('display') != 'none') {
                    currentS = $(this).data('id')
                }
            })

            arrow_slick_feed_timeout = setTimeout(function() {

                if ($('.aniIn').length > 1) {
                    $('.aniIn').eq(0).css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    }).removeClass('aniIn')
                }


                $('.aniOut').removeClass('aniOut').css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                })

                let thisItem
                let trof = $('.feed_triangle').offset().left

                $('.slick-slide').each(function() {
                    if ((trof >= $(this).offset().left) && (trof <= ($(this).offset().left + ($(this).width())))) {
                        thisItem = $(this).data('slick-index')
                    }
                })

                // if (currentS == thisItem) {
                //     return false
                // }

                $('.emo_block[data-id="' + currentS + '"]').css({
                    'position': 'absolute',
                    'top': '0px',
                    'padding': '1.5rem'
                })

                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'absolute',
                    'top': '0',
                    'padding': '1.5rem'
                })

                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'relative',
                    'padding': '0'
                })

                $('.emo_block[data-id="' + thisItem + '"]').show()
                $('.emo_block[data-id="' + thisItem + '"]').addClass('aniIn')
                $('.emo_block[data-id="' + currentS + '"]').addClass('aniOut')

                arrow_slick_feed_timeout_inner = setTimeout(function() {
                    $('.emo_block[data-id="' + currentS + '"]').css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    })
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniIn')
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniOut')
                    $('.emo_block[data-id="' + thisItem + '"]').removeClass('aniOut')
                }, 400)

            }, 500)
        })


        $('.feed_slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

            let slideCount = slick['slideCount']

            $(this).find(`[data-slick-index="${nextSlide}"]`).addClass('active-feed')
            $(this).find(`[data-slick-index="${currentSlide}"]`).removeClass('active-feed')

            if (nextSlide == 0) {
                $(this).find(`[data-slick-index="${slideCount}"]`).addClass('active-feed')
            } else {
                $(this).find(`[data-slick-index="${slideCount}"]`).removeClass('active-feed')
            }

            if (nextSlide + 1 == slideCount) {
                $(this).find('[data-slick-index="-1"]').addClass('active-feed')
            } else {
                $(this).find('[data-slick-index="-1"]').removeClass('active-feed')
            }


            if ($(window).width() <= 1024) {
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').css({
                    'opacity': 1
                })
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').prev().css({
                    'opacity': 0.5
                })
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').prev().prev().css({
                    'opacity': 0.2
                })
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').prev().prev().prev().css({
                    'opacity': 0.2
                })
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').next().css({
                    'opacity': 0.5
                })
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').next().next().css({
                    'opacity': 0.2
                })
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').next().next().next().css({
                    'opacity': 0.2
                })
            }

        }).find('[data-slick-index="0"]').addClass('active-feed')


        let swipe_slick_feed_timeout = undefined
        let swipe_slick_feed_timeout_inner = undefined


        $('.feed_slick').on('swipe', function(slick, direction) {
            let currentS
            $('.emo_block').each(function() {
                if ($(this).css('display') != 'none') {
                    currentS = $(this).data('id')
                }
            })

            if (swipe_slick_feed_timeout) {
                clearTimeout(swipe_slick_feed_timeout)
            }

            if (swipe_slick_feed_timeout_inner) {
                clearTimeout(swipe_slick_feed_timeout_inner)
            }

            swipe_slick_feed_timeout = setTimeout(function() {

                if ($('.aniIn').length > 1) {
                    $('.aniIn').eq(0).css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    }).removeClass('aniIn')
                }


                $('.aniOut').removeClass('aniOut').css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                })


                let thisItem
                let trof = $('.triangleM').offset().left
                $('.feed_slick').find('.slick-slide').each(function() {
                    if ((trof >= $(this).offset().left) && (trof <= ($(this).offset().left + ($(this).width())))) {
                        thisItem = $(this).data('slick-index')
                    }
                })
                if (currentS == thisItem) {
                    return false
                }

                $('.emo_block[data-id="' + currentS + '"]').css({
                    'position': 'absolute',
                    'top': '0px',
                    'padding': '1.5rem'
                })
                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'absolute',
                    'top': '0',
                    'padding': '1.5rem'
                })

                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'relative',
                    'padding': '0'
                })

                $('.emo_block[data-id="' + thisItem + '"]').show()
                $('.emo_block[data-id="' + thisItem + '"]').addClass('aniIn')
                $('.emo_block[data-id="' + currentS + '"]').addClass('aniOut')

                swipe_slick_feed_timeout_inner = setTimeout(function() {
                    $('.emo_block[data-id="' + currentS + '"]').css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    })
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniIn')
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniOut')
                    $('.emo_block[data-id="' + thisItem + '"]').removeClass('aniOut')
                }, 400)
            }, 500)
        })


        $(window).resize(function() {

            if ($(window).width() <= 1024) {
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').css({
                    'opacity': 1
                })
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').prev().css({
                    'opacity': 0.5
                })
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').prev().prev().css({
                    'opacity': 0.2
                })
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').prev().prev().prev().css({
                    'opacity': 0.2
                })
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').next().css({
                    'opacity': 0.5
                })
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').next().next().css({
                    'opacity': 0.2
                })
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').next().next().next().css({
                    'opacity': 0.2
                })
            } else {
                $('.feed_slick .slick-slide').css({
                    'opacity': 1
                })
            }

        }).trigger('resize')
    }
})
