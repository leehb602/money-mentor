package com.spring_boot_momentor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.IInsuDAO;
import com.spring_boot_momentor.model.InsuVO;

@Service
public class InsuService implements IInsuService{
	@Autowired
	@Qualifier("IInsuDAO")
	IInsuDAO dao;
	
	@Override
	public void insertInsu(InsuVO vo) {
		dao.insertInsu(vo);	
	}


	
}
