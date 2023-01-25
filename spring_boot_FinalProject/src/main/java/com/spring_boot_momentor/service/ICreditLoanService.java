package com.spring_boot_momentor.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.spring_boot_momentor.model.CreditLoanBaseVO;
import com.spring_boot_momentor.model.CreditLoanOptionVO;

public interface ICreditLoanService {
	public void insertCreditLoanBase(CreditLoanBaseVO vo);
	public void insertCreditLoanOption(CreditLoanOptionVO vo);
	public ArrayList<CreditLoanBaseVO> listAllCreditLoan(); //대출 조회
	public ArrayList<CreditLoanBaseVO> creditLoanSearch(HashMap<String, Object> map);  //대출 검색
}
