import { getUsersToDisplay } from "./getUsersToDisplay.js";

export const sortUsersBy = (state, newSortBy) => {
	const updatedVirtual = getUsersToDisplay({
		...state,
		page: 1,
		sortBy: newSortBy
	});

	return {
		...updatedVirtual,
		page: 1,
		sortBy: newSortBy
	};
};
