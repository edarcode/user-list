import { useEffect, useState } from "react";
import { useCurrentUserForm } from "../stores/current-user-form/useCurrentUserForm.jsx";
import { useUsers } from "../stores/users/useUsers.jsx";

export const useSubmitUser = fetch => {
	const getUsers = useUsers(state => state.getUsers);
	const setFormToFilter = useCurrentUserForm(state => state.setFormToFilter);

	const [submitUser, setSubmitUser] = useState({
		err: "",
		loading: false,
		newUser: null,
		userId: null
	});

	useEffect(() => {
		if (!submitUser.loading) return;

		const controller = new AbortController();
		const params = {
			signal: controller.signal,
			body: submitUser.newUser,
			userId: submitUser.userId
		};
		fetch(params)
			.then(() => {
				setFormToFilter();
				getUsers();
			})
			.catch(() => {
				setSubmitUser({ loading: false, err: "error al crear usuario 😢" });
			});

		return () => controller.abort();
	}, [submitUser, fetch, setFormToFilter, getUsers]);

	return { submitUser, setSubmitUser };
};
