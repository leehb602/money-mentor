package com.spring_boot_momentor.controller;

import java.io.IOException;
import java.util.ArrayList;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring_boot_momentor.Selenium;
import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.service.CardService;

@Controller
public class CardController {
	@Autowired
	CardService service;

	@RequestMapping("/card")
	public String insertCard() {
		// 원하는곳 URL 입력
		String hyundaiURL = "https://www.hyundaicard.com/cpc/ma/CPCMA0101_01.hc";
		Connection conn = Jsoup.connect(hyundaiURL);
		try {
			Document doc = conn.get();

			Elements hyundaiCardList = doc.getElementsByClass("list05");

			for (int idx = 0; idx < hyundaiCardList.size(); idx++) {
				CardVO vo = new CardVO();

				Elements cardInfos = hyundaiCardList.get(idx).getElementsByClass("info2");

				for (int cnt = 0; cnt < cardInfos.size(); cnt++) {
					Elements cardInfo = cardInfos.get(cnt).select("li");

					Element cardLists = hyundaiCardList.get(idx).getElementsByClass("card_plt").get(cnt);

					// h4_b_lt 카드 이름
					Elements hyundaiCardName = cardLists.getElementsByClass("h4_b_lt");
					// p2_m_2ln mt12 설명
					Elements hyundaiCardDescribed = cardLists.getElementsByClass("p2_m_2ln mt12");
					// img url 이미지 url
					Element hyundaiCardImgUrl = cardLists.getElementsByClass("img").get(0);

					final String name = hyundaiCardName.text();
					final String des = hyundaiCardDescribed.text();
					String img = hyundaiCardImgUrl.select("img").attr("src");

					// 카드 URL뽑기
					String imgUrl = img.substring(46, img.length());
					imgUrl = imgUrl.substring(0, imgUrl.length() - 6);
					// https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=imgUrl

					String fee = "";
					int intFee = 0;
					for (int list = 0; list < cardInfo.size(); list++) {
						if (cardInfo.get(list).text().indexOf("국내전용") != -1) {
							fee = cardInfo.get(list).text();
							fee = fee.substring(5);
							fee = fee.replace(",", "");
							;
							fee = fee.replace("원", "");

							if (fee.equals("연회비 없음")) {
								intFee = 0;
								continue;
							}

							intFee = Integer.parseInt(fee);
						}
					}

					vo.setCardName(name);
					vo.setCardDes(des);
					vo.setCardImgUrl(img);
					vo.setCardFee(intFee);
					vo.setCardUrl(imgUrl);
					vo.setComCtg("현대");
					service.insertCard(vo);
				}
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return "index";
	}

	@RequestMapping("/card/KB")
	public String insertKBCard() {
		try {
			String URL = "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0047";

			// 카드 페이지 받아옴
			Document doc = Jsoup.connect(URL).get();

			// 페이지에 있는 카테고리를 토대로 몇 번 반복할 건지 정함
			Elements tabsMenu = doc.getElementsByClass("tabs__menu");
			int tabsMenuIndexs = tabsMenu.select("li").size();

			// 첫 카테고리부터 반복해 크롤링
			for (int index = 1; index <= tabsMenuIndexs; index++) {
				URL = "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0047?pageNo=1&cateIdx=" + index + "";
				doc = Jsoup.connect(URL).get();
				CardVO vo = new CardVO();

				// card-box__after class를 가진 div 박스를 전부 긁어옴
				Elements cards = doc.getElementsByClass("card-box__after");
				Elements cardsBefore = doc.getElementsByClass("card-box__before");
				int cardValues = cards.size();
				// div 박스를 하나하나 읽어와 안쪽에 있는 요소를 받아옴
				for (int value = 0; value < cardValues; value++) {
					Element card = cards.get(value);
					Element cardBefore = cardsBefore.get(value);
					// 카드 이름
					String name = card.select("h3").text();
					// 카드 설명
					String des = card.select("p").text();
					String imgUrl = cardBefore.select("img").get(0).attr("src");
					String cardUrl = imgUrl.substring(61, 66);
					// https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=cardUrl

					String annulKind = "";
					String annulPrice = "";

					// 기본값은 0
					int price = 0;

					// 연회비(국내인지 비자인지 어떤 연회비인지 따로 설정하기 위해 for문을 씀
					int annualValue = card.getElementsByClass("card-type__item").size();

					System.out.println();

					if (annualValue == 0) {
						// 데이터 저장
						vo.setCardName(name);
						vo.setCardDes(des);
						vo.setCardImgUrl(imgUrl);

						// fee String -> int
						vo.setCardFee(0);
						vo.setCardUrl(cardUrl);
						vo.setComCtg("KB");
						service.insertCard(vo);
					} else {
						for (int annual = 0; annual < annualValue; annual++) {
							// img의 alt 값을 저장
							annulKind = card.getElementsByClass("card-type__item").get(annual)
									.getElementsByClass("card-type__logo").select("img").attr("alt");

							// alt 값이 국내 전용이면 연회비를 가져옴
							if (annulKind.equals("국내전용")) {
								annulPrice = card.getElementsByClass("card-type__item").get(annual)
										.getElementsByClass("card-type__money").text();

								// 연회비가 있으면 그 연회비를 저장하고
								if (!(annulPrice.equals("연회비 없음"))) {
									annulPrice = annulPrice.replace(",", "");
									price = Integer.parseInt(annulPrice);
								}

								// 아니면 0인 그대로 저장
								// 데이터 저장
								vo.setCardName(name);
								vo.setCardDes(des);
								vo.setCardImgUrl(imgUrl);

								// fee String -> int
								vo.setCardFee(price);
								vo.setCardUrl(cardUrl);
								vo.setComCtg("KB");
								service.insertCard(vo);
							}
						}
					}
				}
			}
			System.out.println("success");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "index";
	}

	@RequestMapping("/CardList")
	public String CardList() {
		return "list/cardList";
	}

	// 카드 전체 리스트
	@RequestMapping("/cardallList")
	public String listAllCard(Model model) {
		ArrayList<CardVO> cardList1 = service.listAllCard();
		model.addAttribute("cardList1", cardList1);
		return "list/cardSearchResultView";

	}

	@RequestMapping("/cardsearch")
	public String CardAllSearch(@RequestParam String cardId, Model model) {
		ArrayList<CardVO> cardList1 = service.CardAllSearch(cardId);
		model.addAttribute("cardList1", cardList1);
		System.out.println(cardList1.size());
		return "list/cardSearchResultView";
	}

	// 상품 비교 추가
	@ResponseBody
	@RequestMapping("/CardCompare")
	public CardVO CardCompare(@RequestParam String cardId, Model model) {
		CardVO cardList1 = service.CardCompare(cardId);
		model.addAttribute("cardList1", cardList1);
		return cardList1;
	}

	@RequestMapping("/popup")
	public String popup() {
		return "list/cardList";
	}

	// 카드비교 모달
//	  @ResponseBody
//	  @RequestMapping("/CardComparemodal")
//	  public CardVO CardComparemodal(@RequestParam String cardId, Model model) {
//		  CardVO cardList1 = service.CardComparemodal(cardId);
//		  model.addAttribute("cardList1", cardList1);
//		 return cardList1;
//	  }

	// 카드비교 모달
	@ResponseBody
	@RequestMapping("/CardComparemodal")
	public String CardComparemodal(@RequestParam String cardId, Model model) {
		ArrayList<CardVO> cardList1 = service.CardComparemodal(cardId);
		model.addAttribute("cardList1", cardList1);
		return "list/cardList";
	}

	// 비교 데이터 선택 삭제 : carddNoms
	@ResponseBody
	@RequestMapping("/deleteCard")
	public int deleteCard(@RequestParam("chbox[]") ArrayList<String> chkArr) {
		int result = 0;

		// 배열에서 cartNo 추출해서 해당되는 상품 삭제
		if (chkArr != null) {
			for (String carddNoms : chkArr) {
				service.deleteCard(carddNoms);
			}

			result = 1; // 성공
		}

		return result;
	}
	
	@RequestMapping("/card/IBK")
	public String IBKCard() {
		Selenium selenium = new Selenium();
		selenium.process();
		return "index";
	}

}
