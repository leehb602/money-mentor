package com.spring_boot_momentor.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.ISavingDAO;
import com.spring_boot_momentor.model.SavingBaseVO;
import com.spring_boot_momentor.model.SavingOptionVO;
import com.spring_boot_momentor.model.SearchVO;




@Service
public class SavingService implements ISavingService {
	@Autowired
	@Qualifier("ISavingDAO")
	ISavingDAO dao;

	@Override
	public void insertSavingBase(SavingBaseVO vo) {
		dao.insertSavingBase(vo);
		
	}

	@Override
	public void insertSavingOption(SavingOptionVO vo) {
		dao.insertSavingOption(vo);
		
	}
	
	@Override
	public ArrayList<SavingBaseVO> listAllSaving() {
		return dao.listAllSaving();
	}
	
	@Override
	public ArrayList<SavingBaseVO> savingSearch(SearchVO vo) {
		return dao.savingSearch(vo);
	}

}
