import { useState } from "react";
import { SORT_BY } from "../constants/sortBy.js";
import { USERS } from "../constants/users.js";
import { filterUsersByName } from "../utils/filterUsersByName.js";
import { filterUsersByState } from "../utils/filterUsersByState.js";
import { paginateUsers } from "../utils/paginateUsers.js";
import { sortUsersBy } from "../utils/sortUsersBy.js";

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
	const { isCheckedActive, page, sortBy, userToSearch, usersPerPage } =
		formUserList;

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
			formUserList: { ...formUserList, sortBy: newSortBy }
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

	let newUsers = filterUsersByState(allUsers, isCheckedActive);
	newUsers = filterUsersByName(newUsers, userToSearch);
	newUsers = sortUsersBy(newUsers, sortBy);
	const totalPages = Math.ceil(newUsers.length / usersPerPage) || 1;
	newUsers = paginateUsers(newUsers, { page, usersPerPage });

	return {
		allUsers: newUsers,
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
