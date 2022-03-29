const developUrl = 'https://develop.dotearthgame.net/';
const stagingUrl = 'https://staging.dotearthgame.net/';
const productionUrl = 'https://dotearthgame.net/';
const dotEarthUrl =
	process.env.NODE_ENV === 'develop' ? developUrl : process.env.NODE_ENV === 'staging' ? stagingUrl : productionUrl;

const dotEarthLocationUrl = dotEarthUrl + 'location';
const endMetaMaskFlowUrl = 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#initialize/end-of-flow';

const landingUrlQa = 'https://landing-page.dotearth.io/';
const landingUrlProd = 'https://dotearth.io/';
const landingPageUrl = process.env.NODE_ENV === 'prod' ? landingUrlProd : landingUrlQa;

module.exports = {
	dotEarthUrl,
	dotEarthLocationUrl,
	endMetaMaskFlowUrl,
	landingPageUrl,
};
