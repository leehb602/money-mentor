package com.spring_boot_momentor.service;

import com.spring_boot_momentor.model.DepositBaseVO;
import com.spring_boot_momentor.model.DepositOptionVO;

public interface IDepositService {
	public void insertDepositBase(DepositBaseVO vo);
	public void insertDepositOption(DepositOptionVO vo);
}
