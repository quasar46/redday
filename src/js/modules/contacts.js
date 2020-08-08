(function($) {

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
        var $markers = $el.find('.marker')

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
                opened: true,
            },
            styles: [
                {
                    'stylers': [{
                        'color': '#0d1319'
                    }]
                },
                {
                    'elementType': 'geometry.stroke',
                    'stylers': [{
                        'visibility': 'off'
                    }]
                },
                {
                    'elementType': 'labels.icon',
                    'stylers': [
                        {
                            'color': '#ff042f'
                        },
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'elementType': 'labels.text',
                    'stylers': [{
                        'color': '#b71836'
                    }]
                },
                {
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#b71836'
                    }]
                },
                {
                    'elementType': 'labels.text.stroke',
                    'stylers': [{
                        'color': '#000000'
                    }]
                },
                {
                    'featureType': 'administrative',
                    'elementType': 'geometry',
                    'stylers': [{
                        'color': '#757575'
                    }]
                },
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.icon',
                    'stylers': [{
                        'visibility': 'off'
                    }]
                },
                {
                    'featureType': 'administrative.country',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#9e9e9e'
                    }]
                },
                {
                    'featureType': 'administrative.locality',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#bdbdbd'
                    }]
                },
                {
                    'featureType': 'landscape',
                    'stylers': [{
                        'visibility': 'simplified'
                    }]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'visibility': 'on'
                    }]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {
                            'color': '#2a3742'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'stylers': [{
                        'color': '#0d1319'
                    }]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.icon',
                    'stylers': [{
                        'color': '#f98844'
                    }]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#757575'
                    }]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'geometry',
                    'stylers': [{
                        'color': '#2a3742'
                    }]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#2a3742'
                    }]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels.text.stroke',
                    'stylers': [{
                        'color': '#2a3742'
                    }]
                },
                {
                    'featureType': 'road',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'color': '#010302'
                    }]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#8a8a8a'
                    }]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'geometry',
                    'stylers': [{
                        'color': '#010302'
                    }]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry',
                    'stylers': [{
                        'color': '#3c3c3c'
                    }]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                            'color': '#010302'
                        },
                        {
                            'saturation': -100
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry.stroke',
                    'stylers': [{
                        'visibility': 'off'
                    }]
                },
                {
                    'featureType': 'road.highway.controlled_access',
                    'elementType': 'geometry',
                    'stylers': [{
                        'color': '#4e4e4e'
                    }]
                },
                {
                    'featureType': 'road.local',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#616161'
                    }]
                },
                {
                    'featureType': 'road.local.labels',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#b71836'
                    }]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#757575'
                    }]
                },
                {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': [{
                        'color': '#360c17'
                    }]
                },
                {
                    'featureType': 'water',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#360c17'
                    }]
                }
            ]
        }
        var map = new google.maps.Map($el[0], mapArgs)

        // Add markers.
        map.markers = []
        $markers.each(function() {
            initMarker($(this), map)
        })

        // Center map based on markers.
        centerMap(map)

        // Return map instance.
        return map
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
        var lat = $marker.data('lat')
        var lng = $marker.data('lng')
        var latLng = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        }

        // Image
        var image = {
            url: '/wp-content/uploads/2019/12/5-1.svg',
            size: new google.maps.Size(150, 55),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 50)
        }

        // Create marker instance.
        var marker = new google.maps.Marker({
            position: latLng,
            icon: image,
            map: map
        })

        // Append to reference for later use.
        map.markers.push(marker)

        // If marker contains HTML, add it to an infoWindow.
        if ($marker.html()) {

            // Create info window.
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            })

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
        var bounds = new google.maps.LatLngBounds()
        map.markers.forEach(function(marker) {
            bounds.extend({
                lat: marker.position.lat(),
                lng: marker.position.lng()
            })
        })

        // Case: Single marker.
        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter())

            // Case: Multiple markers.
        } else {
            map.fitBounds(bounds)
        }
    }

    // Render maps on page load.
    $(document).ready(function() {
        $('.acf-map').each(function() {
            var map = initMap($(this))
        })
    })

})(jQuery)
