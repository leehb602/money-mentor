package com.spring_boot_momentor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HanController {
	@RequestMapping("/all/introduce")
	public String introduce() {
		return "/introduce/introduce";
	}
	@RequestMapping("/all/chatguide")
	public String chatGuide() {
		return "/chat/chatBotGuide";
	}
}
