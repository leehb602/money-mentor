package com.spring_boot_momentor.model;

public class SavingOptionVO {
	private String savingID;
	private String dclsMonth;
	private String comNum;
	private String prdNum;
	private double intrRate;
	private double intrRate2;
	private int saveTrm;
	private String rsrvTypeName;
	private String intrRateTypeName;
	
	public String getSavingID() {
		return savingID;
	}
	public void setSavingID(String savingID) {
		this.savingID = savingID;
	}
	public String getDclsMonth() {
		return dclsMonth;
	}
	public void setDclsMonth(String dclsMonth) {
		this.dclsMonth = dclsMonth;
	}
	public String getComNum() {
		return comNum;
	}
	public void setComNum(String comNum) {
		this.comNum = comNum;
	}
	public String getPrdNum() {
		return prdNum;
	}
	public void setPrdNum(String prdNum) {
		this.prdNum = prdNum;
	}
	public double getIntrRate() {
		return intrRate;
	}
	public void setIntrRate(double intrRate) {
		this.intrRate = intrRate;
	}
	public double getIntrRate2() {
		return intrRate2;
	}
	public void setIntrRate2(double intrRate2) {
		this.intrRate2 = intrRate2;
	}
	public int getSaveTrm() {
		return saveTrm;
	}
	public void setSaveTrm(int saveTrm) {
		this.saveTrm = saveTrm;
	}
	public String getRsrvTypeName() {
		return rsrvTypeName;
	}
	public void setRsrvTypeName(String rsrvTypeName) {
		this.rsrvTypeName = rsrvTypeName;
	}
	public String getIntrRateTypeName() {
		return intrRateTypeName;
	}
	public void setIntrRateTypeName(String intrRateTypeName) {
		this.intrRateTypeName = intrRateTypeName;
	}
}