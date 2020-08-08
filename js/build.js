var build =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./modules/basebeforeall.js */ "./src/js/modules/basebeforeall.js");

__webpack_require__(/*! ./modules/init.js */ "./src/js/modules/init.js");

__webpack_require__(/*! ./modules/base.js */ "./src/js/modules/base.js");

__webpack_require__(/*! ./modules/mansoryFunctions.js */ "./src/js/modules/mansoryFunctions.js");

__webpack_require__(/*! ./modules/feedback.js */ "./src/js/modules/feedback.js");

__webpack_require__(/*! ./modules/content.js */ "./src/js/modules/content.js");

__webpack_require__(/*! ./modules/compony.js */ "./src/js/modules/compony.js");

__webpack_require__(/*! ./modules/contacts */ "./src/js/modules/contacts.js");

/***/ }),

/***/ "./src/js/modules/base.js":
/*!********************************!*\
  !*** ./src/js/modules/base.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(/*! ./config.js */ "./src/js/modules/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {

    $('#navToggle').click(function () {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('open');
        $('body').toggleClass('locked');
    });

    $('.back-paralax').stop().hide();
    $('.back-paralax').eq(0).stop().show();

    //settings for header
    if (!$('.header').hasClass('flag-nhp')) {
        if ($(document).scrollTop() > 450) {
            $('.header').addClass('header-scroll');
        }
        $(document).scroll(function () {
            var sctop = $(document).scrollTop();
            if (sctop > 30) {
                $('.header').addClass(' hide-scroll');
            } else {
                $('.header').removeClass('hide-scroll');
            }
            if (sctop < $('.header-limit').height()) {
                $('.header').removeClass('header-scroll');
            } else {
                $('.header').addClass('header-scroll');
            }
            if (_config2.default.currentOffset > sctop) {
                $('.header').removeClass('hide-scroll');
            }
            if (sctop == 0) {
                $('.header').removeClass('hide-scroll header-scroll');
            }
            _config2.default.currentOffset = sctop;
        });
    } else {
        $('.header').addClass('header-nhp');
        $(document).scroll(function () {
            var sctop = $(document).scrollTop();
            if (sctop > 30) {
                $('.header').addClass(' hide-scroll');
            } else {
                $('.header').removeClass('hide-scroll');
            }
            if (_config2.default.currentOffset > sctop) {
                $('.header').removeClass('hide-scroll');
            }
            if (sctop == 0) {
                $('.header').removeClass('hide-scroll');
            }
            _config2.default.currentOffset = sctop;
        });
    }
});

/***/ }),

/***/ "./src/js/modules/basebeforeall.js":
/*!*****************************************!*\
  !*** ./src/js/modules/basebeforeall.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(/*! ./config.js */ "./src/js/modules/config.js");

var _config2 = _interopRequireDefault(_config);

var _functions = __webpack_require__(/*! ./functions.js */ "./src/js/modules/functions.js");

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mansory settings
var $container = $('#container-man');
$('.item-man').css('margin-bottom', _config2.default.wbbl);

$('.parent div[data-flag-switch="1"]').hide();
$('.parent div[data-flag-switch="0"]').hide();
$('#port').show();

// switcher
var ls;
$('.switcher svg').children('rect').css({
    'fill': '#cccccc'
});

if (localStorage.getItem('flag-switcher') == null) {
    ls = localStorage.setItem('flag-switcher', '0');
    $('.switcher svg[data-flag="0"]').children('rect').css({
        'fill': '#0d1319'
    });
    $('.parent div[data-flag-switch="0"]').fadeIn(200);
} else {
    ls = localStorage.getItem('flag-switcher');
    $('.switcher svg[data-flag="' + ls + '"]').children('rect').css({
        'fill': '#0d1319'
    });
    $('.parent div[data-flag-switch="' + ls + '"]').fadeIn(200);
}

$('.switcher svg').click(function () {
    var df = $(this).data('flag');
    localStorage.setItem('flag-switcher', df);
    ls = localStorage.getItem('flag-switcher');
    if (ls == 0) {

        $('.switcher svg[data-flag="0"]').children('rect').css({
            'fill': '#0d1319'
        });

        $('.parent div[data-flag-switch="1"]').fadeOut(200);
        $('.parent div[data-flag-switch="0"]').fadeIn(200, function () {
            $container.masonry('destroy');
            $container.masonry({
                itemSelector: '.item-man',
                columnWidth: '.item-man',
                gutter: '.gutter-sizer',
                percentPosition: true
            });
        });

        $('.switcher svg[data-flag="1"]').children('rect').css({
            'fill': '#cccccc'
        });
    } else if (ls == 1) {
        $('.switcher svg[data-flag="1"]').children('rect').css({
            'fill': '#0d1319'
        });
        $('.parent div[data-flag-switch="1"]').fadeIn(200);
        $('.parent div[data-flag-switch="0"]').fadeOut(200);
        $('.switcher svg[data-flag="0"]').children('rect').css({
            'fill': '#cccccc'
        });
    }
});

$('.line').animate({
    'width': '100%'
}, 2500);

window.onload = function () {

    $('.loader').css({
        'display': 'none'
    });

    $container.masonry({
        itemSelector: '.item-man',
        columnWidth: '.item-man',
        gutter: '.gutter-sizer',
        percentPosition: true
    });

    $('.parent').animate({
        'opacity': 1
    }, 300);

    $('html').removeClass('lock');

    if ($('svg.smile').length) {
        var svg = Snap('#svg');
        var btn = svg.select('#btn');
        var text = svg.select('#text');
        // var textLink = svg.select('#textLink');

        var menter = function menter() {
            btn.animate({
                d: 'M 108 0 A 153 153 0 0 0 372 0 L 460 50 M 460 50 C 350 220 130 220 20 50 L 108 0'
            }, 100);
            text.animate({
                d: 'M 64 50 Q 220 220 416 50'
            }, 100);
        };

        var mlevel = function mlevel() {
            btn.animate({
                d: 'M 0 50 A 0 0 0 0 0 480 50 L 480 150 M 480 150 C 480 150 0 150 0 150 L 0 50'
            }, 100);
            text.animate({
                d: 'M 40 110 Q 240 110 480 110'
            }, 100);
        };

        $('svg.smile').hover(function () {
            if ($(window).width() > 1024) {
                menter();
            }
        }, function () {
            if ($(window).width() > 1024) {
                mlevel();
            }
        });

        $(window).on('resize', function () {
            if ($(window).width() < 1024) {
                menter();
            } else {
                mlevel();
            }
        }).trigger('resize');
    }

    setTimeout(function () {
        $(document).on('scroll', function () {
            var scrollPage = $(document).scrollTop() + window.innerHeight;
            $('.compony-slider-carousel,.elementor-image-carousel,.slider').each(function () {
                var boxHeight = $(this).offset().top + $(this).height();
                if (scrollPage > boxHeight && !$(this).hasClass('autoplay')) {
                    $(this).slick('slickSetOption', 'autoplay', 1).slick('slickGoTo', 0).addClass('autoplay');
                }
            });
        }).trigger('scroll');
    }, 1000);
};

/***/ }),

/***/ "./src/js/modules/compony.js":
/*!***********************************!*\
  !*** ./src/js/modules/compony.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function show_modal(video) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var modal = $('<div class="compony-video-madal-wrap"><div class="compony-video-madal ' + className + '"><div class="compony-video-madal-inner redday-container"><div class="compony-video-madal-close"><span></span></div><iframe src="' + video + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div></div>');

    $('body').append(modal);

    var close = function close() {
        $('.compony-video-madal-wrap').fadeOut(400, function () {
            $('.compony-video-madal-wrap').remove();
        });
    };

    modal.on('click', function () {
        close();
    });

    $('.compony-video-madal-close').on('click', function () {
        close();
    });

    modal.fadeIn(400);
}

$(function () {

    if ($('[data-video-play]').length) {
        $('[data-video-play]').on('click', function () {
            var video = $(this).data('video-play');
            var className = $(this).data('video-play-class');
            show_modal(video, className);
        });
    }

    $('#f-nav-menu-item-537 a').on('click', function () {
        var video = $(this).attr('href');
        show_modal(video, 'compony-video-if');
        return false;
    });

    $('.history-slider').each(function () {
        var dots = $(this).find('.slick-dots li');
        $(this).find('.slick-slide:not(.slick-cloned)').each(function () {
            var index = $(this).data('slick-index');
            var title = $(this).find('.compony-slider-carousel-item').data('title');
            dots.eq(index).prepend('<span class="label">' + title + '</span>');
        });
    });

    if ($('.page-id-27').length) {
        $(document).on('scroll', function () {
            var scrollPage = $(document).scrollTop() + window.innerHeight;
            var boxHeight = $('.compony-info').height();
            var fiexBox = $('.compony-info').position().top + boxHeight;

            if (scrollPage > fiexBox) {
                $('.compony-info-inner').css('min-height', boxHeight + 'px');
                $('.compony-info').css('min-height', boxHeight + 'px').addClass('fixed');
            } else if (scrollPage < fiexBox) {
                $('.compony-info').removeAttr('style').removeClass('fixed');
                $('.compony-info-inner').removeAttr('style');
            }

            // let headerLimit = $('.header-limit').height()
            // let opacity = ((headerLimit * 1) / scrollPage) - 1

            // if (opacity > 1) {
            //     opacity = 1
            // } else if (opacity < 0) {
            //     opacity = 0
            // }

            // $('.compony-main_bg').css('opacity', opacity)
        }).trigger('scroll');
    }
});

/***/ }),

/***/ "./src/js/modules/config.js":
/*!**********************************!*\
  !*** ./src/js/modules/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var sliderDelay = 10000;
var currentOffset = 0;
var wbbl = $('.gutter-sizer').css('width');

exports.default = {
    sliderDelay: sliderDelay,
    currentOffset: currentOffset,
    wbbl: wbbl
};

/***/ }),

/***/ "./src/js/modules/contacts.js":
/*!************************************!*\
  !*** ./src/js/modules/contacts.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

    /**
     * initMap
     *
     * Renders a Google Map onto the selected jQuery element
     *
     * @date    22/10/19
     * @since   5.8.6
     *
     * @param   jQuery $el The jQuery element.
     * @return  object The map instance.
     */
    function initMap($el) {

        // Find marker elements within map.
        var $markers = $el.find('.marker');

        // Create gerenic map.
        var mapArgs = {
            zoom: $el.data('zoom') || 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: true,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable: true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: true
            },
            styles: [{
                'stylers': [{
                    'color': '#0d1319'
                }]
            }, {
                'elementType': 'geometry.stroke',
                'stylers': [{
                    'visibility': 'off'
                }]
            }, {
                'elementType': 'labels.icon',
                'stylers': [{
                    'color': '#ff042f'
                }, {
                    'visibility': 'off'
                }]
            }, {
                'elementType': 'labels.text',
                'stylers': [{
                    'color': '#b71836'
                }]
            }, {
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#b71836'
                }]
            }, {
                'elementType': 'labels.text.stroke',
                'stylers': [{
                    'color': '#000000'
                }]
            }, {
                'featureType': 'administrative',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#757575'
                }]
            }, {
                'featureType': 'administrative',
                'elementType': 'labels.icon',
                'stylers': [{
                    'visibility': 'off'
                }]
            }, {
                'featureType': 'administrative.country',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#9e9e9e'
                }]
            }, {
                'featureType': 'administrative.locality',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#bdbdbd'
                }]
            }, {
                'featureType': 'landscape',
                'stylers': [{
                    'visibility': 'simplified'
                }]
            }, {
                'featureType': 'landscape',
                'elementType': 'geometry.fill',
                'stylers': [{
                    'visibility': 'on'
                }]
            }, {
                'featureType': 'landscape',
                'elementType': 'geometry.stroke',
                'stylers': [{
                    'color': '#2a3742'
                }, {
                    'visibility': 'on'
                }]
            }, {
                'featureType': 'poi',
                'stylers': [{
                    'color': '#0d1319'
                }]
            }, {
                'featureType': 'poi',
                'elementType': 'labels.icon',
                'stylers': [{
                    'color': '#f98844'
                }]
            }, {
                'featureType': 'poi',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#757575'
                }]
            }, {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#2a3742'
                }]
            }, {
                'featureType': 'poi.park',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#2a3742'
                }]
            }, {
                'featureType': 'poi.park',
                'elementType': 'labels.text.stroke',
                'stylers': [{
                    'color': '#2a3742'
                }]
            }, {
                'featureType': 'road',
                'elementType': 'geometry.fill',
                'stylers': [{
                    'color': '#010302'
                }]
            }, {
                'featureType': 'road',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#8a8a8a'
                }]
            }, {
                'featureType': 'road.arterial',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#010302'
                }]
            }, {
                'featureType': 'road.highway',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#3c3c3c'
                }]
            }, {
                'featureType': 'road.highway',
                'elementType': 'geometry.fill',
                'stylers': [{
                    'color': '#010302'
                }, {
                    'saturation': -100
                }]
            }, {
                'featureType': 'road.highway',
                'elementType': 'geometry.stroke',
                'stylers': [{
                    'visibility': 'off'
                }]
            }, {
                'featureType': 'road.highway.controlled_access',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#4e4e4e'
                }]
            }, {
                'featureType': 'road.local',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#616161'
                }]
            }, {
                'featureType': 'road.local.labels',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#b71836'
                }]
            }, {
                'featureType': 'transit',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#757575'
                }]
            }, {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#360c17'
                }]
            }, {
                'featureType': 'water',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#360c17'
                }]
            }]
        };
        var map = new google.maps.Map($el[0], mapArgs);

        // Add markers.
        map.markers = [];
        $markers.each(function () {
            initMarker($(this), map);
        });

        // Center map based on markers.
        centerMap(map);

        // Return map instance.
        return map;
    }

    /**
     * initMarker
     *
     * Creates a marker for the given jQuery element and map.
     *
     * @date    22/10/19
     * @since   5.8.6
     *
     * @param   jQuery $el The jQuery element.
     * @param   object The map instance.
     * @return  object The marker instance.
     */
    function initMarker($marker, map) {

        // Get position from marker.
        var lat = $marker.data('lat');
        var lng = $marker.data('lng');
        var latLng = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)

            // Image
        };var image = {
            url: '/wp-content/uploads/2019/12/5-1.svg',
            size: new google.maps.Size(150, 55),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 50)

            // Create marker instance.
        };var marker = new google.maps.Marker({
            position: latLng,
            icon: image,
            map: map
        });

        // Append to reference for later use.
        map.markers.push(marker);

        // If marker contains HTML, add it to an infoWindow.
        if ($marker.html()) {

            // Create info window.
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            });

            // Show info window when marker is clicked.
            // google.maps.event.addListener(marker, "click", function() {
            //     infowindow.open(map, marker)
            // })
        }
    }

    /**
     * centerMap
     *
     * Centers the map showing all markers in view.
     *
     * @date    22/10/19
     * @since   5.8.6
     *
     * @param   object The map instance.
     * @return  void
     */
    function centerMap(map) {

        // Create map boundaries from all map markers.
        var bounds = new google.maps.LatLngBounds();
        map.markers.forEach(function (marker) {
            bounds.extend({
                lat: marker.position.lat(),
                lng: marker.position.lng()
            });
        });

        // Case: Single marker.
        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter());

            // Case: Multiple markers.
        } else {
            map.fitBounds(bounds);
        }
    }

    // Render maps on page load.
    $(document).ready(function () {
        $('.acf-map').each(function () {
            var map = initMap($(this));
        });
    });
})(jQuery);

