<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>임시메인페이지</title>
	</head>
	<body>
		<c:if test="${empty sessionScope.sid}">
		<a href="<c:url value='/user/joinForm'/>">회원가입</a>
		<a href="<c:url value='/user/loginForm'/>">로그인</a>
		</c:if>
		<c:if test="${not empty sessionScope.sid}">
		${sessionScope.suserName }님
		<a href="<c:url value='/user/logout'/>">로그아웃</a>
		<hr>
		<a href="<c:url value='/user/assetInfoForm'/>">자산정보입력</a>
		<hr>
		<a href="<c:url value='/user/assetResultForm/${sessionScope.sid }'/>">자산결과</a>
		</c:if>
	</body>
</html>
