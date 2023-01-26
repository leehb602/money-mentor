<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>아이디 검색 결과</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/idFindResult.css' />">
		<c:import url="/WEB-INF/views/layout/head.jsp" />
	</head>
	<body>
		<c:import url="/WEB-INF/views/layout/top.jsp" />
		<div id="wrap">
			<table>
				<tr>
					<th><span>${userName }</span>님의 아이디는 <span>${userId }</span>입니다.</th>
				</tr>
				<tr>
					<td class="moreHelp"><a href="<c:url value='/user/findPassword'/>">비밀번호가 기억이 안나시나요?</a></td>
				</tr>
				<tr>
					<td class="moreHelp"><a href="<c:url value='/user/loginForm'/>">로그인</a></td>
				</tr>
			</table>
		</div>
	</body>
</html>
