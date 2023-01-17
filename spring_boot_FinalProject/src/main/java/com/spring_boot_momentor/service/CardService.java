package com.spring_boot_momentor.service;

import java.util.ArrayList;

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

	@Override
	public void updateCardFee(CardVO vo) {
		dao.updateCardFee(vo);
		
	}
	
	@Override
	public ArrayList<CardVO> listAllCard() {

		return dao.listAllCard();
	}

	// 게시물 목록 + 페이징 + 검색
	public ArrayList<CardVO> CardAllSearch(String cardId) {
		
		return dao.CardAllSearch(cardId);
		
	}
}
