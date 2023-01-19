/**
 * calender.js
 */

//한달에 있는 날을 배열에 저장

//오늘 날짜 받아오기
let date = new Date();
let prdKindOption = $('#prdKind option:selected').val();
let orderOption = $('#order option:selected').val();

function randerCalender(){//오늘 년, 월, 일, 날짜
	$('#yearSelectBody').hide();
	$('#monthSelectBody').hide();
	$('#calenderBody').empty();
	
	const viewYear = date.getFullYear();
	const viewMonth = date.getMonth();
	const toDate = new Date();
	
	const nowYear = toDate.getFullYear();
	const nowMonth = toDate.getMonth();
	const nowDate = toDate.getDate();

	let viewMonth2 = viewMonth+1;
	viewMonth2 = viewMonth2.toString().padStart(2, '0');
	
	$("#nowYear").text(viewYear);
	$("#nowMonth").text(viewMonth2);
	
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
	if (PLDay !== 6) {
	  for (let i = 0; i < PLDay + 1; i++) {
	    prevDates.unshift(PLDate - i);
	  }
	}
	
	// nextDates 계산
	for (let i = 1; i < 14 - TLDay; i++) {
	  nextDates.push(i)
	}
	 
	const dates = prevDates.concat(thisDates, nextDates);
	let randerDate = "";
	let randerWeek = "";
	
	
    for(let weekCnt = 0; weekCnt < 6; weekCnt++){
    	randerDate = "";

		for(let dayCnt = 0; dayCnt < 7; dayCnt++){
			randerDate += `<td class=`;
				if(nowYear == viewYear && nowMonth == viewMonth && nowDate == dates[weekCnt*7+(dayCnt)]){
					randerDate += `"nowDays dates real"`;
				}
			    else if(weekCnt*7+(dayCnt) < prevDates.length) {
					randerDate += `"pastDays dates"`;
				}
				else if((weekCnt*7+(dayCnt))- prevDates.length < thisDates.length){
					randerDate += `"nowDays dates"`;
				}
						
				//만일 뒤에 공간이 남으면 다음 달 날짜로 채우기
				else if((weekCnt*7+(dayCnt))- prevDates.length - thisDates.length < 42){
					randerDate += `"futDays dates" `;
				}
				
				if(dayCnt == 0){
					randerDate += `sun`;
				}
				if(dayCnt == 6){
					randerDate += `sat`;
				}
				randerDate += ` id=${dates[weekCnt*7+(dayCnt)]}>`;
				randerDate += `${dates[weekCnt*7+(dayCnt)]}</td>`;
			}
					
		//하나로 합치는 작업
		randerWeek += `<tr>${randerDate}</tr>`;
	}
		
	//tbody 삽입
	$('#calenderBody').append(`
							<tr><th class="datesTitle sun">일</th><th class="datesTitle">월</th><th class="datesTitle">화</th><th class="datesTitle">수</th><th class="datesTitle">목</th><th class="datesTitle">금</th><th class="datesTitle sat">토</th></tr>
							${randerWeek}
					   `);
					   
					   
	$.ajax({
        type: 'POST',
        url: '/profile/calender/getData',
        dataType: 'json',
        success: function(result) {
	  	  	const data=result;
			$.each(result, function(index, item){
				const fullDate = item.calSubDate;
				const startYear = Number(fullDate.slice(0,4));
				let month = fullDate.slice(5,7);
				month = Number(month.replace("0", ""));
				let date = fullDate.slice(8,10);
				date = Number(date.replace("0", ""));
				
				const endYear = startYear+item.calMaturity;
				const transferDate = item.calTransfer;
				
				if(startYear < viewYear && endYear > viewYear){
					for(let i = 0; i < 42; i++){
						if($(".dates").eq(i).text() == transferDate){
							$(".dates").eq(i).append(`
										<div class="prdTitle"><input type="checkbox"><span>${item.prdTitle} 이체일</span></div>
								`);
						}
					}
				}
				else if(endYear == viewYear && month >= viewMonth){
					for(let i = 0; i < $(".nowDays").length; i++){
						if($(".nowDays").eq(i).text() == transferDate){
							$(".nowDays").eq(i).append(`
									<div class="calPlan">
										<div class="prdTitle"><input type="checkbox"><span>${item.prdTitle} 이체일</span></div>
									</div>
								`);
							break;
						}
					}
				}
				else if(startYear == viewYear && month <= viewMonth){
					for(let i = $(".pastDays").length; i < $(".dates").length; i++){
						if($(".dates").eq(i).text() == transferDate){
							$(".dates").eq(i).append(`
									<div class="calPlan">
										<div class="prdTitle"><input type="checkbox"><span>${item.prdTitle} 이체일</span></div>
									</div>
								`);
							break;
						}
					}
				}
			});
        },
    });
	
	$('#calenderBody').show();
}

