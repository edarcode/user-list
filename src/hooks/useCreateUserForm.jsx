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
		if (!form.username.loading) return;
		const controller = new AbortController();

		setValidOrInvlidUsername({
			signal: controller.signal,
			form,
			setCreateUserForm
		});

		return () => controller.abort();
	}, [form]);

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

const isValidUsernameInDb = async ({ username, signal }) => {
	const res = await fetch(`${URL_USERS}?username=${username}`, { signal });
	if (!res.ok) throw new Error(res.statusText);
	const { users } = await res.json();
	return users.length ? false : true;
};

const setInvalidUsernameInDb = ({ setCreateUserForm, form }) => {
	setCreateUserForm({
		...form,
		username: { ...form.username, loading: false, err: "username no valido" }
	});
};

const setValidUsernameInDb = ({ setCreateUserForm, form }) => {
	setCreateUserForm({
		...form,
		username: { ...form.username, loading: false, err: "" }
	});
};

const setErrorServer = ({ setCreateUserForm, form }) => {
	setCreateUserForm({
		...form,
		username: { ...form.username, loading: false, err: "Error de servidor" }
	});
};

const setValidOrInvlidUsername = async ({
	signal,
	form,
	setCreateUserForm
}) => {
	try {
		const username = form.username.value;
		const isValid = await isValidUsernameInDb({ username, signal });
		!isValid && setInvalidUsernameInDb({ setCreateUserForm, form });
		isValid && setValidUsernameInDb({ setCreateUserForm, form });
	} catch (error) {
		setErrorServer({ setCreateUserForm, form });
	}
};
