<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>모멘토 소개</title>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/introduce.css' />">
		<script src="<c:url value='/js/introduce.js'/>" ></script>
	</head>
	
	<body>
	<c:import url="/WEB-INF/views/layout/top.jsp" />
	<section class="intro_sec">
		<div class="intro_div">
			<div id="momentor_sec1" class="momentor"> <!-- id 값으로 css에 이미지넣기 -->
				<div class="sec_box1">
					<div class="sec_box1_title1"><span id="money_span">Money</span> <span id="and">&</span> <span id="momentor_span">Mentor</span> <br>Momentor </div><br>
					<div class="sec_box1_title2">2030을 위한 금융 플렛폼 
					<br><br>
					𝑻𝒉𝒆 𝒄𝒉𝒐𝒊𝒄𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒎𝒐𝒎𝒆𝒏𝒕 <br>𝒅𝒆𝒕𝒆𝒓𝒎𝒊𝒏𝒆𝒔 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆</div>
				</div>
			</div>
			<div class="black_div">
			</div>
			<div id="momentor_sec2" class="momentor">
				<div class="sec_box2">
					<div class="sec_box_div">
					<div class="sec_box2_title1">Team Mission <br></div>
					<div class="sec_box2_title2"> 
					모멘토는 2030을 위한 금융 플렛폼을 만들고자 합니다.<br>
					단순한 금융 사이트가 아닌 사회 초년생의 자산관리를<br>
					쉽고, 편리하고, 친근하게 접근하고자 합니다.<br>
					2030의 금융 관련 문제를 줄여주는것이 Momentor 입니다.
					</div>
					</div>	
				</div>
			</div>
			<div class="black_div1">
			</div>
			<div id="momentor_sec3" class="momentor">
				<div class="sec_box3">
					<div class="box3_title">역사를 함께 만들어가요</div> 
					<div class="box3_all">
						<ul class="box3_year">
							<li><button class="ybtn" id="year23">2023 &nbsp;&nbsp;&nbsp; ●</button>
								<div class="box3_y y23">
								<ul class="box3_y y23">
									<li class="box3_date">2023.01.20</li>
									<li class="box3_text">모멘토 구축</li>
									<br><br>
									<li class="box3_date">2023.02.21</li>
									<li class="box3_text">Momentor 서비스 시작</li>
									<br><br>
									<li class="box3_date">2023.07</li>
									<li class="box3_text">5억원 투자유치</li>
									<br><br>
									<li class="box3_date">2023.11</li>
									<li class="box3_text">모멘토(Momentor) 상표권 등록</li>
								</ul>
								</div>
							</li>
							<br><br>
							<li><button class="ybtn" id="year22">2022 &nbsp;&nbsp;&nbsp; ●</button>
								<div class="box3_y y22">
								<ul class="box3_y y22">
									<li class="box3_date">2022.12.29</li>
									<li class="box3_text">팀메이킹</li>
								</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="momentor_sec4" class="momentor">
				<div class="sec_box4">
					<div class="sec_box4_title">투자자들이 모멘토와 함께 합니다</div>
					<div class="alliance_div">
						<div><img src="https://www.multicampus.com/kr/images/sub/about/about-ci.png"/></div>
						<div class="alliance_div_M">Momentor</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="disunite_div" ></div>
	</section>
	<!-- footer.jsp -->
	<c:import url="/WEB-INF/views/layout/footer.jsp" />
	</body>
</html>