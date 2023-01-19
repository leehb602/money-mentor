<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>비밀번호 찾기</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/idpwFind.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/pwFind.js'/>"></script>
	</head>
	<body>
		<div id="wrap">
			<form id="pwForm">
				<table>
					<tr>
						<th colspan="2">비밀번호 찾기</th>
					</tr>
					<tr>
						<td>이름</td>
						<td>
							<input type="text" id="userName" name="userName" class="textBox">
						</td>
					</tr>
					<tr>
						<td>아아디</td>
						<td>
							<input type="text" id="userId" name="userId" class="textBox">
						</td>
					</tr>
					<tr>
						<td>휴대폰 번호</td>
						<td>
							<input id="hp1" class="textBox" name="hp1" type="text" size="3" maxlength="3"> -
							<input id="hp2" class="textBox" name="hp2" type="text" size="4" maxlength="4"> -
							<input id="hp3" class="textBox" name="hp3" type="text" size="4" maxlength="4">
						</td>
					</tr>
					<tr>
						<td colspan="2"><input type="submit" value="찾기" id="findBtn"></td>
					</tr>
				</table>
			</form>
			<div id="findPwBox">
			
			</div>
		</div>
	</body>
</html>
