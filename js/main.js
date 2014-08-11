/*
 * Placeholder fix init
 */
function carouselItemWidth() {
    $('.jcarousel__list__item').each(function(){
        $(this).css({
            'width': $(window).width() + 'px'
        });
    });
}

$(document).on('ready',carouselItemWidth);
$(window).on('resize', carouselItemWidth);


$(document).on('ready', function(){

    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();





    $(function() {
        $('.jcarousel').jcarousel({
            'wrap': 'circular',
            animation: {
                duration: 1000,
//                complete: function(){
//                    setTimeout(function(){
//                        console.log('it works!')
//                    },500)
//                },
            }
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '" onClick="return false;"></a>';                    }
    });

//    $('.jcarousel').jcarousel({
//
//    })


    $(".fancybox").fancybox();

});
