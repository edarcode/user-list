export const changePageUsers = ({ set, get, newPage }) => {
	set({ page: newPage });
	const { getUsers } = get();
	getUsers();
};
