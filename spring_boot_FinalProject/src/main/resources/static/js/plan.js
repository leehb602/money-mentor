/**
 * 
 */
 
//일정
jQuery.randerPlan = function(){
	const userID = sid;	
	
	$("#plan-list-toMonth").empty();	
	$("#plan-list-box").empty()
			   
	$.ajax({
        type: 'POST',
        url: '/profile/calender/getPlanData',
        dataType: 'json',
        success: function(result) {

			if(userID == ""){
				$('.warning-text').empty();
				$('#calender-view').append(`
										<div class="warning-text">
											일정을 확인하고 싶다면 로그인을 해주세요
										</div>
									`);
				$('#plan-list-box').append(`
										<div class="warning-text">
											일정을 확인하고 싶다면 로그인을 해주세요
										</div>
									`);	
				$('#plan-view-header').empty();
				$('#plan-view-header').append(`
										<div>
											일정을 확인하고 싶다면 로그인을 해주세요
										</div>
									`);
			}
			else if(result.length == 0){
				$('#calender-view').append(`
										<div>
											등록된 일정이 없습니다. 일정을 등록해주세요.
										</div>
									`);
				$('#plan-list-box').append(`
										<div>
											등록된 일정이 없습니다. 일정을 등록해주세요.
										</div>
									`);
			}
			else{
				//plan-list-box에 미리 추가
				$("#plan-list-box").append(`
									<div id="all-delete">
										<span>모두 삭제</span><input id="all-plan-checkBox" type="checkbox">
									</div>
									`);
			}
			$.each(result, function(index, item){
				let fullDate = item.calSubDate;
				fullDate = fullDate.replace(/-/gi, ".");
				const startYear = Number(fullDate.slice(0,4));
				let month = fullDate.slice(5,7);
				month = Number(month.replace("0", ""));
				let getDate = fullDate.slice(8,10);
				getDate = Number(getDate.replace("0", ""));
				
				const endYear = startYear+item.calMaturity;
				const transferDate = item.calTransfer;
				
				const viewYear = date.getFullYear();
				let viewMonth = date.getMonth();
				
				let planDate = new Date();
				planDate.setFullYear(viewYear);
				planDate.setMonth(viewMonth);
				planDate.setDate(transferDate);
				
				const planDay = planDate.getDay();
				
				viewMonth += 1;

				//아니면 안 보여주기
				if(startYear == viewYear && month > viewMonth){
				}
				else if(endYear == viewYear && month < viewMonth){
				}
				else if(startYear > viewYear && month < viewMonth){
				}
				else if(endYear < viewYear && month > viewMonth){
				}
				//기간에 맞으면 보여주고
				else{
					if(item.prdName != null || item.prdName != ""){
						prdName = item.prdName;
					}else{
						if(item.cardName != null){
							prdName = item.cardName;
						}
						else if(item.insuName != null){
							prdName = i
						}
					}
					
					let plan = `
							<div class="plans">
								<span class="plan-date`;
								
					if(planDay == 0){
						plan += ` sun`;
					}
					else if(planDay == 6){
						plan += ` sat`;
					}
					
					plan += `">${transferDate}</span>`;
					
					$(".year-month").empty();
					
					$(".year-month").append(`
										<div class="plan-list-title">${viewYear}</div>
										<div class="title-month">${viewMonth} 월</div>
										`);
					
					
					let payment = item.calPayment;
					payment = payment.toLocaleString('ko-KR');
					
					
					let allPlan = `
							<div class="all-plans">
								<span class="all-plan-date">${fullDate}</span>
								<span class="all-plan-title">${prdName}</span>
								<span class="all-payment">
									<span>${payment} 원</span>
								</span>
								<input class="plan-list-checkBox" type="checkbox">
							</div>
							`;
					
					plan += `
							<span class="plan-title">${prdName} 이체일 <input class="plan-checkBox" type="checkbox"></span>
	
						`;
					
					plan += `
												<div class="payment">
													<span>${payment} 원</span>
												</div>
																		</div>`;
					
					$("#plan-list-toMonth").append(`
										${plan}
										`);
										
					allPlan += `
							<button class="plan-modify">수정</button>
							<button class="plan-del">삭제</button>
							`
					$("#plan-list-box").append(`
										${allPlan}
										`);
				}
				
			});
        },
    });
}
 
