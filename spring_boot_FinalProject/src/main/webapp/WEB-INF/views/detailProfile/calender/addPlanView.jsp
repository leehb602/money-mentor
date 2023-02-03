<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>일정추가</title>
	 	<link rel="stylesheet" type="text/css" href="<c:url value='/css/calenderIndex.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="https://kit.fontawesome.com/bb34e32cb3.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<div id="add-view-body">
			<div id="plan-logo">		
				<img src="/image/MomentorLogo.png">
			</div>
			<section>
				<table>
					<tbody>
						<tr class="prdName">
							<td class="prd-table-title">상품 이름</td>
							<td><input placeholder="사용자 정의 상품" type="text" id="prdName" class="prdName" name="prdName"></td>
						</tr>
						<tr class="prdType">
							<td>상품 종류</td>
							<td>
								<select id="prd-type-select" name="prdType">
									<option value="card" selected>카드</option>
									<option value="insu">보험</option>
									<option value="#">예적금</option>
									<option value="#">대출</option>
								</select>
							</td>
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
						<tr><td colspan="2"><button type="submit" class="calender-add-custom-btn">추가</button></td></tr>
					</tbody>
				</table>
			</section>
		</div>
	</body>
	 <script src="<c:url value='/js/addCustomPlan.js' />"> </script>
</html>