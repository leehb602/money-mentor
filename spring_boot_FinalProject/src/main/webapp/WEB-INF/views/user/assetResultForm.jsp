<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>자산 결과</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/assetResult.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
	</head>
	<body>
		<div id="wrap">
			<c:import url="/WEB-INF/views/layout/top.jsp" />
			<div id="main">
				<table id="resultTable">
					<thead>
						<tr>
							<th>${sessionScope.suserName }님의 자산 데이터 결과</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								momentor 가입자 <span id="span">${totalUserCnt }명</span>중 ${userAge }는 <span id="span">${ageUserCnt }명</span>이며,<br>
								<span id="span">${sessionScope.suserName }</span>님은 ${userAge } 중 자산 상위 <span id="span">${percentage }%</span>입니다.
							</td>
						</tr>
						
						
					</tbody>
					<tfoot>
						
					</tfoot>
				</table>
			</div>
			<div id="recommend">
				<table id="recomTable">
					<tr>
						<td id="title" colspan="4">${userAge }가 선호하는 상품 보러가기</td>
					</tr>
					<tr>
						<td><div class="product p1">바로가기 - 금융상품추가예정</div></td>
						<td><div class="product p2">바로가기 - 금융상품추가예정</div></td>
						<td><div class="product p1">바로가기 - 금융상품추가예정</div></td>
						<td><div class="product p2">바로가기 - 금융상품추가예정</div></td>
					</tr>
					<tr>
						<td><div class="product p2">바로가기 - 금융상품추가예정</div></td>
						<td><div class="product p1">바로가기 - 금융상품추가예정</div></td>
						<td><div class="product p2">바로가기 - 금융상품추가예정</div></td>
						<td><div class="product p1">바로가기 - 금융상품추가예정</div></td>
					</tr>
				</table>
			</div>
		</div>
	</body>
</html>
