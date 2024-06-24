import { create } from "zustand";
import { SORT_BY } from "../../constants/sortBy.js";
import { USERS } from "../../constants/users.js";
import { processingUsersToDisplay } from "../../utils/processingUsersToDisplay.js";

const initialStateUsers = {
	allUsers: USERS,
	userToSearch: "",
	isCheckedActive: false,
	sortBy: SORT_BY.default,
	page: 1,
	usersPerPage: 2,
	totalPages: 1,
	display: []
};

export const useUsers = create(set => ({
	...initialStateUsers,
	updateUserToSearch: newUserToSearch => {
		set(state => updateUserToSearch(state, newUserToSearch));
	},
	updateIsCheckedActive: newIsCheckedActive => {
		set(state => updateIsCheckedActive(state, newIsCheckedActive));
	},
	updateSortBy: newSortBy => {
		set(state => updateSortBy(state, newSortBy));
	},
	updatePage: newPage => {
		set(state => updatePage(state, newPage));
	},
	updateUsersPerPage: newUsersPerPage => {
		set(state => updateUsersPerPage(state, newUsersPerPage));
	},
	updateDisplayAndTotalPages: () => {
		set(state => updateDisplayAndTotalPages(state));
	}
}));

const updateUserToSearch = (state, newUserToSearch) => {
	const updatedVirtual = updateDisplayAndTotalPages({
		...state,
		page: 1,
		userToSearch: newUserToSearch
	});

	return {
		...updatedVirtual,
		page: 1,
		userToSearch: newUserToSearch
	};
};

const updateIsCheckedActive = (state, newIsCheckedActive) => {
	const updatedVirtual = updateDisplayAndTotalPages({
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

const updateSortBy = (state, newSortBy) => {
	const updatedVirtual = updateDisplayAndTotalPages({
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

const updatePage = (state, newPage) => {
	const updatedVirtual = updateDisplayAndTotalPages({
		...state,
		page: newPage
	});

	return {
		...updatedVirtual,
		page: newPage
	};
};

const updateUsersPerPage = (state, newUsersPerPage) => {
	const updatedVirtual = updateDisplayAndTotalPages({
		...state,
		page: 1,
		usersPerPage: newUsersPerPage
	});

	return {
		...updatedVirtual,
		page: 1,
		usersPerPage: newUsersPerPage
	};
};

const updateDisplayAndTotalPages = state => {
	const { processedUsers, totalPages } = processingUsersToDisplay(state);
	return { display: processedUsers, totalPages };
};
