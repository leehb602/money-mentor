package com.spring_boot_momentor.model;

public class DepositOptionVO {
	private String comNum;
	private String prdNum;
	private double intrRate;
	private double intrRate2;
	private String saveTrm;
	private String intrRateTypeName;
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
	public String getSaveTrm() {
		return saveTrm;
	}
	public void setSaveTrm(String saveTrm) {
		this.saveTrm = saveTrm;
	}
	public String getIntrRateTypeName() {
		return intrRateTypeName;
	}
	public void setIntrRateTypeName(String intrRateTypeName) {
		this.intrRateTypeName = intrRateTypeName;
	}
	
}