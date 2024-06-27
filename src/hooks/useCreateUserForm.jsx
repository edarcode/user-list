import { useState } from "react";
import { nameSchema } from "../zod-schemas/nameSchema.js";
import { usernameSchema } from "../zod-schemas/usernameSchema.js";

export const useCreateUserForm = () => {
	const [createUserForm, setCreateUserForm] = useState({
		name: { value: "", err: "" },
		username: { value: "", err: "" }
	});

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

		const newCreateUserForm = { ...createUserForm };

		if (!success) {
			const errMsg = error.errors[0].message;
			newCreateUserForm.username = { value: newUsername, err: errMsg };
		} else {
			newCreateUserForm.username = { value: newUsername, err: "" };
		}

		setCreateUserForm(newCreateUserForm);
	};

	return {
		name: createUserForm.name,
		username: createUserForm.username,
		setName,
		setUsername
	};
};
