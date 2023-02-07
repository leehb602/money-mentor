<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>고객센터</title>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/question.css' />">
		
	</head>
	
	<body>
	<c:import url="/WEB-INF/views/layout/top.jsp" />
		<section class="qusFrom_sec">
			<div class="qusFrom_div">
			<h3>질문 / 문의 하기</h3>
				<form method="post" action="<c:url value='/question/insertQ'/>">
				<input type="hidden" name="userId" value="${sessionScope.sid}">
					<table class="QF_table" border="1">
						<tr class="QF_table_title">
							<td>문의 유형<span>(필수)</span></td>
						</tr> 
						<tr>	
							<td>
								<select name="queState">
									<option id="queState" value="질문">질문</option>
									<option id="queState" value="문의">문의</option>
									<c:if test="${sessionScope.sid eq 'admin'}">
									<option id="queState" value="공지">공지</option>
									</c:if>
								</select>
							</td> <!-- id admin 일때만 보여주기 -->
						</tr> 
						<tr class="QF_table_title">
							<td>제목<span>(필수)</span></td>
						</tr> 
						<tr>
						<td>
							<input name="queTitle" type="text"></td>
						</tr>	
						<tr class="QF_table_title">
							<td>내용<span>(필수)</span></td>
						</tr> 
						<tr>	
							<td><textarea rows="10" cols="35" name="question"></textarea></td>
						</tr>
						<tr><td colspan="2"><input type="submit" value="문의하기"><input type="reset" value="취소"></td></tr>
					</table>
				</form>
			</div>
		</section>
		
	<c:import url="/WEB-INF/views/layout/footer.jsp" />
	</body>
</html>