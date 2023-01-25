package com.spring_boot_momentor.model;

public class CalenderProduct {
	private String prdID;
	private String prdName;
	private String prdDes;
	private String prdImg;
	private int prdPrice;
	private int male;
	private int female;
	private String prdURL;
	private String prdCom;
	private String prdCtg;
	
	public String getPrdCtg() {
		return prdCtg;
	}
	public void setPrdCtg(String prdCtg) {
		this.prdCtg = prdCtg;
	}
	private String prdComImg;
	
	public String getPrdID() {
		return prdID;
	}
	public void setPrdID(String prdID) {
		this.prdID = prdID;
	}
	public String getPrdName() {
		return prdName;
	}
	public void setPrdName(String prdName) {
		this.prdName = prdName;
	}
	public String getPrdDes() {
		return prdDes;
	}
	public void setPrdDes(String prdDes) {
		this.prdDes = prdDes;
	}
	public String getPrdImg() {
		return prdImg;
	}
	public void setPrdImg(String prdImg) {
		this.prdImg = prdImg;
	}
	public int getPrdPrice() {
		return prdPrice;
	}
	public void setPrdPrice(int prdPrice) {
		this.prdPrice = prdPrice;
	}
	public int getMale() {
		return male;
	}
	public void setMale(int male) {
		this.male = male;
	}
	public int getFemale() {
		return female;
	}
	public void setFemale(int female) {
		this.female = female;
	}
	public String getPrdURL() {
		return prdURL;
	}
	public void setPrdURL(String prdURL) {
		this.prdURL = prdURL;
	}
	public String getPrdCom() {
		return prdCom;
	}
	public void setPrdCom(String prdCom) {
		this.prdCom = prdCom;
	}
	public String getPrdComImg() {
		return prdComImg;
	}
	public void setPrdComImg(String prdComImg) {
		this.prdComImg = prdComImg;
	}

}
