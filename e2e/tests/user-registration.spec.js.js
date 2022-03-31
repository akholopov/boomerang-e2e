const { test, expect } = require('@playwright/test');
const { BoomerangPage } = require('../pages/BoomerangPage.js');
const { newUser } = require('../common/userData.js');
const { delay } = require('../pages/utils.js');

test.describe('Boomerang Page:', () => {
	let boomerangPage;
	test.beforeEach(async ({ page }) => {
		boomerangPage = new BoomerangPage(page);
		await boomerangPage.navigateTo();
	});

	test.only('User registration.', async () => {
		await boomerangPage.signUpButton.click();
		await boomerangPage.emailInput.fill(newUser.email);
		await boomerangPage.loginInput.fill(newUser.login);
		await boomerangPage.passwordInput.fill(newUser.password);
		await boomerangPage.privacyPolicyCheckbox.click();
		await boomerangPage.nextStepButton.click();
		await boomerangPage.noThanksButton.click();
		await boomerangPage.nameInput.fill(newUser.name);
		await boomerangPage.lastnameInput.fill(newUser.lastname);
		await boomerangPage.dobInput.type(newUser.dob);
		await boomerangPage.secondNextStepButton.click();
		await boomerangPage.cityInput.fill(newUser.city);
		await boomerangPage.postcodeInput.fill(newUser.postcode);
		await boomerangPage.addressInput.fill(newUser.address);
		await boomerangPage.phoneNumberInput.fill(newUser.phoneNumber);
		await boomerangPage.createAccountButton.click();
		await delay(4000);
		await boomerangPage.closeButton.click();
		await delay(1000);
		await expect(boomerangPage.depositButton).toBeVisible();
	});
});
