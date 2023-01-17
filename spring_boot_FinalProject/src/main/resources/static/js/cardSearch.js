/**
 * prdNoCheck.js
 */

 $(document).ready(function(){  
 


 
 	$('#CardList').on('submit', function(){ 	
 		event.preventDefault(); 		
 		
 		alert($("#cardId").val());
 		
 		$.ajax({
 			type:"post",
 			url:"/cardsearch",
 			data:{"cardId" : $("#cardId").val()},		
 			dataType:"text",
 			
 			success:function(result){
 			$('#searchResultBox').html(result);
 			
 												
 			},
 			error:function(){
 				alert("실패");
 			}
 		}); // ajax 종료 	
 	});// submit 종료
});
 