const { test, expect } = require('@playwright/test');
const { messages } = require('../common/messages.js');
const { LandingPage } = require('../pages/LandingPage.js');
const { newUser, invalidUser } = require('../../e2e/common/userData.js');
const { landingPageUrl } = require('../../e2e/common/urls.js');

const privacyPolicyPostfix = 'privacy';

test.describe('Landing Page:', () => {
	let landingPage;
	test.beforeEach(async ({ page }) => {
		landingPage = new LandingPage(page);
		await landingPage.navigateTo();
	});

	test('DG-603. AC-1: Validate main elements. @allBrowsersTag', async () => {
		await landingPage.validateElements();
	});

	test('DG-603. AC-2: validate email was sent to the new user and user able to close pop up. @allBrowsersTag', async () => {
		await landingPage.emailInput.fill(newUser.email);
		await landingPage.discordInput.fill(newUser.discordTag);
		await landingPage.subscribeButton.click();
		await expect(landingPage.popupTitle).toContainText(messages.EMAIL_SENT);
		await landingPage.closeButton.click();
		await expect(landingPage.popup).toBeHidden();
	});

	test('DG-603. AC-2: validate error message for existing user. @allBrowsersTag', async () => {
		await landingPage.emailInput.fill(invalidUser.existingEmail);
		await landingPage.subscribeButton.click();
		await expect(landingPage.emailError).toContainText(messages.ALREADY_EXISTING_EMAIL);
	});

	test('DG-603. AC-2: validate error message for empty email field. @allBrowsersTag', async () => {
		await landingPage.subscribeButton.click();
		await expect(landingPage.emailError).toContainText(messages.INVALID_EMAIL);
	});

	test('DG-931. AC-1: Validaite invalid email. @allBrowsersTag', async () => {
		await landingPage.emailInput.fill(invalidUser.incompleteEmail);
		await landingPage.subscribeButton.click();
		await expect(landingPage.emailError).toContainText(messages.INVALID_EMAIL);
	});

	test('DG-931. AC-2: Validaite elements of the contact form. @allBrowsersTag', async () => {
		await landingPage.contactButton.click();
		await landingPage.validateElementsOfTheContactForm();
	});

	test('DG-931. AC-2: Validaite that all input fields in the contact form are working. @allBrowsersTag', async () => {
		await landingPage.contactButton.click();
		await landingPage.yourNameInput.fill(newUser.username);
		await landingPage.yourEmailInput.fill(newUser.email);
		await landingPage.yourMessageInput.fill(newUser.discordTag);
		await landingPage.sendMessageButton.click();
		await expect(landingPage.recaptchaError).toContainText(messages.RECAPTCHA_ERROR);
		//todo: add step for iframe
	});

	test('DG-932. AC-1: Privacy policy page - check privacy policy link. @allBrowsersTag', async () => {
		await landingPage.privacyPolicyLink.click();
		expect(landingPage.getUrl()).toBe(landingPageUrl + privacyPolicyPostfix);
		await expect(landingPage.privacyPolicyTitle).toContainText(messages.PRIVACY_POLICY_TITLE);
		await landingPage.privacyPolicyLink.click();
		expect(landingPage.getUrl()).toBe(landingPageUrl + privacyPolicyPostfix);
	});

	test('DG-932. AC-1: Privacy policy page - check dotEarth link. @allBrowsersTag', async () => {
		await landingPage.privacyPolicyLink.click();
		expect(landingPage.getUrl()).toBe(landingPageUrl + privacyPolicyPostfix);
		await landingPage.logoImage.click();
		await expect(landingPage.emailInput).toBeVisible();
		// await landingPage.waitForURL(landingPageUrl);
		expect(landingPage.getUrl()).toBe(landingPageUrl);
	});

	test('DG-932. AC-1: Privacy policy page - check that contact form is working. @allBrowsersTag', async () => {
		await landingPage.privacyPolicyLink.click();
		await landingPage.waitForURL(landingPageUrl + privacyPolicyPostfix);
		await landingPage.contactButton.click();
		await landingPage.validateElementsOfTheContactForm();
	});
});
