export const searchUserByName = ({ set, get, newUserToSearch }) => {
	set({ userToSearch: newUserToSearch });
	const { getUsers } = get();
	getUsers();
};
