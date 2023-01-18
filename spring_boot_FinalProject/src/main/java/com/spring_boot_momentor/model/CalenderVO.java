package com.spring_boot_momentor.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CalenderVO {
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
	private Date calSubDate;
	private int calTransfer;
	private int calMaturity;
	private String prdTitle;
	private String userID;
	private int dataID;
	public Date getCalSubDate() {
		return calSubDate;
	}
	public void setCalSubDate(Date calSubDate) {
		this.calSubDate = calSubDate;
	}
	public int getCalTransfer() {
		return calTransfer;
	}
	public void setCalTransfer(int calTransfer) {
		this.calTransfer = calTransfer;
	}
	public int getCalMaturity() {
		return calMaturity;
	}
	public void setCalMaturity(int calMaturity) {
		this.calMaturity = calMaturity;
	}
	public String getPrdTitle() {
		return prdTitle;
	}
	public void setPrdTitle(String prdTitle) {
		this.prdTitle = prdTitle;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public int getDataID() {
		return dataID;
	}
	public void setDataID(int dataID) {
		this.dataID = dataID;
	}
	
}
