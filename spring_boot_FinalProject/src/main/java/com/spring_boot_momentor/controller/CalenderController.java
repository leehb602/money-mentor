package com.spring_boot_momentor.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring_boot_momentor.model.CalenderProduct;
import com.spring_boot_momentor.model.CalenderVO;
import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.model.InsuVO;
import com.spring_boot_momentor.model.Plan;
import com.spring_boot_momentor.service.CalenderService;
import com.spring_boot_momentor.service.CardService;
import com.spring_boot_momentor.service.InsuService;


@Controller
public class CalenderController {
	private CardService cardService;
	private CalenderService calenderService;
	private InsuService insuService;
	@Autowired
	public CalenderController(
			CardService cardService,
			CalenderService calenderService,
			InsuService insuService
			) {
		this.calenderService = calenderService;
		this.cardService = cardService;
		this.insuService = insuService;
	}
	
	@RequestMapping("/profile/calender")
	public String calender(Model model, HttpSession session) {
		
		ArrayList<CardVO> cardList = cardService.listAllCard();
		model.addAttribute("cardList", cardList);
		return "detailProfile/calender/calenderMain";
	}
	
	@RequestMapping("/profile/calender/getSID")
	public @ResponseBody String getSID(Model model, HttpSession session) {
		String userID = (String)session.getAttribute("sid");
		model.addAttribute("userID", userID);
		return userID;
	}
	
	
	@RequestMapping("/profile/calender/getPlanData")
	public @ResponseBody ArrayList<Plan> getCalenderData(HttpSession session) {
		String userID = (String)session.getAttribute("sid");
		ArrayList<Plan> planList = calenderService.calenderView(userID);
		return planList;
	}

	@RequestMapping("/profile/calender/changePrdName")
	public String changePrdName(HttpSession session,
												@RequestParam("prdName") String prdName,
												@RequestParam("prdID") String prdID,
												@RequestParam("prdType") String prdType) {
		String userID = (String)session.getAttribute("sid");
		calenderService.changePrdName(prdName, userID, prdID, prdType);

		return "redirect:/profile/calender";
	}

