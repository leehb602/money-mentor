package com.spring_boot_momentor.controller;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring_boot_momentor.model.DepositBaseVO;
import com.spring_boot_momentor.model.DepositOptionVO;
import com.spring_boot_momentor.service.DepositService;


@Controller
public class DepositController {
	@Autowired
	DepositService service;
	
	DepositBaseVO vo = new DepositBaseVO();
	DepositOptionVO vo2 = new DepositOptionVO();
	
	private static final int FIRST_PAGE_INDEX = 1;
	private static final int LAST_PAGE_INDEX = 3;
	private static String finnum = "";

	@RequestMapping("/Deposit")
	public String insertDeposit() {

		try {
			for (int k = 0; k < 2; k++) {
				if (k == 0) {
					finnum = "020000";
				}
				if (k == 1) {
					finnum = "030300";
				}

				for (int j = FIRST_PAGE_INDEX; j <= LAST_PAGE_INDEX; j++) {

					String apiURL = "http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=9092fe04a7c3c5365acc18c7a390dd26&topFinGrpNo="
							+ finnum + "&pageNo=" + j;
					URL url = new URL(apiURL);
					HttpURLConnection con = (HttpURLConnection) url.openConnection();
					con.setRequestMethod("GET");
					con.setRequestProperty("Content-Type", "application/json;UTF-8");
					int responseCode = con.getResponseCode();
					BufferedReader br;
					if (responseCode == 200) { // 정상 호출
						br = new BufferedReader(new InputStreamReader(con.getInputStream()));
					} else { // 에러 발생
						br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
					}
					String inputLine;
					StringBuffer response = new StringBuffer();
					while ((inputLine = br.readLine()) != null) {
						response.append(inputLine);
					}
					br.close();
					System.out.println(response.toString());
					JSONParser parser = new JSONParser();
					JSONObject obj = (JSONObject) parser.parse(response.toString());
					JSONObject dataObj = (JSONObject) obj.get("result");
					JSONArray dataList = (JSONArray) dataObj.get("baseList");

					for (int i = 0; i < dataList.size(); i++) {
						JSONObject jsonObj = (JSONObject) dataList.get(i);
						
						//회사명, 상품번호
						String comNum = (String) jsonObj.get("fin_co_no");
						String prdNum = (String) jsonObj.get("fin_prdt_cd");

						String comName = (String) jsonObj.get("kor_co_nm");
						String prdName = (String) jsonObj.get("fin_prdt_nm");

						String interest = (String) jsonObj.get("mtrt_int");
						String spclCnd = (String) jsonObj.get("spcl_cnd");
						String joinMember = (String) jsonObj.get("join_member");
						Integer maxLimit = 0;
						if (String.valueOf(jsonObj.get("max_limit")).equals("null")) {
							maxLimit = 0;
						} else {
							maxLimit = Integer.parseInt(String.valueOf(jsonObj.get("max_limit")));
						}

						vo.setComNum(comNum);
						vo.setPrdNum(prdNum);
						vo.setComName(comName);
						vo.setPrdName(prdName);
						vo.setInterest(interest);
						vo.setSpclCnd(spclCnd);
						vo.setMaxLimit(maxLimit);
						vo.setJoinMember(joinMember);
						service.insertDepositBase(vo);
			

					}
				}

			}
			System.out.println("Base성공");
			for (int k = 0; k < 2; k++) {
				if (k == 0) {
					finnum = "020000";
				}
				if (k == 1) {
					finnum = "030300";
				}

				for (int j = FIRST_PAGE_INDEX; j <= LAST_PAGE_INDEX; j++) {

					String apiURL = "http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=9092fe04a7c3c5365acc18c7a390dd26&topFinGrpNo="
							+ finnum + "&pageNo=" + j;
					URL url = new URL(apiURL);
					HttpURLConnection con = (HttpURLConnection) url.openConnection();
					con.setRequestMethod("GET");
					con.setRequestProperty("Content-Type", "application/json;UTF-8");
					int responseCode = con.getResponseCode();
					BufferedReader br;
					if (responseCode == 200) { // 정상 호출
						br = new BufferedReader(new InputStreamReader(con.getInputStream()));
					} else { // 에러 발생
						br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
					}
					String inputLine;
					StringBuffer response = new StringBuffer();
					while ((inputLine = br.readLine()) != null) {
						response.append(inputLine);
					}
					br.close();
					System.out.println(response.toString());
					JSONParser parser = new JSONParser();
					JSONObject obj = (JSONObject) parser.parse(response.toString());
					JSONObject dataObj = (JSONObject) obj.get("result");
					JSONArray optionList = (JSONArray) dataObj.get("optionList");

					for (int i = 0; i < optionList.size(); i++) {
						JSONObject jsonOption = (JSONObject) optionList.get(i);

						String comNum = (String) jsonOption.get("fin_co_no");
						String prdNum = (String) jsonOption.get("fin_prdt_cd");
						Double intrRate = 0.0;
//						Double intr_rate = Double.parseDouble(String.valueOf(jsonOption.get("intr_rate")));
						if(String.valueOf(jsonOption.get("intr_rate")).equals("null")) {
							intrRate = 0.0;
						}else {
							intrRate = Double.parseDouble(String.valueOf(jsonOption.get("intr_rate")));
						}
						Double intrRate2 = Double.parseDouble(String.valueOf(jsonOption.get("intr_rate2")));
						//
						String saveTrm = (String) jsonOption.get("save_trm");
						String intrRateTypeName = (String) jsonOption.get("intr_rate_type_nm");

						vo2.setComNum(comNum);
						vo2.setPrdNum(prdNum);
						vo2.setIntrRate(intrRate);
						vo2.setIntrRate2(intrRate2);
						vo2.setSaveTrm(saveTrm);
						vo2.setIntrRateTypeName(intrRateTypeName);
						service.insertDepositOption(vo2);
						
						
					}
				}
			}
			System.out.println("Option성공");
		} catch (Exception e) {
			System.out.println(e);
		}
		return "deposit";
	}
}


