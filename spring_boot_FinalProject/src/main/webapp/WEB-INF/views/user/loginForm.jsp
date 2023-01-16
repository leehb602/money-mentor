<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>로그인</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/loginForm.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/loginForm.js'/>"></script>
	</head>
	<body>
		<div id="wrap">
				<table>
				<thead>
					<tr>
						<th>Momentor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input type="text" id="userId" placeholder="아이디">
						</td>
					</tr>
					<tr>
						<td>
							<input type="password" id="userPassword" placeholder="비밀번호">
						</td>
					</tr>
					<tr>
						<td>
							<span id="loginMessage"></span>
						</td>
					</tr>
					<tr>
						<td>
							<button id="loginBtn">로그인</button>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>
							<a href="<c:url value='/user/findIdForm'/>">아이디 찾기</a>
							|
							<a href="<c:url value='/user/findPasswordForm'/>">비밀번호 찾기</a>
							|
							<a href="<c:url value='/user/joinForm'/>">회원가입</a>
						</td>
					</tr>
				</tfoot>
				</table>
		</div>
	</body>
</html>
