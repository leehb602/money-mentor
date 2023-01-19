/**
 * none.js
 */

function toggleBtn1(cardId){  
   // alert(cardId);
// alert($(".lists__item").val());
  $.ajax({
 			type:"post",
 			url:"/cardallList",

 			success:function(result){
 			
 			 // 토글 할 버튼 선택 (btn1)
			  const btn1 = document.getElementById('btn1');
			  // const cardList = document.getElementById('btn1');
			  
			  // btn1 보이기 (display: block)
			  if(btn1.style.display == 'none') {
			    btn1.style.display = 'block';
 												
 			}
  }

}); // ajax 종료 

 		$.ajax({
 			type:"post",
 			url:"/CardCompare",
 			data:{"cardId": cardId},	
 				
 			success:function(result){
 		
 			
 			$('.prod_list').append('<div id="oo">' + '<img class="cardImg" src=' + result.cardImgUrl   + '>' + '<br>' +
									result.cardName + '</div>');
 			
 												
 			},
 			error:function(){
 				alert("실패");
 			}
 		}); // ajax 종료 

    }