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
		if (form.username.loading) {
			isValidUsernameInDb(form.username.value)
				.then(isValid => {
					!isValid && setInvalidUsernameInDb({ setCreateUserForm, form });
					isValid && setValidUsernameInDb({ setCreateUserForm, form });
				})
				.catch(() => {
					setErrorServer({ setCreateUserForm, form });
				});
		}
	}, [form]);

	const setName = newName => {
		const { success, error } = nameSchema.safeParse(newName);

		const newCreateUserForm = { ...createUserForm };

		if (!success) {
			const errMsg = error.errors[0].message;
			newCreateUserForm.name = { value: newName, err: errMsg };
		} else {
			newCreateUserForm.name = { value: newName, err: "" };
		}

		setCreateUserForm(newCreateUserForm);
	};

	const setUsername = newUsername => {
		const { success, error } = usernameSchema.safeParse(newUsername);

		const newForm = { ...form };

		if (!success) {
			const errMsg = error.errors[0].message;
			newForm.username = {
				value: newUsername,
				err: errMsg,
				loading: false
			};
		} else {
			newForm.username = {
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

const isValidUsernameInDb = async username => {
	const res = await fetch(`${URL_USERS}?username=${username}`);
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
