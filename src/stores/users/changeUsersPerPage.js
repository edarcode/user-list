export const changeUsersPerPage = ({ set, newUsersPerPage }) => {
	set({ usersPerPage: newUsersPerPage, page: 1 });
};
