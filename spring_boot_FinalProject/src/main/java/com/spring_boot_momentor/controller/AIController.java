package com.spring_boot_momentor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring_boot_momentor.service.ChatbotService;

@Controller
public class AIController {
	@Autowired
	private ChatbotService service;
	
	// 챗봇
	// (1) 임의의 메시지 전달하고 응답 메시지 콘솔에 출력
//	@RequestMapping("/chatbot")
//	public void chatbot() {
//		String result = service.main("안녕");
//		System.out.println(result);
//	}
	
	@RequestMapping("/chatbotForm")
	public String chatbotForm() {
		return "chat/chatbotForm";
	}
}
