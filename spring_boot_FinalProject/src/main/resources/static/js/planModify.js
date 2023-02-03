/**
 * 
 */
 
 $(document).ready(function(){
 	//일정 수정하기
	$('.calender-mod-btn').on('click', function(){
		
		const prdID = $(this).attr('id').replace("mod-", "");
		
		const name = $('#prdName');
		const subDate = $('#calSubDate');
		const transfer = $('#calTransfer');
		const maturity = $('#calMaturity');
		const payment = $('#calPayment');
		
		let prdName = $('#prdName').val();
		let calSubDate = $('#calSubDate').val();
		let calTransfer = $('#calTransfer').val();
		let calMaturity = $('#calMaturity').val();
		let calPayment = $('#calPayment').val();
		
		console.log(calSubDate);
		
		if(prdName.length == 0){
			prdName = name.attr("placeholder");
		}
		if(calTransfer.length == 0){
			calTransfer = transfer.attr("placeholder");
		}
		if(calMaturity.length == 0){
			calMaturity = maturity.attr("placeholder");
		}
		if(calPayment.length == 0){
			calPayment = payment.attr("placeholder");
		}
		
		$.ajax({
			url:`/profile/calender/modifyPlan/${prdID}`,
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
				alert("일정을 수정했습니다.");	
				opener.parent.location.reload();
 				window.close();
			},
		});
	});
 });