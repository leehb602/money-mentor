package com.spring_boot_momentor.model;

public class AssetVO {
	private int userProperty;
	private int userSalary;
	private double userDeposit;
	private double userSavings;
	private double userLoans;
	private String userInterest;
	private String userId;

	public int getUserProperty() {
		return userProperty;
	}

	public void setUserProperty(int userProperty) {
		this.userProperty = userProperty;
	}

	public int getUserSalary() {
		return userSalary;
	}

	public void setUserSalary(int userSalary) {
		this.userSalary = userSalary;
	}

	public double getUserDeposit() {
		return userDeposit;
	}

	public void setUserDeposit(double userDeposit) {
		this.userDeposit = userDeposit;
	}

	public double getUserSavings() {
		return userSavings;
	}

	public void setUserSavings(double userSavings) {
		this.userSavings = userSavings;
	}

	public double getUserLoans() {
		return userLoans;
	}

	public void setUserLoans(double userLoans) {
		this.userLoans = userLoans;
	}

	public String getUserInterest() {
		return userInterest;
	}

	public void setUserInterest(String userInterest) {
		this.userInterest = userInterest;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
