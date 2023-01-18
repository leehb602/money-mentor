<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<footer class="footer_main">
			<div class="footer_main_div">
				<div class="fo_text_div">
					<div class="fo_div1">
						Momentor <span> 𝑻𝒉𝒆 𝒄𝒉𝒐𝒊𝒄𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒎𝒐𝒎𝒆𝒏𝒕 𝒅𝒆𝒕𝒆𝒓𝒎𝒊𝒏𝒆𝒔 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆.</span>
					</div>
					<div class="fo_div2">
						<ul>
							<li><a href="<c:url value='/all/introduce'/>">모멘토 소개</a></li>
							<li>ㅣ</li>
							<li><a href="javascript:void(0);" onclick="chatFunction(); return false;">챗봇 가이드</a></li>
							<li>ㅣ</li>
							<li><a href="<c:url value='/#'/>">비교 & 추천</a></li>
							<li>ㅣ</li>
							<li><a href="<c:url value='/#'/>">캘린더</a></li>
						</ul>
					</div>
					<hr />
					<div class="fo_div3">
						<ul>
							<li><a href="<c:url value='/#'/>">이용안내</a></li>
							<li>ㅣ</li>
							<li>대표 1J4P</li>
							<li>ㅣ</li>
							<li>제휴 문의 momentor@momentor.com</li>
						</ul>
					</div>
					<div class="fo_div4">
						<ul>
							<li>고객센터 02-1111-xxxx</li>
							<li>ㅣ</li>
							<li>운영시간 09:00 ~ 18:00</li>
							<li>ㅣ</li>
							<li>Copyright 2023. Momentor Co.</li>
						</ul>
					</div>
					
				</div>
				<div class="fo_other">
					<div>제휴-Multicampus</div><br><br>
					<div>모멘토</div>
					<div><a href="<c:url value='https://github.com/leehb602/money-mentor/tree/main'/>" target="_blank"><ion-icon id="git_img"name="logo-github" /></a></div>
					<div><a href="<c:url value='/#'/>"><ion-icon id="git_img" name="logo-discord" /></a></div>
				</div>
			</div>
		</footer>