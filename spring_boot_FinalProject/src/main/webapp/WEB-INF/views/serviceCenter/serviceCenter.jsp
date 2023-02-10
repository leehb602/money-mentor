<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>고객센터</title>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/serviceCenter.css' />">
		
	<script src="<c:url value='/js/serviceCenter.js'/>" ></script>
	</head>
	
	<body>
		<c:import url="/WEB-INF/views/layout/top.jsp" />
		<nav class="scNav">
			<div class="SC_main_div">
				<div class="nav_title">
					<p class="nav_p1">모멘토 고객센터</p> 
					<p class="nav_p2">굼금한 점은 검색으로 쉽고 빠르게 확인하세요.</p>
				</div>
				<div class="nav_input">
					<input id="SC_serch" type="text" placeholder="궁금한 점을 검색해 보세요."><button class="SC_serch_btn"> 검색 </button>
				</div>
			</div>
		</nav>
		<section class="FAQSection">
			<div class="SC_main_div SC_div_art">
				<h1>공지 / 자주하는 질문 </h1>
				<div class="artDiv Line1"> 
					<c:forEach var="ques" items="${listAllSC}" varStatus="num">
						<c:if test="${(num.count%3) == 1}">
							<div class="ques_div SC_div${num.count}">
						</c:if>
						<div class="main_FAQ">
							<a class="main_ques SC${num.count}" href="/all/serviceCenter/detail/${ques.qusNum}">
								<input id="detail_qusNum" type="hidden" value="${ques.qusNum}">
								[${ques.queState}]${ques.queTitle} 
							</a>
						</div>
						<c:if test="${(num.count%3) == 0}">
 							</div> 
						</c:if>
					</c:forEach>
				</div>
			</div>
		</section>
		<hr id="SChr"/>
		<section class="queSection">
			<div class="SC_main_div">
				<h2>최근 활동</h2> 
				<div class="QNA_div">
					<div class="answer_text">
					<c:forEach var="ques" items="${listAllSC2}" varStatus="num">
						<c:if test="${(num.count%5) == 1}">
							<ul class="FAQ_ul FAQ_ul_${num.count}"> 
						</c:if>
							<a href="/all/serviceCenter/detail/${ques.qusNum}">
								<input id="detail_qusNum" type="hidden" value="${ques.qusNum}">
								<li>
									${num.count}. [${ques.queState}]
									<c:if test="${empty ques.answer}">
										<span style="color: orange;">답변 대기중</span>
									</c:if>
									<c:if test="${not empty ques.answer}">
										<span>답변 완료</span>
									</c:if><br>
									<h3>제목 : ${ques.queTitle}<button class="qus_check">답변 보기</button></h3>
								</li>
							</a>
						<c:if test="${(num.count%5) == 0}">
							</ul> 	
						</c:if>
					</c:forEach>
					</div>
					<div class="answer_page">
					<c:forEach var="ques" items="${listAllSC2}" varStatus="num">
						<c:if test="${num.last }"><%-- 마지막확인 --%>
							ㅡ <span>
							<c:forEach var="cnt" begin="1" end="${num.count/5+0.9}">
							     <button class="ans_page_btn APBtn${cnt}">${cnt}</button> 
							</c:forEach>
							</span> ㅡ
						</c:if>
					</c:forEach>
					</div>
				</div>
				<a id="questionForm_a" href="<c:url value='/question' />">질문/문의 하기</a>
			</div>
		</section>
		<hr id="SChr"/>
		<c:import url="/WEB-INF/views/layout/footer.jsp" />
	</body>
</html>