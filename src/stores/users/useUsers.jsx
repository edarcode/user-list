import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { changeIsChekedActive } from "./changeIsChekedActive.js";
import { changePageUsers } from "./changePageUsers.js";
import { changeSortBy } from "./changeSortBy.js";
import { changeUserToSearch } from "./changeUserToSearch.js";
import { changeUsersPerPage } from "./changeUsersPerPage.js";
import { getUsers } from "./getUsers.js";
import { resetFilters } from "./resetFilters.js";

const initialStateUsers = {
	allUsers: [],
	page: 1,
	usersPerPage: 6,
	totalPages: 1,
	userToSearch: "",
	isCheckedActive: false,
	sortBy: "",
	loading: false,
	err: ""
};

export const useUsers = create(
	devtools((set, get) => ({
		...initialStateUsers,

		getUsers: ({ signal } = {}) => getUsers({ set, get, signal }),

		changePageUsers: newPage => changePageUsers({ set, newPage }),

		changeUserToSearch: newUserToSearch =>
			changeUserToSearch({ set, newUserToSearch }),

		changeIsChekedActive: newIsCheckedActive =>
			changeIsChekedActive({ set, newIsCheckedActive }),

		changeSortBy: newSortBy => changeSortBy({ set, newSortBy }),

		changeUsersPerPage: newUsersPerPage =>
			changeUsersPerPage({ set, newUsersPerPage }),

		resetFilters: () => resetFilters({ set, initialStateUsers })
	}))
);
