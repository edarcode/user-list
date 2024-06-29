import { useEffect, useState } from "react";
import { isValidUsernameBasedOnDb } from "../fetch/isValidUsernameBasedOnDb.js";
import { nameSchema } from "../zod-schemas/nameSchema.js";
import { usernameSchema } from "../zod-schemas/usernameSchema.js";

const initialState = {
	name: { value: "", err: "" },
	username: { value: "", err: "", loading: false }
};

export const useUserCreateForm = () => {
	const [createUserForm, setCreateUserForm] = useState(initialState);
	const form = createUserForm;

	const isValidForm =
		form.name.value &&
		!form.name.err &&
		form.username.value &&
		!form.username.err &&
		!form.username.loading;

	useEffect(() => {
		if (!form.username.loading) return;

		const controller = new AbortController();

		const timeoutId = setTimeout(() => {
			setInvalidOrValidUsernameBasedOnDb({
				signal: controller.signal,
				username: form.username.value,
				setCreateUserForm
			});
		}, 500);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [form.username.loading, form.username.value]);

	const setName = newName => {
		const { success, error } = nameSchema.safeParse(newName);

		const newForm = { ...form };

		if (!success) {
			const errMsg = error.errors[0].message;
			newForm.name = { ...form.name, value: newName, err: errMsg };
		} else {
			newForm.name = { ...form.name, value: newName, err: "" };
		}

		setCreateUserForm(newForm);
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

		setCreateUserForm(newForm);
	};

	const resetCreateUserForm = () => {
		setCreateUserForm(initialState);
	};

	return {
		name: form.name,
		username: form.username,
		setName,
		setUsername,
		isValidForm,
		resetCreateUserForm
	};
};

const setInvalidOrValidUsernameBasedOnDb = async params => {
	const { signal, username, setCreateUserForm } = params;
	try {
		const isValid = await isValidUsernameBasedOnDb({ username, signal });
		!isValid && setInvalidUsername({ setCreateUserForm });
		isValid && setValidUsername({ setCreateUserForm });
	} catch (error) {
		if (error.name === "AbortError") return;
		setErrorServer({ setCreateUserForm });
	}
};

const setInvalidUsername = ({ setCreateUserForm }) => {
	setCreateUserForm(form => ({
		...form,
		username: { ...form.username, loading: false, err: "username no valido" }
	}));
};

const setValidUsername = ({ setCreateUserForm }) => {
	setCreateUserForm(form => ({
		...form,
		username: { ...form.username, loading: false, err: "" }
	}));
};

const setErrorServer = ({ setCreateUserForm }) => {
	setCreateUserForm(form => ({
		...form,
		username: { ...form.username, loading: false, err: "error de servidor" }
	}));
};
