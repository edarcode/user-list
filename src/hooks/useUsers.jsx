import { useState } from "react";
import { SORT_BY } from "../constants/sortBy.js";
import { USERS } from "../constants/users.js";
import { processingUsersToDisplay } from "../utils/processingUsersToDisplay.js";

const initialUsers = {
	allUsers: USERS,
	formUserList: {
		userToSearch: "",
		isCheckedActive: false,
		sortBy: SORT_BY.default,
		page: 1,
		usersPerPage: 2
	}
};

export const useUsers = () => {
	const [users, setUsers] = useState(initialUsers);
	const { allUsers, formUserList } = users;

	const setUserToSearch = newUserToSearch => {
		setUsers({
			allUsers,
			formUserList: {
				...formUserList,
				page: 1,
				userToSearch: newUserToSearch
			}
		});
	};

	const setIsCheckedActive = newIsCheckedActive => {
		setUsers({
			allUsers,
			formUserList: {
				...formUserList,
				page: 1,
				isCheckedActive: newIsCheckedActive
			}
		});
	};

	const setSortBy = newSortBy => {
		setUsers({
			allUsers,
			formUserList: { ...formUserList, page: 1, sortBy: newSortBy }
		});
	};

	const setPage = newPage => {
		setUsers({ allUsers, formUserList: { ...formUserList, page: newPage } });
	};

	const setUsersPerPage = newUsersPerPage => {
		setUsers({
			allUsers,
			formUserList: {
				...formUserList,
				page: 1,
				usersPerPage: newUsersPerPage
			}
		});
	};

	const { processedUsers, totalPages } = processingUsersToDisplay(users);

	return {
		allUsers: processedUsers,
		formUserList,
		totalPages,
		actions: {
			setUserToSearch,
			setIsCheckedActive,
			setSortBy,
			setPage,
			setUsersPerPage
		}
	};
};
