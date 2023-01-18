/**
 * listMole.js
 */
$(function(){
    $(".lists__item").slice(0, 10).show(); // select the first ten
    $("#js-btn-wrap").click(function(e){ // click event for load more
        e.preventDefault();
        $(".lists__item:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
        
    });
});