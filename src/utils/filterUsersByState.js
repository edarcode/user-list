export const filterUsersByState = (users, state) => {
	if (!state) return users;
	return users.filter(user => user.state);
};
