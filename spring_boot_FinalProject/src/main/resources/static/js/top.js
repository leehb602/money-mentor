/**
 *  top.js
 */
$(document).ready(function(){
    $('.under_span_ul').hide();
    var underList = $('.underList');
	
	var a = 0;
   
    $(underList).on('click',function(){
        if( a == 0){
            $('.under_span_ul').show();
            a = 1;
            
        }else if(a == 1){
            $('.under_span_ul').hide();
            a = 0;
        }
            return false;
        
    });
   
})
