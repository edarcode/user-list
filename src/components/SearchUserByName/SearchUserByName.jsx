import { useEffect, useRef } from "react";
import { useUsers } from "../../stores/users/useUsers.jsx";
import InputSearch from "../forms/InputSearch/InputSearch.jsx";

export default function SearchUserByName() {
	const userToSearch = useUsers(users => users.userToSearch);
	const changeUserToSearch = useUsers(users => users.changeUserToSearch);
	const getUsers = useUsers(users => users.getUsers);
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			getUsers({ signal: controller.signal });
		}, 500);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [userToSearch, getUsers]);

	return (
		<InputSearch
			placeholder="Nombre"
			value={userToSearch}
			onChange={e => changeUserToSearch(e.target.value)}
		/>
	);
}
