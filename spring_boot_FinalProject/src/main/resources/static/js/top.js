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
    
    window.onscroll = function() {progressBar()};
    
    function progressBar(){
    	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) *100;
        document.getElementById('indicator').style.width = scrolled+'%';
    }
   
})
