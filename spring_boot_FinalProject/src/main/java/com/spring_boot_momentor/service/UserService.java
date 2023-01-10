package com.spring_boot_momentor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.IUserDAO;
import com.spring_boot_momentor.model.UserVO;

@Service
public class UserService implements IUserService{
	@Autowired
	@Qualifier("IUserDAO")
	IUserDAO dao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public void userJoin(UserVO vo) {
		String encodedPassword = passwordEncoder.encode(vo.getUserPassword());
		vo.setUserPassword(encodedPassword);
		dao.userJoin(vo);
	}

	@Override
	public void userUpdate() {
		
	}

	@Override
	public void userDelete() {
		
	}
 
}
