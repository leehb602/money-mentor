package com.spring_boot_momentor.controller;

import java.io.IOException;
import java.sql.SQLException;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
      CardVO vo = new CardVO();
      try {
         Document doc = conn.get();

         // h4_b_lt 카드 이름
         Elements hyundaiCardName = doc.getElementsByClass("h4_b_lt");
         // p2_m_2ln mt12 설명 
         Elements hyundaiCardDescribed = doc.getElementsByClass("p2_m_2ln mt12");
         //img url 이미지 url
         Elements hyundaiCardImgUrl = doc.select("a > .img > img");
         // main-txt 연회비
         Elements hyundaiCardFee = doc.select("ul.memberFee > ul.info2 > li.main-txt");
         
         for (int i = 0; i < hyundaiCardName.size()-7; i++) {
                
                final String name = hyundaiCardName.get(i).text();
                final String des = hyundaiCardDescribed.get(i).text();
                String img = hyundaiCardImgUrl.get(i).attr("abs:src");
                final String fee = hyundaiCardFee.get(i).text();

                // 카드 URL뽑기  
                String imgUrl = img.substring( 46, img.length());
                imgUrl = imgUrl.substring( 0, imgUrl.length()-6);
                // https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=imgUrl

                // 데이터 저장 
                vo.setCardName(name);
                vo.setCardDes(des);
                vo.setCardImgUrl(img);
                vo.setCardFee(fee);
                vo.setCardUrl(imgUrl);
	            vo.setComCtg("현대");
                service.insertCard(vo);
            }
         for (int i = 0; i < hyundaiCardFee.size(); i++) {
				final String fee = hyundaiCardFee.get(i).text();
				if (fee.indexOf("국내전용")==-1) {
					continue;
				}
//				System.out.println(i+". 연회비: " + fee);
				
				String newFee = fee.substring( 5);
				newFee = newFee.replace(",", "");
				newFee = newFee.replace("원", "");
//				System.out.println(i+". 2연회비: " + newFee);
				String intFee = "";
				if (newFee.equals("연회비 없음")) {
					intFee = "-";	
					vo.setCardFee(intFee);
					service.updateCardFee(vo);
				}else {
					intFee = hyundaiCardFee.get(i).text();
					vo.setCardFee(intFee);
					service.updateCardFee(vo);
				}
				System.out.println(i+". int: " + intFee);
				
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
		    
			//카드 페이지 받아옴
	        Document doc = Jsoup.connect(URL).get();
	        
			//페이지에 있는 카테고리를 토대로 몇 번 반복할 건지 정함
			Elements tabsMenu = doc.getElementsByClass("tabs__menu");
			int tabsMenuIndexs = tabsMenu.select("li").size();
			
			//첫 카테고리부터 반복해 크롤링
			for(int index = 1; index <= tabsMenuIndexs; index++) {
				URL = "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0047?pageNo=1&cateIdx=" + index + "";
				doc = Jsoup.connect(URL).get();
			    CardVO vo = new CardVO();	
				
				//card-box__after class를 가진 div 박스를 전부 긁어옴
				Elements cards = doc.getElementsByClass("card-box__after");
				Elements cardsBefore = doc.getElementsByClass("card-box__before");
				int cardValues = cards.size();
				//div 박스를 하나하나 읽어와 안쪽에 있는 요소를 받아옴
				for(int value = 0; value < cardValues; value++) {
					Element card = cards.get(value);
					Element cardBefore = cardsBefore.get(value);
					//카드 이름
					String name = card.select("h3").text();
					//카드 설명
					String des = card.select("p").text();
					String imgUrl = cardBefore.select("img").get(0).attr("src");
					
					String annulKind = "";
					String annulPrice = "";
					
					// 기본값은 0
					int price = 0;
					
					//연회비(국내인지 비자인지 어떤 연회비인지 따로 설정하기 위해 for문을 씀
					int annualValue = card.select("em").size();
					
					if(annualValue == 0) {
						// 데이터 저장 
			            vo.setCardName(name);
			            vo.setCardDes(des);
			            vo.setCardImgUrl(imgUrl);
			            
			            //fee String -> int
			            vo.setCardFee("0");
			            vo.setCardUrl(URL);
			            service.insertCard(vo);
					}
					else {
						for(int annual = 0; annual < annualValue; annual++) {
							// img의 alt 값을 저장
							annulKind = cards.select("img").get(annual).attr("alt");
							// alt 값이 국내 전용이면 연회비를 가져옴
							if(annulKind.equals("국내전용")) {
								annulPrice = cards.select("em").get(annual).text();
								
								// 연회비가 있으면 그 연회비를 저장하고
								if(!(annulPrice.equals("연회비 없음"))) {
									annulPrice = annulPrice.replace(",", "");
									price = Integer.parseInt(annulPrice);	
								}
								
								// 아니면 0인 그대로 저장
								// 데이터 저장 
					            vo.setCardName(name);
					            vo.setCardDes(des);
					            vo.setCardImgUrl(imgUrl);
					            
					            //fee String -> int
					            vo.setCardFee(annulPrice);
					            vo.setCardUrl(URL);
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
	

	
}
