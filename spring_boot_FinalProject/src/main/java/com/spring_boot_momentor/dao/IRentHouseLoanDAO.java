package com.spring_boot_momentor.dao;

import com.spring_boot_momentor.model.RentHouseLoanBaseVO;
import com.spring_boot_momentor.model.RentHouseLoanOptionVO;

public interface IRentHouseLoanDAO {
	public void insertRentHouseLoanBase(RentHouseLoanBaseVO vo);
	public void insertRentHouseLoanOption(RentHouseLoanOptionVO vo);
}
