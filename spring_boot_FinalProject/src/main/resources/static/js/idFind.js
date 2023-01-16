/**
 * idFind.js
 */
 
 $(document).ready(function() {
 	$('#idFindForm').on('submit', function() {
 		event.preventDefault();
 		
 		var formData = $(this).serialize();
 		
 		$.ajax({
			type:"post",
			url:"/user/findId",
			data:formData,
			success:function(result){
				$('.textBox').val("");
				$('#findIdBox').html(result);
			},
			error:function(){
				alert("오류발생! 관리자에게 문의 바랍니다.");
			}
		});
		
 	});
 	
 	$('#hp1').on('keyup', function() {
		if ($(this).val().length == 3) {
			$(this).next().focus();
		}
	});


	$('#hp2').on('keyup', function() {
		if ($(this).val().length == 4) {
			$('#hp3').focus();
		}
	});
 
 });