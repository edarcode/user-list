export const searchUserByName = ({ set, get, newUserToSearch, signal }) => {
	set({ userToSearch: newUserToSearch });
	const { getUsers } = get();
	getUsers({ signal });
};
