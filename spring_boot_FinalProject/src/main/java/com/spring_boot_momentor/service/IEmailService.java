package com.spring_boot_momentor.service;

import java.util.Map;

import com.spring_boot_momentor.model.EmailVO;

public interface IEmailService {
	
	public Map<String, Object> send(String email, String title, String body);
	
	// 인증코드 등록 및 업데이트
	public void updateEmailAuth(EmailVO vo);
	
	// 인증코드 가져오기
	public String getAuthNum(EmailVO vo);
}