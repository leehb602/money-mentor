package com.spring_boot_momentor.service;

import java.util.ArrayList;

import com.spring_boot_momentor.model.CardVO;

public interface ICardService {
	public void insertCard(CardVO vo);
	public void updateCardFee(CardVO vo);
	public ArrayList<CardVO> listAllCard();
	public ArrayList<CardVO> CardAllSearch(String cardId); //검색
	public CardVO CardCompare(String cardId); //카드비교 넣기
	public void deleteCard(String carddNoms); // 비교 데이터 선택 삭제
	public ArrayList<CardVO> CardComparemodal(String cardId); // 카드비교 모달
}
