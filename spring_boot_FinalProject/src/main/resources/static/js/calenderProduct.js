/**
 * 
 */
 //상품목록
 jQuery.randerProduct = function(){
	const kind = $('#prd-kind-select option:selected').val();
	const kindDetail = $('#prd-kind-detail-select option:selected').val();
	const order = $('#prd-order-select option:selected').val();

	$('#prd-list-box').empty();
	
	$.ajax({
    type: 'POST',
    url: `/profile/calender/getPrdData/${kind}/${kindDetail}/${order}`,
    dataType: 'json',
    success: function(result) {
		$.each(result, function(index, item){
			let viewData = `<div class="prd-item">
								<div class="prd-title">`;
			let linkData = "";
			
			
			if(item.prdCom == 'KB'){
				viewData += `<span>[국민카드]</span>`;
				linkData = `<button onclick="window.open('https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=${item.prdURL}')" >상세보기</button>`;
			}
			else if(item.prdCom == '현대'){
				viewData += `<span>[현대카드]</span>`;
				linkData = `<button onclick="window.open('https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=${item.prdURL}')">상세보기</button>`;
			}
			else{
				viewData += `<span>${item.prdCom}</span>`;
				linkData = `<button onclick="window.open('{item.prdURL}')">상세보기</button>`;
			}
			
			viewData += `
								<div class="prd-name">${item.prdName}</div>
							</div>`;
							
			if(item.prdImg != null){
				viewData += `
							<div class="img-box">
								<img src="${item.prdImg}"/>
							</div>
							`;
			}
			/*
			else{
				let prdDes = item.prdDes;
				prdDes = prdDes.replace(/#/gi, "<br>")
				viewData += `
							<div class="prd-des">
								<div>${prdDes}</div>
							</div>
							`;
			}
			*/
			
			viewData += `
							<div class="deco-btn-box">
								<span><button class="deco-btn like"><i id="like" class="fa fa-heart-o"></i></button></span>
								<span><button class="deco-btn bookMark"><i id="bookMark" class="fa fa-star-o"></i></button></span>
							</div>
							<div class="item-btn-box">
								${linkData}
								<button class="add-prd-btn open">추가하기</button>
							</div>
						</div>`;
					
				$('#prd-list-box').append(`
										${viewData}
	  									<div class="prd-detail-view" style="display:none">
										</div>
										`);		
			});
     	},
	});
}


