import { create } from "zustand";
import { changePageUsers } from "./changePageUsers.js";
import { getUsers } from "./getUsers.js";
import { modifyUsersPerPage } from "./modifyUsersPerPage.js";
import { searchActiveUsers } from "./searchActiveUsers.js";
import { searchUserByName } from "./searchUserByName.js";
import { sortUsersBy } from "./sortUsersBy.js";

const initialStateUsers = {
	allUsers: [],
	page: 1,
	usersPerPage: 6,
	totalPages: 1,
	userToSearch: "",
	isCheckedActive: false,
	sortBy: ""
};

export const useUsers = create((set, get) => ({
	...initialStateUsers,

	getUsers: () => getUsers(set, get),

	changePageUsers: newPage => changePageUsers({ set, get, newPage }),

	searchUserByName: newUserToSearch =>
		searchUserByName({ set, get, newUserToSearch }),

	searchActiveUsers: newIsCheckedActive =>
		searchActiveUsers({ set, get, newIsCheckedActive }),

	sortUsersBy: newSortBy => sortUsersBy({ set, get, newSortBy }),

	modifyUsersPerPage: newUsersPerPage =>
		modifyUsersPerPage({ set, get, newUsersPerPage })
}));
