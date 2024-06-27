import { URL_USERS } from "../constants/urls.js";

export const createUser = async ({ signal, body }) => {
	const res = await fetch(URL_USERS, {
		method: "POST",
		signal,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	});
	if (!res.ok) throw new Error(res.statusText);
	return res;
};
