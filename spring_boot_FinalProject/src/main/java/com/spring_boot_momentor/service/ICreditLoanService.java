package com.spring_boot_momentor.service;

import com.spring_boot_momentor.model.CreditLoanBaseVO;
import com.spring_boot_momentor.model.CreditLoanOptionVO;

public interface ICreditLoanService {
	public void insertCreditLoanBase(CreditLoanBaseVO vo);
	public void insertCreditLoanOption(CreditLoanOptionVO vo);
}
