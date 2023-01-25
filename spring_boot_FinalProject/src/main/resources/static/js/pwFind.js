/**
 * pwFind.js
 */
 
  $(document).ready(function() {
 	$('#pwForm').on('submit', function() {
 		event.preventDefault();
 		
 		var formData = $(this).serialize();
 		
 		if($('#userName').val()=="") {
 			alert("이름을 입력해주세요");
 		} else if($('#userId').val()=="") {
 			alert("아이디를 입력해주세요");
 		} else {
 			$.ajax({
				type:"post",
				url:"/user/findPassword",
				data:formData,
				success:function(result){
					$('.textBox').val("");
					$('#findPwBox').html(result);
				},
				error:function(){
					alert("오류발생! 관리자에게 문의 바랍니다.");
				}
			}); // ajax 끝
 		}
		
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