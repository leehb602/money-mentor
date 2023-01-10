package com.spring_boot_momentor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.ICardDAO;
import com.spring_boot_momentor.model.CardVO;

@Service
public class CardService implements ICardService{
	@Autowired
	@Qualifier("ICardDAO")
	ICardDAO dao;
	
	@Override
	public void insertCard(CardVO vo) {
		dao.insertCard(vo);	
	}
	
}
