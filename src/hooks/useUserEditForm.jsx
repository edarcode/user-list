import { useEffect, useState } from "react";
import { isValidUsernameBasedOnDb } from "../fetch/isValidUsernameBasedOnDb.js";
import { nameSchema } from "../zod-schemas/nameSchema.js";
import { usernameSchema } from "../zod-schemas/usernameSchema.js";

const getInitialState = user => {
	return {
		id: user.id,
		name: { value: user.name, err: "" },
		username: { value: user.username, err: "", loading: false },
		state: user.state,
		role: user.role
	};
};

export const useUserEditForm = user => {
	const [editUserForm, setEditUserForm] = useState(getInitialState(user));
	const form = editUserForm;

	const isUserChanged =
		user.name !== form.name.value ||
		user.username !== form.username.value ||
		user.state !== form.state ||
		user.role !== form.role;

	const isValidForm =
		form.name.value &&
		!form.name.err &&
		form.username.value &&
		!form.username.err &&
		!form.username.loading &&
		isUserChanged;

	useEffect(() => {
		if (!form.username.loading) return;
		if (!isUserChanged) {
			setUsernameLoading({ setEditUserForm, bol: false });
			return;
		}

		const controller = new AbortController();

		const timeoutId = setTimeout(() => {
			setInvalidOrValidUsernameBasedOnDb({
				signal: controller.signal,
				setEditUserForm,
				username: form.username.value
			});
		}, 500);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [form.username.loading, form.username.value, isUserChanged]);

	const setName = newName => {
		const { success, error } = nameSchema.safeParse(newName);

		const newForm = { ...form };
		if (!success) {
			const errMsg = error.errors[0].message;
			newForm.name = { ...form.name, value: newName, err: errMsg };
		} else {
			newForm.name = { ...form.name, value: newName, err: "" };
		}

		setEditUserForm(newForm);
	};

	const setUsername = newUsername => {
		const { success, error } = usernameSchema.safeParse(newUsername);

		const newForm = { ...form };

		if (!success) {
			const errMsg = error.errors[0].message;
			newForm.username = {
				...form.username,
				value: newUsername,
				err: errMsg,
				loading: false
			};
		} else {
			newForm.username = {
				...form.username,
				value: newUsername,
				err: "",
				loading: true
			};
		}

		setEditUserForm(newForm);
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
		setRole,
		isValidForm
	};
};

const setInvalidOrValidUsernameBasedOnDb = async params => {
	const { signal, setEditUserForm, username } = params;
	try {
		const isValid = await isValidUsernameBasedOnDb({ signal, username });
		!isValid && setInvalidUsernameBasedOnDb({ setEditUserForm });
		isValid && setValidUsernameBasedOnDb({ setEditUserForm });
	} catch (error) {
		if (error.name === "AbortError") return;
		setErrorServer({ setEditUserForm });
	}
};

const setInvalidUsernameBasedOnDb = ({ setEditUserForm }) => {
	setEditUserForm(form => ({
		...form,
		username: { ...form.username, err: "username ocupado", loading: false }
	}));
};

const setValidUsernameBasedOnDb = ({ setEditUserForm }) => {
	setEditUserForm(form => ({
		...form,
		username: { ...form.username, err: "", loading: false }
	}));
};

const setErrorServer = ({ setEditUserForm }) => {
	setEditUserForm(form => ({
		...form,
		username: { ...form.username, err: "Error de servidor", loading: false }
	}));
};

const setUsernameLoading = ({ setEditUserForm, bol }) => {
	setEditUserForm(form => ({
		...form,
		username: { ...form.username, err: "", loading: bol }
	}));
};
