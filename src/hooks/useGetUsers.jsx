import { useEffect } from "react";
import { useUsers } from "../stores/users/useUsers.jsx";

export const useGetUsers = () => {
	const getUsers = useUsers(users => users.getUsers);
	const page = useUsers(users => users.page);
	const userToSearch = useUsers(users => users.userToSearch);
	const usersPerPage = useUsers(users => users.usersPerPage);
	const isCheckedActive = useUsers(users => users.isCheckedActive);
	const sortBy = useUsers(users => users.sortBy);

	useEffect(() => {
		const controller = new AbortController();

		const timeoutId = setTimeout(() => {
			getUsers({ signal: controller.signal });
		}, 300);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [page, usersPerPage, userToSearch, isCheckedActive, sortBy, getUsers]);
};
