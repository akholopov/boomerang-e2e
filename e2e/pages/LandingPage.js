const { expect } = require('@playwright/test');
const { landingPageUrl } = require('../common/urls.js');
const { messages } = require('../common/messages.js');

exports.LandingPage = class LandingPage {
	constructor(page) {
		this.page = page;
		this.logoImage = page.locator('[data-test-id="logo"]');
		this.contactButton = page.locator('[data-test-id="contact-btn"]');
		this.title = page.locator('[data-test-id="page-title"]');
		this.privacyPolicyLink = page.locator('[data-test-id="privacy-policy"]');
		this.privacyPolicyTitle = page.locator('[data-test-id="page-title"]');
		this.subscribeButton = page.locator('[data-test-id="presale-form-submit-btn"]');
		this.discordInput = page.locator('[data-test-id="presale-form-discord-input"]');
		this.emailInput = page.locator('[data-test-id="presale-form-email-input"]');
		//todo: update locator
		this.popup = page.locator('[aria-modal="true"]');
		//todo: update locator
		this.popupTitle = page.locator('[aria-modal="true"] h3');
		this.closeButton = page.locator('[data-test-id="modal-close"]');
		this.emailError = page.locator('[data-test-id="error-email"]');
		//todo: update locator
		this.contactFormTitle = page.locator('[aria-modal="true"] h3');
		this.yourNameInput = page.locator('[data-test-id="contact-name-field"]');
		this.yourEmailInput = page.locator('[data-test-id="contact-email-field"]');
		this.yourMessageInput = page.locator('[data-test-id="contact-message-field"]');
		this.recaptchSection = page.locator('[data-test-id="recaptcha-container"]');
		this.sendMessageButton = page.locator('[data-test-id="contact-submit-button"]');
		this.yourNameError = page.locator('[data-test-id="error-name"]');
		this.yourEmailError = page.locator('[data-test-id="error-email"]');
		//todo: update locator
		this.yourMessageError = page.locator('[role="dialog"] form:nth-child(3) > p');
		this.recaptchaError = page.locator('[data-test-id="recaptcha-error"]');
	}

	async navigateTo() {
		await this.page.goto(landingPageUrl);
	}

	async waitForURL(url) {
		await this.page.waitForURL(url);
	}

	getUrl() {
		return this.page.url();
	}

	async validateElements() {
		await expect(this.logoImage).toBeVisible();
		await expect(this.contactButton).toBeVisible();
		await expect(this.title).toBeVisible();
		await expect(this.privacyPolicyLink).toBeVisible();
		await expect(this.subscribeButton).toBeVisible();
		await expect(this.emailInput).toBeVisible();
		await expect(this.discordInput).toBeVisible();
	}

	async validateElementsOfTheContactForm() {
		await expect(this.contactFormTitle).toBeVisible();
		await expect(this.closeButton).toBeVisible();
		await expect(this.yourNameInput).toBeVisible();
		await expect(this.yourEmailInput).toBeVisible();
		await expect(this.yourMessageInput).toBeVisible();
		await expect(this.recaptchSection).toBeVisible();
		await expect(this.sendMessageButton).toBeVisible();
	}

	async validateGeneralErrorsForContactForm() {
		await expect(this.yourNameError).toContainText(messages.EMPTY_FIELD);
		await expect(this.yourEmailError).toContainText(messages.INVALID_EMAIL);
		await expect(this.yourMessageError).toContainText(messages.EMPTY_FIELD);
		await expect(this.recaptchaError).toContainText(messages.RECAPTCHA_ERROR);
	}
};
