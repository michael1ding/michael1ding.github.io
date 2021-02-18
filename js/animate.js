$(window).on("load",function() {
    function fade() {
        var animation_height = $('body').innerHeight() * 0.15;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {
            var objectTop = $(this).offset().top;
            var objectBottom = objectTop + $(this).innerHeight();
            var windowBottom = $('body').scrollTop() + $('body').innerHeight();
            var windowTop = $('body').scrollTop();
            console.log(objectBottom, $(this).innerHeight())

            if ( objectTop < windowBottom ) {
                
                if ( objectBottom < windowTop + animation_height ) {
                    console.log(1);
                    $(this).css( {
                        transition: 'opacity 0.85s linear',
                        opacity: 1/((windowBottom - objectTop) * ratio)
                    } );

                } else if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.85s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 0.9s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }

    $('.fade').css( 'opacity', 0 );
    fade();
    $('body').on('scroll', function() {
        fade();
    });
});