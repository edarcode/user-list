import { useState } from "react";
import { SORT_BY } from "../constants/sortBy.js";

export const useFormUserList = () => {
	const [formUserList, setFormUserList] = useState({
		userToSearch: "",
		isCheckedActive: false,
		sortBy: SORT_BY.default
	});

	const setUserToSearch = newUserToSearch => {
		setFormUserList({ ...formUserList, userToSearch: newUserToSearch });
	};
	const setIsCheckedActive = newIsCheckedActive => {
		setFormUserList({ ...formUserList, isCheckedActive: newIsCheckedActive });
	};
	const setSortBy = newSortBy => {
		setFormUserList({ ...formUserList, sortBy: newSortBy });
	};

	return { ...formUserList, setUserToSearch, setIsCheckedActive, setSortBy };
};
