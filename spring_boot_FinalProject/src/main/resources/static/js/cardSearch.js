/**
 * prdNoCheck.js
 */

 		
 $(document).ready(function(){  
 

 
$.ajax({
 			type:"post",
 			url:"/cardallList",
 			
 			data:{"cardId" : $("#cardId").val()},
 			success:function(result){
 			$('#searchResultBox').html(result);
 			
 												
 			},
 			error:function(){
 				alert("실패");
 			}
}); // ajax 종료 
 
 	$('#CardList').on('submit', function(){ 	
 		event.preventDefault(); 		
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

 	
 
