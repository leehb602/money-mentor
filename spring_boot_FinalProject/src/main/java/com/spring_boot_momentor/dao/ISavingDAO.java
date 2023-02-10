package com.spring_boot_momentor.dao;

import java.util.ArrayList;

import com.spring_boot_momentor.model.SavingBaseVO;
import com.spring_boot_momentor.model.SavingOptionVO;
import com.spring_boot_momentor.model.SearchVO;


public interface ISavingDAO {
	public void insertSavingBase(SavingBaseVO vo);
	public void insertSavingOption(SavingOptionVO vo);
	public ArrayList<SavingBaseVO> listAllSaving();//전체 적금 조회
	public ArrayList<SavingBaseVO> savingSearch(SearchVO vo); //적금 검색
	public SavingBaseVO SavingCompare(String savingID); //적금 비교 넣기
}
