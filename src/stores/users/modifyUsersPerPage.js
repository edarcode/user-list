export const modifyUsersPerPage = ({ set, get, newUsersPerPage }) => {
	set({ usersPerPage: newUsersPerPage });
	const { getUsers } = get();
	getUsers();
};
