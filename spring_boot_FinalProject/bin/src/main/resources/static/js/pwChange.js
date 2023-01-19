/**
 * pwChange.js
 */
 
  $(document).ready(function() {
 	$('#newPwForm').on('submit', function() {
 		event.preventDefault();
 		
 		if($('#userPassword').val() == $('#pwCheck').val()){
 			var formData = $(this).serialize();
 		
	 		$.ajax({
				type:"post",
				url:"/user/pwChange",
				data:formData,
				success:function(result){
					location.href="/user/loginForm";
				},
				error:function(){
					alert("오류발생! 관리자에게 문의 바랍니다.");
				}
			});
 		} else {
 			alert("비밀번호 확인이 일치하지 않습니다.");
 		}
 			
 	});
 
 });