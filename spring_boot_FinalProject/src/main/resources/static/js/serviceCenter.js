/**
 *  serviceCenter.js
 */
$(document).ready(function(){ 

    $('.FAQ_ul').hide();
    $('.APBtn1').css('color','red');
    $('.FAQ_ul_1').show();
    
    $APBtn = $('.ans_page_btn');
    
    var ans_page = ['FAQ_ul_1', 'FAQ_ul_6', 'FAQ_ul_11', 'FAQ_ul_16', 'FAQ_ul_21' ];
    
    $APBtn.each(function(e){
        $(this).on('click',function(){
        
            $('.FAQ_ul').hide();
            $('.ans_page_btn').css('color', 'black');
            $(this).css('color', 'red');
            $('.'+ans_page[e]).show();
            
        })
    });

});

