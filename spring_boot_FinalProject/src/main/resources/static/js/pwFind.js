/**
 * pwFind.js
 */
 
  $(document).ready(function() {
 	$('#pwForm').on('submit', function() {
 		event.preventDefault();
 		
 		var formData = $(this).serialize();
 		var userName = $('#userName').val();
 		var userId = $('#userId').val();
 		
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
					if(result == "success"){
						location.href="/user/findPwSuccess/"+userId;
					} else {
						$('#findError').text("일치하는 정보가 없습니다.");
					}
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