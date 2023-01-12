package com.spring_boot_momentor.service;

import com.spring_boot_momentor.model.CardVO;

public interface ICardService {
	public void insertCard(CardVO vo);
	public void updateCardFee(CardVO vo);
}
