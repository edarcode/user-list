import { create } from "zustand";
import { devtools } from "zustand/middleware";
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
	sortBy: "",
	loading: false
};

export const useUsers = create(
	devtools((set, get) => ({
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
	}))
);
