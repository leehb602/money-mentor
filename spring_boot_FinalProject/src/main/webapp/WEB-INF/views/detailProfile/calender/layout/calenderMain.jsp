<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	 	<link rel="stylesheet" type="text/css" href="<c:url value='/css/calender.css' />">
		<script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
		<script src="https://kit.fontawesome.com/bb34e32cb3.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<% String helloText="Hello~!"; %>
		<!--헤더-->
		<div>
		</div>
		
		<!--섹션-->
		<section>
			<div id="body">
				<div id="planView">
					<div class="year-month"></div>
					<div class="title">이번 달 일정</div>
					<div id="planList"></div>
				</div>
				<div id="calender"> 
					<div id="calenderHead">
						<div class="dateView">
							<div class="calenderHeadItems viewDate">
								<button id="yearSelect" class="calenderTitleText">
									<span id="nowYear"></span>.
								</button>
								<button id="monthSelect" class="calenderTitleText">
									<span id="nowMonth"></span>
								</button>
							</div>
						</div>
						<div class="calenderHeadItems">
							<button class="prevMonthBtn" title="이전 달로 이동">
								<i class="fa fa-chevron-left btn"></i>
							</button>
							<button class="nextMonthBtn" title="다음 달로 이동">
								<i class="fa fa-chevron-right btn"></i>
							</button>
							<button class="todayBtn btn" title="오늘로 이동">
								<span class="btnText">오늘</span>
							</button>
						</div>
					</div>
					<div id="calenderView">
						<table>
							<tbody id="calenderBody">
							</tbody>
							<tbody id="yearSelectBody">
							</tbody>
							<tbody id="monthSelectBody">
							</tbody>
						</table>
					</div>
					<div id="viewOption">
						<div id="addItems" class="hide">
							<button class="prdAddBtn btn" title="상품 추가 버튼">
								<i id="prdIcon" class="fa fa-plus"></i>
							</button>
						</div>
						<div id="searchOption" style="display:none">
							<div id="searchBox">
								<input type="text" name="searchText" placeholder="검색어 입력"><button id="searchBtn"><i class="fa fa-search"></i></button>
							</div>
							<select id="prdKind" name="prdKind">
								<option value="card" selected>카드</option>
								<option value="insu">보험</option>
							</select>
							<span id="prdKindDetail">
							</span>
							<select id="order" name="order">
								<option value="defalut" selected>기본</option>
								<option value="name">이름순</option>
								<option value="latest">최신순</option>
								<option value="past">추천순</option>
							</select>
							<button id="sortBtn">정렬</button>
						</div>
					</div>
					<div id="productView" style="display:none">
					</div>
				</div>
			</div>
		</section>
		
		<!--푸터-->
		<div>
		</div>
	</body>
	 <script src="<c:url value='/js/calender.js' />"> </script>
</html>