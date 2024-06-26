import { useEffect, useRef } from "react";
import { useUsers } from "../stores/users/useUsers.jsx";

export const useGetUsers = (depen, canRunFirstRende) => {
	const getUsers = useUsers(users => users.getUsers);
	const isFirstRender = useRef(!canRunFirstRende ? true : false);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		const controller = new AbortController();
		getUsers({ signal: controller.signal });

		return () => controller.abort();
	}, [depen, getUsers]);
};
