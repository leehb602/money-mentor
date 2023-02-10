package com.spring_boot_momentor.service;

import java.util.ArrayList;

import com.spring_boot_momentor.model.SavingBaseVO;
import com.spring_boot_momentor.model.SavingOptionVO;
import com.spring_boot_momentor.model.SearchVO;


public interface ISavingService {
	public void insertSavingBase(SavingBaseVO vo);
	public void insertSavingOption(SavingOptionVO vo);
	public ArrayList<SavingBaseVO> listAllSaving();
	public ArrayList<SavingBaseVO>savingSearch(SearchVO vo); //적금 검색
	public SavingBaseVO SavingCompare(String savingID); //적금 비교 넣기
}
