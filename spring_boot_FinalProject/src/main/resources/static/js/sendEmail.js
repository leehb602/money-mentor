/**
 * sendEmail.js
 */
 
 $(document).ready(function() {
 	var userPhone;
 	
 	// 인증번호 받기 버튼 눌렀을 때
 	$('#authBtn').on('click', function() {
 		
 		userPhone = $('#hp1').val() + "-" + $('#hp2').val() + "-" + $('#hp3').val();
 	
 		if($('#userEmail').val()=="") {
 			alert("이메일을 입력해주세요");
 		} else {
 			$.ajax({
				type:"post",
				url:"/authMail",
				data:{"email":$('#userEmail').val(),
					  "userName":$('#userName').val(),
					  "userPhone":userPhone,},
				dataType:"text",
				success:function(result){
					alert(result);
				},	
				error:function(){
					alert("error: 관리자에게 문의하세요");
				}
			}); // ajax 종료
 		}
 	});
 	
 	// 확인 버튼 눌렀을 때
 	$('#checkBtn').on('click', function() {
 	
 		userPhone = $('#hp1').val() + "-" + $('#hp2').val() + "-" + $('#hp3').val();
 	
 		if($('#emailCheck').val()=="") {
 			alert("인증번호를 입력해주세요");
 		} else {
 			$.ajax({
				type:"post",
				url:"/authNumCheck",
				data:{"authNum":$('#emailCheck').val(),
					  "userName":$('#userName').val(),
					  "userPhone":userPhone,},
				dataType:"text",
				success:function(result){
					if(result == "success") {
						alert("인증되었습니다");
					} else {
						alert("인증번호가 일치하지 않습니다");
					}
				},	
				error:function(){
					alert("error: 관리자에게 문의하세요");
				}
			}); // ajax 종료
 		}
 	});
 });