export const changeUserToSearch = ({ set, newUserToSearch }) => {
	set({ userToSearch: newUserToSearch, page: 1 });
};
