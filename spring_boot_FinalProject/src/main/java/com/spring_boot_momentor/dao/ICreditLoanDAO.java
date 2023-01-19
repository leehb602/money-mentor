package com.spring_boot_momentor.dao;

import com.spring_boot_momentor.model.CreditLoanBaseVO;
import com.spring_boot_momentor.model.CreditLoanOptionVO;

public interface ICreditLoanDAO {
	public void insertCreditLoanBase(CreditLoanBaseVO vo);
	public void insertCreditLoanOption(CreditLoanOptionVO vo);
}
