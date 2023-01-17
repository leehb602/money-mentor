/**
 *  introduce.js
 */

$(document).ready(function(){
    $('.box3_y').hide();
    $('#year23').css('color', 'white');
    $('.y23').show();
    $ybtn=$('.ybtn');

    var box3_y = ['y23', 'y22'];
    $ybtn.each(function(index){
        $(this).on('click', function(){
            $('.ybtn').css('color', 'rgb(112,112,112)');
            $(this).css('color', 'white');
            $('.box3_y').hide();
            $('.'+box3_y[index]).show();
        });
    });
});

