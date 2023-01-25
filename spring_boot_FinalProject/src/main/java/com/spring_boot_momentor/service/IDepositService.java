package com.spring_boot_momentor.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.spring_boot_momentor.model.DepositBaseVO;
import com.spring_boot_momentor.model.DepositOptionVO;


public interface IDepositService {
	public void insertDepositBase(DepositBaseVO vo);
	public void insertDepositOption(DepositOptionVO vo);
	public ArrayList<DepositBaseVO> listAllDeposit(); //예금 조회
	public ArrayList<DepositBaseVO> depositSearch(HashMap<String, Object> map); //예금 검색
}
