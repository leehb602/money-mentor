<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>1:1 Q&A</title>
		<c:import url="/WEB-INF/views/layout/head.jsp" />
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/question.css' />">
	</head>
	
	<body>
	<c:import url="/WEB-INF/views/layout/top.jsp" />
		<section class="qusFrom_sec">
			<div class="qusFrom_div">
			<h3>1:1 Q&A</h3>
				<c:choose>
					<c:when test="${empty sessionScope.sid}">
					<br><br>
						<span id="qna_login_text">로그인후 이용 해주세요</span> <br>
						<a id="qna_login" href="<c:url value='/user/loginForm'/>">👉로그인👈</a>
					</c:when>		
					<c:otherwise>
						<form method="post" action="<c:url value='/question/insertQ'/>">
							<input type="hidden" name="userId" value="${sessionScope.sid}">
							<span class="QNA_span">문의 작성</span><br>
							<hr id="qna_hr"/>
							<table class="QF_table" >
								<tr class="QF_table_title">
									<td class="td_title" >문의 유형</td>
									<td class="td_input">
										<select class="queState" name="queState">
											<option id="queState" value="질문">질문 있어요!!</option>
											<option id="queState" value="문의">문의 사항이 있어요!! </option>
											<c:if test="${sessionScope.sid eq 'admin'}"><!-- id admin 일때만 보여주기 -->
											<option id="queState" value="공지">공지 작성 </option>
											</c:if>
										</select>
									<hr id="td_hr"/>
									</td> 
								</tr> 
								<tr class="QF_table_title">
									<td class="td_title">작성자</td>
									<td class="td_input"><span style="color:black;"> "${sessionScope.suserName}" 님</span><hr id="td_hr"/></td>
								</tr>
								<tr class="QF_table_title">
									<td class="td_title">제목</td>
									<td class="td_input"><input class="queTitle" name="queTitle" type="text" placeholder="제목을 입력해주세요."></td>
								</tr>
								<tr class="QF_table_title">
									<td class="td_title">내용 </td>
									<td class="td_input"><textarea rows="10" cols="70" name="question" placeholder="문의 내용을 입력해주세요."></textarea><hr id="td_hr"/></td>
								</tr>
								<tr>
									<td colspan="2" id="table_btn"><input id="btn_res" type="reset" value="취소"><input id="btn_sub" type="submit" value="문의하기"></td>
								</tr>
							</table>
						</form>
					</c:otherwise>	
				</c:choose>
			</div>
		</section>
	<c:import url="/WEB-INF/views/layout/footer.jsp" />
	</body>
</html>