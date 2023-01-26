/**
 * 
*/
function productCompare1(){ 

//상품 비교 모달 창
var cardId = $('.prod_list .oo .chkDelete').get();
var cardImgUrl = $('.prod_list  .oo .cardImg').get();
var cardName = $('.prod_list  .oo .cardName1').get();
var cardDes = $('.oo .desc').get();
var cardFee = $('.prod_list .oo .fee').get();
var cardUrl = $('.prod_list .oo .button .button--wayra').get();

var hun = '현대';


$('.body-contentbox').append(
	'<table class="modallist">' +
		'<thead>'+
			'<tr>'+
				'<th class="imgtr">' + 'CARD NAME' +'</th>' +
        		'<th class="idtr">' +'CARD ID'+'</th>' +
        		'<th class="destr" >' +'CONTENT'+'</th>'+
        		'<th>' +'FEE'+'</th>'+
		'</thead>'+
		'<tbody class="tb">'+
			 
		'</tbody>'+
			 	 
	'</table>');
 
 for(var i=0; i< cardId.length; i++){
	$('.tb').append(
	
			
			 '<tr>'+
			 	
			 	 '<th class="imgth">'+'<img class="cardImg" src='+cardImgUrl[i].src+'>'+'<br>'+cardName[i].value+'</th>'+
			 	  '<th class="idth">'+ cardId[i].value + '</th>'+
			 	   '<th class="desth">'+ cardDes[i].value + '</th>'+
			 	    '<th class="feeth">'+ '<fmt:formatNumber value="'+cardFee[i].value+'"pattern="#,###"/>' +cardFee[i].value + ' ₩'+ '</th>'+
			 	
			 '</tr>'+
			 '<div class="line"></div>'
			 
			 );
	



/*
	$('.body-contentbox').append('<div class="qq">' +'<img class="cardImg" src='  +cardImgUrl[i].src + '>' + '<br>' +  '</div>');
	$('.body-contentbox').append('<div class="qq">' + cardId[i].value +'<br>' +  '</div>');
	$('.body-contentbox').append('<div class="qq">' + cardDes[i].value +'<br>' +  '</div>');
	$('.body-contentbox').append('<div class="qq">' + cardName[i].value +'<br>' +  '</div>');
	$('.body-contentbox').append('<i class="annual_fee1">'+ '<fmt:formatNumber value="'+cardFee[i].value+'"pattern="#,###"/>' +cardFee[i].value + ' ₩'+'</i>');
	*/
}
	// 토글 할 버튼 선택 (btn1)

	const popup = document.getElementById('popup');
	// const cardList = document.getElementById('btn1');
				  
	// btn1 보이기 (display: block)
	if(popup.style.display == 'none') {
	popup.style.display = 'flex';
	} 

}  


/*$.ajax({
 			type:"post",
 			url:"/CardComparemodal",
 			data:{"cardId": cardId},	
 			success:function(result){
 			
 			// var refine = $("#oo").html(result);
 			  alert(refine);
 			//console.log(result);
            console.log(refine);
           	console.log(typeof(refine));
            $('.body-contentbox').append(result.cardImgUrl);				
 			},
 			error:function(){
 			
 				alert("실패");
 			}
 		}); // ajax 종료 
*/


 
$(function(){
	  $("#confirm").click(function(){
	 
	      modalClose(); //모달 닫기 함수 호출
       	 $( '.modallist').empty();
      //컨펌 이벤트 처리
  });
  $("#modal-open").click(function(){        
      $("#popup").css('display','flex').hide().fadeIn();
      //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
  });
  $("#close").click(function(){
   
   
      modalClose(); //모달 닫기 함수 호출
        $( '.modallist').remove();
  });
  function modalClose(){
      $("#popup").fadeOut(); //페이드아웃 효과
  }
  
});