	@SuppressWarnings("null")
	@RequestMapping("/profile/calender/getPrdData/{kind}/{kindDetail}/{order}")
	public @ResponseBody ArrayList<CalenderProduct> getPrdCardData(
													@PathVariable String kind,
													@PathVariable String kindDetail,
													@PathVariable String order) {	

		ArrayList<CalenderProduct> prd = new ArrayList<CalenderProduct>();
		System.out.println(kind);
		System.out.println(kindDetail);
		System.out.println(order);
		switch(kind) {
			case "card":
				if(kindDetail.equals("default")) {
					System.out.println("여기?");
					ArrayList<CardVO> cardList = cardService.listAllCard();
					for(int i = 0; i < cardList.size(); i++) {
						CalenderProduct vo = new CalenderProduct();
						vo.setPrdID(cardList.get(i).getCardId());
						vo.setPrdName(cardList.get(i).getCardName());
						vo.setPrdDes(cardList.get(i).getCardDes());
						vo.setPrdImg(cardList.get(i).getCardImgUrl());
						vo.setPrdPrice(cardList.get(i).getCardFee());
						vo.setPrdURL(cardList.get(i).getCardUrl());
						vo.setPrdCom(cardList.get(i).getComCtg());
						vo.setPrdCtg(cardList.get(i).getComCtg());
						prd.add(vo);
					}

				}
				else {
					System.out.println("저기?");
					ArrayList<CardVO> cardList = calenderService.calenderListCard(kindDetail);
					System.out.println("됨?");
					for(int i = 0; i < cardList.size(); i++) {
						System.out.println("됨2");
						CalenderProduct vo = new CalenderProduct();
						vo.setPrdID(cardList.get(i).getCardId());
						vo.setPrdName(cardList.get(i).getCardName());
						vo.setPrdDes(cardList.get(i).getCardDes());
						vo.setPrdImg(cardList.get(i).getCardImgUrl());
						vo.setPrdPrice(cardList.get(i).getCardFee());
						vo.setPrdURL(cardList.get(i).getCardUrl());
						vo.setPrdCom(cardList.get(i).getComCtg());
						vo.setPrdCtg(cardList.get(i).getComCtg());
						prd.add(vo);
					}
					
				}
				break;
			case "insu":
				if(kindDetail.equals("default")) {
					ArrayList<InsuVO> insuList = calenderService.calenderListAllInsu();
					for(int i = 0; i < insuList.size(); i++) {
						CalenderProduct vo = new CalenderProduct();
						vo.setPrdID(Integer.toString(insuList.get(i).getId()));
						vo.setPrdName(insuList.get(i).getInsuName());
						vo.setPrdDes(insuList.get(i).getInsuDes());
						vo.setMale(insuList.get(i).getMale());
						vo.setFemale(insuList.get(i).getFemale());
						vo.setPrdURL(insuList.get(i).getInsuJoinURL());
						vo.setPrdCom(insuList.get(i).getPrdName());
						vo.setPrdComImg(insuList.get(i).getPrdLogo());
						vo.setPrdCtg(insuList.get(i).getInsuCtg());
						vo.setPrdDes(insuList.get(i).getInsuDes());
						prd.add(vo);
					}
				}
				else {
					ArrayList<InsuVO> insuList = calenderService.calenderListInsu(kindDetail);
					for(int i = 0; i < insuList.size(); i++) {
						CalenderProduct vo = new CalenderProduct();
						vo.setPrdID(Integer.toString(insuList.get(i).getId()));
						vo.setPrdName(insuList.get(i).getInsuName());
						vo.setPrdDes(insuList.get(i).getInsuDes());
						vo.setMale(insuList.get(i).getMale());
						vo.setFemale(insuList.get(i).getFemale());
						vo.setPrdURL(insuList.get(i).getInsuJoinURL());
						vo.setPrdCom(insuList.get(i).getPrdName());
						vo.setPrdComImg(insuList.get(i).getPrdLogo());
						vo.setPrdCtg(insuList.get(i).getInsuCtg());
						vo.setPrdDes(insuList.get(i).getInsuDes());
						prd.add(vo);
					}
				}
				break;
		}



		return prd;
		
	}

	@RequestMapping("/profile/calender/duplicateCheck")
	public @ResponseBody String duplicateCheck(HttpSession session,
												@RequestParam("prdID") String prdID,
												@RequestParam("prdType") String prdType) {
		String memId = (String)session.getAttribute("sid");
		String result = "";
		//vo에 올리기 전, 중복이 있는지 검사
		int planCount = calenderService.planDuplicateCheck(memId, prdID, prdType);
		
		if(planCount == 0) {
			result = "ok";
		}
		else {
			result = "fail";
		}

		return result;
	}
	

	
	@RequestMapping("/profile/calender/sendFormData/{prdType}/{prdID}")
	public String getFromData(CalenderVO vo,
											@PathVariable String prdID,
											@PathVariable String prdType,
											@RequestParam("calSubDate") String calSubDate,
											@RequestParam("calTransfer") int calTransfer,
											@RequestParam("calMaturity") int calMaturity,
											@RequestParam("calPayment") int calPayment,
											HttpSession session,
											Model model) {

		String memId = (String)session.getAttribute("sid");

		//vo에 올리기 전, 중복이 있는지 검사
		int planCount = calenderService.planDuplicateCheck(memId, prdID, prdType);
		System.out.println(planCount);
		
		if(planCount != 0) {
			System.out.println("faild");
		}
		else {
			vo.setCalMaturity(calMaturity);
			vo.setCalSubDate(calSubDate);
			vo.setCalTransfer(calTransfer);
			vo.setPrdID(prdID);
			vo.setPrdType(prdType);
			vo.setUserID(memId);
			vo.setCalPayment(calPayment);
			calenderService.insertPlan(vo);
			System.out.println("success");
		}
		return "redirect:/profile/calender";
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
