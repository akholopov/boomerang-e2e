const randomWords = require('random-words');

const currentTime = Date.now();
const newLogin = 'log' + currentTime;
const newEmail = 'test' + currentTime + '@gmail.com';
const newName = randomWords({ min: 2, max: 4, maxLength: 4, join: '' });
const randonNumber = Math.random().toString().slice(2, 8);
const polishPhoneNumber = '+487' + randonNumber;

const newUser = {
	email: newEmail,
	login: newLogin,
	password: 'Allied1986!@',
	name: newName,
	lastname: 'testLastname',
	dob: '01012000',
	city: 'random',
	postcode: '00000',
	address: 'address',
	phoneNumber: polishPhoneNumber,
};

module.exports = {
	newUser,
};
