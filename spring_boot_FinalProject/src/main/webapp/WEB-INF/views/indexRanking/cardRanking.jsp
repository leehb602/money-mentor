<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script src="<c:url value='/js/ranking.js'/>" ></script>

<div class="ranking_main">
	<div class="ranking_img">
		<c:forEach var="card" items="${cardRandom}">
			<span class="cardIndex_span ${card.cardId}">
			<img class="cardIndex_main ${card.cardId}"  src="<c:url value='${card.cardImgUrl}'/>">
				${card.cardName}
				
			</span>
		</c:forEach>
	</div>
	<div class="ranking_text">
		<c:forEach var="card" items="${cardRandom}">
			<div class="detail ${card.cardId}">
			<input class="detail_id" type="hidden" value="${card.cardId}">
			<br>
				<h2 id="ranking_h2"> ${card.cardName}</h2>
				<div>${card.cardDes}</div>
				<div>연회비 : ${card.cardFee} 원</div>
				<br>
				<div class="ranking_text_url">
				<c:if test="${card.comCtg eq '현대'}">
					<a class="button button--wayra button--border-thick button--text-upper button--size-s"
					href="https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=${card.cardUrl}">카드신청 하기</a>
				</c:if>
				<!-- 기본구문법2 -->
				<c:if test="${card.comCtg eq 'KB'}">
					<a class="button button--wayra button--border-thick button--text-upper button--size-s"
					href="https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=${card.cardUrl}">카드신청 하기</a>
				</c:if>
				</div>
			</div>
		</c:forEach>
	</div>
	
</div>