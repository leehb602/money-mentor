/**
 *  index.js
*/

$(document).ready(function(){
    $('.fin_see').hide();
    $('#fin_card').css('color', 'blue');
    $('.cardSee').show();
    $finBtn = $('.finBtn');

    var fin_see = ['cardSee', 'loanSee', 'sdSee', 'annSee'];
    $finBtn.each(function(e){
        $(this).on('click',function(){
            $('.finBtn').css('color', 'black');
            $(this).css('color', 'blue');
            $('.fin_see').hide();
            $('.'+fin_see[e]).show();
        })
    });
});