/***/ }),

/***/ "./src/js/modules/content.js":
/*!***********************************!*\
  !*** ./src/js/modules/content.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _functions = __webpack_require__(/*! ./functions.js */ "./src/js/modules/functions.js");

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function () {

    //adaptive block about company
    var windowW = $(window).width();
    var ratio = 1800 / 1903;
    var mobR = 1800 / 700;
    if (windowW < 1920) {
        $('.container-about').css({
            'height': windowW * ratio
        });
    }
    if (windowW < 1025) {
        $('.container-about-mobile').css({
            'height': windowW * mobR
        });
    }
    $(window).resize(function () {
        windowW = $(window).width();
        if (windowW < 1920) {
            $('.container-about').css({
                'height': windowW * ratio
            });
        }
        if (windowW < 1025) {
            $('.container-about-mobile').css({
                'height': windowW * mobR
            });
        }
    });

    //footer contacts position
    var getLastID = $('.footer__nav-list').children('li:last-child');

    $(window).resize(function () {
        var lastElOffL = getLastID.children('a').position().left;
        var lastElOffT = getLastID.children('a').position().top;
        var lastElH = getLastID.children('a').height();
        func.footerAdapt(lastElOffL, lastElOffT, lastElH, getLastID);
    }).trigger('resize');

    var headerH = $('header').height();

    $('.elementor').css({
        'padding-top': headerH
    });

    $(window).resize(function () {
        headerH = $('header').height();
        $('.elementor').css({
            'padding-top': headerH
        });
    });
}); // import config from './config.js'

/***/ }),

/***/ "./src/js/modules/feedback.js":
/*!************************************!*\
  !*** ./src/js/modules/feedback.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

    if ($('.feed_slick').length) {

        var ptb = $('.feed_slick').find('.slick-current').offset().left;
        var wb = $('.feed_slick').find('.slick-current').width();
        var listOff = $('.feed_slick').find('.slick-list').offset().left;
        var listW = $('.feed_slick').find('.slick-list').width();
        var wt = $('.feed_triangle').width();
        var detailW = $('.feed_detail').width();
        var rast = detailW - listW;
        var positionB = ptb + rast - listOff;
        $('.feed_triangle').stop().animate({
            left: positionB + wb / 2
        }, 300);

        //click on feedback item
        $('.emo_block[data-id="0"]').addClass('aniIn');

        var count_slide = $('.emo_block').length;

        var nav_slick_feed_timeout = undefined;

        var feed_slick_nav = function feed_slick_nav() {
            if (nav_slick_feed_timeout) {
                clearTimeout(nav_slick_feed_timeout);
            }

            if ($('.aniIn').length > 1) {
                $('.aniIn').eq(0).css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                }).removeClass('aniIn');
            }

            // $('.aniOut').removeClass('aniOut').css({
            //     'display': 'none',
            //     'position': 'relative',
            //     'padding': '0'
            // })


            var currentS = void 0;
            var slide = $(this).data('slick-index');

            $('.emo_block').each(function () {
                if ($(this).css('display') != 'none') {
                    currentS = $(this).data('id');
                }
            });

            // console.log(currentS + '  :  ' + slide)

            if (currentS == slide) {
                currentS = slide - 1;
            }

            if (slide < 0) {
                slide = count_slide - 1;
            }

            if (currentS == undefined) {
                currentS = slide - 1;
            }

            if (slide >= count_slide) {
                slide = 0;
            }

            // console.log(currentS + '  :  ' + slide)

            $('.emo_block[data-id="' + currentS + '"]').css({
                'position': 'absolute',
                'top': '0',
                'padding': '1.5rem'
            });
            $('.emo_block[data-id="' + slide + '"]').css({
                'position': 'absolute',
                'top': '0',
                'padding': '1.5rem'
            });

            $('.emo_block[data-id="' + slide + '"]').css({
                'position': 'relative',
                'padding': '0'
            });

            $('.emo_block[data-id="' + slide + '"]').show();
            $('.emo_block[data-id="' + slide + '"]').addClass('aniIn');
            $('.emo_block[data-id="' + currentS + '"]').addClass('aniOut');

            setTimeout(function () {
                $('.emo_block[data-id="' + currentS + '"]').css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                });
                $('.emo_block[data-id="' + currentS + '"]').removeClass('aniIn');
                $('.emo_block[data-id="' + currentS + '"]').removeClass('aniOut');
                $('.emo_block[data-id="' + slide + '"]').removeClass('aniOut');
            }, 400);

            ptb = $(this).offset().left;
            wb = $(this).width();
            listOff = $('.feed_slick').find('.slick-list').offset().left;
            listW = $('.feed_slick').find('.slick-list').width();
            wt = $('.feed_triangle').width();
            detailW = $('.feed_detail').width();
            rast = detailW - listW;
            positionB = ptb + rast - listOff;
            $('.feed_triangle').stop().animate({
                left: positionB + wb / 2
            }, 300);

            if ($(window).width() < 1024) {
                var _slideIndex = $(this).data('slick-index');
                $('.feed_slick').slick('slickGoTo', _slideIndex);
            }
        };

        $('.feed_slick').find('.slick-slide').on('click', feed_slick_nav);

        $('.feed_slick').on('breakpoint', function () {
            $('.feed_slick').find('.slick-slide').on('click', feed_slick_nav);
            $('.feed_slick').find('.slick-current').trigger('click');
        });

        var arrow_slick_feed_timeout = undefined;
        var arrow_slick_feed_timeout_inner = undefined;

        //show feedback detail for slider
        $('#slick_feed').on('click', '.slick-arrow', function () {

            if (arrow_slick_feed_timeout) {
                clearTimeout(arrow_slick_feed_timeout);
            }

            if (arrow_slick_feed_timeout_inner) {
                clearTimeout(arrow_slick_feed_timeout_inner);
            }

            var currentS = void 0;
            $('.emo_block').each(function () {
                if ($(this).css('display') != 'none') {
                    currentS = $(this).data('id');
                }
            });

            arrow_slick_feed_timeout = setTimeout(function () {

                if ($('.aniIn').length > 1) {
                    $('.aniIn').eq(0).css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    }).removeClass('aniIn');
                }

                $('.aniOut').removeClass('aniOut').css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                });

                var thisItem = void 0;
                var trof = $('.feed_triangle').offset().left;

                $('.slick-slide').each(function () {
                    if (trof >= $(this).offset().left && trof <= $(this).offset().left + $(this).width()) {
                        thisItem = $(this).data('slick-index');
                    }
                });

                // if (currentS == thisItem) {
                //     return false
                // }

                $('.emo_block[data-id="' + currentS + '"]').css({
                    'position': 'absolute',
                    'top': '0px',
                    'padding': '1.5rem'
                });

                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'absolute',
                    'top': '0',
                    'padding': '1.5rem'
                });

                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'relative',
                    'padding': '0'
                });

                $('.emo_block[data-id="' + thisItem + '"]').show();
                $('.emo_block[data-id="' + thisItem + '"]').addClass('aniIn');
                $('.emo_block[data-id="' + currentS + '"]').addClass('aniOut');

                arrow_slick_feed_timeout_inner = setTimeout(function () {
                    $('.emo_block[data-id="' + currentS + '"]').css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    });
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniIn');
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniOut');
                    $('.emo_block[data-id="' + thisItem + '"]').removeClass('aniOut');
                }, 400);
            }, 500);
        });

        $('.feed_slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            var slideCount = slick['slideCount'];

            $(this).find('[data-slick-index="' + nextSlide + '"]').addClass('active-feed');
            $(this).find('[data-slick-index="' + currentSlide + '"]').removeClass('active-feed');

            if (nextSlide == 0) {
                $(this).find('[data-slick-index="' + slideCount + '"]').addClass('active-feed');
            } else {
                $(this).find('[data-slick-index="' + slideCount + '"]').removeClass('active-feed');
            }

            if (nextSlide + 1 == slideCount) {
                $(this).find('[data-slick-index="-1"]').addClass('active-feed');
            } else {
                $(this).find('[data-slick-index="-1"]').removeClass('active-feed');
            }

            if ($(window).width() <= 1024) {
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').css({
                    'opacity': 1
                });
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').prev().css({
                    'opacity': 0.5
                });
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').prev().prev().css({
                    'opacity': 0.2
                });
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').prev().prev().prev().css({
                    'opacity': 0.2
                });
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').next().css({
                    'opacity': 0.5
                });
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').next().next().css({
                    'opacity': 0.2
                });
                $('.feed_slick').find('[data-slick-index=' + nextSlide + ']').next().next().next().css({
                    'opacity': 0.2
                });
            }
        }).find('[data-slick-index="0"]').addClass('active-feed');

        var swipe_slick_feed_timeout = undefined;
        var swipe_slick_feed_timeout_inner = undefined;

        $('.feed_slick').on('swipe', function (slick, direction) {
            var currentS = void 0;
            $('.emo_block').each(function () {
                if ($(this).css('display') != 'none') {
                    currentS = $(this).data('id');
                }
            });

            if (swipe_slick_feed_timeout) {
                clearTimeout(swipe_slick_feed_timeout);
            }

            if (swipe_slick_feed_timeout_inner) {
                clearTimeout(swipe_slick_feed_timeout_inner);
            }

            swipe_slick_feed_timeout = setTimeout(function () {

                if ($('.aniIn').length > 1) {
                    $('.aniIn').eq(0).css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    }).removeClass('aniIn');
                }

                $('.aniOut').removeClass('aniOut').css({
                    'display': 'none',
                    'position': 'relative',
                    'padding': '0'
                });

                var thisItem = void 0;
                var trof = $('.triangleM').offset().left;
                $('.feed_slick').find('.slick-slide').each(function () {
                    if (trof >= $(this).offset().left && trof <= $(this).offset().left + $(this).width()) {
                        thisItem = $(this).data('slick-index');
                    }
                });
                if (currentS == thisItem) {
                    return false;
                }

                $('.emo_block[data-id="' + currentS + '"]').css({
                    'position': 'absolute',
                    'top': '0px',
                    'padding': '1.5rem'
                });
                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'absolute',
                    'top': '0',
                    'padding': '1.5rem'
                });

                $('.emo_block[data-id="' + thisItem + '"]').css({
                    'position': 'relative',
                    'padding': '0'
                });

                $('.emo_block[data-id="' + thisItem + '"]').show();
                $('.emo_block[data-id="' + thisItem + '"]').addClass('aniIn');
                $('.emo_block[data-id="' + currentS + '"]').addClass('aniOut');

                swipe_slick_feed_timeout_inner = setTimeout(function () {
                    $('.emo_block[data-id="' + currentS + '"]').css({
                        'display': 'none',
                        'position': 'relative',
                        'padding': '0'
                    });
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniIn');
                    $('.emo_block[data-id="' + currentS + '"]').removeClass('aniOut');
                    $('.emo_block[data-id="' + thisItem + '"]').removeClass('aniOut');
                }, 400);
            }, 500);
        });

        $(window).resize(function () {

            if ($(window).width() <= 1024) {
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').css({
                    'opacity': 1
                });
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').prev().css({
                    'opacity': 0.5
                });
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').prev().prev().css({
                    'opacity': 0.2
                });
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').prev().prev().prev().css({
                    'opacity': 0.2
                });
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').next().css({
                    'opacity': 0.5
                });
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').next().next().css({
                    'opacity': 0.2
                });
                $('.feed_slick').find('[data-slick-index=' + 0 + ']').next().next().next().css({
                    'opacity': 0.2
                });
            } else {
                $('.feed_slick .slick-slide').css({
                    'opacity': 1
                });
            }
        }).trigger('resize');
    }
});

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.footerAdapt = footerAdapt;
function footerAdapt(lastElOffL, lastElOffT, lastElH, getLastID) {

    if ($(window).width() <= 1024) {
        $('.old-site').prependTo($('#f-nav-menu-item-29'));
    } else {
        $('.old-site').appendTo($('.footer-left-block'));
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
        'left': lastElOffL + 'px'
    });

    // }

}

/***/ }),

