<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<div class="cards">
			<div class="table">
				<div class="orders">
					<button class="order">어떤순 버튼</button>
					<button class="order">어떤순 버튼....</button>
				</div>
				
			  	<div id="js-load" class="main">

	<ul class="list">
<c:forEach var="card" items="${cardList}">
			<h1>${card.cardName}</h1>
</c:forEach>

		<%-- <c:forEach var="card" items="${cardList}">
			<li class="lists__item js-load"
				OnClick="location.href ='http://URL주소'" style="cursor: pointer;">
				<!-- 위에 상세주소  --> <a class="anchor" href=""> <!-- 상세페이지 url 넣기 -->
					<img class="cardImg" src="<c:url value='${card.cardImgUrl}'/>">
			</a>
				<div class="info">
					<!-- 상세페이지 url 넣기 -->
					<a class="anchor"> <!-- 상세페이지 url 넣기 --> <b class="name">${card.cardName}</b>
					</a>
					<p class="desc">${card.cardDes}</p>
					<i class="annual_fee"><fmt:formatNumber value="${card.cardFee}"
							pattern="#,###" /> ₩</i>

				</div>
				<div class="preview">
					<!-- 기본구문법1 -->
					<c:if test="${card.comCtg eq '현대'}">
						<a class="button button--wayra button--border-thick button--text-upper button--size-s"
						href="https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=${card.cardUrl}">카드신청</a>
					</c:if>
					<!-- 기본구문법2 -->
					<c:if test="${card.comCtg eq 'KB'}">
						<a class="button button--wayra button--border-thick button--text-upper button--size-s"
						href="https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=${card.cardUrl}">카드신청</a>
					</c:if>
				</div>
				<br>
			</li>
		</c:forEach> --%>

	</ul>
	<!-- 검색 결과 출력  -->
<div id="js-btn-wrap" class="btn-wrap"> <a href="javascript:;" class="morebutton">더보기 ( / {cardList}.size() )</a> </div>
			</div>
			 </div>
			
	
		
		</div>

