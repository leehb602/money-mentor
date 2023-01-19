package com.spring_boot_momentor.service;

import com.spring_boot_momentor.model.RentHouseLoanBaseVO;
import com.spring_boot_momentor.model.RentHouseLoanOptionVO;

public interface IRentHouseLoanService {
	public void insertRentHouseLoanBase(RentHouseLoanBaseVO vo);
	public void insertRentHouseLoanOption(RentHouseLoanOptionVO vo);
}
