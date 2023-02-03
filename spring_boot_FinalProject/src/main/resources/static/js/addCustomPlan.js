/**
 * 
 */
 
 $(document).ready(function(){
 	//일정 추가하기
	$('.calender-add-custom-btn').on('click', function(){
		const prdID = "0";
	  	const prdType = $('#prd-type-select option:selected').val();
		
		const name = $('.prdName');
		const subDate = $('.calSubDate');
		const transfer = $('.calTransfer');
		const maturity = $('.calMaturity');
		const payment = $('.calPayment');
		
		console.log(prdType);
		
		if(subDate.val() == ""){
			alert("계약일을 입력해주세요!");
			subDate.focus();
			return false;
		}
		else if(transfer.val() == ""){
			alert("이체일을 입력해주세요!");
			transfer.focus();
			return false;
		}
		else if(maturity.val() == ""){
			alert("만기를 입력해주세요!");
			maturity.focus();
			return false;
		}
		else if(payment.val() == ""){
			alert("이체 금액을 입력해주세요!");
			payment.focus();
			return false;
		}
		
		let prdName = name.val();
		const calSubDate = subDate.val();
		const calTransfer = transfer.val();
		const calMaturity = maturity.val();
		const calPayment = payment.val();
		
		if(prdName.length == 0){
			prdName = "사용자 지정 상품";
		}
		
		$.ajax({
			url:`/profile/calender/sendFormData/${prdType}/${prdID}`,
			type:'POST',
			data:{
				'calSubDate': calSubDate, 
				'calTransfer': calTransfer, 
				'calMaturity': calMaturity, 
				'calPayment': calPayment,
				'prdName': prdName,
			},
			dataType:'text',
			success: function(result){
				alert("일정을 등록했습니다.");	
				
 				const answer = confirm("일정을 더 등록하시겠습니까?");
 				if(answer){
 					location.reload();
 				}
 				else{
					opener.parent.location.reload();
 					window.close();
 				}
			},
		});
	});
 });