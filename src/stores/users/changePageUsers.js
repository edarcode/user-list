import { getUsersToDisplay } from "./getUsersToDisplay.js";

export const changePageUsers = (state, newPage) => {
	const updatedVirtual = getUsersToDisplay({
		...state,
		page: newPage
	});

	return {
		...updatedVirtual,
		page: newPage
	};
};
