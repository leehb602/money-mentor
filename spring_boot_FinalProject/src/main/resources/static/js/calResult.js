/**
 * calResult.js
 */
/* 연금, 월금 */
 function salBtn(){
 	$('#salaryBox').empty(
 			
 	)
   // var salType = document.getElementById("salaryType").values;
    var salType = $(':input:radio[name=salaryType]:checked').val();
    var salMoney = $('#salMoney').val();
    var salTax = $('#salTax').val();
    var salFamily = $('#salFamily').val();
    var salChild = $('#salChild').val();
 
	/* 국민연금 (4.5%): <br> 
	건강보험 (3.545%): <br> 
	요양보험 (12.81%): <br> 
	고용보험 (0.9%): <br> 
	근로소득세 (간이세액): <br> 
	지방소득세(10%): <br> 
	년 예상 실수령액: <br> 
	월 환산금액: <br>  */
 	
 	$('#salaryBox').append(
 			(salType+":"+ salMoney+"<br>")
 	)
 	$('#salaryBox').append(
 			("비과세액:"+ salTax+"<br>")
 	)
 	$('#salaryBox').append(
 			("부양가족수:"+ salFamily+"<br>")
 	)
 	$('#salaryBox').append(
			("자녀수 :"+ salChild+"<br>")
 	)
 	
 }

 /* 예금 */
 function depBtn(){
	$('#dsBox').empty(
 			
		);
	$('#dsOption').empty(
 			
		);
	/*불러온값들*/
 	var depMoney = parseInt($('#depMoney').val());
 	var depMonth = parseInt($('#depMonth').val());
 	var depPercent = parseFloat($('#depPercent').val());
	var percent = depPercent/100;
	/* 계산식 부분 */
	var interest = depMoney*depMonth*percent/12;
	/*일반과세*/
	var interest2 = interest*0.154;
	interest2 = interest2.toFixed(0);
    /* 세금우대 */
	var interest3 = interest*0.095;
	interest3 = interest3.toFixed(0);

	var receive = depMoney+interest;
	
	var receiveYear = ((interest-interest2)/depMonth)*12;
	var receiveYear2 = ((interest-interest3)/depMonth)*12;
	receive = receive.toFixed(0);

	interest = interest.toFixed(0);
	
	var percent2 = (receiveYear/depMoney)*100;
	percent2 = percent2.toFixed(2);
	
	var percent3 = (receiveYear2/depMoney)*100;
	percent3 = percent3.toFixed(2);
	
	$('#dsBox').append(
		("<tr> <td>구분</td><td>원금</td><td>세금</td><td>세후이자</td><td>세후수령액</td><td>세후금리</td> </tr>")
	)
	$('#dsBox').append(
		("<tr> <td>일반과세</td><td>"+parseInt(depMoney).toLocaleString('ko-KR')+"원</td><td>"+parseInt(interest2).toLocaleString('ko-KR')+"원</td><td>"+parseFloat(interest-interest2).toLocaleString('ko-KR')+"원</td><td>"+(receive-interest2).toLocaleString('ko-KR')+"원</td><td>"+percent2+"%</td> </tr>")
	)
	$('#dsBox').append(
		("<tr> <td>세금우대</td><td>"+parseInt(depMoney).toLocaleString('ko-KR')+"원</td><td>"+parseInt(interest3).toLocaleString('ko-KR')+"원</td><td>"+parseFloat(interest-interest3).toLocaleString('ko-KR')+"원</td><td>"+(receive-interest3).toLocaleString('ko-KR')+"원</td><td>"+percent3+"%</td> </tr>")
	)
	$('#dsBox').append(
		("<tr> <td>비과세</td><td>"+parseInt(depMoney).toLocaleString('ko-KR')+"원</td><td>0원</td><td>"+parseInt(interest).toLocaleString('ko-KR')+"원</td><td>"+parseFloat(receive).toLocaleString('ko-KR')+"원</td><td>"+depPercent+"%</td> </tr>")
	)
	$('#dsOption').append(
		("일반과세의 경우는 이자금액의 15.4%가 원천징수되고, 세금우대의 경우는 이자금액의 9.5%가 원천징수됩니다.")
	)
 }
 
 /* 적금  */
 function savBtn(){
	$('#dsBox').empty(
 			
		);
	$('#dsOption').empty(
 			
		);
	var savMoney = parseInt($('#savMoney').val());
 	var savMonth = parseInt($('#savMonth').val());
 	var savPercent = parseFloat($('#savPercent').val());
	var int = parseInt(1);
	var savingAll = savMoney*savMonth;
	
	var percent = savPercent/100;
	/* 계산식 부분 */
	var interest = (savMoney*(percent/12)*((savMonth*(savMonth+int))/2)).toFixed(0);;
	/*일반과세*/
	var interest2 = interest*0.154;
	interest2 = interest2.toFixed(0);
    /* 세금우대 */
	var interest3 = interest*0.095;
	interest3 = interest3.toFixed(0);


	$('#dsBox').append(
		("<tr> <td>구분</td><td>원금</td><td>세금</td><td>세후이자</td><td>세후수령액</td> </tr>")
	)
	$('#dsBox').append(
		("<tr> <td>일반과세</td><td>"+parseInt(savingAll).toLocaleString('ko-KR')+"원</td><td>"+parseInt(interest2).toLocaleString('ko-KR')+"원</td><td>"+parseFloat(interest-interest2).toLocaleString('ko-KR')+"원</td><td>"+(parseInt(savingAll)+parseInt(interest-interest2)).toLocaleString('ko-KR')+"원</td></tr>")
	)
	$('#dsBox').append(
		("<tr> <td>세금우대</td><td>"+parseInt(savingAll).toLocaleString('ko-KR')+"원</td><td>"+parseInt(interest3).toLocaleString('ko-KR')+"원</td><td>"+parseFloat(interest-interest3).toLocaleString('ko-KR')+"원</td><td>"+(parseInt(savingAll)+parseInt(interest-interest3)).toLocaleString('ko-KR')+"원</td></tr>")
	)
	$('#dsBox').append(
		("<tr> <td>비과세</td><td>"+parseInt(savingAll).toLocaleString('ko-KR')+"원</td><td>0원</td><td>"+parseInt(interest).toLocaleString('ko-KR')+"원</td><td>"+(parseInt(savingAll)+parseInt(interest)).toLocaleString('ko-KR')+"원</td></tr>")
	)
	$('#dsOption').append(
		("일반과세의 경우는 이자금액의 15.4%가 원천징수되고, 세금우대의 경우는 이자금액의 9.5%가 원천징수됩니다.")
	)
 }
 
 
