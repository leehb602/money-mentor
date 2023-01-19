/**
 * savingSearch.js
 */

 $(document).ready(function(){

 
$.ajax({
 			type:"post",
 			url:"/savingListAll",
 			
 			success:function(result){
 			 
			  $('#searchResultBox').html(result);
			},
 			error:function(){
 				alert("실패");
 			}
 		}); //ajax 종료
 
 	$('#SavingList').on('submit', function(){ 	
 	
 		event.preventDefault(); 		
 		
 		var formData = $(this).serialize();
 		
 		$.ajax({
 			type:"post",
 			url:"/savingSearch",
 			data: formData,
 			success:function(result){
			  $('#searchResultBox').html(result);
			},
 			error:function(){
 				alert("실패");
 			}
 		}); // ajax 종료 	
 	});// submit 종료
});