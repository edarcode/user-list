import { URL_USERS } from "../constants/urls.js";

export const isValidUsernameBasedOnDb = async ({ username, signal }) => {
	const res = await fetch(`${URL_USERS}?username=${username}`, { signal });
	const { users } = await res.json();
	return users.length ? false : true;
};
