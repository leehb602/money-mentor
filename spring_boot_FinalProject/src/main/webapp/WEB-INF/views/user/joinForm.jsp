<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>회원가입</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/joinForm.css' />">
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/modal.css' />">
		<link rel="shortcut icon" type="image/x-icon" href="<c:url value='/image/MomentorLogo.png'/>">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="<c:url value='/js/joinForm.js'/>"></script>	
	</head>
	<body>
	<div class="backimg">
		<div id = "wrap">
		<form id="joinForm">
			<table>
				<thead> 
					<tr>
						<th colspan="2"><a href='<c:url value="/"/>'><img src="<c:url value='/image/모멘토 로고.png'/>"></a></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="input">아이디</td>
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<label><input type="text" class="essential" id="id" name="userId" maxlength="10"></label> &nbsp;
									   <button id="idcheck">중복체크</button>
							</div>
							<div>
								<span id="idEmpty"></span>
							</div>
						</td>
					</tr>
					<tr>
						<td class="input">비밀번호</td>			
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<label><input type="password" class="essential" id="password" name="userPassword" maxlength="20"></label>
							</div>
							<div>
								<span id="passwordEmpty"></span>
							</div>
						</td>
					</tr>
					<tr>
						<td class="input">비밀번호 확인</td>
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<label><input type="password" class="essential" id="passwordcheck" maxlength="20"></label>
							</div>
							<div>
								<span id="passcheckEmpty"></span>
							</div>
						</td>
					</tr>
					<tr>
						<td class="input">이름</td>
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<label><input type="text" class="essential" id="name" name="userName"></label>
							</div>
							<div>
								<span id="nameEmpty"></span>
							</div>
						</td>
					</tr>	
					<tr>
						<td class="input">나이</td>
					</tr>
					<tr>
						<td>
							<select name="userAge">
								<option value="">선택해주세요</option>
								<option value="20대">20대</option>
								<option value="30대">30대</option>
								<option value="40대">40대</option>
								<option value="50대이상">50대 이상</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="input">이메일</td>
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<label><input type="text" class="essential" id="email" name="email"> @ </label>
										<select id="emailAddress" name="emailAddress">
											   		<option value="" selected>선택해주세요</option>
													<option value="naver.com">naver.com</option>
													<option value="hanmail.net">hanmail.net</option>
													<option value="google.com">gmail.com</option>
													<option value="nate.com">nate.com</option>
										</select>
							</div>
							<div>
								<span id="emailEmpty"></span>
							</div>
						</td>
					</tr>
					<tr>
						<td class="input">휴대폰번호</td>
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<label><input id="hp1" name="hp1" type="text" size="3" maxlength="3"> -
									   <input id="hp2" name="hp2" type="text" size="4" maxlength="4"> -
									   <input id="hp3" name="hp3" type="text" size="4" maxlength="4"></label>
							</div>
							<div>
								<span id="phoneNumEmpty"></span>
							</div>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="2">
							<button id="joinBtn">가입하기</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</form>
		<!-- 모달창 띄우는 부분 -->
		<c:import url="/WEB-INF/views/user/layout/modal.jsp"/>
		<!-- 종료 -->
		</div>
		</div>
	</body>
</html>