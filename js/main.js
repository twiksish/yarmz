/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();

    $(function() {
        $('.jcarousel').jcarousel({
            'wrap': 'circular',
            animation: {
                duration: 1000,
                complete: function(){
                    setTimeout(function(){console.log('123')},500)
                },
            }
        });
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '" onClick="return false;"></a>';                    }
    });

    $('.jcarousel').jcarousel({
    })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;

});
