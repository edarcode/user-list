import { useState } from "react";
import { useCurrentUserForm } from "../stores/current-user-form/useCurrentUserForm.jsx";

export const useUserEditForm = () => {
	const user = useCurrentUserForm(state => state.payload);

	const [editUserForm, setEditUserForm] = useState({
		id: user.id,
		name: user.name,
		username: user.username,
		state: user.state,
		role: user.role
	});

	const form = editUserForm;

	const setName = newName => {
		setEditUserForm({ ...form, name: newName });
	};
	const setUsername = newUsername => {
		setEditUserForm({ ...form, username: newUsername });
	};
	const setState = newState => {
		setEditUserForm({ ...form, state: newState });
	};
	const setRole = newRole => {
		setEditUserForm({ ...form, role: newRole });
	};

	return {
		name: form.name,
		username: form.username,
		role: form.role,
		state: form.state,
		setName,
		setUsername,
		setState,
		setRole
	};
};
