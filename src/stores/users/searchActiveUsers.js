export const searchActiveUsers = ({ set, get, newIsCheckedActive }) => {
	set({ isCheckedActive: newIsCheckedActive });
	const { getUsers } = get();
	getUsers();
};
