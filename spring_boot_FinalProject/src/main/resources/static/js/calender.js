/**
 * calender.js
 */
 
//오늘 날짜 받아오기
let date = new Date();
let kindOption = $('#prd-kind-select option:selected').val();
let orderOption = $('#order option:selected').val();
let sid = "";

//캘린더
function randerCalender(){//오늘 년, 월, 일, 날짜
	$('#year-select-Box').hide();
	$('#month-select-Box').hide();
	$('#calender-view-box').empty();
	
	const viewYear = date.getFullYear();
	const viewMonth = date.getMonth();
	const toDate = new Date();
	
	const nowYear = toDate.getFullYear();
	const nowMonth = toDate.getMonth();
	const nowDate = toDate.getDate();

	let viewMonth2 = viewMonth+1;
	viewMonth2 = viewMonth2.toString().padStart(2, '0');
	
	$("#now-year").text(viewYear);
	$("#now-month").text(viewMonth2);
	
	;
	
	const prevLast = new Date(viewYear, viewMonth, 0);
	const thisLast = new Date(viewYear, viewMonth + 1, 0);
	 
	const PLDate = prevLast.getDate();
  	const PLDay = prevLast.getDay();

  	const TLDate = thisLast.getDate();
  	const TLDay = thisLast.getDay();
  	 
  	const prevDates = [];
  	const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  	const nextDates = [];
	
	// prevDates 계산
	if (PLDay != 6) {
	  for (let i = 0; i < PLDay + 1; i++) {
	    prevDates.unshift(PLDate - i);
	  }
	}
	
	// nextDates 계산
	if(TLDay == 6){
		for (let i = 1; i <= 14; i++) {
		  nextDates.push(i);
		}
	}
	else{
		for (let i = 1; i <= 14 - TLDay; i++) {
		  nextDates.push(i);
		}
	}
	 
	let dates = prevDates.concat(thisDates, nextDates);
	let randerDate = "";
	let randerWeek = "";
	
    for(let weekCnt = 0; weekCnt < 6; weekCnt++){
    	randerDate = "";

		for(let dayCnt = 0; dayCnt < 7; dayCnt++){
			randerDate += `<td class=`;
				if(nowYear == viewYear && nowMonth == viewMonth && nowDate == dates[weekCnt*7+(dayCnt)]){
					randerDate += `"nowDays dates real-date `;
				}
			    else if(weekCnt*7+(dayCnt) < prevDates.length) {
					randerDate += `"past-dates dates `;
				}
				else if((weekCnt*7+(dayCnt))- prevDates.length < thisDates.length){
					randerDate += `"nowDays dates `;
				}
						
				//만일 뒤에 공간이 남으면 다음 달 날짜로 채우기
				else if((weekCnt*7+(dayCnt))- prevDates.length - thisDates.length < 42){
					randerDate += `"fut-dates dates `;
				}
				
				if(dayCnt == 0){
					randerDate += `sun`;
				}
				if(dayCnt == 6){
					randerDate += `sat`;
				}
				
				randerDate += `" id=${dates[weekCnt*7+(dayCnt)]}>`;
				randerDate += `${dates[weekCnt*7+(dayCnt)]}</td>`;
			}
					
		//하나로 합치는 작업
		randerWeek += `<tr>${randerDate}</tr>`;
	}
		
	//tbody 삽입
	$('#calender-view-box').append(`
							<tr><th class="dates-head-text sun">일</th><th class="dates-head-text">월</th><th class="dates-head-text">화</th><th class="dates-head-text">수</th><th class="dates-head-text">목</th><th class="dates-head-text">금</th><th class="dates-head-text sat">토</th></tr>
							${randerWeek}
					   `);
	
					   
	$.ajax({
        type: 'POST',
        url: '/profile/calender/getPlanData',
        dataType: 'json',
        success: function(result) {
				$.each(result, function(index, item){
					
					const fullDate = item.calSubDate;
					const startYear = Number(fullDate.slice(0,4));
					let month = fullDate.slice(5,7);
					month = Number(month.replace("0", ""));
					let date = fullDate.slice(8,10);
					date = Number(date.replace("0", ""));
					
					const endYear = startYear+item.calMaturity;
					const transferDate = item.calTransfer;
					
				
					if(item.prdName != null){
						prdName = item.prdName;
					}else{
						if(item.prdName != null){
							prdName = item.prdName;
						}
						else if(item.insuName != null){
							prdName = i
						}
					}
					
					let payment = item.calPayment;
					payment = payment.toLocaleString('ko-KR');
				
					let planTitle = "";
					
					if(startYear < viewYear && endYear > viewYear){
						for(let i = 0; i < 42; i++){
							if($(".dates").eq(i).text() == transferDate){
									planTitle = `
									<div class="calender-plan">
										<div class="calender-plan-title"><span class="calender-plan-name">${prdName}</span><span> 이체일</span></div>`;
								
								$(".dates").eq(i).append(`
										<div id="${item.prdID}" class="calender-plan-box ${item.prdType}">
											<div class="plan-title">
												${planTitle}
												<div class="payment">
													<span>${payment} 원</span>
												</div>
											</div>
										</div>
									`);
							}
						}
					}
					else if(endYear == viewYear && month >= viewMonth+1){
						for(let i = 0; i < $(".nowDays").length; i++){
							if($(".dates").eq(i).text() == transferDate){
									planTitle = `
												<div class="calender-plan">
										<div class="calender-plan-title"><span class="calender-plan-name">${prdName}</span><span> 이체일</span></div>`;
								
								$(".dates").eq(i).append(`
										<div id="${item.prdID}" class="calender-plan-box ${item.prdType}">
											<div class="plan-title">
												${planTitle}
												<div class="payment">
													<span>${payment} 원</span>
												</div>
											</div>
										</div>
									`);
							}
						}
					}
					else if(startYear == viewYear && month < viewMonth+1){
						for(let i = 0; i < 42; i++){
							if($(".dates").eq(i).text() == transferDate){
									planTitle = `
												<div class="calender-plan">
													<div class="calender-plan-title"><span class="calender-plan-name">${prdName}</span><span> 이체일</span></div>`;
								
								$(".dates").eq(i).append(`
										<div id="${item.prdID}" class="calender-plan-box ${item.prdType}">
											<div class="plan-title">
												${planTitle}
												<div class="payment">
													<span>${payment} 원</span>
												</div>
											</div>
										</div>
									`);
							}
						}
					}
					else if(startYear == viewYear && month == viewMonth+1){
						for(let i = $(".past-dates").length; i < 42; i++){
							if($(".dates").eq(i).text() == transferDate){
								planTitle = `
									<div class="calender-plan">
												<div class="calender-plan-title"><span class="calender-plan-name">${prdName}</span><span> 이체일</span></div>`;
								
								$(".dates").eq(i).append(`
										<div id="${item.prdID}" class="calender-plan-box ${item.prdType}">
											<div class="plan-title">
												${planTitle}
												<div class="payment">
													<span>${payment} 원</span>
												</div>
											</div>
										</div>
									`);
							}
						}
					}
					
				});
        },
    });
	
	$('#calender-view-box').show();
}



