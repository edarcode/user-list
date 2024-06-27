import { useEffect, useState } from "react";
import { URL_USERS } from "../constants/urls.js";
import { nameSchema } from "../zod-schemas/nameSchema.js";
import { usernameSchema } from "../zod-schemas/usernameSchema.js";

export const useCreateUserForm = () => {
	const [createUserForm, setCreateUserForm] = useState({
		name: { value: "", err: "" },
		username: { value: "", err: "", loading: false }
	});
	const form = createUserForm;

	useEffect(() => {
		const username = form.username;
		if (!username.loading || username.err) return;

		const controller = new AbortController();

		const timeoutId = setTimeout(() => {
			setInvalidOrValidUsernameBasedOnDb({
				signal: controller.signal,
				username: username.value,
				setCreateUserForm
			});
		}, 500);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [form.username]);

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

	return {
		name: form.name,
		username: form.username,
		setName,
		setUsername
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

const isValidUsernameBasedOnDb = async ({ username, signal }) => {
	const res = await fetch(`${URL_USERS}?username=${username}`, { signal });
	const { users } = await res.json();
	return users.length ? false : true;
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
