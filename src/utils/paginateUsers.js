export const paginateUsers = (users, { page = 1, usersPerPage = 2 }) => {
	const startIndex = (page - 1) * usersPerPage;
	const endIndex = startIndex + usersPerPage;
	return users.slice(startIndex, endIndex);
};
