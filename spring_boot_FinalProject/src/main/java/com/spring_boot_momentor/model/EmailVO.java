package com.spring_boot_momentor.model;

public class EmailVO {
	private String userName;
	private String userPhone;
	private String userEmailAuth;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getUserEmailAuth() {
		return userEmailAuth;
	}

	public void setUserEmailAuth(String userEmailAuth) {
		this.userEmailAuth = userEmailAuth;
	}

}
