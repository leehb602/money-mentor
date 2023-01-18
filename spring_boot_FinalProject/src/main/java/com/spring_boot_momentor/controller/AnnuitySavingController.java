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

import com.spring_boot_momentor.model.AnnuitySavingBaseVO;
import com.spring_boot_momentor.model.AnnuitySavingOptionVO;
import com.spring_boot_momentor.service.AnnuitySavingService;

// 와이라노
@Controller
public class AnnuitySavingController {
	@Autowired
	AnnuitySavingService service;
	
	AnnuitySavingBaseVO vo = new AnnuitySavingBaseVO();
	
	AnnuitySavingOptionVO vo2 = new AnnuitySavingOptionVO();
	
	private static final int FIRST_PAGE_INDEX = 1;
	private static final int LAST_PAGE_INDEX = 3;
	private static String finnum = "";

	@RequestMapping("/AnnuitySaving")
	public String insertAnnuitySaving() {

		try {
			for (int k = 0; k < 2; k++) {
				if (k == 0) {
					finnum = "060000";
				} else {
					finnum = "050000";
				}
				
				for (int j = FIRST_PAGE_INDEX; j <= LAST_PAGE_INDEX; j++) {
				String apiURL = "http://finlife.fss.or.kr/finlifeapi/annuitySavingProductsSearch.json?auth=9092fe04a7c3c5365acc18c7a390dd26&topFinGrpNo="
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
					// 회사명번호, 상품번호
					String comNum = (String) jsonObj.get("fin_co_no");
					String prdNum = (String) jsonObj.get("fin_prdt_cd");
					// 회사명, 상품명
					String comName = (String) jsonObj.get("kor_co_nm");
					String prdName = (String) jsonObj.get("fin_prdt_nm");
					// 가입방법
					//String join_way = (String) jsonObj.get("join_way");
					String pnsnKindName = (String) jsonObj.get("pnsn_kind_nm");
					String saleStart = "";
					if (jsonObj.get("sale_strt_day")==null) {
						saleStart = "없음";
					} else {
						saleStart = (String) jsonObj.get("sale_strt_day");
					}
					String prdtTypeName = (String) jsonObj.get("prdt_type_nm");
					Double avgPrftRate = Double.parseDouble(String.valueOf(jsonObj.get("avg_prft_rate")));
					Double dclsRate = 0.0;
					if (String.valueOf(jsonObj.get("dcls_rate")).equals("null")) {
						dclsRate = 0.0;
					} else {
						dclsRate = Double.parseDouble(String.valueOf(jsonObj.get("dcls_rate")));
					}
					String guarRate = "";
					if (jsonObj.get("guar_rate")==null) {
						guarRate = "없음";
					} else {
						guarRate = (String) jsonObj.get("guar_rate");
					}
					Double btrmPrftRate1 = 0.0;
					if (String.valueOf(jsonObj.get("btrm_prft_rate_1")).equals("null")) {
						btrmPrftRate1 = 0.0;
					} else {
						btrmPrftRate1 = Double.parseDouble(String.valueOf(jsonObj.get("btrm_prft_rate_1")));
					}
					Double btrmPrftRate2 = 0.0;
					if (String.valueOf(jsonObj.get("btrm_prft_rate_2")).equals("null")) {
						btrmPrftRate2 = 0.0;
					} else {
						btrmPrftRate2 = Double.parseDouble(String.valueOf(jsonObj.get("btrm_prft_rate_2")));
					}
					Double btrmPrftRate3 = 0.0;
					if (String.valueOf(jsonObj.get("btrm_prft_rate_3")).equals("null")) {
						btrmPrftRate3 = 0.0;
					} else {
						btrmPrftRate3 = Double.parseDouble(String.valueOf(jsonObj.get("btrm_prft_rate_3")));
					}
//					String etc = "";
//					if (jsonObj.get("etc")==null) {
//						etc = "없음";
//					} else {
//						etc = (String) jsonObj.get("etc");
//					}
					String saleCom = "";
					if (jsonObj.get("sale_co")==null) {
						saleCom = "없음";
					} else {
						saleCom = (String) jsonObj.get("sale_co");
					}
					String dclsStart = (String) jsonObj.get("dcls_strt_day");
					
					
					vo.setComNum(comNum);
					vo.setPrdNum(prdNum);
					vo.setComName(comName);
					vo.setPrdName(prdName);
					vo.setPnsnKindName(pnsnKindName);
					vo.setSaleStart(saleStart);
					vo.setPrdtTypeName(prdtTypeName);
					vo.setAvgPrftRate(avgPrftRate);
					vo.setDclsRate(dclsRate);
					vo.setGuarRate(guarRate);
					vo.setBtrmPrftRate1(btrmPrftRate1);
					vo.setBtrmPrftRate2(btrmPrftRate2);
					vo.setBtrmPrftRate3(btrmPrftRate3);
					vo.setSaleCom(saleCom);
					vo.setDclsStart(dclsStart);
					service.insertAnnuitySavingBase(vo);
					
					}
				}
			}
			System.out.println("Base성공");
			for (int k = 0; k < 2; k++) {
				if (k == 0) {
					finnum = "060000";
				} else {
					finnum = "050000";
				}
				
				for (int j = FIRST_PAGE_INDEX; j <= LAST_PAGE_INDEX; j++) {
				String apiURL = "http://finlife.fss.or.kr/finlifeapi/annuitySavingProductsSearch.json?auth=9092fe04a7c3c5365acc18c7a390dd26&topFinGrpNo="
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
					// 회사명번호, 상품번호
					String comNum = (String) jsonOption.get("fin_co_no");
					String prdNum = (String) jsonOption.get("fin_prdt_cd");

					String pnsnRecTrm = (String) jsonOption.get("pnsn_recp_trm_nm");
					String pnsnEnterAge = (String) jsonOption.get("pnsn_entr_age_nm");
					String monPay = (String) jsonOption.get("mon_paym_atm_nm");
					String payPeriod = (String) jsonOption.get("paym_prd_nm");
					String pnsnStartAge = (String) jsonOption.get("pnsn_strt_age_nm");
					Integer pnsnRecAmt = Integer.parseInt(String.valueOf(jsonOption.get("pnsn_recp_amt")));
					

					vo2.setComNum(comNum);
					vo2.setPrdNum(prdNum);
					vo2.setPnsnRecTrm(pnsnRecTrm);
					vo2.setPnsnEnterAge(pnsnEnterAge);
					vo2.setMonPay(monPay);
					vo2.setPayPeriod(payPeriod);
					vo2.setPnsnStartAge(pnsnStartAge);
					vo2.setPnsnRecAmt(pnsnRecAmt);
					service.insertAnnuitySavingOption(vo2);
					
					}
				}
			}
			System.out.println("Option성공");
		} catch (Exception e) {
			System.out.println(e);
		}
		return "annuitysaving";
	}
}

