package com.spring_boot_momentor.dao;

import java.util.ArrayList;

import com.spring_boot_momentor.model.CardVO;

public interface ICardDAO {
	public void insertCard(CardVO vo);
	public void updateCardFee(CardVO vo);
	
	public ArrayList<CardVO> listAllCard(); //전체리스트
	public ArrayList<CardVO> CardAllSearch(String cardId); //검색
}
