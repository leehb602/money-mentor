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
				<table border="1">
					<thead>
						<tr>
							<th>${sessionScope.suserName }님의 자산 데이터 결과</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								momentor 가입자 <span>${totalUserCnt }명</span>중 ${userAge }는 <span>${ageUserCnt }명</span>이며,<br>
								<span>${sessionScope.suserName }</span>님은 ${userAge } 중 자산 상위 <span>${percentage }%</span>입니다.
							</td>
						</tr>
						<tr>
							<td>${userAge }가 선호하는 상품 보러가기</td>
						</tr>
						<tr>
							<td>바로가기 - @@ <br>
								바로가기 - @@
							</td>
						</tr>
					</tbody>
					<tfoot>
						
					</tfoot>
				</table>
			</div>
			<div id="footer">
			
			</div>
		</div>
	</body>
</html>
