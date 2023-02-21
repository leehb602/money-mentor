/**
 * idFind.js
 */
 
 $(document).ready(function() {
 	var userPhone;
 	var authCheck = "N";
 	
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
					  "userPhone":userPhone},
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
						authCheck = "Y";
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
 	
 	// 찾기 버튼 눌렀을 때
 	$('#idFindForm').on('submit', function() {
 		event.preventDefault();
 		
 		var formData = $(this).serialize();
 		var userName = $('#userName').val();
 		var userPhone = $('#hp1').val() + "-" + $('#hp2').val() + "-" + $('#hp3').val();
 		
 		if($('#userName').val()=="") {
 			alert("이름을 입력해주세요");
 		} else if(authCheck == "N") {
 			alert("이메일 인증을 진행해주세요");
 		} else {
 			$.ajax({
			type:"post",
			url:"/user/findId",
			data:formData,
			success:function(result){
				$('.textBox').val("");
				if(result == "success"){
					location.href="/user/findIdSuccess/"+userName+"/"+userPhone;
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