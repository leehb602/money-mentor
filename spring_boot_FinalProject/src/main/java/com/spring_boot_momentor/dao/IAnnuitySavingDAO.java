package com.spring_boot_momentor.dao;

import com.spring_boot_momentor.model.AnnuitySavingBaseVO;
import com.spring_boot_momentor.model.AnnuitySavingOptionVO;

public interface IAnnuitySavingDAO {
	public void insertAnnuitySavingBase(AnnuitySavingBaseVO vo);
	public void insertAnnuitySavingOption(AnnuitySavingOptionVO vo);
}
