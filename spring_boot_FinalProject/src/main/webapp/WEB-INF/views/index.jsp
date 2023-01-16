<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>momentor</title>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/index.css' />">
	<script src="<c:url value='/js/jquery-3.6.1.min.js'/>" ></script>
	<script src="<c:url value='/js/index.js'/>" ></script>
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
	</head>
	<body>
		<c:import url="/WEB-INF/views/layout/top.jsp" />
		<section id="section_main">
		<div class="sec_main_div">
			<div class="img_main">
					<div class="img_box_center">
						<img class="mainimg" src="<c:url value='/images/mainimgreal.png'/>" >
					</div>
				<div class="sec_img_div">
				 	<div class="img_text">
				 		<span id="text_p">2</span>0<span id="text_p">3</span>0의 자산관리 𝒎𝒆𝒏𝒕𝒐𝒓, 모멘토
				 	</div>
				 	
				 	<p class="img_text2">𝑻𝒉𝒆 𝒄𝒉𝒐𝒊𝒄𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒎𝒐𝒎𝒆𝒏𝒕 𝒅𝒆𝒕𝒆𝒓𝒎𝒊𝒏𝒆𝒔 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆</p>
				 </div>
			</div>
			<div class="menubar">
				<div class="menubar_div">
					<div>계산기</div>
					<div>챗봇</div>
					<div>챗봇</div>
					<div>블라</div>
					<div>등등</div>
				</div>
			</div>
			<div class="sec_pick">
				<div class="pick_main_div">
					<div class="pick_img">
			 			<span class="pick_card_img"><ion-icon name="card-outline"></ion-icon></span>
			 			<span class="pick_bank_img">은행사진</span>
			 			<span class="pick_cel_img">달력사진</span>
			 		</div>
			 		<div class="pick_text">
						<span class="pick_card_text">카드관련설명</span> 
						<span class="pick_bank_text">예적금관련설명</span> 
						<span class="pick_cel_text">캘린더기능설명</span> 
			 		</div>
				</div>
			</div>
			
			<div class="sec_finance">
			 	<div class="fin_main_div">
			 		<div class="fin_tag">
			 			<button class="finBtn" id="fin_card">카드</button>
			 			<button class="finBtn" id="fin_loan">대출</button>
			 			<button class="finBtn" id="fin_sd">예적금</button>
			 			<button class="finBtn" id="fin_ann">연금</button>
			 		</div>
			 		<div class="fin_tag_see">
			 			<div class="fin_see cardSee">카드 카테고리</div>
			 			<div class="fin_see loanSee">대애추울</div>
			 			<div class="fin_see sdSee">예금적금</div>
			 			<div class="fin_see annSee">연금</div>
			 		</div>
			 	</div>	
			 	
			</div>
			
		</div>
		</section>
		<footer class="footer_main">
			<div class="footer_main_div">
				<div class="fo_text_div">
					<div class="fo_div1">
						Momentor <span> 𝑻𝒉𝒆 𝒄𝒉𝒐𝒊𝒄𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒎𝒐𝒎𝒆𝒏𝒕 𝒅𝒆𝒕𝒆𝒓𝒎𝒊𝒏𝒆𝒔 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆.</span>
					</div>
					<div class="fo_div2">
						<ul>
							<li><a href="<c:url value='/all/introduce'/>">모멘토 소개</a></li>
							<li>ㅣ</li>
							<li>챗봇 가이드</li>
							<li>ㅣ</li>
							<li>비교 & 추천</li>
							<li>ㅣ</li>
							<li>캘린더</li>
						</ul>
					</div>
					<hr />
					<div class="fo_div3">
						<ul>
							<li>이용안내</li>
							<li>ㅣ</li>
							<li>대표 1J4P</li>
							<li>ㅣ</li>
							<li>제휴 문의 momentor@momentor.com</li>
						</ul>
					</div>
					<div class="fo_div4">
						<ul>
							<li>고객센터 02-1111-xxxx</li>
							<li>ㅣ</li>
							<li>운영시간 09:00 ~ 18:00</li>
							<li>ㅣ</li>
							<li>Copyright 2023. Momentor Co.</li>
						</ul>
					</div>
					
				</div>
				<div class="fo_other">
					<div>제휴-Multicampus</div>
					<div>깃허브</div>
				</div>
			</div>
		</footer>
		
	</body>
</html>
						