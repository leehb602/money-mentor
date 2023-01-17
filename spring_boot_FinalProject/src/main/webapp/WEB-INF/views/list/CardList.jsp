<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>카드비교</title>
		<link rel="stylesheet" type="text/css" href="<c:url value='/css/List.css'/>">
		<link rel="stylesheet" type="text/css" href="<c:url value='/css/List_out.css'/>">
		<link rel="stylesheet" type="text/css" href="<c:url value='/css/more.css'/>">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>	
		<script src="<c:url value='/js/more.js' />"></script>	
		<script src="<c:url value='/js/cardSearch.js' />"></script>	
		
	</head>
	<body>
		<c:import url="/WEB-INF/views/layout/header" />
	<div class="filters">
		<div class="table">
			<div class="category">
				<form id="CardList">
					
					<input id="cardId" type="text" name="keyword" 
					class="input-search-word" placeholder="카드이름을 입력해주세요.">
					<input type="submit" class="header-item" value="검색" />
						<i class="fa fa-search"></i>
					
					
				</form>
			</div>


			<div class="category">
				<h5 class="title">카드사</h5>
				<div class="btncontainer">
					<button class="item" type="button">
						<span class="cardbtnImg"><img class="iogo" alt="국민카드"
							src="/image/KB.png"></span>
					</button>
					<button class="item" type="button">
						<span class="cardbtnImg"><img class="iogo" alt="현대카드"
							src="/image/HD.png"></span>
					</button>
				</div>
			</div>
			<div class="category">
				<h5 class="title">혜택</h5>
				<div class="btncontainer">
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">주유</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">통신</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">쇼핑</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">외식</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">자동차</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">의류</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">게임</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">보험</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">OTT</span>
					</button>
					<!-- 더 추가가능 -->
				</div>

			</div>

			<div class="category">
				<h5 class="title">연회비</h5>
				<div class="btncontainer">
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">전체</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">~1만원</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">~3만원</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">~10만원</span>
					</button>
					<button class="item" type="button">
						<span class="w-btn w-btn-indigo">10만원 이상</span>
					</button>
				</div>
			</div>

			<div class="category">

				<button class="item2" type="button" value="">
					<h5 class="comparison">카드 비교하기</h5>
				</button>
			</div>
		</div>
	</div>
 <%--	<div class="cards">
			<div class="table">
				<div class="orders">
					<button class="order">어떤순 버튼</button>
					<button class="order">어떤순 버튼....</button>
				</div>
				
			  	<div id="js-load" class="main">
				  <ul class="list">
				<c:forEach var="card" items="${cardList}">
					<li class="lists__item js-load" OnClick="location.href ='http://URL주소'" style="cursor:pointer;">
					 <!-- 위에 상세주소  -->
						<a class="anchor" href=""> <!-- 상세페이지 url 넣기 -->
						 <img class="cardImg" src="<c:url value='${card.cardImgUrl}'/>">
						</a> 
						<div class="info" ><!-- 상세페이지 url 넣기 -->
							<a class="anchor"  > <!-- 상세페이지 url 넣기 -->
								<b class="name">${card.cardName}</b>
							</a>
							<p class="desc">${card.cardDes}</p>
							<i class="annual_fee"><fmt:formatNumber value="${card.cardFee}" pattern="#,###"/> ₩</i>
							
						</div>
						<div class="preview">
							<!-- 기본구문법1 -->
							<c:if test="${card.comCtg eq '현대'}">
							<a class="button button--wayra button--border-thick button--text-upper button--size-s" href="https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=${card.cardUrl}">카드신청</a>
							</c:if>
							<!-- 기본구문법2 -->
							<c:if test="${card.comCtg eq 'KB'}">
							<a class="button button--wayra button--border-thick button--text-upper button--size-s" href="https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=${card.cardUrl}">카드신청</a>						
							</c:if>	
						</div><br>	
					</li>
					
					
				
				</c:forEach> 
			
				
				</ul>  --%>
				
				
				<%-- <ul class="list">
					<c:choose>
						<c:when test="${empty cardList}">
							찾는 상품이 없습니다
						</c:when>
						<c:otherwise>
							    <c:forEach var="card" items="${cardList}">
					<li class="lists__item js-load" OnClick="location.href ='http://URL주소'" style="cursor:pointer;">
					 <!-- 위에 상세주소  -->
						<a class="anchor" href=""> <!-- 상세페이지 url 넣기 -->
						 <img class="cardImg" src="<c:url value='${card.cardImgUrl}'/>">
						</a> 
						<div class="info" ><!-- 상세페이지 url 넣기 -->
							<a class="anchor"  > <!-- 상세페이지 url 넣기 -->
								<b class="name">${card.cardName}</b>
							</a>
							<p class="desc">${card.cardDes}</p>
							<i class="annual_fee"><fmt:formatNumber value="${card.cardFee}" pattern="#,###"/> ₩</i>
							
						</div>
						<div class="preview">
							<!-- 기본구문법1 -->
							<c:if test="${card.comCtg eq '현대'}">
							<a class="button button--wayra button--border-thick button--text-upper button--size-s" href="https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=${card.cardUrl}">카드신청</a>
							</c:if>
							<!-- 기본구문법2 -->
							<c:if test="${card.comCtg eq 'KB'}">
							<a class="button button--wayra button--border-thick button--text-upper button--size-s" href="https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=${card.cardUrl}">카드신청</a>						
							</c:if>	
						</div><br>	
					</li>
				</c:forEach>
			         	</c:otherwise>
			   		</c:choose>  	
				</ul>   
					<!-- 검색 결과 출력  -->
				
			 <div id="js-btn-wrap" class="btn-wrap"> <a href="javascript:;" class="morebutton">더보기 ( / )</a> </div>
			</div>
			 </div>
			
	
		
		</div>
		 --%>
		<div id="searchResultBox"></div>
	</body>
</html>
