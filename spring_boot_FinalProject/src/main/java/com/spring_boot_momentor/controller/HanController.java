package com.spring_boot_momentor.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.model.ServiceCenterVO;
import com.spring_boot_momentor.service.CardService;
import com.spring_boot_momentor.service.SCService;


@Controller
public class HanController {
@Autowired
CardService service;
@Autowired
SCService scservice;
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
	/*서비스센터 start*/
	@RequestMapping("/all/serviceCenter")
	public String serviceCenter(Model model) {
		ArrayList<ServiceCenterVO> listAllSC = scservice.listAllSC();
		model.addAttribute("listAllSC", listAllSC);
		ArrayList<ServiceCenterVO> listAllSC2 = scservice.listAllSC2();
		model.addAttribute("listAllSC2", listAllSC2);
		return "serviceCenter/serviceCenter";
	}
	@RequestMapping("/question")
	public String questionForm() {
		return "serviceCenter/questionForm";
	}
	@RequestMapping("/question/insertQ")
	public String insertServiceCenter(ServiceCenterVO vo) {
		scservice.insertServiceCenter(vo);
		return "redirect:/all/serviceCenter";
	}
	@RequestMapping("/all/serviceCenter/detail/{qusNum}")
	public String answerDetail(@PathVariable("qusNum") String qusNum, Model model) {
		
		model.addAttribute("qusNum",qusNum);
		ArrayList<ServiceCenterVO> getQNADetail = scservice.getQNADetail(qusNum);
		model.addAttribute("getQNADetail", getQNADetail);
		
		return "serviceCenter/questionDetail";
		
	}
	/*서비스센터 end*/
}
