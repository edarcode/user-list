import { URL_USERS } from "../constants/urls.js";

export const updateUser = async ({ signal, body, userId }) => {
	const res = await fetch(`${URL_USERS}/${userId}`, {
		method: "PATCH",
		signal,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	});
	if (!res.ok) throw new Error(res.statusText);
	return res;
};