function randerProduct(){
	//언제 아약스로 받아오는 게 목표임
	$.ajax({
    type: 'POST',
    url: '/profile/calender/getPrdData',
    dataType: 'json',
    success: function(result) {
			
		$.each(result, function(index, item){
			let viewData = `<div class="prdItem">
								<div class="prdTitle">`;
			let linkData = "";
			
			
			if(item.comCtg == 'KB'){
				viewData += `<span>[국민카드]</span>`;
				linkData = `<button onclick="window.open('https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=${item.cardUrl}')" >상세보기</button>`;
			}
			else if(item.comCtg == '현대'){
				viewData += `<span>[현대카드]</span>`;
				linkData = `<button onclick="window.open('https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=${item.cardUrl}')">상세보기</button>`;
			}
				
			viewData += `
								<div>${item.cardName}</div>
							</div>
							<div class="imgbox">
								<img src="${item.cardImgUrl}"/>
							</div>
							<div>
								<span><button class="prdBtn like"><i id="like" class="fa fa-heart-o"></i></button></span>
								<span><button class="prdBtn bookMark"><i id="bookMark" class="fa fa-star-o"></i></button></span>
							</div>
							<div class="itemBtn">
								${linkData}
								<button class="addCalenderBtn">추가하기</button>
							</div>
						</div>`;
					
				$('#productView').append(`
										${viewData}
	  									<div class="prdDetailView">
										</div>
										`);		
			});
     },
	});
}
function randerPrdDtail(){
	$().append(`
				<div class="prdDetailView">
							<table>
								<tbody>
									<tr class="prdFee"><td class="prdTableTitle">수수료</td><td>${prd.p} 원</td></tr>
									<tr class="prdDes"><td colspan="2">상세설명</td></tr>
									<tr class="prdSubDate"><td class="prdTableTitle">가입일</td><td><input type="date" id="subscription" class="subscription" name="subscription"></td></tr>
									<tr class="prdTransfer"><td class="prdTableTitle">이체일</td><td><input type="text" id="transfer" class="transfer" name="transfer"> 일</td></tr>
								</tbody>
							</table>
						</div>
				`)
}

function randerPlan(){				   
	$.ajax({
        type: 'POST',
        url: '/profile/calender/getData',
        dataType: 'json',
        success: function(result) {
	  	  	const data=result;
			$.each(result, function(index, item){
				const fullDate = item.calSubDate;
				const startYear = Number(fullDate.slice(0,4));
				let month = fullDate.slice(5,7);
				month = Number(month.replace("0", ""));
				let date = fullDate.slice(8,10);
				date = Number(date.replace("0", ""));
				
				const endYear = startYear+item.calMaturity;
				const transferDate = item.calTransfer;
				
				
				const nowDate = new Date();
				const nowYear = nowDate.getFullYear();
				const nowMonth = nowDate.getMonth();

				$(".year-month").append(`
									<div class="titleYear">${nowYear}</div>
									<div class="titleMonth">${nowMonth+1} 월</div>
									`);
									

				if(startYear == nowYear && month >= nowMonth+1){
					$("#planList").append(`
						<div class="plan">
							<span class="planDate">${item.calTransfer}</span>
							<span class="planTitle">${item.prdTitle} 이체일</span>
						</div>
					`);
				}
				else if(endYear == nowYear && month <= nowMonth+1){
					$("#planList").append(`
						<div class="plan">
							<span class="planDate">${item.calTransfer}</span>
							<span class="planTitle">${item.prdTitle} 이체일</span>
						</div>
					`);
				}
				else if(endYear > nowYear && startYear < nowYear){
					$("#planList").append(`
						<div class="plan">
							<span class="planDate">${item.calTransfer}</span>
							<span class="planTitle">${item.prdTitle} 이체일</span>
						</div>
					`);
				}
			});
        },
    });
}

