<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
		<!--헤더-->
		<div>
		</div>
		
		<!--섹션-->
		<div id="wrap">
			<div id="body">
				<article id="main">
					<section>
						<div id="calender"> 
							<table id="calenderView">
								<thead id="calenderHead">
									<tr>
										<td id="calenderTitle" class="calenderHeadItems" colspan="5">
											<button onclick="viewSelectYear()" id="yearSelect" class="calenderTitleText">
												<span id="nowYear"></span>년
											</button>
											<button onclick="viewSelectMonth()" id="monthSelect" class="calenderTitleText">
												<span id="nowMonth"></span>월
											</button>
										</td>
										<td class="calenderHeadItems" colspan="2">
											<button class='prevMonthBtn' onclick="prevMonth()" title="이전 달로 이동">
												<i class="fa fa-chevron-left btn"></i>
											</button>
											<button class='nextMonthBtn' onclick="nextMonth()" title="다음 달로 이동">
												<i class="fa fa-chevron-right btn"></i>
											</button>
											<button>
												오늘
											</button>
										</td>
									</tr>
								</thead>
								<tbody id="calenderBody">
								</tbody>
								<tbody id="yearSelectBody">
								</tbody>
								<tbody id="monthSelectBody">
								</tbody>
							</table>
			
							<div id="addItems">
								<button class="btn" title="상품 추가 버튼">
									Add <i class="fa fa-plus"></i>
								</button>
							</div>
						</div>
					</section>
				</article>
			</div>
		</div>
		
		<!--푸터-->
		<div>
		</div>
	</body>
	 <script src="<c:url value='/js/calender.js' />"> </script>
</html>