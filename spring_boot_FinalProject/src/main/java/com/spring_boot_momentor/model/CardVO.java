package com.spring_boot_momentor.model;

public class CardVO {
	private String cardName;
	private String cardDes;
	private String cardImgUrl;
	private String cardFee;
	private String cardUrl;
	private String comCtg;

	public String getComCtg() {
		return comCtg;
	}

	public void setComCtg(String comCtg) {
		this.comCtg = comCtg;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public String getCardDes() {
		return cardDes;
	}

	public void setCardDes(String cardDes) {
		this.cardDes = cardDes;
	}

	public String getCardImgUrl() {
		return cardImgUrl;
	}

	public void setCardImgUrl(String cardImgUrl) {
		this.cardImgUrl = cardImgUrl;
	}

	public String getCardFee() {
		return cardFee;
	}

	public void setCardFee(String cardFee) {
		this.cardFee = cardFee;
	}

	public String getCardUrl() {
		return cardUrl;
	}

	public void setCardUrl(String cardUrl) {
		this.cardUrl = cardUrl;
	}

}
