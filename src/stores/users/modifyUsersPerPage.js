import { getUsersToDisplay } from "./getUsersToDisplay.js";

export const modifyUsersPerPage = (state, newUsersPerPage) => {
	const updatedVirtual = getUsersToDisplay({
		...state,
		page: 1,
		usersPerPage: newUsersPerPage
	});

	return {
		...updatedVirtual,
		page: 1,
		usersPerPage: newUsersPerPage
	};
};
