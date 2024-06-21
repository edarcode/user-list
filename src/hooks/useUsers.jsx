import { useState } from "react";
import { filterUsersByName } from "../utils/filterUsersByName.js";
import { filterUsersByState } from "../utils/filterUsersByState.js";
import { paginateUsers } from "../utils/paginateUsers.js";
import { sortUsersBy } from "../utils/sortUsersBy.js";

export const useUsers = (
	initialUsers,
	{ isCheckedActive, userToSearch, sortBy, page, usersPerPage }
) => {
	const [users] = useState(initialUsers);

	let newUsers = filterUsersByState(users, isCheckedActive);
	newUsers = filterUsersByName(newUsers, userToSearch);
	newUsers = sortUsersBy(newUsers, sortBy);
	const totalPages = Math.ceil(newUsers.length / usersPerPage) || 1;
	newUsers = paginateUsers(newUsers, { page, usersPerPage });

	return { users: newUsers, totalPages };
};
