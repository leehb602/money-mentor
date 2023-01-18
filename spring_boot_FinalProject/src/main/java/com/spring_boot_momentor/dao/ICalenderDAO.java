package com.spring_boot_momentor.dao;

import java.util.ArrayList;

import com.spring_boot_momentor.model.CalenderVO;

public interface ICalenderDAO {
	public int countCard();
	public ArrayList<CalenderVO> calenderView(); //전체리스트
	
}
