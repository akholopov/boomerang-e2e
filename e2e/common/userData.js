const currentTime = Date.now();
const newUsername = 'dot.earth.test' + currentTime;
const newEmail = 'dot.earth.test' + currentTime + '@gmail.com';

const newUser = {
	username: newUsername,
	email: newEmail,
	discordTag: '0000',
	password: 'Allied1986!@',
};

module.exports = {
	newUser,
};