//연도 선택창
function randerYear(){
	$('#calender-view-box').hide();
	$('#month-select-Box').hide();
	$('#year-select-Box').empty();
		
	const nowDate = new Date();
	const nowYear = nowDate.getFullYear();
	const viewYear = date.getFullYear();
	const delYear = viewYear - viewYear%10 - 10;
		
	let randerYear = "";
	let years = "";
		
	for(let i =0; i < 21; i++){
		if(delYear+i == nowYear){
			years += `<td id="${delYear+i}" class="years now real-date">${delYear+i}</td>`;
		}
		else if(delYear+i <= nowYear+10 && delYear+i >= nowYear-10){
			years += `<td id="${delYear + i}" class="years now">${delYear + i}</td>`;
		}
		else years += `<td id="${delYear + i}" class="years">${delYear + i}</td>`;
		
		if((delYear + i +1)%5 == 0){
			randerYear += `<tr>${years}</tr>`;
			years = "";
		}
	}
	
		
	$('#year-select-Box').append(`
		${randerYear}
	`);
	
	$('#year-select-Box').show();
}


//달 선택창
function randerMonth(){
	$('#calender-view-box').hide();
	$('#year-select-Box').hide();
	$('#month-select-Box').empty();
		
	const nowDate = new Date();
	const nowMonth = nowDate.getMonth();
		
	let randerMonth = "";
	let months = "";
		
	for(let i =0; i < 12; i++){
		if(i == nowMonth){
			months += `<td id="${i+1}" class="months now real-date">${i+1}</td>`;
		}
		else months += `<td id="${i+1}" class="months">${i+1}</td>`;
		if((i+1)%4 == 0){
			randerMonth += `<tr>${months}</tr>`;
		months = "";
			}
	}
		
	$('#month-select-Box').append(`
		${randerMonth}
	`);
		
	$('#month-select-Box').show();
}