function randerYear(){
	$('#calenderBody').hide();
	$('#monthSelectBody').hide();
	$('#yearSelectBody').empty();
		
	const nowDate = new Date();
	const nowYear = nowDate.getFullYear();
	const viewYear = date.getFullYear();
	const delYear = viewYear - viewYear%10 - 10;
		
	let randerYear = "";
	let years = "";
		
	for(let i =0; i < 21; i++){
		if(delYear+i == nowYear){
			years += `<td id="${delYear+i}" class="years now real">${delYear+i}</td>`;
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
	
		
	$('#yearSelectBody').append(`
		${randerYear}
	`);
	
	$('#yearSelectBody').show();
}

function randerMonth(){
	$('#calenderBody').hide();
	$('#yearSelectBody').hide();
	$('#monthSelectBody').empty();
		
	const nowDate = new Date();
	const nowMonth = nowDate.getMonth();
		
	let randerMonth = "";
	let months = "";
		
	for(let i =0; i < 12; i++){
		if(i == nowMonth){
			months += `<td id="${i+1}" class="months now real">${i+1}</td>`;
		}
		else months += `<td id="${i+1}" class="months">${i+1}</td>`;
		if((i+1)%4 == 0){
			randerMonth += `<tr>${months}</tr>`;
		months = "";
			}
	}
		
	$('#monthSelectBody').append(`
		${randerMonth}
	`);
		
	$('#monthSelectBody').show();
}

function productView(){
	
	if($('#addItems').attr('class') == 'hide'){
		$('#addItems').removeClass('hide');
		$('#addItems').addClass('show');
		$('#prdIcon').removeClass('fa-plus');
		$('#prdIcon').addClass('fa-minus');
		$('#searchOption').show();
		$('#productView').show();
		$('#prdDetailView').hide;
	}
	else if($('#addItems').attr('class') == 'show'){
		$('#addItems').removeClass('show');
		$('#addItems').addClass('hide');
		$('#prdIcon').removeClass('fa-minus');
		$('#prdIcon').addClass('fa-plus');
		$('#searchOption').hide();
		$('#itemsView').hide();
		$('#productView').hide();
		$('#prdDetailView').hide;
	}
}

$(document).ready(function(){
	//다음 달로 가는 버튼
	$(document).on('click', '.nextMonthBtn', function(e){
	  	e.preventDefault();
	  	date.setDate(1);
		date.setMonth(date.getMonth() + 1);
		randerCalender();
		randerPlan();
	})
	//저번 달로 가는 버튼
	$(document).on('click', '.prevMonthBtn', function(e){
	  	e.preventDefault();
	  	date.setDate(1);
		date.setMonth(date.getMonth() - 1);
		randerCalender();
		randerPlan();
	})
	//오늘로 가는 버튼
	$(document).on('click', '.todayBtn', function(e){
	  	e.preventDefault();
		const today = new Date();
	  	date.setDate(today.getDate());
		date.setMonth(today.getMonth());
		date.setFullYear(today.getFullYear());
		randerCalender();
		randerPlan();
	})
	
	//상품추가 버튼 숨기기 보이기
	$(document).on('click', '.prdAddBtn', function(e){
	  	e.preventDefault();
	  	productView();
	  	randerProduct();
	});

	//연도 선택 버튼 보이기
	$(document).on('click', '#yearSelect', function(e){
	  	e.preventDefault(e);
	  	randerYear();
		
	});
	
	$("#yearSelectBody").on("mousewheel", function (e) {
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
	$(document).on('click', '#monthSelect', function(e){
	  	e.preventDefault();
		randerMonth();
	});
	
	$(document).on('click', '.months', function(e){
	  e.preventDefault();  
	  const selMonth = $(this).attr('id');
	  date.setDate(1);
	  date.setMonth(selMonth - 1);
	  randerCalender();
	  randerPlan();
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
	$(document).on('change', '#prdKind', function(e){
	  e.preventDefault();
	  const option = $('#prdKind option:selected').val();
	  $('#prdKindDetail').empty();
	  if(option == 'card'){
	  	$('#prdKindDetail').append(`
								<select id="prdKindOption" name="prdKindOption">
									<option value="defalut" selected>카드명</option>
									<option value="hyundai">현대카드</option>
									<option value="KB">국민카드</option>
								</select>
	  							`);
	  }
	  else if(option == 'insu'){
	  	$('#prdKindDetail').append(`
								<select id="prdKindOption"  name="prdKindOption">
									<option value="defalut" selected>보험종류</option>
									<option value="cancer">암진단</option>
									<option value="disease">질병</option>
									<option value="wound">상해</option>
									<option value="fire">화재</option>
									<option value="car">자동차</option>
								</select>
	  							`);
	  }
	  console.log(option)
	})
	$(document).on('change', '#order', function(e){
	  e.preventDefault();
	  const option = $('#order option:selected').val();
	  console.log(option)
	})
	
	
	//상품선택 툴 보이기
	$(document).on('click', '.addCalenderBtn', function(e){
	  	e.preventDefault();
	  	const clickIndex = $('.addCalenderBtn').index(this);
	  	
		$('.prdDetailView').eq(clickIndex).show();
		$('.prdDetailView').eq(clickIndex).css('width', '65%');
		$('.prdDetailView').eq(clickIndex).css('display', 'flex');
		$('.addCalenderBtn').eq(clickIndex).text('닫기');
		$('.addCalenderBtn').eq(clickIndex).addClass('closeCalenderBtn');
		$('.addCalenderBtn').eq(clickIndex).removeClass('addCalenderBtn');
		
		$.ajax({
	        type: 'POST',
	        url: '/profile/calender/getPrdData',
	        dataType: 'json',
	        success: function(result) {
	        	const data = result;
	        	let cardFee = data[clickIndex].cardFee;
	        	cardFee = cardFee.toLocaleString('ko-KR');
	        	$('.prdDetailView').eq(clickIndex).append(`
												<table>
													<tbody>
														<tr class="prdFee">
															<td class="prdTableTitle">수수료</td>
															<td>${cardFee} 원</td>
														</tr>
														<tr class="prdDes">
															<td colspan="2">${data[clickIndex].cardDes}</td>
														</tr>
														<tr class="prdSubDate">
															<td class="prdTableTitle">가입일</td>
															<td><input type="date" id="subscription" class="subscription" name="subscription"></td>
														</tr>
														<tr class="prdTransfer">
															<td class="prdTableTitle">이체일</td>
															<td><input type="text" id="transfer text" class="transfer" name="transfer"> 일</td>
														</tr>
														<tr class="prdMaturity">
															<td class="prdTableTitle">만기</td>
															<td><input type="text" id="maturity text" class="maturity" name="maturity"> 년</td>
														</tr>
														<tr><td colspan="2"><button class="choose">추가</button></td></tr>
													</tbody>
												</table>
	  										`);
	  		}
	  	});
	});
	
	
	//상품선택 툴 숨기기
	$(document).on('click', '.closeCalenderBtn', function(e){
	  	e.preventDefault();
	  	const clickIndex = $('.closeCalenderBtn').index(this);
	  	$('.prdDetailView').eq(clickIndex).empty();
		$('.prdDetailView').eq(clickIndex).hide();
		$('.prdDetailView').eq(clickIndex).css('width', '0%');
		$('.prdDetailView').eq(clickIndex).css('display', 'none');
		$('.closeCalenderBtn').eq(clickIndex).text('추가하기');
		$('.closeCalenderBtn').eq(clickIndex).addClass('addCalenderBtn');
		$('.closeCalenderBtn').eq(clickIndex).removeClass('closeCalenderBtn');
	});
	
	
	$('#prdKindDetail').append(`
								<select id="prdKindOption" name="prdKindOption">
									<option value="defalut" selected>카드명</option>
									<option value="hyundai">현대카드</option>
									<option value="KB">국민카드</option>
								</select>
	  							`);
	 /* 							
	$(document).on('click', '#sortBtn', function(e){
		e.preventDefault();
		
	  	const kind = $('#prdKind option:selected').val();
	  	const option = $('#prdKindOption option:selected').val();
	  	const order = $('#order option:selected').val();
	  	
		$.ajax({
	        type: 'GET',
	        url: `/profile/calender/getPrdData?kind=${kind}`,
	        dataType: 'json',
		})
	});
	*/
	randerCalender();
	randerPlan();
});

