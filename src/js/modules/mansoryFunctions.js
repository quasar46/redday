import config from './config.js'

$(window).resize(function() {
    config.wbbl = $('.gutter-sizer').width()
    $('.item-man').css('margin-bottom', config.wbbl)

    let el = document.querySelector('.feed_detail')
    if ($(window).width() < 560 && el) {
        let w_el = window.getComputedStyle(el)
        $('.btn-mob a').width(parseInt(w_el.width))
    } else {
        $('.btn-mob a').removeAttr('style')
    }

}).trigger('resize')
