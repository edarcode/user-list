import { URL_USERS } from "../../constants/urls.js";

export const getUsers = async ({ set, get, signal }) => {
	const { page, usersPerPage, userToSearch, isCheckedActive, sortBy } = get();
	const url = `${URL_USERS}?page=${page}&take=${usersPerPage}`;
	const newUrl = addQueries(url, { userToSearch, isCheckedActive, sortBy });

	set({ loading: true });
	try {
		const res = await fetch(newUrl, { signal });
		if (!res.ok) throw new Error(res.statusText);
		const { users, totalPages } = await res.json();
		set({ allUsers: users, totalPages });
	} catch (error) {
		if (error.name === "AbortError") return;
		set({ err: error.message });
	} finally {
		set({ loading: false });
	}
};

const addQueries = (url, queries) => {
	const { userToSearch, isCheckedActive, sortBy } = queries;

	let newUrl = url;

	if (userToSearch) newUrl = newUrl.concat(`&name=${userToSearch}`);
	if (isCheckedActive) newUrl = newUrl.concat(`&state=${isCheckedActive}`);
	if (sortBy) newUrl = newUrl.concat(`&order=${sortBy}`);

	return newUrl;
};
