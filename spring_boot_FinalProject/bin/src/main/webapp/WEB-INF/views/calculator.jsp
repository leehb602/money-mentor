<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>계산기</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/calculator.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/calculator.js'/>"></script>
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
							<td><span class="tabBtn loanTab">대출</span></td>
						</tr>
					</table>
				</div>
				<div class="menu salary">
					<form id="salaryForm">
						<table class="menu_info">
							<tr>
								<td>
									<input type="radio" name="salaryType" value="월급">월급
									<input type="radio" name="salaryType" value="연봉" checked="checked">연봉							
								</td>
								<td>
									<div class="write won">
										<input type="text" class="input_data" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>비과세액</td>
								<td>
									<div class="write won">
										<input type="text" class="input_data" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>부양가족수(본인포함)</td>
								<td>
									<div class="write person">
										<input type="text" class="input_data" name="" value="">명
									</div>
								</td>
							</tr>
							<tr>
								<td>20세 이하 자녀수</td>
								<td>
									<div class="write person">
										<input type="text" class="input_data" name="">명
									</div>	
								</td>
							</tr>
						</table>
						<table class="menu_Btn">
							<tr>
								<td><input type="reset" class="btn reset" value="초기화"></td>
								<td><input type="submit" class="btn submit" value="계산하기"></td>
							</tr>
						</table>
					</form>
				</div>
				<div class="menu deposit">
					<form id="depositForm">
						<table>
							<tr>
								<td>예치금액</td>
								<td colspan="2">
									<div class="write won">
										<input type="text" class="input_data" name="">원
									</div>
								</td>
							</tr>
							<tr>
								<td>예금기간</td>
								
							</tr>
						</table>
					</form>
				</div>
				<div class="menu saving">
					<form>
						
					</form>
				</div>
				<div class="menu loans">
					<form>
					
					</form>
				</div>
			</div>
		</div>
	</body>
</html>
