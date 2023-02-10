package com.spring_boot_momentor.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.ISCDAO;
import com.spring_boot_momentor.model.ServiceCenterVO;

@Service
public class SCService implements ISCService {
	
	@Autowired
	@Qualifier("ISCDAO")
	ISCDAO dao;
	
	@Override
	public void insertServiceCenter(ServiceCenterVO vo) {
		dao.insertServiceCenter(vo);

	}

	@Override
	public void updateServiceCenter(ServiceCenterVO vo) {
		dao.updateServiceCenter(vo);
	}

	@Override
	public ArrayList<ServiceCenterVO> listAllSC() {
		return dao.listAllSC();
	}

	@Override
	public ArrayList<ServiceCenterVO> listAllSC2() {
		return dao.listAllSC2();
	}

	@Override
	public ArrayList<ServiceCenterVO> getQNADetail(String qusNum) {
		// TODO Auto-generated method stub
		return dao.getQNADetail(qusNum);
	}

	

}
