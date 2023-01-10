package com.spring_boot_momentor.controller;

import java.io.IOException;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
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
                service.insertCard(vo);
            }
         
      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }
      
      return "index";
    }

}
