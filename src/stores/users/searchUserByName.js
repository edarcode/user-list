import { getUsersToDisplay } from "./getUsersToDisplay.js";

export const searchUserByName = (state, newUserToSearch) => {
	const updatedVirtual = getUsersToDisplay({
		...state,
		page: 1,
		userToSearch: newUserToSearch
	});

	return {
		...updatedVirtual,
		page: 1,
		userToSearch: newUserToSearch
	};
};
