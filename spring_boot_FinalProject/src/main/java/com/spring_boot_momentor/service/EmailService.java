package com.spring_boot_momentor.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.spring_boot_momentor.dao.IEmailDAO;
import com.spring_boot_momentor.handler.MailHandler;
import com.spring_boot_momentor.model.EmailVO;

@Service
public class EmailService implements IEmailService {
	@Autowired
	@Qualifier("IEmailDAO")
	IEmailDAO dao;
	
	@Autowired
	private JavaMailSender sender;
	
	@Override
	public Map<String, Object> send(String email, String title, String body) {
		
		MailHandler mail;
		try {
			mail = new MailHandler(sender);
			mail.setFrom("leehb602s@naver.com","Momentor");
			mail.setTo(email);
			mail.setSubject(title);
			mail.setText(body);
			mail.send();
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		String resultCode = "S-1";
		String msg = "인증번호가 해당 메일로 발송되었습니다";
		
		Map<String, Object> rs = new HashMap<>();
		rs.put("resultCode", resultCode);
		rs.put("msg", msg);
		
		return rs;
	}

	@Override
	public void updateEmailAuth(EmailVO vo) {
		dao.updateEmailAuth(vo);
	}

	@Override
	public String getAuthNum(EmailVO vo) {
		return dao.getAuthNum(vo);
	}

}
