<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Momentor계산기</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/calculator.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/calculator.js'/>"></script>
		<script src="<c:url value='/js/calResult.js'/>"></script>
	</head>
	<body>
		<div id="wrap">
			<div id="container">
				<div class="menu_tab">
					<table class="list_tab">
						<tr>
							<td><span class="tabBtn salaryTab">연봉</span></td>
							<td><span class="tabBtn depositTab">예금</span></td>
							<td><span class="tabBtn savingTab">적금</span></td>
							<td><span class="tabBtn loanTab2">대출비용</span></td>
							<td><span class="tabBtn loanTab">대출이자</span></td>
						</tr>
					</table>
				</div>
				
				<div class="menu salary">
					<form id="salaryForm">
					
						<table class="menu_info">
							<tr>
								<td>
									<input type="radio" name="salaryType" id="salaryType" value="월급">월급
									<input type="radio" name="salaryType" id="salaryType" value="연봉" checked="checked">연봉							
								</td>
								<td>
									<div class="write won">
										<input type="text" class="input_data" id="salMoney" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>비과세액</td>
								<td>
									<div class="write won">
										<input type="text" class="input_data" id="salTax" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>부양가족수(본인포함)</td>
								<td>
									<div class="write person">
										<input type="text" class="input_data" id="salFamily"  name="" value="">명
									</div>
								</td>
							</tr>
							<tr>
								<td>20세 이하 자녀수</td>
								<td>
									<div class="write person">
										<input type="text" class="input_data" id="salChild" name="">명
									</div>	
								</td>
							</tr>
						</table>
						<div class="btn_div">
							<table class="menu_Btn">
								<tr>
									<td><input type="reset" class="btn reset" value="초기화"></td>
									<td><input type="button" class="btn submit" onclick="salBtn()" value="계산하기"></td>
								</tr>
							</table>
						</div>
					</form>
				</div>
				<div class="menu deposit">
					<form id="depositForm">
						<table class="menu_info">
							<tr>
								<td>예치금액</td>
								<td colspan="2">
									<div class="write won">
										<input type="text" class="input_data" id="depMoney" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>예치기간</td>
								<td colspan="2">
									<div class="write month">
										<input type="text" class="input_data" id="depMonth" name="">개월
									</div>
								</td>
							</tr>
							<tr>
								<td>이자율</td>
								<td colspan="2">
									<div class="write percent">
										<input type="text" class="input_data" id="depPercent" name="">%
									</div>
								</td>
							</tr>
						</table>
						<div class="btn_div">
							<table class="menu_Btn">
								<tr>
									<td><input type="reset" class="btn reset" value="초기화"></td>
									<td><input type="button" class="btn submit" onclick="depBtn()" value="계산하기"></td>
								</tr>
							</table>
						</div>
					</form>
				</div>
				<div class="menu saving">
					<form id="savingForm">
						<table class="menu_info">
							<tr>
								<td>월 적립액</td>
								<td colspan="2">
									<div class="write won">
										<input type="text" class="input_data" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>적립기간</td>
								<td colspan="2">
									<div class="write month">
										<input type="text" class="input_data" name="">개월
									</div>
								</td>
							</tr>
							<tr>
								<td>이자율</td>
								<td colspan="2">
									<div class="write percent">
										<input type="text" class="input_data" name="">%
									</div>
								</td>
							</tr>
						</table>
						<div class="btn_div">
							<table class="menu_Btn">
								<tr>
									<td><input type="reset" class="btn reset" value="초기화"></td>
									<td><input type="button" class="btn submit" onclick="savBtn()" value="계산하기"></td>
								</tr>
							</table>
						</div>
					</form>
				</div>
				<div class="menu loan2">
					<form id="loanForm2">
						<table class="menu_info">
							<tr>
								<td>대출 종류</td>
								<td colspan="2">
									<input type="radio" name="loan2Type" value="신용" checked="checked">신용대출
									<input type="radio" name="loan2Type" value="마이너스">마이너스대출	
									<input type="radio" name="loan2Type" value="부동산" >부동산담보대출
								</td>
							</tr>
							<tr>
								<td>대출금액</td>
								<td colspan="2">
									<div class="write won">
										<input type="text" class="input_data" id="loan2Money" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>대출 취급 수수료</td>
								<td colspan="2">
									<div class="write percent">
										<input type="text" class="input_data" id="loan2Persent" name="">%
									</div>
									일반적으로 (1.00~2.50%)
								</td>
							</tr>
						</table>
						<div class="btn_div">
							<table class="menu_Btn">
								<tr>
									<td><input type="reset" class="btn reset" value="초기화"></td>
									<td><input type="button" class="btn submit" onclick="loan2Btn()" value="계산하기"></td>
								</tr>
							</table>
						</div>
					</form>
				</div>
				<div class="menu loan">
					<form id="loanForm">
						<table class="menu_info">
							<tr>
								<td>대출금액</td>
								<td colspan="2">
									<div class="write won">
										<input type="text" class="input_data" id="loanMoney" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>대출금리</td>
								<td colspan="2">
									<div class="write percent">
										<input type="text" class="input_data" id="loanPercent" name="">%
									</div>
								</td>
							</tr>
							<tr>
								<td>대출기간</td>
								<td colspan="2">
									<div class="write year">
										<input type="text" class="input_data"  id="loanMonth" name="">개월
									</div>
								</td>
							</tr>
							<tr>	
								<td>상환방법</td>
								<td colspan="2">
									<div class="write percent">
										<select name="loanType">
											<option value="만기">만기일시 상환</option>
											<option value="원리금">원리금 균등 분할 상환</option>
											<option value="원금">원금 균등 분할 상환</option>
										</select>
										
									</div>
								</td>
							</tr>
						</table>
						<div class="btn_div">
							<table class="menu_Btn">
								<tr>
									<td><input type="reset" class="btn reset" value="초기화"></td>
									<td><input type="button" class="btn submit" onclick="loanBtn()" value="계산하기"></td>
								</tr>
							</table>
						</div>
					</form>
				</div>
				
				
			</div> <!-- container -->
			<div class="result salary_result">
				<div class="result_div salary_re" style="background:wheat;">
					<div style="background:green;">
						계산 결과 
					</div>
					<div id="salaryBox" >
						국민연금 (4.5%): <br>
						건강보험 (3.545%): <br>
						요양보험 (12.81%): <br>
						고용보험 (0.9%): <br>
						근로소득세 (간이세액): <br>
						지방소득세(10%): <br>
						년 예상 실수령액: <br>
						월 환산금액: <br>
						
					</div>
				</div>
			</div>
			<div class="result ds_result">
				<div class="result_div ds_re" style="background:wheat;">
					<div style="background:green;">
						계산 결과 
					</div >
					<table id="dsBox">
					<!-- 결과 테이블  -->
					</table>
				</div>
				<!-- 추가 안내 문구 -->
				<div id="dsOption">
				</div>
			</div>
			<div class="result loan2_result">
				<div class="result_div loan2_re" style="background:wheat;">
					<div style="background:green;">
						계산 결과 
					</div>
					<table id="loan2Box">
					<!-- 결과 테이블  -->
					</table>
				</div>
				<div id="loanOption">
				<!-- 추가 안내 문구 -->
				</div>
			</div>
			<div class="result loan_result">
				<div class="result_div loan_re" style="background:wheat;">
					<div style="background:green;">
						계산 결과 
					</div>
					<div id="loanBox">
						<table id="loanAll">
							<!-- 대출 이자 테이블 -->
						</table>
						<table id="loanPay">
							<!-- 회차별 금액 테이블 -->
						</table>
					</div>
				</div>
			</div>
		</div> <!-- wrap -->
	</body>
</html>
