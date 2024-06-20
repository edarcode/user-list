import { SORT_BY } from "../constants/sortBy.js";

export const sortUsersBy = (users, sortBy) => {
	if (sortBy === SORT_BY.default) return users;
	return users.toSorted((a, b) => {
		if (a[sortBy] > b[sortBy]) return 1;
		else if (a[sortBy] < b[sortBy]) return -1;
		return 0;
	});
};
