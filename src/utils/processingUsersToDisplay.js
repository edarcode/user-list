import { filterUsersByName } from "./filterUsersByName.js";
import { filterUsersByState } from "./filterUsersByState.js";
import { paginateUsers } from "./paginateUsers.js";
import { sortUsersBy } from "./sortUsersBy.js";

export const processingUsersToDisplay = ({
	allUsers,
	isCheckedActive,
	userToSearch,
	sortBy,
	usersPerPage,
	page
}) => {
	let processedUsers = filterUsersByState(allUsers, isCheckedActive);
	processedUsers = filterUsersByName(processedUsers, userToSearch);
	processedUsers = sortUsersBy(processedUsers, sortBy);
	const totalPages = Math.ceil(processedUsers.length / usersPerPage) || 1;

	processedUsers = paginateUsers(processedUsers, { page, usersPerPage });

	return { processedUsers, totalPages };
};
