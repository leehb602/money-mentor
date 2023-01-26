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
		<c:import url="/WEB-INF/views/layout/head.jsp" />
	</head>
	<body>
		<c:import url="/WEB-INF/views/layout/top.jsp" />
		<div id="wrap">
			<form id="newPwForm">
				<table>
					<tr>
						<th colspan="2">비밀번호를 변경해주세요</th>
					</tr>
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