/***/ "./src/js/modules/init.js":
/*!********************************!*\
  !*** ./src/js/modules/init.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(/*! ./config.js */ "./src/js/modules/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {

    $('.smile').on('click', function () {
        window.location = $(this).data('href');
    });

    $('#header .menu-item a').on('click', function (event) {
        event.stopPropagation();
    });

    $('#header .menu-item').on('click', function () {
        location.href = $(this).find('a').attr('href');
    });

    //init stickybits
    stickybits('.child');

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
        autoplaySpeed: _config2.default.sliderDelay,
        mobileFirst: true
    });
    // Init slick on block slider <<<

    try {

        $('.container-about .par-block').each(function (index, el) {
            new Parallax(el);
        });

        //init parallax on background title
        $('.back-paralax').each(function (index, el) {
            new Parallax(el);
        });

        //Init parallax on slider
        var parallaxInstance;
        $('.img-container').each(function (index, el) {
            parallaxInstance = new Parallax(el);
            parallaxInstance.destroy();
        });
        var scene = $('.slider').find('#slick-slide00').find('.img-container').get(0);
        parallaxInstance = new Parallax(scene);
        $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            parallaxInstance.destroy();
            var sceneNext = $('.slider').find('#slick-slide0' + nextSlide).find('.img-container').get(0);
            parallaxInstance = new Parallax(sceneNext);
        });
    } catch (err) {}
    // console.log('Not home page: ' + err)


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
        autoplaySpeed: _config2.default.sliderDelay,
        mobileFirst: true
    });

    $('.compony-slider-carousel').each(function () {
        var item = $(this).find('.compony-slider-carousel-item');
        if (item.length > 1) {
            $(this).append('<button class="slick-prev-custom slick-arrow-custom"><span class="btn-prev"></span></button>\n                <button class="slick-next-custom slick-arrow-custom"><span class="btn-next"></span></button>');
        }
    });

    $('.compony-slider-carousel').find('.slick-dots').addClass('redday-container');

    $('.compony-slider-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parent().find('.gallary-slider-item__desc').eq(currentSlide).stop().fadeOut(600);
    });

    $('.compony-slider-carousel').on('afterChange', function (event, slick, currentSlide) {
        $(this).parent().find('.gallary-slider-item__desc').eq(currentSlide).stop().fadeIn(600);
    });

    $('.compony-slider-carousel').slick('slickGoTo', 0);

    // Compony Slider <<<


    //Init slick on block slider
    var swipers = document.querySelectorAll('.swiper-container');
    if (swipers) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = swipers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var swiper = _step.value;

                swiper.swiper.destroy();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    $('.elementor-image-carousel').each(function () {
        var root = $(this).parents('.elementor-widget-image-carousel');
        var settings = root.data('settings');

        root.find('.swiper-pagination').remove();
        root.find('.elementor-swiper-button').remove();

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
            autoplaySpeed: _config2.default.sliderDelay,
            mobileFirst: true
        });
    });

    // Навигаци по салдам
    var slideCount = 0;
    var curSlide = 0;
    var slideCountElem = 0;
    var curSlideElem = 0;

    // set parameters on blocks
    $('.slick-dots').each(function (index, el) {
        $(el).find('button').html('<div class="cliiik" style="display: none;"></div><div class="bar"></div>');
        // $(el).children('li').eq(0).css('flex-grow', '2')
        $(el).find('.bar').eq(0).addClass('progress');
    });

    // setTimeout(function() {
    //     $('.progress').css('width', '0')
    //     $('.progress').stop().animate({
    //         width: '100%'
    //     }, config.sliderDelay - 100)

    // }, 100)


    // On before slide change
    $('.slider').find('#slick-slide00').find('.slide-content').addClass('active');

    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var _this = this;

        slideCount = slick['slideCount'];
        curSlide = nextSlide;

        $(this).find('.progress').stop().css('width', '0');
        $(this).find('.slick-dots').children('li').css('flex-grow', '1');
        $(this).find('.slick-dots').children('li').eq(currentSlide).find('.bar').removeClass('progress');
        $(this).find('.slick-dots').children('li').eq(nextSlide).find('.bar').addClass('progress');
        // $(this).find('.slick-dots').children('li').eq(currentSlide).children('button').css('background', '#494d52')

        for (var i = 0; i < nextSlide; i++) {
            $(this).find('.slick-dots').children('li').eq(i).children('button').css('background', '#DD1F3B');
        }

        for (var i = nextSlide; i < slideCount; i++) {
            $(this).find('.slick-dots').children('li').eq(i).children('button').css('background', '#494d52');
        }

        $(this).find('.progress').stop().animate({
            width: '100%'
        }, _config2.default.sliderDelay, 'linear', function () {
            $(_this).slick('slickNext');
        });

        $(this).find('.slick-dots').children('li').eq(nextSlide).css('flex-grow', '2');

        setTimeout(function () {
            $(_this).find('.progress').css('width', '0');
        }, 150);

        $(this).find('.slide-content').removeClass('light');

        $('.back-paralax[data-id="' + currentSlide + '"]').removeClass('fadeAct');
        $('.post-info[data-id="' + currentSlide + '"]').removeClass('fadeAct');

        $(this).find('#slick-slide0' + currentSlide).find('.slide-content').removeClass('active');

        $('.back-paralax[data-id="' + nextSlide + '"]').addClass('fadeAct');
        $('.post-info[data-id="' + nextSlide + '"]').addClass('fadeAct');

        $(this).find('#slick-slide0' + nextSlide).find('.slide-content').addClass('active');

        if (nextSlide == 0) {
            $(this).find('[data-slick-index="' + slideCount + '"]').find('.slide-content').addClass('active');
        } else {
            $(this).find('[data-slick-index="' + slideCount + '"]').find('.slide-content').removeClass('active');
        }

        if (nextSlide + 1 == slideCount) {
            $(this).find('[data-slick-index="-1"]').find('.slide-content').addClass('active');
        } else {
            $(this).find('[data-slick-index="-1"]').find('.slide-content').removeClass('active');
        }
    });

    $('.slider > .slick-dots').children('li').click(function () {
        for (var i = curSlide; i < slideCount + 1; i++) {
            $('.slick-dots').children('li').eq(i).children('button').css('background', '#494d52');
        }
    });

    // $('.elementor-image-carousel > .slick-dots, .compony-slider-carousel > .slick-dots')
    //     .children('li').eq(0).css('flex-grow', '2')

    $('.elementor-image-carousel > .slick-dots, .compony-slider-carousel > .slick-dots').children('li').children('button').css('background', '#fff');

    $('.elementor-image-carousel').each(function () {
        var root = $(this).parents('.elementor-widget-image-carousel');
        var settings = root.data('settings');

        if (settings.navigation == 'both' || settings.navigation == 'arrows') {
            root.find('.elementor-image-carousel').append('<button class="slick-prev-custom slick-arrow-custom"><span class="btn-prev"></span></button>\n                <button class="slick-next-custom slick-arrow-custom"><span class="btn-next"></span></button>');
        }
    });

    $('.elementor-image-carousel,.compony-slider-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var _this2 = this;

        slideCountElem = slick['slideCount'];
        curSlideElem = nextSlide;

        $(this).find('.progress').stop().css('width', '0');
        $(this).find('.slick-dots').children('li').css('flex-grow', '1');
        $(this).find('.slick-dots').children('li').eq(currentSlide).find('.bar').removeClass('progress');
        $(this).find('.slick-dots').children('li').eq(nextSlide).find('.bar').addClass('progress');

        for (var i = 0; i < nextSlide; i++) {
            $(this).find('.slick-dots li').eq(i).find('button').css('background', '#DD1F3B');
        }

        for (var i = nextSlide; i < slideCountElem; i++) {
            $(this).find('.slick-dots li').eq(i).find('button').css('background', '#fff');
        }

        $(this).find('.progress').stop().animate({
            width: '100%'
        }, _config2.default.sliderDelay, 'linear', function () {
            $(_this2).slick('slickNext');
        });

        $(this).find('.slick-dots li').eq(nextSlide).css('flex-grow', '2');
    });

    $('.elementor-image-carousel > .slick-dots, .compony-slider-carousel > .slick-dots').children('li').click(function () {
        for (var i = curSlideElem; i < slideCountElem + 1; i++) {
            $('.slick-dots').children('li').eq(i).children('button').css('background', '#fff');
        }
    });

    // After change slick
    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        if ($('.slider .slick-next:hover').length) {
            $('.slider .slick-next').trigger('mouseenter');
        } else if ($('.slider .slick-prev:hover').length) {
            $('.slider .slick-prev').trigger('mouseenter');
        }
        if (currentSlide == 0) {
            $('.slick-dots').children('li').children('button').css('background', '#494d52');
        }
    });

    // Сладер на главной
    $('.slick-next-custom').click(function () {
        $('.slider').slick('slickNext');
    });

    // Сладер на главной
    $('.slick-prev-custom').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.slick-next-custom').click(function () {
        $(this).parents('.slick-initialized').slick('slickNext');
    });

    // Сладер на главной
    $('.slick-prev-custom').click(function () {
        $(this).parents('.slick-initialized').slick('slickPrev');
    });

    // Hover on next btn: light
    $('.slick-next-custom').hover(function () {
        $('.slider .slick-current').next().find('.slide-content').addClass('light');
    }, function () {
        $('.slider .slick-current').next().find('.slide-content').removeClass('light');
    });
    $('.slick-next-custom').on('click', function () {
        $('.slider .slick-current').next().find('.slide-content').toggleClass('light');
    });

    // Hover on prev btn: light
    $('.slick-prev-custom').hover(function () {
        $('.slider .slick-current').prev().find('.slide-content').addClass('light');
    }, function () {
        $('.slider .slick-current').prev().find('.slide-content').removeClass('light');
    });
    $('.slick-prev-custom').on('click', function () {
        $('.slider .slick-current').prev().find('.slide-content').toggleClass('light');
    });

    //refactor slick buttons
    $('.slide-home').find('.slick-arrow').empty();
    $('.slide-home').find('.slick-next').html('<span class="btn-next"></span>');
    $('.slide-home').find('.slick-prev').html('<span class="btn-prev"></span>');
    $('.feed_slick').find('.slick-arrow').empty();
    $('.feed_slick').find('.slick-next').html('<span class="btn-next"></span>');
    $('.feed_slick').find('.slick-prev').html('<span class="btn-prev"></span>');

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
                slidesToScroll: 7
            }
        }, {
            breakpoint: 1700,
            settings: {
                variableWidth: false,
                slidesToShow: 6,
                slidesToScroll: 6
            }
        }, {
            breakpoint: 1580,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }, {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }, {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 1140,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 1025,
            settings: {
                draggable: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }).on('breakpoint', function (event, slick, breakpoint) {
        $('.feed_slick').find('.slick-arrow').empty();
        $('.feed_slick').find('.slick-next').html('<span class="btn-next"></span>');
        $('.feed_slick').find('.slick-prev').html('<span class="btn-prev"></span>');
    }).trigger('breakpoint');

    // Запуск салдера при поподпние в экран просмотра
});

/***/ }),

/***/ "./src/js/modules/mansoryFunctions.js":
/*!********************************************!*\
  !*** ./src/js/modules/mansoryFunctions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(/*! ./config.js */ "./src/js/modules/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(window).resize(function () {
    _config2.default.wbbl = $('.gutter-sizer').width();
    $('.item-man').css('margin-bottom', _config2.default.wbbl);

    var el = document.querySelector('.feed_detail');
    if ($(window).width() < 560 && el) {
        var w_el = window.getComputedStyle(el);
        $('.btn-mob a').width(parseInt(w_el.width));
    } else {
        $('.btn-mob a').removeAttr('style');
    }
}).trigger('resize');

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @/js/index.js */ "./src/js/index.js");

