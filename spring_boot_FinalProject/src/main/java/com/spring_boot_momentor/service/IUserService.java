package com.spring_boot_momentor.service;

import com.spring_boot_momentor.model.UserVO;

public interface IUserService {

	// 유저 회원가입
	public void userJoin(UserVO vo);
	
	// 회원 수정
	public void userUpdate();
	
	// 회원 삭제
	public void userDelete();
}
