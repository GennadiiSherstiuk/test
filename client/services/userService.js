
const user = {
			'name': 'My user',
			'createdAt': new Date(),
			'email': 'test@tes.com',
			'salt': '111',
			'hash': 'safdsdfasdfgdfb',
			'externalId': [
				'c/gmail.com'
			],
			'id': 0
		};

function getUser() {
	return user;
}

function getUserId() {
	return user.id;
}

export default {
	getUser: getUser,
	getUserId: getUserId
};