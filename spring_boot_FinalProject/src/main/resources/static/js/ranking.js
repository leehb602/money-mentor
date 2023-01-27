/**
 *  ranking
 */


$(document).ready(function(){
   
    $('.detail').hide();
    $('.213').show();
    
    var cardInfo = ['213', '212', '211'] 
   $('.cardIndex_span').each(function(e){
    $(this).on('click',function(){
        $('.detail').hide();
        $('.'+cardInfo[e]).show();
    })
});
});
