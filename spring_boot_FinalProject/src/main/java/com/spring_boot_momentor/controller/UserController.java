package com.spring_boot_momentor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring_boot_momentor.model.UserVO;
import com.spring_boot_momentor.service.UserService;

@Controller
public class UserController {
	@Autowired
	UserService service;
	
	@RequestMapping("/joinForm")
	public String joinForm() {
		return "join/joinForm";
	}
	
	@RequestMapping("/join/userJoin")
	public String userJoin(UserVO vo,
						   @RequestParam("hp1") String userHp1,
						   @RequestParam("hp2") String userHp2,
						   @RequestParam("hp3") String userHp3,
						   @RequestParam("email") String email,
						   @RequestParam("emailAddress") String emailAddress,
						   Model model) {
		vo.setUserPhone(userHp1 + "-" + userHp2 + "-" + userHp3);
		vo.setUserEmail(email + "@" + emailAddress);
		service.userJoin(vo);
		return "index";
	}
}