$(document).ready(function(){
	 $(document).on('click', '.plan-checkBox', function(e){
		const planIndex = $('.plan-checkBox').index(this);
		if( $('.plan-checkBox').eq(planIndex).is(':checked')){
			$('.plans').eq(planIndex).css('text-decoration', 'line-through');
			$('.calender-plan').eq(planIndex).css('text-decoration', 'line-through');
		}
		else{
			$('.plans').eq(planIndex).css('text-decoration', 'none');
			$('.calender-plan').eq(planIndex).css('text-decoration', 'none');
		}
	 });
	 
	 $(document).on('click', '#all-plan-checkBox', function(e){
	 
		if( $('#all-plan-checkBox').is(':checked')){
			$('.plan-list-checkBox').attr('checked', true);
		}
		else{
			$('.plan-list-checkBox').attr('checked', false);
		}
	 });
	       
	
	//일정 이름 변경하기
	$(document).on('dblclick', '.calender-plan-name', function(e){
		e.preventDefault();
		
		if($('input[name=prdName]').length > 0){
			$('.prdName').eq(0).focus();
		}
		else{
			const index = $('.calender-plan-name').index(this);
			const prdName = $('.calender-plan-name').eq(index).text();
			const prdID = $('.calender-plan-box').eq(index).attr('id');
			
			console.log("1");
			
			$('.calender-plan-name').eq(index).empty();
			$('.calender-plan-name').eq(index).append(`
											<input placeholder="${prdName}" type="text" id="prdName" name="prdName">
											`)
			console.log("1");
			
			$('.calender-plan-title').eq(index).append(`
											<button type="button" id="${prdID}" class="change-prdName-btn" name="cngPrdName">변경</button>
											`)
			console.log("1");
		}
	});
	
	//일정 이름 변경하기(버튼 클릭)
	$(document).on('click', '.change-prdName-btn', function(e){
		const prdName = $('#prdName').val();
		const index = $('.change-prdName-btn').index(this);
		const userID = sid;
		const prdID = $('.calender-plan-box').eq(index).attr("id");
		let prdType = $('.calender-plan-box').eq(index).attr("class")
		prdType = prdType.replace("calender-plan-box ", "");
			
			
		$.ajax({
			type:'POST',
			url:'/profile/calender/changePrdName',
			dataType:'ajax',
			data:{'prdName':prdName, 
				  'userID':userID,
				  'prdID':prdID,
				  'prdType':prdType,
				  },
		});
		$('.calender-plan-name').eq(index).empty();
		$('.calender-plan-name').eq(index).append(`
			${prdName}	
		`);
		$('.change-prdName-btn').remove();	
	});  
	
	//일정 이름 변경하기
	$(document).on('keyup', '.calender-plan-name', function(e){
		if(e.keyCode == 13){
			$('.change-prdName-btn').click();
		}
	}); 
	
	//일정관리 숨기기 보이기
	$(document).on('click', '.plan-list-view-btn', function(e){
	  	e.preventDefault();
		if($('#plan-list-view-box').attr('class') == 'hide'){
			$('#plan-list-view-box').removeClass('hide');
			$('#plan-list-view-box').addClass('show');
			$('#plan-icon').removeClass('fa-plus');
			$('#plan-icon').addClass('fa-minus');
			$('#plan-list-box').show();
		}
		else if($('#plan-list-view-box').attr('class') == 'show'){
			$('#plan-list-view-box').removeClass('show');
			$('#plan-list-view-box').addClass('hide');
			$('#plan-icon').removeClass('fa-minus');
			$('#plan-icon').addClass('fa-plus');
			$('#plan-list-box').hide();
		}
		jQuery.randerPlan();
	});
	
	//일정 추가하기
	$(document).on('click', '.calender-add-btn', function(e){
		e.preventDefault();
		const clickBtn = $('.calender-add-btn').index(this);
		const prdID = $(this).attr('id');
	  	const prdType = $('#prd-kind-select option:selected').val();
		
		const name = $('.prdName').eq(clickBtn);
		const subDate = $('.calSubDate').eq(clickBtn);
		const transfer = $('.calTransfer').eq(clickBtn);
		const maturity = $('.calMaturity').eq(clickBtn);
		const payment = $('.calPayment').eq(clickBtn);
		let resultData = ""
		
		if(subDate.val() == ""){
			alert("이체일을 입력해주세요!");
			calSubDate.focus();
			return false;
		}
		else if(transfer.val() == ""){
			alert("이체일을 입력해주세요!");
			calTransfer.focus();
			return false;
		}
		else if(maturity.val() == ""){
			alert("이체일을 입력해주세요!");
			calMaturity.focus();
			return false;
		}
		else if(payment.val() == ""){
			alert("이체일을 입력해주세요!");
			calPayment.focus();
			return false;
		}
		
		const calSubDate = subDate.val();
		const calTransfer = transfer.val();
		const calMaturity = maturity.val();
		const calPayment = payment.val();
		const prdName = name.val();
		const product = $('.prd-name').eq(Number(prdID)-1).text();
			
		$.ajax({
			url:`/profile/calender/sendFormData/${prdType}/${prdID}`,
			type:'POST',
			data:{'calSubDate': calSubDate, 
				'calTransfer': calTransfer, 
				'calMaturity': calMaturity, 
				'calPayment': calPayment,
				'prdName': prdName,
				'product': product,
			},
			dataType:'text',
			success: function(result){
				const resultData = result;
				console.log(resultData);
				if(result == "fail"){
					alert("일정이 이미 등록되어 있습니다.");
				}else if(result == "ok"){
					jQuery.randerPlan();
					alert("일정을 등록했습니다.");	
				}	
			},
		});
		
		$('.prd-detail-view').eq(Number(prdID)-1).empty();
		$('.prd-detail-view').eq(Number(prdID)-1).hide();
		$('.calender-add-form').eq(Number(prdID)-1).css('width', '30%');
		$('.prd-detail-view').eq(Number(prdID)-1).css('display', 'none');
		$('.add-prd-btn').eq(Number(prdID)-1).text('추가하기');
		$('.add-prd-btn').eq(Number(prdID)-1).addClass('open');
		$('.add-prd-btn').eq(Number(prdID)-1).removeClass('close');		
	});
	
	
	jQuery.randerPlan();
 });