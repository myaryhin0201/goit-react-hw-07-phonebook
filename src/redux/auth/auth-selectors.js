const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail, getUserName };
