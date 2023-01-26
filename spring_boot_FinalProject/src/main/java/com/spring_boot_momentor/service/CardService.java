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

	// 검색
	public ArrayList<CardVO> CardAllSearch(String cardId) {
		
		return dao.CardAllSearch(cardId);
		
	}

	// 카드비교 넣기
	public CardVO CardCompare(String cardId) {
		return dao.CardCompare(cardId);
	}

	public void deleteCard(String carddNoms) {
		dao.deleteCard(carddNoms);
		
	}
	// 카드비교 모달
	public ArrayList<CardVO> CardComparemodal(String cardId) {
		return dao.CardComparemodal(cardId);
	}

	// 메인 랭킹
	@Override
	public ArrayList<CardVO> cardRandom() {
		// TODO Auto-generated method stub
		return dao.cardRandom();
	}

	// 메인 랭킹 끝
}
