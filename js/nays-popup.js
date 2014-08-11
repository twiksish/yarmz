
/*
 * Popup
 */

function popupShow(popup){
    var pageScrolledTop = '-' + $(window).scrollTop() + 'px';
    var pageScrolledLeft = '-' + $(window).scrollLeft() + 'px';
    var pageWidth = $('.page').width() + 'px';

    $('.page').css('position', 'fixed')           // hide paged
              .css('width',pageWidth)
              .css('top', pageScrolledTop )
              .css('left', pageScrolledLeft);

    popup.fadeIn();

    $(window).scrollTop(0);
    $(window).scrollLeft(0);

}


function popupHide(popup){
    if( ! popup ) {           //in case of Esc or something
        popup = $('.nays-popup');
    }

    var pageScrolledTop = -1 * parseInt( $('.page').css('top') );
    var pageScrolledLeft = -1 * parseInt( $('.page').css('left') );

    popup.fadeOut(300,function(){                    //hide popup THAN show page
        $('.page').css('position', '')
            .css('width','')
            .css('top', '' )
            .css('left', '');

        $(window).scrollTop(pageScrolledTop);   // (1)
        $(window).scrollLeft(pageScrolledLeft);  // (1)
    });

}


$(document).on('ready',function(){

    /* show popup by handler click */

    $('[data-popup]').on('click', function(event){
        event.preventDefault();
        popupShow( $($(this).data('popup')) );
    })


    /* hide popup by window close click */

    $('.nays-popup__container__viewport__slot__close').on('click', function(event){
        event.preventDefault();
        popupHide( $(this).parents('.nays-popup') );
    });


    /* hide popup by overlay click */

    $('.nays-popup__container__overlay').on('click', function(){
        popupHide( $(this).parents('.nays-popup') );
    });


    /* hide popup by Esc push */

    $(document).on('keyup', function(event) {
        if (event.keyCode == 27) {
            popupHide();
        }
    });

});

