export const sortUsersBy = ({ set, get, newSortBy }) => {
	set({ sortBy: newSortBy });
	const { getUsers } = get();
	getUsers();
};
