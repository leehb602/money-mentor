package com.spring_boot_momentor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.IRentHouseLoanDAO;
import com.spring_boot_momentor.model.RentHouseLoanBaseVO;
import com.spring_boot_momentor.model.RentHouseLoanOptionVO;

@Service
public class RentHouseLoanService implements IRentHouseLoanService {
	@Autowired
	@Qualifier("IRentHouseLoanDAO")
	IRentHouseLoanDAO dao;
	
	@Override
	public void insertRentHouseLoanBase(RentHouseLoanBaseVO vo) {
		dao.insertRentHouseLoanBase(vo);

	}

	@Override
	public void insertRentHouseLoanOption(RentHouseLoanOptionVO vo) {
		dao.insertRentHouseLoanOption(vo);

	}

}
