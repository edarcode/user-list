import { URL_USERS } from "../constants/urls.js";

export const deleteUser = async ({ signal, userId }) => {
	const res = await fetch(`${URL_USERS}/${userId}`, {
		method: "DELETE",
		signal,
		headers: { "Content-Type": "application/json" }
	});
	if (!res.ok) throw new Error(res.statusText);
	return res;
};
