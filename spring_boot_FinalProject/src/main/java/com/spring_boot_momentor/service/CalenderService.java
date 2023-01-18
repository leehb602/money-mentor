package com.spring_boot_momentor.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.ICalenderDAO;
import com.spring_boot_momentor.model.CalenderVO;

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
	public ArrayList<CalenderVO> calenderView() {
		// TODO Auto-generated method stub
		return dao.calenderView();
	}

}
