package com.spring_boot_momentor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring_boot_momentor.service.ChatbotService;

@RestController
public class AIRestController {
	@Autowired
	private ChatbotService service;
	
	// 챗봇
	@RequestMapping("/chatbot")
	public String chatbot(@RequestParam("message") String message) {		
		String result = service.main(message); // 질문 메시지 전달하고 답변 텍스트 받아옴
		return result;
	}
	
}
