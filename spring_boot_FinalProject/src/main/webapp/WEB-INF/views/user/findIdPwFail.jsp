<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>아이디 찾기 실패</title>
		<link rel ="stylesheet" type="text/css" href="<c:url value='/css/idFindResult.css' />">
	</head>
	<body>
		<br><br><hr style="width :50%;">
		<div id="wrap">
			<table>
				<tr>
					<th id="findFail">검색되는 결과가 없습니다.</th>
				</tr>
				<tr>
					<td class="moreHelp"><a href="<c:url value='/'/>">홈으로 가기</a></td>
				</tr>
			</table>
		</div>
	</body>
</html>
