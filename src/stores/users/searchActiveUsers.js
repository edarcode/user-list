import { getUsersToDisplay } from "./getUsersToDisplay.js";

export const searchActiveUsers = (state, newIsCheckedActive) => {
	const updatedVirtual = getUsersToDisplay({
		...state,
		page: 1,
		isCheckedActive: newIsCheckedActive
	});

	return {
		...updatedVirtual,
		page: 1,
		isCheckedActive: newIsCheckedActive
	};
};
