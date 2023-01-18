package com.spring_boot_momentor.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring_boot_momentor.model.CalenderVO;
import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.service.CalenderService;
import com.spring_boot_momentor.service.CardService;


@Controller
public class CalenderController {
	private CardService cardService;
	private CalenderService calenderService;
	
	@Autowired
	public CalenderController(
			CardService cardService,
			CalenderService calenderService
			) {
		this.calenderService = calenderService;
		this.cardService = cardService;
	}
	
	
	@RequestMapping("/profile/calender")
	public String calender(Model model) {
		ArrayList<CardVO> cardList = cardService.listAllCard();
		model.addAttribute("cardList", cardList);
		return "detailProfile/calender/layout/calenderMain";
	}
	
	@RequestMapping("/profile/calender/getData")
	public @ResponseBody ArrayList<CalenderVO> getCalenderData() {
		ArrayList<CalenderVO> calenderList = calenderService.calenderView();
		return calenderList;
	}

	@RequestMapping("/profile/calender/getPrdData")
	public @ResponseBody ArrayList<CardVO> getPrdData() {
		ArrayList<CardVO> cardList = cardService.listAllCard();
		return cardList;
	}
	
//	@GetMapping("cardList")
//	public String calenderList(Model model
//								, @RequestParam(value="nowPage", required=false)String nowPage
//								, @RequestParam(value="cntPerPage", required=false)String cntPerPage
//								, @RequestParam(value="nowPage", required=false)String nowPage) {
//		int total = calenderservice.countCard();
//		return "detailProfile/calender/layout/calenderMain";
//	}
	
//	
//	@RequestMapping("/profile/calender/viewList")
//	public String itemsView(Model model) {
//		ArrayList<CardVO> cardList = service.listAllCard();
//		model.addAttribute("cardList", cardList);
//		return "redirect:defalutUrl/calenderMain";
//	}
}
