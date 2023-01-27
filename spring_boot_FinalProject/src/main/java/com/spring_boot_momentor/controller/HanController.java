package com.spring_boot_momentor.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.service.CardService;


@Controller
public class HanController {
@Autowired
CardService service;
	@RequestMapping("/all/introduce")
	public String introduce() {
		return "/introduce/introduce";
	}
	@RequestMapping("/all/chatguide")
	public String chatGuide() {
		return "/chat/chatBotGuide";
	}
	
	@RequestMapping("/cardRandom")
	public String cardRandom(Model model) {
		ArrayList<CardVO> cardRandom = service.cardRandom();
		model.addAttribute("cardRandom", cardRandom);
		return "indexRanking/cardRanking";
	}
}