/*대출 비용*/ 
 function loan2Btn(){
	$('#loan2Box').empty(
 			
		)
	$('#loanOption').empty(
 			
		)
	/*신용, 마이너스, 부동산*/
	var loan2Type = $(':input:radio[name=loan2Type]:checked').val();
	var loan2Money = parseInt($('#loan2Money').val());
	var loan2Percent = parseFloat($('#loan2Persent').val()).toFixed(2);
	var percent	= loan2Percent/100;
	var stamp = 0;
	console.log(loan2Type);
 	
	if(loan2Money<50000000){
		stamp = 0;
	}else if(loan2Money==50000000){
		stamp = 40000;
	}else if(loan2Money>50000000 && loan2Money<100000000 ){
		stamp = 70000;
	}else if(loan2Money>=100000000 && loan2Money<1000000000 ){
		stamp = 150000;
	}else if(loan2Money>=1000000000){
		stamp = 350000;
	}
	/*주택 채권 매입 = 대출금액 *1.2 * 0.001 
	등록세 = 주택채권매입*2
	교육세 = 등록세*0.02*/
	var houseTax = loan2Money*1.2*0.001;
	var regiTax = houseTax*2;
	var eduTax = regiTax*0.02;
	var EOCS = (houseTax+regiTax+eduTax);
	var minusBank = loan2Money*percent;
	/*
	<tr><td>대출비용합계(A+B+C)</td><td>xx원</td></tr> 
	<tr> <td>인지세(A)</td><td>xx원</td> </tr> 
	<tr> <td>근저당</td><td>xx원</td> </tr> 
	<tr> <td>마이너스통장 대출취급 수수료</td><td>xx원</td> </tr> */
	console.log(stamp);
	if(loan2Type == "신용"){
		EOCS = 0;
		minusBank = 0;
		$('#loan2Box').append(
			("<tr> <td>대출비용합계(A+B+C)</td><td>"+parseInt(stamp+EOCS+minusBank).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>인지세(A)</td><td>"+parseInt(stamp).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>근저당설정비</td><td>"+parseInt(EOCS).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>마이너스통장 대출취급 수수료</td><td>"+parseInt(minusBank).toLocaleString('ko-KR')+"원</td> </tr>")
		)
		$('#loanOption').append(
			("근저당 비용은 교육세, 등록세, 주택 채권매입 가격만 포함된 금액입니다.<br> 회사에 따라 일부 추가 수수료가 있을 수 있습니다.")
		)

	}else if(loan2Type == "마이너스"){
		EOCS = 0;
		$('#loan2Box').append(
			("<tr> <td>대출비용합계(A+B+C)</td><td>"+parseInt((stamp+EOCS+minusBank).toFixed(0)).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>인지세(A)</td><td>"+parseInt(stamp).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>근저당설정비</td><td>"+parseInt(EOCS).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>마이너스통장 대출취급 수수료</td><td>"+parseInt(minusBank.toFixed(0)).toLocaleString('ko-KR')+"원</td> </tr>")
		)
		$('#loanOption').append(
			("근저당 비용은 교육세, 등록세, 주택 채권매입 가격만 포함된 금액입니다.<br> 회사에 따라 일부 추가 수수료가 있을 수 있습니다.")
		)
	}else if(loan2Type == "부동산"){
		$('#loan2Box').append(
			("<tr> <td>대출비용합계(A+B+C)</td><td>"+parseInt((stamp+EOCS+minusBank).toFixed(0)).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>인지세(A)</td><td>"+parseInt(stamp).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>근저당설정비</td><td>"+parseInt(EOCS).toLocaleString('ko-KR')+"원</td> </tr> ")
		)
		$('#loan2Box').append(
			("<tr> <td>마이너스통장 대출취급 수수료</td><td>"+parseInt(minusBank.toFixed(0)).toLocaleString('ko-KR')+"원</td> </tr>")
		)
		$('#loanOption').append(
			("근저당 비용은 교육세, 등록세, 주택 채권매입 가격만 포함된 금액입니다.<br> 회사에 따라 일부 추가 수수료가 있을 수 있습니다.")
		)
	}
 }
 /* 대출 이자 */
 function loanBtn(){
	$('#loanAll').empty(
 			
		)
	$('#loanPay').empty(
 			
		)
	var loanType = $("select[name=loanType]").val();
	var loanMoney = parseInt($('#loanMoney').val());
	var loanPercent = parseFloat($('#loanPercent').val()).toFixed(2);
	var percent = (loanPercent/100).toFixed(7);
	var loanMonth = parseInt($('#loanMonth').val());
	var fullloan = loanMoney*percent;
	var int = parseInt(1);
	var monthInterest = parseFloat((percent/12).toFixed(7));
	var monthInterestPay = (monthInterest*loanMoney).toFixed(0);
	var PAIMonthPay = ((loanMoney*monthInterest*(Math.pow((int+monthInterest),loanMonth)))/(Math.pow((int+monthInterest),loanMonth)-1)).toFixed(0);
 	var PAIInterest = (PAIMonthPay*loanMonth)-loanMoney;
 	var PAIPay = (PAIMonthPay*loanMonth)/loanMonth;
	var monthPay = 0;
	
	
	if(loanType == "만기"){
		
		$('#loanAll').append(
			("<tr><td>구분</td><td>만기일시 상환</td><td>원리금균긍분할상환</td><td>원금균등분할상환</td></tr>")
		)
		$('#loanPay').append(
			("<tr><td>회차</td><td>상환원리금</td><td>상환원금</td><td>월대출이자금액</td><td>대출잔액</td></tr>")
		)
		
		for(var i = 1; i <= loanMonth; i++){
			
			if(i==loanMonth){
				$('#loanPay').append(
					("<tr><td>"+i+"회</td><td>"+parseInt(parseInt(loanMoney)+parseInt(monthInterestPay)).toLocaleString('ko-KR')+"원</td><td>"+parseInt(loanMoney).toLocaleString('ko-KR')+"원</td><td>"+parseInt(monthInterestPay).toLocaleString('ko-KR')+"원</td><td>"+0+"원</td></tr>")
				)
				continue;
			}
			$('#loanPay').append(
				("<tr><td>"+i+"회</td><td>"+parseInt(monthInterestPay).toLocaleString('ko-KR')+"원</td><td>"+0+"원</td><td>"+parseInt(monthInterestPay).toLocaleString('ko-KR')+"원</td><td>"+parseInt(loanMoney).toLocaleString('ko-KR')+"원</td></tr>")
			)
			
		}
		$('#loanAll').append(
			("<tr><td>총이자금액</td><td>"+fullloan.toLocaleString('ko-KR')+"원</td><td>"+PAIInterest.toLocaleString('ko-KR')+"원</td><td>"+monthPay.toLocaleString('ko-KR')+"원</td></tr>")
		)
		
	}else if(loanType == "원리금"){
		$('#loanAll').append(
			("<tr><td>구분</td><td>만기일시 상환</td><td>원리금균긍분할상환</td><td>원금균등분할상환</td></tr>")
		)
		$('#loanPay').append(
			("<tr><td>회차</td><td>상환원리금</td><td>상환원금</td><td>월대출이자금액</td><td>대출잔액</td></tr>")
		)
		
		for(var i = 1; i <= loanMonth; i++){
			var MIP = loanMoney*monthInterest;
			var PayMoney = PAIPay-MIP;
			
			if(i==loanMonth){
				$('#loanPay').append(
					("<tr><td>"+i+"회</td><td>"+(parseInt(loanMoney)+parseInt(MIP)).toLocaleString('ko-KR')+"원</td><td>"+parseInt(loanMoney.toFixed(0)).toLocaleString('ko-KR')+"원</td><td>"+parseInt(MIP.toFixed(0)).toLocaleString('ko-KR')+"원</td><td>"+0+"원</td></tr>")
				)
				continue;
			}
			loanMoney -= PayMoney;
			$('#loanPay').append(
				("<tr><td>"+i+"회</td><td>"+PAIPay.toLocaleString('ko-KR')+"원</td><td>"+parseInt(PayMoney.toFixed(0)).toLocaleString('ko-KR')+"원</td><td>"+parseInt(MIP.toFixed(0)).toLocaleString('ko-KR')+"원</td><td>"+parseInt(loanMoney.toFixed(0)).toLocaleString('ko-KR')+"원</td></tr>")
			)
			
		}
		$('#loanAll').append(
			("<tr><td>총이자금액</td><td>"+fullloan.toLocaleString('ko-KR')+"원</td><td>"+PAIInterest.toLocaleString('ko-KR')+"원</td><td>"+monthPay.toLocaleString('ko-KR')+"원</td></tr>")
		)

	}else if(loanType == "원금"){
		$('#loanAll').append(
			("<tr><td>구분</td><td>만기일시 상환</td><td>원리금균긍분할상환</td><td>원금균등분할상환</td></tr>")
		)
		$('#loanPay').append(
			("<tr><td>회차</td><td>상환원리금</td><td>상환원금</td><td>월대출이자금액</td><td>대출잔액</td></tr>")
		)	
		var a = (loanMoney/loanMonth).toFixed(0);
		
		for(var i = 1; i <= loanMonth; i++){
			var MIP2 = (loanMoney*monthInterest).toFixed(0);
			monthPay += parseInt(MIP2);
			if(i==loanMonth){
				$('#loanPay').append(
					("<tr><td>"+i+"회</td><td>"+(parseInt(loanMoney)+parseInt(MIP2)).toLocaleString('ko-KR')+"원</td><td>"+loanMoney.toLocaleString('ko-KR')+"원</td><td>"+parseInt(MIP2).toLocaleString('ko-KR')+"원</td><td>"+0+"원</td></tr>")
				)
				continue;
			}
			loanMoney -= a;
			$('#loanPay').append(
				("<tr><td>"+i+"회</td><td>"+(parseInt(a)+parseInt(MIP2)).toLocaleString('ko-KR')+"원</td><td>"+parseInt(a).toLocaleString('ko-KR')+"원</td><td>"+parseInt(MIP2).toLocaleString('ko-KR')+"원</td><td>"+loanMoney.toLocaleString('ko-KR')+"원</td></tr>")
			)
			
		}
		$('#loanAll').append(
			("<tr><td>총이자금액</td><td>"+fullloan.toLocaleString('ko-KR')+"원</td><td>"+PAIInterest.toLocaleString('ko-KR')+"원</td><td>"+monthPay.toLocaleString('ko-KR')+"원</td></tr>")
		)
	}
 }
 