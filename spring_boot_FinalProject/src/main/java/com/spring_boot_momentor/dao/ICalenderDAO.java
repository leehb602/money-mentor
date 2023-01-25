package com.spring_boot_momentor.dao;

import java.util.ArrayList;

import com.spring_boot_momentor.model.CalenderVO;
import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.model.InsuVO;
import com.spring_boot_momentor.model.Plan;

public interface ICalenderDAO {
	public int countCard();
	public ArrayList<Plan> calenderView(String userID); //일정 데이터 받아오기
	public void insertPlan(CalenderVO vo);//일정 추가
	public int planDuplicateCheck(String userID, String prdID, String prdType);//일정 중복 검사
	public void changePrdName(String prdName, String userID, String prdID, String prdType);//일정 이름 변경
	
	
	//상품 관련 코드(추후 다른 서비스로 옮길 수도 있음)
	public ArrayList<InsuVO> calenderListAllInsu();//전체 보험
	public ArrayList<InsuVO> calenderListInsu(String kindDetail);//카테고리별 출력
	public ArrayList<CardVO> calenderListCard(String kindDetai);
}
