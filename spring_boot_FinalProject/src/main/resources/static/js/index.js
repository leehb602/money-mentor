/**
 *  index.js
*/

$(document).ready(function(){
    $('.fin_see').hide();
    $('#fin_card').css('color', 'red');
    $('.cardSee').show();
    
    $finBtn = $('.finBtn');
    
    var fin_see = ['cardSee', 'loanSee', 'sdSee', 'annSee'];
    $finBtn.each(function(e){
        $(this).on('click',function(){
            $('.finBtn').css('color', 'black');
            $(this).css('color', 'red');
            $('.fin_see').hide();
            $('.'+fin_see[e]).show();
        })
    });
    
    // 카드 ranking
    $.ajax({
        type:"post",
        url:"/cardRandom",
        
        data:{"cardId" : $("#cardId").val()},
        success:function(result){
        $('.card_Img_div').html(result);
                                   
        },
        error:function(){
           alert("실패");
        }
  }); // 카드 ranking 종료 
  
//    // 대출 ranking
//   $.ajax({
//        type:"post",
//        url:"/cardRandom",
        
//        data:{"cardId" : $("#cardId").val()},
//        success:function(result){
//        $('.loan_Img_div').html(result);
                                   
//        },
//        error:function(){
//           alert("실패");
//        }
//  }); // 대출 ranking end

});
