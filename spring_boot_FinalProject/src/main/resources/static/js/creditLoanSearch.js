/**
 * annuitySavingSearch.js
 */

 $(document).ready(function(){
 
$.ajax({
			
 			type:"post",
 			url:"/creditLoanListAll",
 			
 			success:function(result){
			  $('#searchResultBox').html(result);
			},
 			error:function(){
 				alert("실패");
 			}
 		}); //ajax 종료
 
 	$('#CreditLoanList').on('submit', function(){ 	
 		event.preventDefault(); 		
 		
 		var prdName = $('#prdName').val();
 		var joinWay = $('input:radio[name="joinWay"]:checked').val();
 		var crdtTypeName = $('input:radio[name="crdtTypeName"]:checked').val();
 		//var formData = $(this).serialize();
 		alert("시작2");
 		//alert(formData);
 		$.ajax({
 			type:"post",
 			url:"/creditLoanSearch",
 			data: {"prdName":prdName,
					"joinWay":joinWay,
					"crdtTypeName":crdtTypeName
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