<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>연금 리스트</title>
  <link rel ="stylesheet" type="text/css" href="<c:url value='/css/savingForm.css' />">
    <script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
    <script src="<c:url value='/js/listMore.js' />"></script>
    
  </head>
  <body>
  <div class="prdList">
			<table summary="">
			<colgroup>
				<col width="*">
				<col width="30%">
			</colgroup> 
		<tbody>
		<section id="container">
			<div class="contents" >
    <c:forEach var="annuitySaving" items='${annuitySavingList }'>
    <table summary="" id="js-load" class="lists__item js-load">
		<tr>
			<td class="c_info" >
				<a href="#">											
					<dl>
						<dt><a href=<c:url value='/saving/detailViewAnnuitySaving/${annuitySaving.prdNum }'/>">${annuitySaving.prdNum }</a></dt>
						<dd>${annuitySaving.comName }</dd>
						<dd>${annuitySaving.prdName }</dd>
						<dd>${annuitySaving.pnsnKindName }</dd>
						<dd>${annuitySaving.prdtTypeName }</dd>
						<!-- <dd>최고 연 <strong>3.25%</strong> 36개월</dd> -->
					</dl>
				</a>
			</td>
			<td class="c_date">
				<div class="btn_in">
					<a href="#">비교하기</a>
					<a href="#">가입하기</a>
				</div>
			</td>
		</tr>
		</table>									
	</c:forEach>
	</div>
	</section>
	</tbody>
	</table>
	</div>
  </body>
</html>