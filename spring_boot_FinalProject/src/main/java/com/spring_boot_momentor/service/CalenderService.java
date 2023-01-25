package com.spring_boot_momentor.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.ICalenderDAO;
import com.spring_boot_momentor.model.CalenderVO;
import com.spring_boot_momentor.model.CardVO;
import com.spring_boot_momentor.model.InsuVO;
import com.spring_boot_momentor.model.Plan;

@Service
public class CalenderService implements ICalenderService{
	@Autowired
	@Qualifier("ICalenderDAO")
	ICalenderDAO dao;

	@Override
	public int countCard() {
		// TODO Auto-generated method stub
		return dao.countCard();
	}

	@Override
	public ArrayList<Plan> calenderView(String userID) {
		// TODO Auto-generated method stub
		return dao.calenderView(userID);
	}

	@Override
	public void insertPlan(CalenderVO vo) {
		// TODO Auto-generated method stub
		dao.insertPlan(vo);
	}

	@Override
	public int planDuplicateCheck(String userID, String prdID, String prdType) {
		// TODO Auto-generated method stub
		return dao.planDuplicateCheck(userID, prdID, prdType);
		
	}

	@Override
	public void changePrdName(String prdName, String userID, String prdID, String prdType) {
		// TODO Auto-generated method stub
		dao.changePrdName(prdName, userID, prdID, prdType);
	}

	@Override
	public ArrayList<InsuVO> calenderListAllInsu() {
		// TODO Auto-generated method stub
		return dao.calenderListAllInsu();
	}

	@Override
	public ArrayList<InsuVO> calenderListInsu(String kindDetail) {
		// TODO Auto-generated method stub
		return dao.calenderListInsu(kindDetail);
	}

	@Override
	public ArrayList<CardVO> calenderListCard(String kindDetail) {
		// TODO Auto-generated method stub
		return dao.calenderListCard(kindDetail);
	}
	

}
