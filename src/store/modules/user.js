export default {
	state: {
		user: {
			id: null,
			name: null,
			email: null,
			avatar: null,
			token: null,
			isAdmin: false,
			isLoggedIn: false,
		},
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		setUserToken(state, token) {
			state.user.token = token;
		},
		setUserIsAdmin(state, isAdmin) {
			state.user.isAdmin = isAdmin;
		},
		setUserIsLoggedIn(state, isLoggedIn) {
			state.user.isLoggedIn = isLoggedIn;
		},
	},
};
