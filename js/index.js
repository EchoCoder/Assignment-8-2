/* global $ */
$('.with-caption').magnificPopup({
    type: 'image',

    image: {
        verticalFit: true,
        titleSrc: function () {
        }
    },

    gallery: {
        enabled: true
    },

    callbacks: {
        open: function () {
            this.wrap.on('click.pinhandler', function () {
                
            });
        },
        beforeClose: function () {
            
        }
    }

});
