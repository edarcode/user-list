import { create } from "zustand";
import { SORT_BY } from "../../constants/sortBy.js";
import { USERS } from "../../constants/users.js";
import { changePageUsers } from "./changePageUsers.js";
import { getUsersToDisplay } from "./getUsersToDisplay.js";
import { modifyUsersPerPage } from "./modifyUsersPerPage.js";
import { searchActiveUsers } from "./searchActiveUsers.js";
import { searchUserByName } from "./searchUserByName.js";
import { sortUsersBy } from "./sortUsersBy.js";

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
	getUsersToDisplay: () => {
		set(state => getUsersToDisplay(state));
	},
	searchUserByName: newUserToSearch => {
		set(state => searchUserByName(state, newUserToSearch));
	},
	searchActiveUsers: newIsCheckedActive => {
		set(state => searchActiveUsers(state, newIsCheckedActive));
	},
	sortUsersBy: newSortBy => {
		set(state => sortUsersBy(state, newSortBy));
	},
	changePageUsers: newPage => {
		set(state => changePageUsers(state, newPage));
	},
	modifyUsersPerPage: newUsersPerPage => {
		set(state => modifyUsersPerPage(state, newUsersPerPage));
	}
}));
