<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>아이디 찾기</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/idpwFind.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/idFind.js'/>"></script>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
	</head>
	<body>
		<c:import url="/WEB-INF/views/layout/top.jsp" />
		<div id="wrap">
			<form id="idFindForm">
				<table>
					<tr>
						<th colspan="2">아이디 찾기</th>
					</tr>
					<tr>
						<td class="title">이름</td>
						<td>
							<input type="text" id="userName" name="userName" class="textBox">
						</td>
					</tr>
					<tr>
						<td class="title">휴대폰 번호</td>
						<td>
							<input id="hp1" class="textBox" name="hp1" type="text" size="3" maxlength="3"> -
							<input id="hp2" class="textBox" name="hp2" type="text" size="4" maxlength="4"> -
							<input id="hp3" class="textBox" name="hp3" type="text" size="4" maxlength="4">
						</td>
					</tr>
					<tr>
						<td class="title">이메일</td>
						<td>
							<input type="text" id="userEmail" name="userEmail" class="textBox">
							<input type="button" id="authBtn" class="btn" value="인증번호받기">
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<input type="text" id="emailCheck" name="emailCheck" class="textBox">
							<input type="button" id="checkBtn" class="btn" value="확인">
						</td>		
					</tr>
					<tr>
						<td colspan="2"><div id="findError"></div></td>
					</tr>
					<tr>
						<td colspan="2"><input type="submit" value="찾기" class="btn" id="findBtn"></td>
					</tr>
				</table>
			</form>
				<br>
				<div id=findIdBox>
				
				</div>
		</div>
	</body>
</html>