__webpack_require__(/*! @/style/index.scss */ "./src/style/index.scss");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvYmFzZWJlZm9yZWFsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvY29tcG9ueS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvY29uZmlnLmpzIiwid2VicGFjazovL1tuYW1lXS9zcmMvanMvbW9kdWxlcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvZmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdL3NyYy9qcy9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvaW5pdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2pzL21vZHVsZXMvbWFuc29yeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0eWxlL2luZGV4LnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgJy4vbW9kdWxlcy9iYXNlYmVmb3JlYWxsLmpzJ1xuXG5pbXBvcnQgJy4vbW9kdWxlcy9pbml0LmpzJ1xuaW1wb3J0ICcuL21vZHVsZXMvYmFzZS5qcydcbmltcG9ydCAnLi9tb2R1bGVzL21hbnNvcnlGdW5jdGlvbnMuanMnXG5pbXBvcnQgJy4vbW9kdWxlcy9mZWVkYmFjay5qcydcbmltcG9ydCAnLi9tb2R1bGVzL2NvbnRlbnQuanMnXG5pbXBvcnQgJy4vbW9kdWxlcy9jb21wb255LmpzJ1xuaW1wb3J0ICcuL21vZHVsZXMvY29udGFjdHMnXG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICQoJyNuYXZUb2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJCgnLm92ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpXG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbG9ja2VkJylcbiAgICB9KVxuXG5cblxuICAgICQoJy5iYWNrLXBhcmFsYXgnKS5zdG9wKCkuaGlkZSgpXG4gICAgJCgnLmJhY2stcGFyYWxheCcpLmVxKDApLnN0b3AoKS5zaG93KClcblxuICAgIC8vc2V0dGluZ3MgZm9yIGhlYWRlclxuICAgIGlmICghJCgnLmhlYWRlcicpLmhhc0NsYXNzKCdmbGFnLW5ocCcpKSB7XG4gICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDQ1MCkge1xuICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsJylcbiAgICAgICAgfVxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2N0b3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxuICAgICAgICAgICAgaWYgKHNjdG9wID4gMzApIHtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJyBoaWRlLXNjcm9sbCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlkZS1zY3JvbGwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjdG9wIDwgJCgnLmhlYWRlci1saW1pdCcpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItc2Nyb2xsJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoY29uZmlnLmN1cnJlbnRPZmZzZXQgPiBzY3RvcCkpIHtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUtc2Nyb2xsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY3RvcCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoaWRlLXNjcm9sbCBoZWFkZXItc2Nyb2xsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50T2Zmc2V0ID0gc2N0b3BcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1uaHAnKVxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2N0b3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxuICAgICAgICAgICAgaWYgKHNjdG9wID4gMzApIHtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJyBoaWRlLXNjcm9sbCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlkZS1zY3JvbGwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChjb25maWcuY3VycmVudE9mZnNldCA+IHNjdG9wKSkge1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlkZS1zY3JvbGwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjdG9wID09IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUtc2Nyb2xsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50T2Zmc2V0ID0gc2N0b3BcbiAgICAgICAgfSlcbiAgICB9XG5cbn0pXG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0ICogYXMgZnVuYyBmcm9tICcuL2Z1bmN0aW9ucy5qcydcblxuXG4vLyBNYW5zb3J5IHNldHRpbmdzXG52YXIgJGNvbnRhaW5lciA9ICQoJyNjb250YWluZXItbWFuJylcbiQoJy5pdGVtLW1hbicpLmNzcygnbWFyZ2luLWJvdHRvbScsIGNvbmZpZy53YmJsKVxuXG4kKCcucGFyZW50IGRpdltkYXRhLWZsYWctc3dpdGNoPVwiMVwiXScpLmhpZGUoKVxuJCgnLnBhcmVudCBkaXZbZGF0YS1mbGFnLXN3aXRjaD1cIjBcIl0nKS5oaWRlKClcbiQoJyNwb3J0Jykuc2hvdygpXG5cbi8vIHN3aXRjaGVyXG52YXIgbHNcbiQoJy5zd2l0Y2hlciBzdmcnKS5jaGlsZHJlbigncmVjdCcpLmNzcyh7XG4gICAgJ2ZpbGwnOiAnI2NjY2NjYydcbn0pXG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZy1zd2l0Y2hlcicpID09IG51bGwpIHtcbiAgICBscyA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbGFnLXN3aXRjaGVyJywgJzAnKVxuICAgICQoJy5zd2l0Y2hlciBzdmdbZGF0YS1mbGFnPVwiMFwiXScpLmNoaWxkcmVuKCdyZWN0JykuY3NzKHtcbiAgICAgICAgJ2ZpbGwnOiAnIzBkMTMxOSdcbiAgICB9KVxuICAgICQoJy5wYXJlbnQgZGl2W2RhdGEtZmxhZy1zd2l0Y2g9XCIwXCJdJykuZmFkZUluKDIwMClcbn0gZWxzZSB7XG4gICAgbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZy1zd2l0Y2hlcicpXG4gICAgJCgnLnN3aXRjaGVyIHN2Z1tkYXRhLWZsYWc9XCInICsgbHMgKyAnXCJdJykuY2hpbGRyZW4oJ3JlY3QnKS5jc3Moe1xuICAgICAgICAnZmlsbCc6ICcjMGQxMzE5J1xuICAgIH0pXG4gICAgJCgnLnBhcmVudCBkaXZbZGF0YS1mbGFnLXN3aXRjaD1cIicgKyBscyArICdcIl0nKS5mYWRlSW4oMjAwKVxuXG59XG5cbiQoJy5zd2l0Y2hlciBzdmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRmID0gJCh0aGlzKS5kYXRhKCdmbGFnJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxhZy1zd2l0Y2hlcicsIGRmKVxuICAgIGxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWctc3dpdGNoZXInKVxuICAgIGlmIChscyA9PSAwKSB7XG5cbiAgICAgICAgJCgnLnN3aXRjaGVyIHN2Z1tkYXRhLWZsYWc9XCIwXCJdJykuY2hpbGRyZW4oJ3JlY3QnKS5jc3Moe1xuICAgICAgICAgICAgJ2ZpbGwnOiAnIzBkMTMxOSdcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcucGFyZW50IGRpdltkYXRhLWZsYWctc3dpdGNoPVwiMVwiXScpLmZhZGVPdXQoMjAwKVxuICAgICAgICAkKCcucGFyZW50IGRpdltkYXRhLWZsYWctc3dpdGNoPVwiMFwiXScpLmZhZGVJbigyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIubWFzb25yeSgnZGVzdHJveScpXG4gICAgICAgICAgICAkY29udGFpbmVyLm1hc29ucnkoe1xuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5pdGVtLW1hbicsXG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuaXRlbS1tYW4nLFxuICAgICAgICAgICAgICAgIGd1dHRlcjogJy5ndXR0ZXItc2l6ZXInLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcuc3dpdGNoZXIgc3ZnW2RhdGEtZmxhZz1cIjFcIl0nKS5jaGlsZHJlbigncmVjdCcpLmNzcyh7XG4gICAgICAgICAgICAnZmlsbCc6ICcjY2NjY2NjJ1xuICAgICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChscyA9PSAxKSB7XG4gICAgICAgICQoJy5zd2l0Y2hlciBzdmdbZGF0YS1mbGFnPVwiMVwiXScpLmNoaWxkcmVuKCdyZWN0JykuY3NzKHtcbiAgICAgICAgICAgICdmaWxsJzogJyMwZDEzMTknXG4gICAgICAgIH0pXG4gICAgICAgICQoJy5wYXJlbnQgZGl2W2RhdGEtZmxhZy1zd2l0Y2g9XCIxXCJdJykuZmFkZUluKDIwMClcbiAgICAgICAgJCgnLnBhcmVudCBkaXZbZGF0YS1mbGFnLXN3aXRjaD1cIjBcIl0nKS5mYWRlT3V0KDIwMClcbiAgICAgICAgJCgnLnN3aXRjaGVyIHN2Z1tkYXRhLWZsYWc9XCIwXCJdJykuY2hpbGRyZW4oJ3JlY3QnKS5jc3Moe1xuICAgICAgICAgICAgJ2ZpbGwnOiAnI2NjY2NjYydcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG4kKCcubGluZScpLmFuaW1hdGUoe1xuICAgICd3aWR0aCc6ICcxMDAlJ1xufSwgMjUwMClcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICQoJy5sb2FkZXInKS5jc3Moe1xuICAgICAgICAnZGlzcGxheSc6ICdub25lJ1xuICAgIH0pXG5cbiAgICAkY29udGFpbmVyLm1hc29ucnkoe1xuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuaXRlbS1tYW4nLFxuICAgICAgICBjb2x1bW5XaWR0aDogJy5pdGVtLW1hbicsXG4gICAgICAgIGd1dHRlcjogJy5ndXR0ZXItc2l6ZXInLFxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcbiAgICB9KVxuXG4gICAgJCgnLnBhcmVudCcpLmFuaW1hdGUoe1xuICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICB9LCAzMDApXG5cbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ2xvY2snKVxuXG4gICAgaWYgKCQoJ3N2Zy5zbWlsZScpLmxlbmd0aCkge1xuICAgICAgICB2YXIgc3ZnID0gU25hcCgnI3N2ZycpXG4gICAgICAgIHZhciBidG4gPSBzdmcuc2VsZWN0KCcjYnRuJylcbiAgICAgICAgdmFyIHRleHQgPSBzdmcuc2VsZWN0KCcjdGV4dCcpXG4gICAgICAgIC8vIHZhciB0ZXh0TGluayA9IHN2Zy5zZWxlY3QoJyN0ZXh0TGluaycpO1xuXG4gICAgICAgIGxldCBtZW50ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBidG4uYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgZDogJ00gMTA4IDAgQSAxNTMgMTUzIDAgMCAwIDM3MiAwIEwgNDYwIDUwIE0gNDYwIDUwIEMgMzUwIDIyMCAxMzAgMjIwIDIwIDUwIEwgMTA4IDAnXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgdGV4dC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBkOiAnTSA2NCA1MCBRIDIyMCAyMjAgNDE2IDUwJ1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtbGV2ZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBidG4uYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgZDogJ00gMCA1MCBBIDAgMCAwIDAgMCA0ODAgNTAgTCA0ODAgMTUwIE0gNDgwIDE1MCBDIDQ4MCAxNTAgMCAxNTAgMCAxNTAgTCAwIDUwJ1xuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgdGV4dC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBkOiAnTSA0MCAxMTAgUSAyNDAgMTEwIDQ4MCAxMTAnXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cblxuICAgICAgICAkKCdzdmcuc21pbGUnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XG4gICAgICAgICAgICAgICAgbWVudGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAgICAgICAgIG1sZXZlbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI0KSB7XG4gICAgICAgICAgICAgICAgbWVudGVyKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWxldmVsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudHJpZ2dlcigncmVzaXplJylcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzY3JvbGxQYWdlID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICAgICQoJy5jb21wb255LXNsaWRlci1jYXJvdXNlbCwuZWxlbWVudG9yLWltYWdlLWNhcm91c2VsLC5zbGlkZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm94SGVpZ2h0ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLmhlaWdodCgpXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBhZ2UgPiBib3hIZWlnaHQgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2F1dG9wbGF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrKCdzbGlja1NldE9wdGlvbicsICdhdXRvcGxheScsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2soJ3NsaWNrR29UbycsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2F1dG9wbGF5JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50cmlnZ2VyKCdzY3JvbGwnKVxuICAgIH0sIDEwMDApXG59XG4iLCJmdW5jdGlvbiBzaG93X21vZGFsKHZpZGVvLCBjbGFzc05hbWUgPSAnJykge1xuICAgIGxldCBtb2RhbCA9ICQoYDxkaXYgY2xhc3M9XCJjb21wb255LXZpZGVvLW1hZGFsLXdyYXBcIj48ZGl2IGNsYXNzPVwiY29tcG9ueS12aWRlby1tYWRhbCAke2NsYXNzTmFtZX1cIj48ZGl2IGNsYXNzPVwiY29tcG9ueS12aWRlby1tYWRhbC1pbm5lciByZWRkYXktY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImNvbXBvbnktdmlkZW8tbWFkYWwtY2xvc2VcIj48c3Bhbj48L3NwYW4+PC9kaXY+PGlmcmFtZSBzcmM9XCIke3ZpZGVvfT9hdXRvcGxheT0xXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvZGl2PjwvZGl2PjwvZGl2PmApXG5cbiAgICAkKCdib2R5JykuYXBwZW5kKG1vZGFsKVxuXG4gICAgbGV0IGNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jb21wb255LXZpZGVvLW1hZGFsLXdyYXAnKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuY29tcG9ueS12aWRlby1tYWRhbC13cmFwJykucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb2RhbC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xvc2UoKVxuICAgIH0pXG5cbiAgICAkKCcuY29tcG9ueS12aWRlby1tYWRhbC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbG9zZSgpXG4gICAgfSlcblxuICAgIG1vZGFsLmZhZGVJbig0MDApXG59XG5cblxuJChmdW5jdGlvbigpIHtcblxuICAgIGlmICgkKCdbZGF0YS12aWRlby1wbGF5XScpLmxlbmd0aCkge1xuICAgICAgICAkKCdbZGF0YS12aWRlby1wbGF5XScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHZpZGVvID0gJCh0aGlzKS5kYXRhKCd2aWRlby1wbGF5JylcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAkKHRoaXMpLmRhdGEoJ3ZpZGVvLXBsYXktY2xhc3MnKVxuICAgICAgICAgICAgc2hvd19tb2RhbCh2aWRlbywgY2xhc3NOYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICQoJyNmLW5hdi1tZW51LWl0ZW0tNTM3IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHZpZGVvID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgICAgICAgc2hvd19tb2RhbCh2aWRlbywgJ2NvbXBvbnktdmlkZW8taWYnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgJCgnLmhpc3Rvcnktc2xpZGVyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGRvdHMgPSAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzIGxpJylcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICQodGhpcykuZGF0YSgnc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gJCh0aGlzKS5maW5kKCcuY29tcG9ueS1zbGlkZXItY2Fyb3VzZWwtaXRlbScpLmRhdGEoJ3RpdGxlJylcbiAgICAgICAgICAgIGRvdHMuZXEoaW5kZXgpLnByZXBlbmQoYDxzcGFuIGNsYXNzPVwibGFiZWxcIj4ke3RpdGxlfTwvc3Bhbj5gKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAoJCgnLnBhZ2UtaWQtMjcnKS5sZW5ndGgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHNjcm9sbFBhZ2UgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICAgICAgbGV0IGJveEhlaWdodCA9ICQoJy5jb21wb255LWluZm8nKS5oZWlnaHQoKVxuICAgICAgICAgICAgbGV0IGZpZXhCb3ggPSAkKCcuY29tcG9ueS1pbmZvJykucG9zaXRpb24oKS50b3AgKyBib3hIZWlnaHRcblxuICAgICAgICAgICAgaWYgKHNjcm9sbFBhZ2UgPiBmaWV4Qm94KSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbXBvbnktaW5mby1pbm5lcicpLmNzcygnbWluLWhlaWdodCcsIGAke2JveEhlaWdodH1weGApXG4gICAgICAgICAgICAgICAgJCgnLmNvbXBvbnktaW5mbycpLmNzcygnbWluLWhlaWdodCcsIGAke2JveEhlaWdodH1weGApLmFkZENsYXNzKCdmaXhlZCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBhZ2UgPCBmaWV4Qm94KSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbXBvbnktaW5mbycpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJylcbiAgICAgICAgICAgICAgICAkKCcuY29tcG9ueS1pbmZvLWlubmVyJykucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsZXQgaGVhZGVyTGltaXQgPSAkKCcuaGVhZGVyLWxpbWl0JykuaGVpZ2h0KClcbiAgICAgICAgICAgIC8vIGxldCBvcGFjaXR5ID0gKChoZWFkZXJMaW1pdCAqIDEpIC8gc2Nyb2xsUGFnZSkgLSAxXG5cbiAgICAgICAgICAgIC8vIGlmIChvcGFjaXR5ID4gMSkge1xuICAgICAgICAgICAgLy8gICAgIG9wYWNpdHkgPSAxXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKG9wYWNpdHkgPCAwKSB7XG4gICAgICAgICAgICAvLyAgICAgb3BhY2l0eSA9IDBcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gJCgnLmNvbXBvbnktbWFpbl9iZycpLmNzcygnb3BhY2l0eScsIG9wYWNpdHkpXG5cbiAgICAgICAgfSkudHJpZ2dlcignc2Nyb2xsJylcbiAgICB9XG59KVxuIiwidmFyIHNsaWRlckRlbGF5ID0gMTAwMDBcbnZhciBjdXJyZW50T2Zmc2V0ID0gMFxudmFyIHdiYmwgPSAkKCcuZ3V0dGVyLXNpemVyJykuY3NzKCd3aWR0aCcpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzbGlkZXJEZWxheSxcbiAgICBjdXJyZW50T2Zmc2V0LFxuICAgIHdiYmxcbn1cbiIsIihmdW5jdGlvbigkKSB7XG5cbiAgICAvKipcbiAgICAgKiBpbml0TWFwXG4gICAgICpcbiAgICAgKiBSZW5kZXJzIGEgR29vZ2xlIE1hcCBvbnRvIHRoZSBzZWxlY3RlZCBqUXVlcnkgZWxlbWVudFxuICAgICAqXG4gICAgICogQGRhdGUgICAgMjIvMTAvMTlcbiAgICAgKiBAc2luY2UgICA1LjguNlxuICAgICAqXG4gICAgICogQHBhcmFtICAgalF1ZXJ5ICRlbCBUaGUgalF1ZXJ5IGVsZW1lbnQuXG4gICAgICogQHJldHVybiAgb2JqZWN0IFRoZSBtYXAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdE1hcCgkZWwpIHtcblxuICAgICAgICAvLyBGaW5kIG1hcmtlciBlbGVtZW50cyB3aXRoaW4gbWFwLlxuICAgICAgICB2YXIgJG1hcmtlcnMgPSAkZWwuZmluZCgnLm1hcmtlcicpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGdlcmVuaWMgbWFwLlxuICAgICAgICB2YXIgbWFwQXJncyA9IHtcbiAgICAgICAgICAgIHpvb206ICRlbC5kYXRhKCd6b29tJykgfHwgMTcsXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiBmYWxzZSxcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzBkMTMxOSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ29mZidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyNmZjA0MmYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ29mZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnI2I3MTgzNidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnI2I3MTgzNidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjMDAwMDAwJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzc1NzU3NSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2FkbWluaXN0cmF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnb2ZmJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAnYWRtaW5pc3RyYXRpdmUuY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyM5ZTllOWUnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlVHlwZSc6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eScsXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyNiZGJkYmQnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlVHlwZSc6ICdsYW5kc2NhcGUnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdzaW1wbGlmaWVkJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAnbGFuZHNjYXBlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdvbidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ2xhbmRzY2FwZScsXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzJhMzc0MidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnb24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjMGQxMzE5J1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAncG9pJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy5pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyNmOTg4NDQnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlVHlwZSc6ICdwb2knLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjNzU3NTc1J1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzJhMzc0MidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaS5wYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzJhMzc0MidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3BvaS5wYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjMmEzNzQyJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZCcsXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeS5maWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyMwMTAzMDInXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzhhOGE4YSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuYXJ0ZXJpYWwnLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzAxMDMwMidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50VHlwZSc6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjM2MzYzNjJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5oaWdod2F5JyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyMwMTAzMDInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzYXR1cmF0aW9uJzogLTEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnb2ZmJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAncm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlcnMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyM0ZTRlNGUnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlVHlwZSc6ICdyb2FkLmxvY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzYxNjE2MSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3JvYWQubG9jYWwubGFiZWxzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnI2I3MTgzNidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3RyYW5zaXQnLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZXJzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjNzU3NTc1J1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZVR5cGUnOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudFR5cGUnOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzM2MGMxNydcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVUeXBlJzogJ3dhdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRUeXBlJzogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGVycyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzM2MGMxNydcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoJGVsWzBdLCBtYXBBcmdzKVxuXG4gICAgICAgIC8vIEFkZCBtYXJrZXJzLlxuICAgICAgICBtYXAubWFya2VycyA9IFtdXG4gICAgICAgICRtYXJrZXJzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbml0TWFya2VyKCQodGhpcyksIG1hcClcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDZW50ZXIgbWFwIGJhc2VkIG9uIG1hcmtlcnMuXG4gICAgICAgIGNlbnRlck1hcChtYXApXG5cbiAgICAgICAgLy8gUmV0dXJuIG1hcCBpbnN0YW5jZS5cbiAgICAgICAgcmV0dXJuIG1hcFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluaXRNYXJrZXJcbiAgICAgKlxuICAgICAqIENyZWF0ZXMgYSBtYXJrZXIgZm9yIHRoZSBnaXZlbiBqUXVlcnkgZWxlbWVudCBhbmQgbWFwLlxuICAgICAqXG4gICAgICogQGRhdGUgICAgMjIvMTAvMTlcbiAgICAgKiBAc2luY2UgICA1LjguNlxuICAgICAqXG4gICAgICogQHBhcmFtICAgalF1ZXJ5ICRlbCBUaGUgalF1ZXJ5IGVsZW1lbnQuXG4gICAgICogQHBhcmFtICAgb2JqZWN0IFRoZSBtYXAgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiAgb2JqZWN0IFRoZSBtYXJrZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdE1hcmtlcigkbWFya2VyLCBtYXApIHtcblxuICAgICAgICAvLyBHZXQgcG9zaXRpb24gZnJvbSBtYXJrZXIuXG4gICAgICAgIHZhciBsYXQgPSAkbWFya2VyLmRhdGEoJ2xhdCcpXG4gICAgICAgIHZhciBsbmcgPSAkbWFya2VyLmRhdGEoJ2xuZycpXG4gICAgICAgIHZhciBsYXRMbmcgPSB7XG4gICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQobGF0KSxcbiAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsbmcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbWFnZVxuICAgICAgICB2YXIgaW1hZ2UgPSB7XG4gICAgICAgICAgICB1cmw6ICcvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTIvNS0xLnN2ZycsXG4gICAgICAgICAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgxNTAsIDU1KSxcbiAgICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxuICAgICAgICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjAsIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG1hcmtlciBpbnN0YW5jZS5cbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IGxhdExuZyxcbiAgICAgICAgICAgIGljb246IGltYWdlLFxuICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBBcHBlbmQgdG8gcmVmZXJlbmNlIGZvciBsYXRlciB1c2UuXG4gICAgICAgIG1hcC5tYXJrZXJzLnB1c2gobWFya2VyKVxuXG4gICAgICAgIC8vIElmIG1hcmtlciBjb250YWlucyBIVE1MLCBhZGQgaXQgdG8gYW4gaW5mb1dpbmRvdy5cbiAgICAgICAgaWYgKCRtYXJrZXIuaHRtbCgpKSB7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBpbmZvIHdpbmRvdy5cbiAgICAgICAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICRtYXJrZXIuaHRtbCgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBTaG93IGluZm8gd2luZG93IHdoZW4gbWFya2VyIGlzIGNsaWNrZWQuXG4gICAgICAgICAgICAvLyBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNlbnRlck1hcFxuICAgICAqXG4gICAgICogQ2VudGVycyB0aGUgbWFwIHNob3dpbmcgYWxsIG1hcmtlcnMgaW4gdmlldy5cbiAgICAgKlxuICAgICAqIEBkYXRlICAgIDIyLzEwLzE5XG4gICAgICogQHNpbmNlICAgNS44LjZcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIG9iamVjdCBUaGUgbWFwIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4gIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjZW50ZXJNYXAobWFwKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG1hcCBib3VuZGFyaWVzIGZyb20gYWxsIG1hcCBtYXJrZXJzLlxuICAgICAgICB2YXIgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpXG4gICAgICAgIG1hcC5tYXJrZXJzLmZvckVhY2goZnVuY3Rpb24obWFya2VyKSB7XG4gICAgICAgICAgICBib3VuZHMuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBsYXQ6IG1hcmtlci5wb3NpdGlvbi5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IG1hcmtlci5wb3NpdGlvbi5sbmcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDYXNlOiBTaW5nbGUgbWFya2VyLlxuICAgICAgICBpZiAobWFwLm1hcmtlcnMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIG1hcC5zZXRDZW50ZXIoYm91bmRzLmdldENlbnRlcigpKVxuXG4gICAgICAgICAgICAvLyBDYXNlOiBNdWx0aXBsZSBtYXJrZXJzLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgbWFwcyBvbiBwYWdlIGxvYWQuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5hY2YtbWFwJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBtYXAgPSBpbml0TWFwKCQodGhpcykpXG4gICAgICAgIH0pXG4gICAgfSlcblxufSkoalF1ZXJ5KVxuIiwiLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCAqIGFzIGZ1bmMgZnJvbSAnLi9mdW5jdGlvbnMuanMnXG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICAvL2FkYXB0aXZlIGJsb2NrIGFib3V0IGNvbXBhbnlcbiAgICB2YXIgd2luZG93VyA9ICQod2luZG93KS53aWR0aCgpXG4gICAgdmFyIHJhdGlvID0gMTgwMCAvIDE5MDNcbiAgICB2YXIgbW9iUiA9IDE4MDAgLyA3MDBcbiAgICBpZiAod2luZG93VyA8IDE5MjApIHtcbiAgICAgICAgJCgnLmNvbnRhaW5lci1hYm91dCcpLmNzcyh7XG4gICAgICAgICAgICAnaGVpZ2h0Jzogd2luZG93VyAqIHJhdGlvXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmICh3aW5kb3dXIDwgMTAyNSkge1xuICAgICAgICAkKCcuY29udGFpbmVyLWFib3V0LW1vYmlsZScpLmNzcyh7XG4gICAgICAgICAgICAnaGVpZ2h0Jzogd2luZG93VyAqIG1vYlJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93VyA9ICQod2luZG93KS53aWR0aCgpXG4gICAgICAgIGlmICh3aW5kb3dXIDwgMTkyMCkge1xuICAgICAgICAgICAgJCgnLmNvbnRhaW5lci1hYm91dCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IHdpbmRvd1cgKiByYXRpb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93VyA8IDEwMjUpIHtcbiAgICAgICAgICAgICQoJy5jb250YWluZXItYWJvdXQtbW9iaWxlJykuY3NzKHtcbiAgICAgICAgICAgICAgICAnaGVpZ2h0Jzogd2luZG93VyAqIG1vYlJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICAvL2Zvb3RlciBjb250YWN0cyBwb3NpdGlvblxuICAgIHZhciBnZXRMYXN0SUQgPSAkKCcuZm9vdGVyX19uYXYtbGlzdCcpLmNoaWxkcmVuKCdsaTpsYXN0LWNoaWxkJylcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBsYXN0RWxPZmZMID0gZ2V0TGFzdElELmNoaWxkcmVuKCdhJykucG9zaXRpb24oKS5sZWZ0XG4gICAgICAgIGxldCBsYXN0RWxPZmZUID0gZ2V0TGFzdElELmNoaWxkcmVuKCdhJykucG9zaXRpb24oKS50b3BcbiAgICAgICAgbGV0IGxhc3RFbEggPSBnZXRMYXN0SUQuY2hpbGRyZW4oJ2EnKS5oZWlnaHQoKVxuICAgICAgICBmdW5jLmZvb3RlckFkYXB0KGxhc3RFbE9mZkwsIGxhc3RFbE9mZlQsIGxhc3RFbEgsIGdldExhc3RJRClcbiAgICB9KS50cmlnZ2VyKCdyZXNpemUnKVxuXG5cbiAgICB2YXIgaGVhZGVySCA9ICQoJ2hlYWRlcicpLmhlaWdodCgpXG5cbiAgICAkKCcuZWxlbWVudG9yJykuY3NzKHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogaGVhZGVySFxuICAgIH0pXG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJIID0gJCgnaGVhZGVyJykuaGVpZ2h0KClcbiAgICAgICAgJCgnLmVsZW1lbnRvcicpLmNzcyh7XG4gICAgICAgICAgICAncGFkZGluZy10b3AnOiBoZWFkZXJIXG4gICAgICAgIH0pXG4gICAgfSlcblxufSlcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCQoJy5mZWVkX3NsaWNrJykubGVuZ3RoKSB7XG5cbiAgICAgICAgbGV0IHB0YiA9ICQoJy5mZWVkX3NsaWNrJykuZmluZCgnLnNsaWNrLWN1cnJlbnQnKS5vZmZzZXQoKS5sZWZ0XG4gICAgICAgIGxldCB3YiA9ICQoJy5mZWVkX3NsaWNrJykuZmluZCgnLnNsaWNrLWN1cnJlbnQnKS53aWR0aCgpXG4gICAgICAgIGxldCBsaXN0T2ZmID0gJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stbGlzdCcpLm9mZnNldCgpLmxlZnRcbiAgICAgICAgbGV0IGxpc3RXID0gJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stbGlzdCcpLndpZHRoKClcbiAgICAgICAgbGV0IHd0ID0gJCgnLmZlZWRfdHJpYW5nbGUnKS53aWR0aCgpXG4gICAgICAgIGxldCBkZXRhaWxXID0gJCgnLmZlZWRfZGV0YWlsJykud2lkdGgoKVxuICAgICAgICBsZXQgcmFzdCA9IGRldGFpbFcgLSBsaXN0V1xuICAgICAgICBsZXQgcG9zaXRpb25CID0gcHRiICsgcmFzdCAtIGxpc3RPZmZcbiAgICAgICAgJCgnLmZlZWRfdHJpYW5nbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbkIgKyAod2IgLyAyKVxuICAgICAgICB9LCAzMDApXG5cblxuICAgICAgICAvL2NsaWNrIG9uIGZlZWRiYWNrIGl0ZW1cbiAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiMFwiXScpLmFkZENsYXNzKCdhbmlJbicpXG5cbiAgICAgICAgbGV0IGNvdW50X3NsaWRlID0gJCgnLmVtb19ibG9jaycpLmxlbmd0aFxuXG4gICAgICAgIGxldCBuYXZfc2xpY2tfZmVlZF90aW1lb3V0ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgbGV0IGZlZWRfc2xpY2tfbmF2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobmF2X3NsaWNrX2ZlZWRfdGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChuYXZfc2xpY2tfZmVlZF90aW1lb3V0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLmFuaUluJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICQoJy5hbmlJbicpLmVxKDApLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwJ1xuICAgICAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdhbmlJbicpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gJCgnLmFuaU91dCcpLnJlbW92ZUNsYXNzKCdhbmlPdXQnKS5jc3Moe1xuICAgICAgICAgICAgLy8gICAgICdkaXNwbGF5JzogJ25vbmUnLFxuICAgICAgICAgICAgLy8gICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAvLyAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgIC8vIH0pXG5cblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTXG4gICAgICAgICAgICBsZXQgc2xpZGUgPSAkKHRoaXMpLmRhdGEoJ3NsaWNrLWluZGV4JylcblxuICAgICAgICAgICAgJCgnLmVtb19ibG9jaycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuY3NzKCdkaXNwbGF5JykgIT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTID0gJCh0aGlzKS5kYXRhKCdpZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFMgKyAnICA6ICAnICsgc2xpZGUpXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UyA9PSBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTID0gc2xpZGUgLSAxXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbGlkZSA8IDApIHtcbiAgICAgICAgICAgICAgICBzbGlkZSA9IGNvdW50X3NsaWRlIC0gMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudFMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFMgPSBzbGlkZSAtIDFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNsaWRlID49IGNvdW50X3NsaWRlKSB7XG4gICAgICAgICAgICAgICAgc2xpZGUgPSAwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRTICsgJyAgOiAgJyArIHNsaWRlKVxuXG4gICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgY3VycmVudFMgKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICd0b3AnOiAnMCcsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMS41cmVtJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBzbGlkZSArICdcIl0nKS5jc3Moe1xuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICcwJyxcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcxLjVyZW0nXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgc2xpZGUgKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgc2xpZGUgKyAnXCJdJykuc2hvdygpXG4gICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgc2xpZGUgKyAnXCJdJykuYWRkQ2xhc3MoJ2FuaUluJylcbiAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5hZGRDbGFzcygnYW5pT3V0JylcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgY3VycmVudFMgKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgY3VycmVudFMgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2FuaUluJylcbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgY3VycmVudFMgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2FuaU91dCcpXG4gICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIHNsaWRlICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhbmlPdXQnKVxuICAgICAgICAgICAgfSwgNDAwKVxuXG4gICAgICAgICAgICBwdGIgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnRcbiAgICAgICAgICAgIHdiID0gJCh0aGlzKS53aWR0aCgpXG4gICAgICAgICAgICBsaXN0T2ZmID0gJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stbGlzdCcpLm9mZnNldCgpLmxlZnRcbiAgICAgICAgICAgIGxpc3RXID0gJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stbGlzdCcpLndpZHRoKClcbiAgICAgICAgICAgIHd0ID0gJCgnLmZlZWRfdHJpYW5nbGUnKS53aWR0aCgpXG4gICAgICAgICAgICBkZXRhaWxXID0gJCgnLmZlZWRfZGV0YWlsJykud2lkdGgoKVxuICAgICAgICAgICAgcmFzdCA9IGRldGFpbFcgLSBsaXN0V1xuICAgICAgICAgICAgcG9zaXRpb25CID0gcHRiICsgcmFzdCAtIGxpc3RPZmZcbiAgICAgICAgICAgICQoJy5mZWVkX3RyaWFuZ2xlJykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uQiArICh3YiAvIDIpXG4gICAgICAgICAgICB9LCAzMDApXG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3NsaWRlSW5kZXggPSAkKHRoaXMpLmRhdGEoJ3NsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAkKCcuZmVlZF9zbGljaycpLnNsaWNrKCdzbGlja0dvVG8nLCBfc2xpZGVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnLnNsaWNrLXNsaWRlJykub24oJ2NsaWNrJywgZmVlZF9zbGlja19uYXYpXG5cbiAgICAgICAgJCgnLmZlZWRfc2xpY2snKS5vbignYnJlYWtwb2ludCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stc2xpZGUnKS5vbignY2xpY2snLCBmZWVkX3NsaWNrX25hdilcbiAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnLnNsaWNrLWN1cnJlbnQnKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGFycm93X3NsaWNrX2ZlZWRfdGltZW91dCA9IHVuZGVmaW5lZFxuICAgICAgICBsZXQgYXJyb3dfc2xpY2tfZmVlZF90aW1lb3V0X2lubmVyID0gdW5kZWZpbmVkIFxuXG4gICAgICAgIC8vc2hvdyBmZWVkYmFjayBkZXRhaWwgZm9yIHNsaWRlclxuICAgICAgICAkKCcjc2xpY2tfZmVlZCcpLm9uKCdjbGljaycsICcuc2xpY2stYXJyb3cnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgaWYgKGFycm93X3NsaWNrX2ZlZWRfdGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhcnJvd19zbGlja19mZWVkX3RpbWVvdXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhcnJvd19zbGlja19mZWVkX3RpbWVvdXRfaW5uZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoYXJyb3dfc2xpY2tfZmVlZF90aW1lb3V0X2lubmVyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudFNcbiAgICAgICAgICAgICQoJy5lbW9fYmxvY2snKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmNzcygnZGlzcGxheScpICE9ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UyA9ICQodGhpcykuZGF0YSgnaWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGFycm93X3NsaWNrX2ZlZWRfdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLmFuaUluJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuYW5pSW4nKS5lcSgwKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2FuaUluJylcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICQoJy5hbmlPdXQnKS5yZW1vdmVDbGFzcygnYW5pT3V0JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCB0aGlzSXRlbVxuICAgICAgICAgICAgICAgIGxldCB0cm9mID0gJCgnLmZlZWRfdHJpYW5nbGUnKS5vZmZzZXQoKS5sZWZ0XG5cbiAgICAgICAgICAgICAgICAkKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRyb2YgPj0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0KSAmJiAodHJvZiA8PSAoJCh0aGlzKS5vZmZzZXQoKS5sZWZ0ICsgKCQodGhpcykud2lkdGgoKSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0l0ZW0gPSAkKHRoaXMpLmRhdGEoJ3NsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBpZiAoY3VycmVudFMgPT0gdGhpc0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIGN1cnJlbnRTICsgJ1wiXScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMS41cmVtJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgdGhpc0l0ZW0gKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMS41cmVtJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgdGhpc0l0ZW0gKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIHRoaXNJdGVtICsgJ1wiXScpLnNob3coKVxuICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyB0aGlzSXRlbSArICdcIl0nKS5hZGRDbGFzcygnYW5pSW4nKVxuICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5hZGRDbGFzcygnYW5pT3V0JylcblxuICAgICAgICAgICAgICAgIGFycm93X3NsaWNrX2ZlZWRfdGltZW91dF9pbm5lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIGN1cnJlbnRTICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhbmlJbicpXG4gICAgICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5yZW1vdmVDbGFzcygnYW5pT3V0JylcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIHRoaXNJdGVtICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhbmlPdXQnKVxuICAgICAgICAgICAgICAgIH0sIDQwMClcblxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgJCgnLmZlZWRfc2xpY2snKS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuXG4gICAgICAgICAgICBsZXQgc2xpZGVDb3VudCA9IHNsaWNrWydzbGlkZUNvdW50J11cblxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKGBbZGF0YS1zbGljay1pbmRleD1cIiR7bmV4dFNsaWRlfVwiXWApLmFkZENsYXNzKCdhY3RpdmUtZmVlZCcpXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoYFtkYXRhLXNsaWNrLWluZGV4PVwiJHtjdXJyZW50U2xpZGV9XCJdYCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1mZWVkJylcblxuICAgICAgICAgICAgaWYgKG5leHRTbGlkZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKGBbZGF0YS1zbGljay1pbmRleD1cIiR7c2xpZGVDb3VudH1cIl1gKS5hZGRDbGFzcygnYWN0aXZlLWZlZWQnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoYFtkYXRhLXNsaWNrLWluZGV4PVwiJHtzbGlkZUNvdW50fVwiXWApLnJlbW92ZUNsYXNzKCdhY3RpdmUtZmVlZCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXh0U2xpZGUgKyAxID09IHNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PVwiLTFcIl0nKS5hZGRDbGFzcygnYWN0aXZlLWZlZWQnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PVwiLTFcIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlLWZlZWQnKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgICAgICAgICAgICAgJCgnLmZlZWRfc2xpY2snKS5maW5kKCdbZGF0YS1zbGljay1pbmRleD0nICsgbmV4dFNsaWRlICsgJ10nKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIG5leHRTbGlkZSArICddJykucHJldigpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMC41XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PScgKyBuZXh0U2xpZGUgKyAnXScpLnByZXYoKS5wcmV2KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIG5leHRTbGlkZSArICddJykucHJldigpLnByZXYoKS5wcmV2KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIG5leHRTbGlkZSArICddJykubmV4dCgpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMC41XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PScgKyBuZXh0U2xpZGUgKyAnXScpLm5leHQoKS5uZXh0KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIG5leHRTbGlkZSArICddJykubmV4dCgpLm5leHQoKS5uZXh0KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PVwiMFwiXScpLmFkZENsYXNzKCdhY3RpdmUtZmVlZCcpXG5cblxuICAgICAgICBsZXQgc3dpcGVfc2xpY2tfZmVlZF90aW1lb3V0ID0gdW5kZWZpbmVkXG4gICAgICAgIGxldCBzd2lwZV9zbGlja19mZWVkX3RpbWVvdXRfaW5uZXIgPSB1bmRlZmluZWRcblxuXG4gICAgICAgICQoJy5mZWVkX3NsaWNrJykub24oJ3N3aXBlJywgZnVuY3Rpb24oc2xpY2ssIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTXG4gICAgICAgICAgICAkKCcuZW1vX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5jc3MoJ2Rpc3BsYXknKSAhPSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFMgPSAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoc3dpcGVfc2xpY2tfZmVlZF90aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlX3NsaWNrX2ZlZWRfdGltZW91dClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN3aXBlX3NsaWNrX2ZlZWRfdGltZW91dF9pbm5lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzd2lwZV9zbGlja19mZWVkX3RpbWVvdXRfaW5uZXIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXBlX3NsaWNrX2ZlZWRfdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLmFuaUluJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuYW5pSW4nKS5lcSgwKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2FuaUluJylcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICQoJy5hbmlPdXQnKS5yZW1vdmVDbGFzcygnYW5pT3V0JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnXG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgbGV0IHRoaXNJdGVtXG4gICAgICAgICAgICAgICAgbGV0IHRyb2YgPSAkKCcudHJpYW5nbGVNJykub2Zmc2V0KCkubGVmdFxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0cm9mID49ICQodGhpcykub2Zmc2V0KCkubGVmdCkgJiYgKHRyb2YgPD0gKCQodGhpcykub2Zmc2V0KCkubGVmdCArICgkKHRoaXMpLndpZHRoKCkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtID0gJCh0aGlzKS5kYXRhKCdzbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UyA9PSB0aGlzSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgY3VycmVudFMgKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcxLjVyZW0nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgdGhpc0l0ZW0gKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMS41cmVtJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAkKCcuZW1vX2Jsb2NrW2RhdGEtaWQ9XCInICsgdGhpc0l0ZW0gKyAnXCJdJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIHRoaXNJdGVtICsgJ1wiXScpLnNob3coKVxuICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyB0aGlzSXRlbSArICdcIl0nKS5hZGRDbGFzcygnYW5pSW4nKVxuICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5hZGRDbGFzcygnYW5pT3V0JylcblxuICAgICAgICAgICAgICAgIHN3aXBlX3NsaWNrX2ZlZWRfdGltZW91dF9pbm5lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIGN1cnJlbnRTICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhbmlJbicpXG4gICAgICAgICAgICAgICAgICAgICQoJy5lbW9fYmxvY2tbZGF0YS1pZD1cIicgKyBjdXJyZW50UyArICdcIl0nKS5yZW1vdmVDbGFzcygnYW5pT3V0JylcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVtb19ibG9ja1tkYXRhLWlkPVwiJyArIHRoaXNJdGVtICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhbmlPdXQnKVxuICAgICAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfSlcblxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgICAgICAgICAgICAgJCgnLmZlZWRfc2xpY2snKS5maW5kKCdbZGF0YS1zbGljay1pbmRleD0nICsgMCArICddJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PScgKyAwICsgJ10nKS5wcmV2KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIDAgKyAnXScpLnByZXYoKS5wcmV2KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIDAgKyAnXScpLnByZXYoKS5wcmV2KCkucHJldigpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMC4yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PScgKyAwICsgJ10nKS5uZXh0KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIDAgKyAnXScpLm5leHQoKS5uZXh0KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9JyArIDAgKyAnXScpLm5leHQoKS5uZXh0KCkubmV4dCgpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMC4yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmZlZWRfc2xpY2sgLnNsaWNrLXNsaWRlJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KS50cmlnZ2VyKCdyZXNpemUnKVxuICAgIH1cbn0pXG4iLCJleHBvcnQgZnVuY3Rpb24gZm9vdGVyQWRhcHQobGFzdEVsT2ZmTCwgbGFzdEVsT2ZmVCwgbGFzdEVsSCwgZ2V0TGFzdElEKSB7XG5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAkKCcub2xkLXNpdGUnKS5wcmVwZW5kVG8oJCgnI2YtbmF2LW1lbnUtaXRlbS0yOScpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5vbGQtc2l0ZScpLmFwcGVuZFRvKCQoJy5mb290ZXItbGVmdC1ibG9jaycpKVxuICAgIH1cblxuICAgIC8vIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAvLyAgICAgbGFzdEVsT2ZmTCA9IGdldExhc3RJRC5wcmV2KCkuY2hpbGRyZW4oJ2EnKS5wb3NpdGlvbigpLmxlZnRcbiAgICAvLyAgICAgbGFzdEVsT2ZmVCA9IGdldExhc3RJRC5wcmV2KCkuY2hpbGRyZW4oJ2EnKS5wb3NpdGlvbigpLnRvcFxuICAgIC8vICAgICBsYXN0RWxIID0gZ2V0TGFzdElELnByZXYoKS5jaGlsZHJlbignYScpLmhlaWdodCgpXG5cbiAgICAvLyAgICAgJCgnLmNvbnRhY3RzLWJsb2NrJykuY3NzKHtcbiAgICAvLyAgICAgICAgICd0b3AnOiBsYXN0RWxPZmZUICsgbGFzdEVsSCArICdweCcsXG4gICAgLy8gICAgICAgICAnbGVmdCc6IGxhc3RFbE9mZkwgKyAncHgnLFxuICAgIC8vICAgICB9KVxuICAgIC8vIH0gZWxzZSB7XG5cblxuICAgICQoJy5jb250YWN0cy1ibG9jaycpLmNzcyh7XG4gICAgICAgICd0b3AnOiBsYXN0RWxPZmZUICsgbGFzdEVsSCArICdweCcsXG4gICAgICAgICdsZWZ0JzogbGFzdEVsT2ZmTCArICdweCcsXG4gICAgfSlcblxuICAgIC8vIH1cblxuXG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCcuc21pbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdocmVmJylcbiAgICB9KVxuXG4gICAgJCgnI2hlYWRlciAubWVudS1pdGVtIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pXG5cbiAgICAkKCcjaGVhZGVyIC5tZW51LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9ICQodGhpcykuZmluZCgnYScpLmF0dHIoJ2hyZWYnKVxuICAgIH0pXG5cbiAgICAvL2luaXQgc3RpY2t5Yml0c1xuICAgIHN0aWNreWJpdHMoJy5jaGlsZCcpXG5cbiAgICAvLyBJbml0IHNsaWNrIG9uIGJsb2NrIHNsaWRlciA+Pj5cbiAgICAkKCcuc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBwYXVzZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzM2MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogY29uZmlnLnNsaWRlckRlbGF5LFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZVxuICAgIH0pXG4gICAgLy8gSW5pdCBzbGljayBvbiBibG9jayBzbGlkZXIgPDw8XG5cbiAgICB0cnkge1xuXG4gICAgICAgICQoJy5jb250YWluZXItYWJvdXQgLnBhci1ibG9jaycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBuZXcgUGFyYWxsYXgoZWwpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9pbml0IHBhcmFsbGF4IG9uIGJhY2tncm91bmQgdGl0bGVcbiAgICAgICAgJCgnLmJhY2stcGFyYWxheCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBuZXcgUGFyYWxsYXgoZWwpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9Jbml0IHBhcmFsbGF4IG9uIHNsaWRlclxuICAgICAgICB2YXIgcGFyYWxsYXhJbnN0YW5jZVxuICAgICAgICAkKCcuaW1nLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KGVsKVxuICAgICAgICAgICAgcGFyYWxsYXhJbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHNjZW5lID0gJCgnLnNsaWRlcicpLmZpbmQoJyNzbGljay1zbGlkZTAwJykuZmluZCgnLmltZy1jb250YWluZXInKS5nZXQoMClcbiAgICAgICAgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSlcbiAgICAgICAgJCgnLnNsaWRlcicpLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgICAgICBwYXJhbGxheEluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICAgICAgdmFyIHNjZW5lTmV4dCA9ICQoJy5zbGlkZXInKS5maW5kKCcjc2xpY2stc2xpZGUwJyArIG5leHRTbGlkZSkuZmluZCgnLmltZy1jb250YWluZXInKS5nZXQoMClcbiAgICAgICAgICAgIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmVOZXh0KVxuXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdOb3QgaG9tZSBwYWdlOiAnICsgZXJyKVxuICAgIH1cblxuICAgIC8vIENvbXBvbnkgU2xpZGVyID4+PlxuICAgICQoJy5jb21wb255LXNsaWRlci1jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiBjb25maWcuc2xpZGVyRGVsYXksXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlXG4gICAgfSlcblxuICAgICQoJy5jb21wb255LXNsaWRlci1jYXJvdXNlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBpdGVtID0gJCh0aGlzKS5maW5kKCcuY29tcG9ueS1zbGlkZXItY2Fyb3VzZWwtaXRlbScpXG4gICAgICAgIGlmIChpdGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGA8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldi1jdXN0b20gc2xpY2stYXJyb3ctY3VzdG9tXCI+PHNwYW4gY2xhc3M9XCJidG4tcHJldlwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dC1jdXN0b20gc2xpY2stYXJyb3ctY3VzdG9tXCI+PHNwYW4gY2xhc3M9XCJidG4tbmV4dFwiPjwvc3Bhbj48L2J1dHRvbj5gKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoJy5jb21wb255LXNsaWRlci1jYXJvdXNlbCcpLmZpbmQoJy5zbGljay1kb3RzJykuYWRkQ2xhc3MoJ3JlZGRheS1jb250YWluZXInKVxuXG4gICAgJCgnLmNvbXBvbnktc2xpZGVyLWNhcm91c2VsJykub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZ2FsbGFyeS1zbGlkZXItaXRlbV9fZGVzYycpLmVxKGN1cnJlbnRTbGlkZSkuc3RvcCgpLmZhZGVPdXQoNjAwKVxuICAgIH0pXG5cbiAgICAkKCcuY29tcG9ueS1zbGlkZXItY2Fyb3VzZWwnKS5vbignYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5nYWxsYXJ5LXNsaWRlci1pdGVtX19kZXNjJykuZXEoY3VycmVudFNsaWRlKS5zdG9wKCkuZmFkZUluKDYwMClcbiAgICB9KVxuXG4gICAgJCgnLmNvbXBvbnktc2xpZGVyLWNhcm91c2VsJykuc2xpY2soJ3NsaWNrR29UbycsIDApXG5cbiAgICAvLyBDb21wb255IFNsaWRlciA8PDxcblxuXG4gICAgLy9Jbml0IHNsaWNrIG9uIGJsb2NrIHNsaWRlclxuICAgIGxldCBzd2lwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKVxuICAgIGlmIChzd2lwZXJzKSB7XG4gICAgICAgIGZvciAobGV0IHN3aXBlciBvZiBzd2lwZXJzKSB7XG4gICAgICAgICAgICBzd2lwZXIuc3dpcGVyLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnLmVsZW1lbnRvci1pbWFnZS1jYXJvdXNlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByb290ID0gJCh0aGlzKS5wYXJlbnRzKCcuZWxlbWVudG9yLXdpZGdldC1pbWFnZS1jYXJvdXNlbCcpXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHJvb3QuZGF0YSgnc2V0dGluZ3MnKVxuXG4gICAgICAgIHJvb3QuZmluZCgnLnN3aXBlci1wYWdpbmF0aW9uJykucmVtb3ZlKClcbiAgICAgICAgcm9vdC5maW5kKCcuZWxlbWVudG9yLXN3aXBlci1idXR0b24nKS5yZW1vdmUoKVxuXG4gICAgICAgICQodGhpcykuc2xpY2soe1xuICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgZG90czogc2V0dGluZ3MubmF2aWdhdGlvbiA9PSAnYm90aCcgfHwgc2V0dGluZ3MubmF2aWdhdGlvbiA9PSAnZG90cycsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHNldHRpbmdzLmluZmluaXRlID09ICd5ZXMnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogY29uZmlnLnNsaWRlckRlbGF5LFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWVcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8g0J3QsNCy0LjQs9Cw0YbQuCDQv9C+INGB0LDQu9C00LDQvFxuICAgIHZhciBzbGlkZUNvdW50ID0gMFxuICAgIHZhciBjdXJTbGlkZSA9IDBcbiAgICB2YXIgc2xpZGVDb3VudEVsZW0gPSAwXG4gICAgdmFyIGN1clNsaWRlRWxlbSA9IDBcblxuICAgIC8vIHNldCBwYXJhbWV0ZXJzIG9uIGJsb2Nrc1xuICAgICQoJy5zbGljay1kb3RzJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgJChlbCkuZmluZCgnYnV0dG9uJykuaHRtbCgnPGRpdiBjbGFzcz1cImNsaWlpa1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYmFyXCI+PC9kaXY+JylcbiAgICAgICAgLy8gJChlbCkuY2hpbGRyZW4oJ2xpJykuZXEoMCkuY3NzKCdmbGV4LWdyb3cnLCAnMicpXG4gICAgICAgICQoZWwpLmZpbmQoJy5iYXInKS5lcSgwKS5hZGRDbGFzcygncHJvZ3Jlc3MnKVxuICAgIH0pXG5cbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAkKCcucHJvZ3Jlc3MnKS5jc3MoJ3dpZHRoJywgJzAnKVxuICAgIC8vICAgICAkKCcucHJvZ3Jlc3MnKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgLy8gICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgLy8gICAgIH0sIGNvbmZpZy5zbGlkZXJEZWxheSAtIDEwMClcblxuICAgIC8vIH0sIDEwMClcblxuXG4gICAgLy8gT24gYmVmb3JlIHNsaWRlIGNoYW5nZVxuICAgICQoJy5zbGlkZXInKS5maW5kKCcjc2xpY2stc2xpZGUwMCcpLmZpbmQoJy5zbGlkZS1jb250ZW50JykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAkKCcuc2xpZGVyJykub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgc2xpZGVDb3VudCA9IHNsaWNrWydzbGlkZUNvdW50J11cbiAgICAgICAgY3VyU2xpZGUgPSBuZXh0U2xpZGVcblxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9ncmVzcycpLnN0b3AoKS5jc3MoJ3dpZHRoJywgJzAnKVxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuY3NzKCdmbGV4LWdyb3cnLCAnMScpXG4gICAgICAgICQodGhpcykuZmluZCgnLnNsaWNrLWRvdHMnKS5jaGlsZHJlbignbGknKS5lcShjdXJyZW50U2xpZGUpLmZpbmQoJy5iYXInKS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKVxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuZXEobmV4dFNsaWRlKS5maW5kKCcuYmFyJykuYWRkQ2xhc3MoJ3Byb2dyZXNzJylcbiAgICAgICAgLy8gJCh0aGlzKS5maW5kKCcuc2xpY2stZG90cycpLmNoaWxkcmVuKCdsaScpLmVxKGN1cnJlbnRTbGlkZSkuY2hpbGRyZW4oJ2J1dHRvbicpLmNzcygnYmFja2dyb3VuZCcsICcjNDk0ZDUyJylcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRTbGlkZTsgaSsrKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuZXEoaSkuY2hpbGRyZW4oJ2J1dHRvbicpLmNzcygnYmFja2dyb3VuZCcsICcjREQxRjNCJylcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSBuZXh0U2xpZGU7IGkgPCBzbGlkZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNsaWNrLWRvdHMnKS5jaGlsZHJlbignbGknKS5lcShpKS5jaGlsZHJlbignYnV0dG9uJykuY3NzKCdiYWNrZ3JvdW5kJywgJyM0OTRkNTInKVxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS5maW5kKCcucHJvZ3Jlc3MnKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH0sIGNvbmZpZy5zbGlkZXJEZWxheSwgJ2xpbmVhcicsICgpID0+IHtcbiAgICAgICAgICAgICQodGhpcykuc2xpY2soJ3NsaWNrTmV4dCcpXG4gICAgICAgIH0pXG5cblxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuZXEobmV4dFNsaWRlKS5jc3MoJ2ZsZXgtZ3JvdycsICcyJylcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnByb2dyZXNzJykuY3NzKCd3aWR0aCcsICcwJylcbiAgICAgICAgfSwgMTUwKVxuXG4gICAgICAgICQodGhpcykuZmluZCgnLnNsaWRlLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnbGlnaHQnKVxuXG4gICAgICAgICQoYC5iYWNrLXBhcmFsYXhbZGF0YS1pZD1cIiR7Y3VycmVudFNsaWRlfVwiXWApLnJlbW92ZUNsYXNzKCdmYWRlQWN0JylcbiAgICAgICAgJChgLnBvc3QtaW5mb1tkYXRhLWlkPVwiJHtjdXJyZW50U2xpZGV9XCJdYCkucmVtb3ZlQ2xhc3MoJ2ZhZGVBY3QnKVxuXG4gICAgICAgICQodGhpcykuZmluZCgnI3NsaWNrLXNsaWRlMCcgKyBjdXJyZW50U2xpZGUpLmZpbmQoJy5zbGlkZS1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgICAgJChgLmJhY2stcGFyYWxheFtkYXRhLWlkPVwiJHtuZXh0U2xpZGV9XCJdYCkuYWRkQ2xhc3MoJ2ZhZGVBY3QnKVxuICAgICAgICAkKGAucG9zdC1pbmZvW2RhdGEtaWQ9XCIke25leHRTbGlkZX1cIl1gKS5hZGRDbGFzcygnZmFkZUFjdCcpXG5cbiAgICAgICAgJCh0aGlzKS5maW5kKCcjc2xpY2stc2xpZGUwJyArIG5leHRTbGlkZSkuZmluZCgnLnNsaWRlLWNvbnRlbnQnKS5hZGRDbGFzcygnYWN0aXZlJylcblxuICAgICAgICBpZiAobmV4dFNsaWRlID09IDApIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZChgW2RhdGEtc2xpY2staW5kZXg9XCIke3NsaWRlQ291bnR9XCJdYClcbiAgICAgICAgICAgICAgICAuZmluZCgnLnNsaWRlLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZChgW2RhdGEtc2xpY2staW5kZXg9XCIke3NsaWRlQ291bnR9XCJdYClcbiAgICAgICAgICAgICAgICAuZmluZCgnLnNsaWRlLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0U2xpZGUgKyAxID09IHNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnW2RhdGEtc2xpY2staW5kZXg9XCItMVwiXScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5zbGlkZS1jb250ZW50JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ1tkYXRhLXNsaWNrLWluZGV4PVwiLTFcIl0nKVxuICAgICAgICAgICAgICAgIC5maW5kKCcuc2xpZGUtY29udGVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICAkKCcuc2xpZGVyID4gLnNsaWNrLWRvdHMnKS5jaGlsZHJlbignbGknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGN1clNsaWRlOyBpIDwgc2xpZGVDb3VudCArIDE7IGkrKykge1xuICAgICAgICAgICAgJCgnLnNsaWNrLWRvdHMnKS5jaGlsZHJlbignbGknKS5lcShpKS5jaGlsZHJlbignYnV0dG9uJykuY3NzKCdiYWNrZ3JvdW5kJywgJyM0OTRkNTInKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vICQoJy5lbGVtZW50b3ItaW1hZ2UtY2Fyb3VzZWwgPiAuc2xpY2stZG90cywgLmNvbXBvbnktc2xpZGVyLWNhcm91c2VsID4gLnNsaWNrLWRvdHMnKVxuICAgIC8vICAgICAuY2hpbGRyZW4oJ2xpJykuZXEoMCkuY3NzKCdmbGV4LWdyb3cnLCAnMicpXG5cbiAgICAkKCcuZWxlbWVudG9yLWltYWdlLWNhcm91c2VsID4gLnNsaWNrLWRvdHMsIC5jb21wb255LXNsaWRlci1jYXJvdXNlbCA+IC5zbGljay1kb3RzJylcbiAgICAgICAgLmNoaWxkcmVuKCdsaScpLmNoaWxkcmVuKCdidXR0b24nKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmZicpXG5cbiAgICAkKCcuZWxlbWVudG9yLWltYWdlLWNhcm91c2VsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJvb3QgPSAkKHRoaXMpLnBhcmVudHMoJy5lbGVtZW50b3Itd2lkZ2V0LWltYWdlLWNhcm91c2VsJylcbiAgICAgICAgbGV0IHNldHRpbmdzID0gcm9vdC5kYXRhKCdzZXR0aW5ncycpXG5cbiAgICAgICAgaWYgKHNldHRpbmdzLm5hdmlnYXRpb24gPT0gJ2JvdGgnIHx8IHNldHRpbmdzLm5hdmlnYXRpb24gPT0gJ2Fycm93cycpIHtcbiAgICAgICAgICAgIHJvb3QuZmluZCgnLmVsZW1lbnRvci1pbWFnZS1jYXJvdXNlbCcpLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXYtY3VzdG9tIHNsaWNrLWFycm93LWN1c3RvbVwiPjxzcGFuIGNsYXNzPVwiYnRuLXByZXZcIj48L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHQtY3VzdG9tIHNsaWNrLWFycm93LWN1c3RvbVwiPjxzcGFuIGNsYXNzPVwiYnRuLW5leHRcIj48L3NwYW4+PC9idXR0b24+YClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCcuZWxlbWVudG9yLWltYWdlLWNhcm91c2VsLC5jb21wb255LXNsaWRlci1jYXJvdXNlbCcpLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgIHNsaWRlQ291bnRFbGVtID0gc2xpY2tbJ3NsaWRlQ291bnQnXVxuICAgICAgICBjdXJTbGlkZUVsZW0gPSBuZXh0U2xpZGVcblxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9ncmVzcycpLnN0b3AoKS5jc3MoJ3dpZHRoJywgJzAnKVxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuY3NzKCdmbGV4LWdyb3cnLCAnMScpXG4gICAgICAgICQodGhpcykuZmluZCgnLnNsaWNrLWRvdHMnKS5jaGlsZHJlbignbGknKS5lcShjdXJyZW50U2xpZGUpLmZpbmQoJy5iYXInKS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKVxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuZXEobmV4dFNsaWRlKS5maW5kKCcuYmFyJykuYWRkQ2xhc3MoJ3Byb2dyZXNzJylcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRTbGlkZTsgaSsrKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzIGxpJykuZXEoaSkuZmluZCgnYnV0dG9uJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNERDFGM0InKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IG5leHRTbGlkZTsgaSA8IHNsaWRlQ291bnRFbGVtOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNsaWNrLWRvdHMgbGknKS5lcShpKS5maW5kKCdidXR0b24nKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmZicpXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9ncmVzcycpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgfSwgY29uZmlnLnNsaWRlckRlbGF5LCAnbGluZWFyJywgKCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzKS5zbGljaygnc2xpY2tOZXh0JylcbiAgICAgICAgfSlcblxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1kb3RzIGxpJykuZXEobmV4dFNsaWRlKS5jc3MoJ2ZsZXgtZ3JvdycsICcyJylcbiAgICB9KVxuXG4gICAgJCgnLmVsZW1lbnRvci1pbWFnZS1jYXJvdXNlbCA+IC5zbGljay1kb3RzLCAuY29tcG9ueS1zbGlkZXItY2Fyb3VzZWwgPiAuc2xpY2stZG90cycpLmNoaWxkcmVuKCdsaScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gY3VyU2xpZGVFbGVtOyBpIDwgc2xpZGVDb3VudEVsZW0gKyAxOyBpKyspIHtcbiAgICAgICAgICAgICQoJy5zbGljay1kb3RzJykuY2hpbGRyZW4oJ2xpJykuZXEoaSkuY2hpbGRyZW4oJ2J1dHRvbicpLmNzcygnYmFja2dyb3VuZCcsICcjZmZmJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBBZnRlciBjaGFuZ2Ugc2xpY2tcbiAgICAkKCcuc2xpZGVyJykub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUpIHtcbiAgICAgICAgaWYgKCQoJy5zbGlkZXIgLnNsaWNrLW5leHQ6aG92ZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5zbGlkZXIgLnNsaWNrLW5leHQnKS50cmlnZ2VyKCdtb3VzZWVudGVyJylcbiAgICAgICAgfSBlbHNlIGlmICgkKCcuc2xpZGVyIC5zbGljay1wcmV2OmhvdmVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuc2xpZGVyIC5zbGljay1wcmV2JykudHJpZ2dlcignbW91c2VlbnRlcicpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA9PSAwKSB7XG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cycpLmNoaWxkcmVuKCdsaScpLmNoaWxkcmVuKCdidXR0b24nKS5jc3MoJ2JhY2tncm91bmQnLCAnIzQ5NGQ1MicpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g0KHQu9Cw0LTQtdGAINC90LAg0LPQu9Cw0LLQvdC+0LlcbiAgICAkKCcuc2xpY2stbmV4dC1jdXN0b20nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnNsaWRlcicpLnNsaWNrKCdzbGlja05leHQnKVxuICAgIH0pXG5cbiAgICAvLyDQodC70LDQtNC10YAg0L3QsCDQs9C70LDQstC90L7QuVxuICAgICQoJy5zbGljay1wcmV2LWN1c3RvbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuc2xpZGVyJykuc2xpY2soJ3NsaWNrUHJldicpXG4gICAgfSlcblxuICAgICQoJy5zbGljay1uZXh0LWN1c3RvbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdzbGlja05leHQnKVxuICAgIH0pXG5cbiAgICAvLyDQodC70LDQtNC10YAg0L3QsCDQs9C70LDQstC90L7QuVxuICAgICQoJy5zbGljay1wcmV2LWN1c3RvbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdzbGlja1ByZXYnKVxuICAgIH0pXG5cbiAgICAvLyBIb3ZlciBvbiBuZXh0IGJ0bjogbGlnaHRcbiAgICAkKCcuc2xpY2stbmV4dC1jdXN0b20nKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnNsaWRlciAuc2xpY2stY3VycmVudCcpLm5leHQoKS5maW5kKCcuc2xpZGUtY29udGVudCcpLmFkZENsYXNzKCdsaWdodCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5zbGlkZXIgLnNsaWNrLWN1cnJlbnQnKS5uZXh0KCkuZmluZCgnLnNsaWRlLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnbGlnaHQnKVxuICAgIH0pXG4gICAgJCgnLnNsaWNrLW5leHQtY3VzdG9tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5zbGlkZXIgLnNsaWNrLWN1cnJlbnQnKS5uZXh0KCkuZmluZCgnLnNsaWRlLWNvbnRlbnQnKS50b2dnbGVDbGFzcygnbGlnaHQnKVxuICAgIH0pXG5cbiAgICAvLyBIb3ZlciBvbiBwcmV2IGJ0bjogbGlnaHRcbiAgICAkKCcuc2xpY2stcHJldi1jdXN0b20nKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnNsaWRlciAuc2xpY2stY3VycmVudCcpLnByZXYoKS5maW5kKCcuc2xpZGUtY29udGVudCcpLmFkZENsYXNzKCdsaWdodCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5zbGlkZXIgLnNsaWNrLWN1cnJlbnQnKS5wcmV2KCkuZmluZCgnLnNsaWRlLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnbGlnaHQnKVxuICAgIH0pXG4gICAgJCgnLnNsaWNrLXByZXYtY3VzdG9tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5zbGlkZXIgLnNsaWNrLWN1cnJlbnQnKS5wcmV2KCkuZmluZCgnLnNsaWRlLWNvbnRlbnQnKS50b2dnbGVDbGFzcygnbGlnaHQnKVxuICAgIH0pXG5cbiAgICAvL3JlZmFjdG9yIHNsaWNrIGJ1dHRvbnNcbiAgICAkKCcuc2xpZGUtaG9tZScpLmZpbmQoJy5zbGljay1hcnJvdycpLmVtcHR5KClcbiAgICAkKCcuc2xpZGUtaG9tZScpLmZpbmQoJy5zbGljay1uZXh0JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJidG4tbmV4dFwiPjwvc3Bhbj4nKVxuICAgICQoJy5zbGlkZS1ob21lJykuZmluZCgnLnNsaWNrLXByZXYnKS5odG1sKCc8c3BhbiBjbGFzcz1cImJ0bi1wcmV2XCI+PC9zcGFuPicpXG4gICAgJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stYXJyb3cnKS5lbXB0eSgpXG4gICAgJCgnLmZlZWRfc2xpY2snKS5maW5kKCcuc2xpY2stbmV4dCcpLmh0bWwoJzxzcGFuIGNsYXNzPVwiYnRuLW5leHRcIj48L3NwYW4+JylcbiAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJy5zbGljay1wcmV2JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJidG4tcHJldlwiPjwvc3Bhbj4nKVxuXG5cbiAgICAvL0luaXQgc2xpY2sgb24gYmxvY2sgZmVlZGJhY2tcbiAgICAkKCcjc2xpY2tfZmVlZCcpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA4LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogOCxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxODAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDcsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNzAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTU4MCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQ0MCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTMwMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE0MCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0pLm9uKCdicmVha3BvaW50JywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBicmVha3BvaW50KSB7XG4gICAgICAgICQoJy5mZWVkX3NsaWNrJykuZmluZCgnLnNsaWNrLWFycm93JykuZW1wdHkoKVxuICAgICAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJy5zbGljay1uZXh0JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJidG4tbmV4dFwiPjwvc3Bhbj4nKVxuICAgICAgICAkKCcuZmVlZF9zbGljaycpLmZpbmQoJy5zbGljay1wcmV2JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJidG4tcHJldlwiPjwvc3Bhbj4nKVxuICAgIH0pLnRyaWdnZXIoJ2JyZWFrcG9pbnQnKVxuXG5cbiAgICAvLyDQl9Cw0L/Rg9GB0Log0YHQsNC70LTQtdGA0LAg0L/RgNC4INC/0L7Qv9C+0LTQv9C90LjQtSDQsiDRjdC60YDQsNC9INC/0YDQvtGB0LzQvtGC0YDQsFxufSlcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5cbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgY29uZmlnLndiYmwgPSAkKCcuZ3V0dGVyLXNpemVyJykud2lkdGgoKVxuICAgICQoJy5pdGVtLW1hbicpLmNzcygnbWFyZ2luLWJvdHRvbScsIGNvbmZpZy53YmJsKVxuXG4gICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRfZGV0YWlsJylcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1NjAgJiYgZWwpIHtcbiAgICAgICAgbGV0IHdfZWwgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcbiAgICAgICAgJCgnLmJ0bi1tb2IgYScpLndpZHRoKHBhcnNlSW50KHdfZWwud2lkdGgpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5idG4tbW9iIGEnKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgfVxuXG59KS50cmlnZ2VyKCdyZXNpemUnKVxuIiwiaW1wb3J0ICdAL2pzL2luZGV4LmpzJ1xuaW1wb3J0ICdAL3N0eWxlL2luZGV4LnNjc3MnXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBREE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFEQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQURBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUF2T0E7QUFnUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMvV0E7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNYQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFwREE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUNEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9