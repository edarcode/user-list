export const filterUsersByName = (users, name) => {
	if (!name) return users;
	return users.filter(user => user.name.includes(name));
};
