/**
 * joinForm.js
 */
 
 $(document).ready(function() {
	var $id = $('#id');
	var $idEmpty = $('#idEmpty');
	var $modal = $('#modal-overlay');

	$modal.hide();

	// ID중복확인 버튼을 눌렀을 때,
	$('#idcheck').on('click', function() {
		event.preventDefault();
		if ($id.val() == "") {
			$idEmpty.removeClass('possibility');
			$idEmpty.text('아이디를 입력해주세요');
			$idEmpty.addClass('error');
			$id.focus();
		} else {
			$.ajax({
			type:"post",
			url:"idCheck",
			data:{"userId":$('#id').val()},
			dataType:"text",
			success:function(result){
				if(result == "success"){
					$idEmpty.text('사용가능한 아이디입니다');
					$idEmpty.addClass('possibility');
				}else {
					$idEmpty.removeClass('possibility');
					$idEmpty.text('이미 존재하는 아이디입니다');
					$idEmpty.addClass('error');
					$id.focus();
				}
			},
			error:function(){
				alert("실패");
			}
		});
		}
	})

	// 가입하기 버튼을 눌렀을 때,
	$('#joinBtn').on('click', function() {
		event.preventDefault();
		if ($id.val() == "") {
			$idEmpty.text('아이디를 입력해주세요');
			$idEmpty.addClass('error');
			$id.focus();
			return false;
		}

		if ($('#password').val() == "") {
			$('#passwordEmpty').text('비밀번호를 입력해주세요');
			$('#passwordEmpty').addClass('error');
			$('#password').focus();
			return false;
		}
		
		if ($('#passwordcheck').val() == "") {
			$('#passcheckEmpty').text('비밀번호 확인을 입력해주세요');
			$('#passcheckEmpty').addClass('error');
			$('#passwordcheck').focus();
			return false;
		}

		if ($('#name').val() == "") {
			$('#nameEmpty').text('이름을 입력해주세요');
			$('#nameEmpty').addClass('error');
			$('#name').focus();
			return false;
		}
		
		if ($('#email').val() == "") {
			$('#emailEmpty').text('이메일을 입력해주세요');
			$('#emailEmpty').addClass('error');
			$('#email').focus();
			return false;
		}

		if ($('#hp1').val().length < 3 || $('#hp2').val().length < 4 || $('#hp3').val().length < 4) {
			$('#phoneNumEmpty').text('휴대폰 번호를 입력해주세요');
			$('#phoneNumEmpty').addClass('error');
			return false;
		} else {
			$('#phoneNumEmpty').text('');
			$('#phoneNumEmpty').removeClass('error');
		}

		// 조건이 모두 성립하면 모달창 출력
		$modal.fadeIn();
	});

	$("#cancle").click(function() {
		$modal.fadeOut();
	})

	$('#consent').on('click', function() {
		var formData = new FormData($('#joinForm')[0]);
		
		$.ajax({
		type:"post",
		url:"/join/userJoin",
		processData:false,
		contentType:false,
		data:formData,
		success:function(result){
			$modal.fadeOut();
			location.href="/";
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

	// 포커스가 해제되었을 때,
	var arreng = ["id","password","passcheck","name","email"];
	var arrko = ["아이디","비밀번호","비밀번호 확인","이름","이메일"];
	$('.essential').each(function(index) {
		$(this).on('blur', function() {
			if ($(this).val() == "") {
				$('#'+ arreng[index] +'Empty').text(arrko[index] + '를 입력해주세요');
				$('#'+ arreng[index] +'Empty').addClass('error');
			} else {
				$('#'+ arreng[index] +'Empty').text('');
				$('#'+ arreng[index] +'Empty').removeClass('error');
			}
		});
	});
});