<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Momentor 챗봇</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/chatbot.css'/>">
		<link rel="shortcut icon" type="image/x-icon" href="<c:url value='/image/MomentorLogo.png'/>">
		<script src="<c:url value='/js/jquery-3.6.1.min.js'/>"></script>
		<script src="<c:url value='/js/chatbot.js'/>"></script>
	</head>
	<body>
		<div id="wrap">
			<!-- Header -->
			<div id="chatHeader">
				<div class="chat_title"><img id="main_logo"src="<c:url value='/image/MomentorLogo.png'/>"></div>
			</div>
			
			<!-- 채팅 답변 출력 -->
			<div id="chatBox">
				
				
			</div>
			<form id="chatbotForm">
				<div id="chatform_div">
				<div class="chatform_text">
					<input type="text" id="message" name="message" placeholder="질문을 입력하세요">
				</div>
				<div class="chatform_btn">
					<input type="submit" id="btnSubmit" value="➜"> 
				</div>
				</div>
			</form>
			
		
		</div>
	</body>
</html>
