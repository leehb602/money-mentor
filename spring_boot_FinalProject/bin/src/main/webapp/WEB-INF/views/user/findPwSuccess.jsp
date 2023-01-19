<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>비밀번호 찾기 성공 및 변경</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/idpwFind.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/pwChange.js'/>"></script>
	</head>
	<body>
		<div id="wrap">
			<form id="newPwForm">
				<table>
					<tr>
						<td>아이디</td>
						<td>
							<input type="text" id="userId" name="userId" value="${userId }" readonly="readonly">
						</td>
					</tr>
					<tr>
						<td>새 비밀번호</td>
						<td>
							<input type="password" id="userPassword" name="userPassword" class="textBox">
						</td>
					</tr>
					<tr>
						<td>비밀번호 확인</td>
						<td><input type="password" id="pwCheck" class="textBox"></td>
					</tr>
					<tr>
						<td colspan="2"><input type="submit" value="변경하기" id="changeBtn"></td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
