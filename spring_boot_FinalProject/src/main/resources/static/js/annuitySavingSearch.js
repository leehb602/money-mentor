/**
 * annuitySavingSearch.js
 */

 $(document).ready(function(){
 
$.ajax({
			
 			type:"post",
 			url:"/annuitySavingListAll",
 			
 			success:function(result){
			  $('#searchResultBox').html(result);
			},
 			error:function(){
 				alert("실패");
 			}
 		}); //ajax 종료
 
 	$('#AnnuitySavingList').on('submit', function(){ 	
 		event.preventDefault(); 		
 		
 		var prdName = $('#prdName').val();
 		var prdtTypeName = $('input:radio[name="prdtTypeName"]:checked').val();
 		var pnsnKindName = $('input:radio[name="pnsnKindName"]:checked').val();
 		//var formData = $(this).serialize();
 		alert("시작2");
 		//alert(formData);
 		$.ajax({
 			type:"post",
 			url:"/annuitySavingSearch",
 			data: {"prdName":prdName,
					"prdtTypeName":prdtTypeName,
					"pnsnKindName":pnsnKindName
					},
 			success:function(result){
			  $('#searchResultBox').html(result);
			},
 			error:function(){
 				
 				alert("실패");
 			}
 		}); // ajax 종료 	
 	});// submit 종료
});