$(document).ready(function(){
	//다음 달로 가는 버튼
	$(document).on('click', '.next-month-btn', function(e){
	  	e.preventDefault();
	  	date.setDate(1);
		date.setMonth(date.getMonth() + 1);
		randerCalender();
		jQuery.randerPlan();
	})
	//저번 달로 가는 버튼
	$(document).on('click', '.prev-month-btn', function(e){
	  	e.preventDefault();
	  	date.setDate(1);
		date.setMonth(date.getMonth() - 1);
		randerCalender();
		jQuery.randerPlan();
	})
	//오늘로 가는 버튼
	$(document).on('click', '.view-today-btn', function(e){
	  	e.preventDefault();
		const today = new Date();
	  	date.setDate(today.getDate());
		date.setMonth(today.getMonth());
		date.setFullYear(today.getFullYear());
		randerCalender();
		jQuery.randerPlan();
	})
	
	//연도 선택 버튼 보이기
	$(document).on('click', '#year-select-btn', function(e){
	  	e.preventDefault(e);
	  	randerYear();
		
	});
	
	$("#year-select-Box").on("mousewheel", function (e) {
		e.preventDefault();
		let wheel = e.originalEvent.wheelDelta;
		const viewYear = date.getFullYear();
		
		if (wheel > 0) {
		   //스크롤 올릴때
		  if(viewYear-20 >= 1910){
			date.setFullYear(viewYear-20);
			randerYear();
		}
			
		 } else {
		    //스크롤 내릴때
		    if(viewYear+20 <= 2200){
				date.setFullYear(viewYear+20);
				randerYear();
			}
		}
	})
	
	$(document).on('click', '.years', function(e){
	  	e.preventDefault();  
	  	const selYear = $(this).attr('id');
	  	date.setFullYear(selYear);
		randerMonth();
	})
	
	//달 선택 버튼 보이기
	$(document).on('click', '#month-select-btn', function(e){
	  	e.preventDefault();
		randerMonth();
	});
	
	$(document).on('click', '.months', function(e){
	  e.preventDefault();  
	  const selMonth = $(this).attr('id');
	  date.setDate(1);
	  date.setMonth(selMonth - 1);
	  randerCalender();
	  jQuery.randerPlan();
	})
	
	$(document).on('click', '.like', function(e){
	  e.preventDefault();
	  $(this).children('i').removeClass('fa-heart-o');
	  $(this).children('i').addClass('fa-heart');
	  $(this).children('i').css('color', 'red');
	})
	
	$(document).on('click', '.bookMark', function(e){
	  e.preventDefault();
	  $(this).children('i').removeClass('fa-star-o');
	  $(this).children('i').addClass('fa-star');
	  $(this).children('i').css('color', 'yellow');
	})
	
	
	//아이디 받아오기
	$.ajax({
		type:'POST',
		url:'/profile/calender/getSID',
		dataType:'text',
		async:false,
		success:function(result){
			sid = result;
		}
	});
	
	randerCalender();
});