$(document).ready(function(){
	//상품추가 숨기기 보이기
	$(document).on('click', '.prd-items-view-btn', function(e){
	  	e.preventDefault();
		if($('#prd-items-view').attr('class') == 'hide'){
			$('#prd-items-view').removeClass('hide');
			$('#prd-items-view').addClass('show');
			$('#prd-icon').removeClass('fa-plus');
			$('#prd-icon').addClass('fa-minus');
			$('#search-option').show();
			$('#prd-list-box').show();
			$('#prd-detail-view').hide();
		}
		else if($('#prd-items-view').attr('class') == 'show'){
			$('#prd-items-view').removeClass('show');
			$('#prd-items-view').addClass('hide');
			$('#prd-icon').removeClass('fa-minus');
			$('#prd-icon').addClass('fa-plus');
			$('#search-option').hide();
			$('#itemsView').hide();
			$('#prd-list-box').hide();
			$('#prd-detail-view').hide();
		}
	});
	
	
	$(document).on('change', '#prd-kind-select', function(e){
	  e.preventDefault();
	  const kind = $('#prd-kind-select option:selected').val();
	  $('#prd-kind-detail-select').empty();
	  if(kind == 'card'){
	  	$('#prd-kind-detail-select').append(`
								<select id="prd-kind-selectOption" name="prd-kind-selectOption">
									<option value="default" selected>카드명</option>
									<option value="현대">현대카드</option>
									<option value="KB">국민카드</option>
								</select>
	  							`);
	  }
	  else if(kind == 'insu'){
	  	$('#prd-kind-detail-select').append(`
								<select id="prd-kind-selectOption"  name="prd-kind-selectOption">
									<option value="default" selected>보험종류</option>
									<option value="암진단">암진단</option>
									<option value="질병">질병</option>
									<option value="상해">상해</option>
									<option value="화재">화재</option>
									<option value="자동차">자동차</option>
								</select>
	  							`);
	  }
	  jQuery.randerProduct();
	});
	
	$(document).on('change', '#order', function(e){
	  e.preventDefault();
	  const option = $('#order option:selected').val();
	  jQuery.randerProduct();
	});
	
	$(document).on('change', '#prd-kind-selectOption', function(e){
	  e.preventDefault();
	  const option = $('#prd-kind-selectOption option:selected').val();
	  jQuery.randerProduct();
	});
	
	
	//상품선택 툴 보이기
	$(document).on('click', '.open', function(e){
	  	e.preventDefault();
	  	
	  	if(sid == ""){
			alert("로그인 해주세요!");
			return false;
	  	}
	  	const clickIndex = $('.add-prd-btn').index(this);
	  	
		$('.prd-detail-view').eq(clickIndex).show();
		
		$('.calender-add-form').eq(clickIndex).css('width', '100%');
		$('.prd-detail-view').eq(clickIndex).css('display', 'flex');
		$('.add-prd-btn').eq(clickIndex).text('닫기');
		$('.add-prd-btn').eq(clickIndex).addClass('close');
		$('.add-prd-btn').eq(clickIndex).removeClass('open');
		
		const kind = $('#prd-kind-select option:selected').val();
		const kindDetail = $('#prd-kind-detail-select option:selected').val();
		const order = $('#prd-order-select option:selected').val();
		 
		$.ajax({
	        type: 'POST',
	        url: `/profile/calender/getPrdData/${kind}/${kindDetail}/${order}`,
	        dataType: 'json',
	        success: function(result) {
	        	const data = result;
				if(kind == "insu"){
		        	const prdID = data[clickIndex].prdID;
		        	const prdType = kind;
		        	
		        	let female = data[clickIndex].female;
		        	female = female.toLocaleString('ko-KR');

		        	let male = data[clickIndex].male;
		        	male = male.toLocaleString('ko-KR');

		        	$('.prd-detail-view').eq(clickIndex).append(`
																<table>
																	<tbody>
																		<tr class="prdFee">
																			<td class="prd-table-title" rowspan="2">수수료</td>
																			<td class="male">남자 : </td>
																			<td>${male} 원</td>
																		</tr>
                                                                        <tr>
                                                                            <td class="female">여자 : </td>
                                                                            <td>${female} 원</td>
                                                                        </tr>
																		<tr class="prdSubDate">
																			<td class="prd-table-title">가입일</td>
																			<td><input type="date" id="calSubDate" class="calSubDate" name="calSubDate"></td>
																		</tr>
																		<tr class="prdTransfer">
																			<td class="prd-table-title">이체일</td>
																			<td><input type="text" id="calTransfer" class="calTransfer" name="calTransfer"> 일</td>
																		</tr>
																		<tr class="prdMaturity">
																			<td class="prd-table-title">만기</td>
																			<td><input type="text" id="calMaturity" class="calMaturity" name="calMaturity"> 년</td>
																		</tr>
																		<tr class="prdMaturity">
																			<td class="prd-table-title">납부금</td>
																			<td><input type="text" id="calPayment" class="calPayment" name="calPayment"> 원</td>
																		</tr>
																		<tr><td colspan="2"><button type="submit" class="calender-add-btn" id="${data[clickIndex].id}">추가</button></td></tr>
																	</tbody>
																</table>
					  										`);
				  
				  }
	        	else{
		        	let prdPrice = data[clickIndex].prdPrice;
		        	const prdID = data[clickIndex].prdID;
		        	const prdType = kind;
		        	prdPrice = prdPrice.toLocaleString('ko-KR');
		        	$('.prd-detail-view').eq(clickIndex).append(`
																<table>
																	<tbody>
																		<tr class="prdName">
																			<td class="prd-table-title">별명</td>
																			<td><input placeholder="미기입시 상품명" type="text" id="prdName" class="prdName" name="prdName"></td>
																		</tr>
																		<tr class="prdFee">
																			<td class="prd-table-title">수수료</td>
																			<td>${prdPrice} 원</td>
																		</tr>
																		<tr class="prdSubDate">
																			<td class="prd-table-title">가입일</td>
																			<td><input type="date" id="calSubDate" class="calSubDate" name="calSubDate"></td>
																		</tr>
																		<tr class="prdTransfer">
																			<td class="prd-table-title">이체일</td>
																			<td><input type="text" id="calTransfer" class="calTransfer" name="calTransfer"> 일</td>
																		</tr>
																		<tr class="prdMaturity">
																			<td class="prd-table-title">만기</td>
																			<td><input type="text" id="calMaturity" class="calMaturity" name="calMaturity"> 년</td>
																		</tr>
																		<tr class="prdMaturity">
																			<td class="prd-table-title">납부금</td>
																			<td><input type="text" id="calPayment" class="calPayment" name="calPayment"> 원</td>
																		</tr>
																		<tr><td colspan="2"><button type="submit" class="calender-add-btn" id="${prdID}">추가</button></td></tr>
																	</tbody>
																</table>
					  										`);
				  }
	  		  }
	  	});
	});
	
	$('#prd-kind-detail-select').append(`
							<select id="prd-kind-selectOption" name="prd-kind-selectOption">
								<option value="default" selected>카드명</option>
								<option value="현대">현대카드</option>
								<option value="KB">국민카드</option>
							</select>
	  						`);

	//상품선택 툴 숨기기
	$(document).on('click', '.close', function(e){
	  	const clickIndex = $('.add-prd-btn').index(this);
	  	e.preventDefault();
		$('.prd-detail-view').eq(clickIndex).empty();
		$('.prd-detail-view').eq(clickIndex).hide();
		$('.calender-add-form').eq(clickIndex).css('width', '30%');
		$('.prd-detail-view').eq(clickIndex).css('display', 'none');
		$('.add-prd-btn').eq(clickIndex).text('추가하기');
		$('.add-prd-btn').eq(clickIndex).addClass('open');
		$('.add-prd-btn').eq(clickIndex).removeClass('close');
	});
	
	jQuery.randerProduct();
});