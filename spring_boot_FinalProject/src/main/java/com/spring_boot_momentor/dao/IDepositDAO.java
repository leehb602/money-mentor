package com.spring_boot_momentor.dao;

import com.spring_boot_momentor.model.DepositBaseVO;
import com.spring_boot_momentor.model.DepositOptionVO;

public interface IDepositDAO {
	public void insertDepositBase(DepositBaseVO vo);
	public void insertDepositOption(DepositOptionVO vo);
}
