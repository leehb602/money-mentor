package com.spring_boot_momentor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.IDepositDAO;
import com.spring_boot_momentor.model.DepositBaseVO;
import com.spring_boot_momentor.model.DepositOptionVO;




@Service
public class DepositService implements IDepositService {
	@Autowired
	@Qualifier("IDepositDAO")
	IDepositDAO dao;
	
	@Override
	public void insertDepositBase(DepositBaseVO vo) {
		dao.insertDepositBase(vo);
		
	}

	@Override
	public void insertDepositOption(DepositOptionVO vo) {
		dao.insertDepositOption(vo);
		
	}
}
