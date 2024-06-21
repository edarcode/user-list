import { useState } from "react";
import { SORT_BY } from "../constants/sortBy.js";

export const useFormUserList = () => {
	const [formUserList, setFormUserList] = useState({
		userToSearch: "",
		isCheckedActive: false,
		sortBy: SORT_BY.default,
		page: 1,
		usersPerPage: 2
	});

	const setUserToSearch = newUserToSearch => {
		setFormUserList({
			...formUserList,
			page: 1,
			userToSearch: newUserToSearch
		});
	};
	const setIsCheckedActive = newIsCheckedActive => {
		setFormUserList({
			...formUserList,
			page: 1,
			isCheckedActive: newIsCheckedActive
		});
	};
	const setSortBy = newSortBy => {
		setFormUserList({ ...formUserList, sortBy: newSortBy });
	};
	const setPage = newPage => {
		setFormUserList({ ...formUserList, page: newPage });
	};
	const setUsersPerPage = newUsersPerPage => {
		setFormUserList({ ...formUserList, usersPerPage: newUsersPerPage });
	};

	return {
		...formUserList,
		setUserToSearch,
		setIsCheckedActive,
		setSortBy,
		setPage,
		setUsersPerPage
	};
};
