package com.spring_boot_momentor.service;

import java.util.ArrayList;

import com.spring_boot_momentor.model.CalenderVO;

public interface ICalenderService {
	public int countCard();
	public ArrayList<CalenderVO> calenderView(); //전체리스트
}
