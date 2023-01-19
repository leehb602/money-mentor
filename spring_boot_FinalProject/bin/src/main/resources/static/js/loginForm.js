/**
 * loginForm.js
 */
 
 $(document).ready(function() {
 	$('#loginBtn').on('click', function() {
 		event.preventDefault();
 		
 		var userId = $('#userId').val(); 	
		var userPassword = $('#userPassword').val();
 		
 		if(userId==""){
 			$('#loginMessage').addClass('error');
 			$('#loginMessage').text('아이디를 입력해주세요');
 			$('#userId').focus();
 		} else if(userPassword=="") {
 			$('#loginMessage').addClass('error');
 			$('#loginMessage').text('비밀번호를 입력해주세요');
 			$('#userPassword').focus();
 		} else {
 			$.ajax({
				type:"post",
				url:"/user/login",
				data:{"id":userId, "pw":userPassword},
				dataType:"text",
				success:function(result){
					if(result == "success"){
						location.href="/";
					}else {
						alert("아이디 또는 비밀번호가 일치하지 않습니다");
					}	
				},	
				error:function(){
					alert("error: 관리자에게 문의하세요");
				}
			}); // ajax 종료
 		}
 		
 	});
 
 });