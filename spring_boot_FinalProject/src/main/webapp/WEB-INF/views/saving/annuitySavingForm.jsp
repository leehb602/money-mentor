<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel ="stylesheet" type="text/css" href="<c:url value='/css/savingForm.css' />">
    <script src="<c:url value='/js/jquery-3.6.1.min.js' />"></script>
	<script src="<c:url value='/js/annuitySavingSearch.js' />"></script>
    
   
  </head>
  <body>
    <div class="">
    	<div id="wrap">
    	<header>
    	
    	</header>
    		   				
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
						<form id="AnnuitySavingList">
						<div class="searchbox">
							<ul>
								<li>
									<label for="prdName">상품명</label>
									<input type="text" name="prdName" id="prdName" style="width:800px">
								</li>
								
								<li>
									<p>연금종류</p>
									<div class="radio_list">
									<input type="radio" name="pnsnKindName" id="pnsnKindName01" checked="checked" value="">
										<label for="pnsnKindName01">전체</label>
										<input type="radio" name="pnsnKindName" id="pnsnKindName02" value="연금저축펀드">
										<label for="pnsnKindName02">연금저축펀드</label>
										<input type="radio" name="pnsnKindName" id="pnsnKindName03" value="연금저축보험(생명)">
										<label for="pnsnKindName03">연금저축보험(생명)</label>
										<input type="radio" name="pnsnKindName" id="pnsnKindName04" value="연금저축보험(손해)">
										<label for="pnsnKindName04">연금저축보험(손해)</label>
									</div>
								</li>
								<li>
									<p>상품유형</p>
									<div class="radio_list">
										<input type="radio" name="prdtTypeName" id="prdtTypeName01" checked="checked" value="">
										<label for="prdtTypeName01">전체</label>										
										<input type="radio" name="prdtTypeName" id="prdtTypeName03" value="주식형">
										<label for="prdtTypeName03">주식형</label>
										<input type="radio" name="prdtTypeName" id="prdtTypeName04" value="재간접형">
										<label for="prdtTypeName04">재간접형</label>
										<input type="radio" name="prdtTypeName" id="prdtTypeName05" value="금리연동형">
										<label for="prdtTypeName05">금리연동형</label>
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
				<footer>
						
				</footer>	
    	</div>
    </div>
  </body>
</html>