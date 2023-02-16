package com.spring_boot_momentor.service;

import java.util.ArrayList;

import com.spring_boot_momentor.model.ServiceCenterVO;

public interface ISCService {
	public void insertServiceCenter(ServiceCenterVO vo); // 질문 등록
	public void updateServiceCenter(ServiceCenterVO vo); // 대답 등록
	public void deleteQuestion(int qusNum); // 질문 삭제
	
	public ArrayList<ServiceCenterVO> getQNADetail(String qusNum); // questionDetail 페이지 
	
	public ArrayList<ServiceCenterVO> listAllSC(); // 1~9 질문 
	public ArrayList<ServiceCenterVO> listAllSC2(); // 질문 전체
	
}
