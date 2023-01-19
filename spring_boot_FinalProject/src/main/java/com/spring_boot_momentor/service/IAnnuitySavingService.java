package com.spring_boot_momentor.service;

import com.spring_boot_momentor.model.AnnuitySavingBaseVO;
import com.spring_boot_momentor.model.AnnuitySavingOptionVO;

public interface IAnnuitySavingService {
	public void insertAnnuitySavingBase(AnnuitySavingBaseVO vo);
	public void insertAnnuitySavingOption(AnnuitySavingOptionVO vo);
}
