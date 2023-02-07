package com.spring_boot_momentor.model;

public class ServiceCenterVO {
	private int qusNum; 
	private String userId;
	private String queTitle;
	private String question;
	private String queState;
	private String answer;
	
	public int getQusNum() {
		return qusNum;
	}
	public void setQusNum(int qusNum) {
		this.qusNum = qusNum;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getQueTitle() {
		return queTitle;
	}
	public void setQueTitle(String queTitle) {
		this.queTitle = queTitle;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getQueState() {
		return queState;
	}
	public void setQueState(String queState) {
		this.queState = queState;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	
}
