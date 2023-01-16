<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<header id="header_main">
			<div class="header_main_div">
				<div class="hd_div">
					<!-- width1150이상 -->
					<div class="hd_row1_menu">
				
					 <c:if test="${empty sessionScope.sid}">
						<span id="span_text"><a href="<c:url value='/user/loginForm'/>">로그인</a></span>
						<span id="span_line">ㅣ</span>
						<span id="span_text"><a href="<c:url value='/user/joinForm'/>">회원가입</a></span>
						<span id="span_line">ㅣ</span>
						<span id="span_text"><a href="<c:url value='/#'/>">이용약관</a></span>
					</c:if>	
					<c:if test="${not empty sessionScope.sid}">
					${sessionScope.suserName }님	<!--  30:00(점점 줄고 지나면 자동 로그아웃)  -->
						<span id="span_text"><a href="<c:url value='/user/logout'/>">로그아웃</a></span>
						<span id="span_line">ㅣ</span>
						<span id="span_text"><a href="<c:url value='/#'/>">이용약관</a></span>
					</c:if>
					
					</div>
					<div class="hd_row2_menu">
						<ul class="hd_menu1" id="hd_menu1_id1">
							<li id="menu1_1"><a id="momentor_loge" href="<c:url value='/'/>">Momentor</a></li>
						</ul>
						<ul class="hd_menu1">
							<li id="menu1_2"><div><a href="<c:url value='/#'/>">고객센터</a></div>
								<ul class="hd_menu_sub">
									<li><a href="<c:url value='/#'/>">챗봇</a></li>
									<li><a href="<c:url value='/#'/>">챗봇 가이드</a></li>
									<li><a href="<c:url value='/#'/>">계산기</a></li>
									<li><a href="<c:url value='/#'/>">자주하는 Q&A</a></li>
								</ul>
							</li>
							<li id="menu1_2"><div><a href="<c:url value='/#'/>">사업소개</a></div>
								<ul class="hd_menu_sub">
									<li><a href="<c:url value='/all/introduce'/>">모멘토란</a></li>
									<li><a href="<c:url value='/#'/>">~~</a></li>
								</ul>
							</li>
							<li id="menu1_3"><div><a href="<c:url value='/#'/>">비교 & 추천</a></div>
								<ul class="hd_menu_sub">
									<li><a href="<c:url value='/#'/>">카드</a></li>
									<li><a href="<c:url value='/#'/>">적금</a></li>
									<li><a href="<c:url value='/#'/>">예금</a></li>
									<li><a href="<c:url value='/#'/>">대출</a></li>
									<li><a href="<c:url value='/#'/>">연금</a></li>
								</ul>
							</li>
							<li id="menu1_4"><div><a href="<c:url value='/#'/>">My Momentor</a></div>
								<ul class="hd_menu_sub">
									<li><a href="<c:url value='/#'/>">캘린더</a></li>
									<li><a href="<c:url value='/user/assetInfoForm'/>">정보입력</a></li>
									<li><a href="<c:url value='/user/assetResultForm/${sessionScope.sid }'/>">자산결과</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>	
				<!-- width1150이하 -->
				<div class="hd_div2">
					<div class="menu_under1100">
						<span id="under_span"><a href="<c:url value='/#'/>">목록</a></span>
						<span id="under_span"><a id="momentor_loge" href="<c:url value='/#'/>">Momentor</a></span>
						<span id="under_span"><a href="<c:url value='/#'/>"><img id="lockimg"src="<c:url value='/images/lock.png'/>" ></a>
						
						</span>
					</div>
				</div>				
			</div>
		</header>