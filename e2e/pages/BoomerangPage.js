const { expect } = require('@playwright/test');
const { boomerangUrl } = require('../common/urls.js');
const { messages } = require('../common/messages.js');

exports.BoomerangPage = class BoomerangPage {
	constructor(page) {
		this.page = page;
		this.signUpButton = page.locator('#slick-slide00 [linda-goto="registration"]');
		this.signInButton = page.locator('[popup-open="login"]');
		this.createOneButton = page.locator('a[popup-open="registration"]');
		this.emailInput = page.locator('[name="email"]');
		this.loginInput = page.locator('[name="login"]');
		this.passwordInput = page.locator('[type="password"]');
		this.privacyPolicyCheckbox = page.locator('.form-checkbox__text.ng-binding');
		this.nextStepButton = page.locator('[name="regForm1"] [type="submit"]');
		this.noThanksButton = page.locator('[linda-modal-reject-on-click]');
		this.nameInput = page.locator('[name="name"]');
		this.lastnameInput = page.locator('[name="surname"]');
		this.dobInput = page.locator('[name="bday"]');
		this.secondNextStepButton = page.locator('[name="regForm2"] [type="submit"]');
		this.cityInput = page.locator('[name="city"]');
		this.postcodeInput = page.locator('[name="postcode"]');
		this.addressInput = page.locator('[name="address"]');
		this.phoneNumberInput = page.locator('[inputmode="tel"]');
		this.createAccountButton = page.locator('[name="regForm3"] [type="submit"]');
		this.closeSuccessPopupButton = page.locator('.notification-item.is-success');
		this.closeButton = page.locator('.cashbox-header [popup-close="popup-close"]');
		this.depositButton = page.locator('[translate="cashbox.deposit.btn1"]');
	}

	async navigateTo() {
		await this.page.goto(boomerangUrl);
	}

	async waitForURL(url) {
		await this.page.waitForURL(url);
	}

	getUrl() {
		return this.page.url();
	}
};
