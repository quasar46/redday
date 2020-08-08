export function footerAdapt(lastElOffL, lastElOffT, lastElH, getLastID) {

    if ($(window).width() <= 1024) {
        $('.old-site').prependTo($('#f-nav-menu-item-29'))
    } else {
        $('.old-site').appendTo($('.footer-left-block'))
    }

    // if ($(document).width() <= 1024) {
    //     lastElOffL = getLastID.prev().children('a').position().left
    //     lastElOffT = getLastID.prev().children('a').position().top
    //     lastElH = getLastID.prev().children('a').height()

    //     $('.contacts-block').css({
    //         'top': lastElOffT + lastElH + 'px',
    //         'left': lastElOffL + 'px',
    //     })
    // } else {


    $('.contacts-block').css({
        'top': lastElOffT + lastElH + 'px',
        'left': lastElOffL + 'px',
    })

    // }


}
