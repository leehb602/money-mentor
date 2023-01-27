<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>개인 신용 대출 리스트</title>
   <link rel ="stylesheet" type="text/css" href="<c:url value='/css/savingForm.css' />">
    <script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
	<script src="<c:url value='/js/creditLoanSearch.js' />"></script>
    <c:import url="/WEB-INF/views/layout/head.jsp" />
   
  </head>
  <body>
    <div class="">
    	<c:import url="/WEB-INF/views/layout/top.jsp" />
    	<div id="List_All">	   				
		<!-- 리스트 -->
		<div class="prdList">
			<table>
			 <colgroup>
				<col width="*">
				<col width="30%">
			</colgroup> 
		<tbody>
		<section id="container">
			<div class="contents">
					<fieldset>
						<legend>조회</legend>
						<form id="CreditLoanList">
						<div class="searchbox">
							<ul>
								<li>
									<label for="prdName">상품명</label>
									<input type="text" name="prdName" id="prdName" style="width:800px">
								</li>
								
								<li>
									<p>가입방법</p>
									<div class="radio_list">
									<input type="radio" name="joinWay" id="joinWay01" checked="checked" value="">
										<label for="joinWay01">전체</label>
										<input type="radio" name="joinWay" id="joinWay02" value="인터넷">
										<label for="joinWay02">인터넷</label>
										<input type="radio" name="joinWay" id="joinWay03" value="스마트폰">
										<label for="joinWay03">스마트폰</label>
										<input type="radio" name="joinWay" id="joinWay04" value="영업점">
										<label for="joinWay04">영업점</label>
										<input type="radio" name="joinWay" id="joinWay05" value="전화(텔레뱅킹)">
										<label for="joinWay05">전화(텔레뱅킹)</label>
										<input type="radio" name="joinWay" id="joinWay06" value="모집인">
										<label for="joinWay06">모집인</label>
										<input type="radio" name="joinWay" id="joinWay07" value="기타">
										<label for="joinWay07">기타</label>
									</div>
								</li>
								<li>
									<p>상품유형</p>
									<div class="radio_list">
										<input type="radio" name="crdtTypeName" id="crdtTypeName01" checked="checked" value="">
										<label for="crdtTypeName01">전체</label>										
										<input type="radio" name="crdtTypeName" id="crdtTypeName02" value="일반신용대출">
										<label for="crdtTypeName02">일반신용대출</label>
										<input type="radio" name="crdtTypeName" id="crdtTypeName03" value="마이너스한도대출">
										<label for="crdtTypeName03">마이너스한도대출</label>
										<input type="radio" name="crdtTypeName" id="crdtTypeName04" value="장기카드대출(카드론)">
										<label for="crdtTypeName04">장기카드대출(카드론)</label>
										
									</div>
								</li>
							</ul>

							<!-- button -->
							<div class="btn_set btn_center">
								<div class="btn btn01">
									<input type="submit" value="조회">
								</div>
							</div>							
						</div>
						</form>
					</fieldset>
						
					</div>
					</section>
					</tbody>
						</table>
							</div>
						<div id="searchResultBox">
								
						</div>
						<!-- button -->
						<div class="btn_set btn_center" id="js-btn-wrap">
							<div class="btn btn03">
								<a href="javascript:;" id="load">더보기</a>
							</div>
						</div>
						</div>
				<c:import url="/WEB-INF/views/layout/footer.jsp" />	
    	
    </div>
  </body>
</html>