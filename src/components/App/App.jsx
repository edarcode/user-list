import { useState } from "react";
import { USERS } from "../../constants/users.js";
import FormUserList from "../FormUserList/FormUserList.jsx";
import UserList from "../UserList/UserList.jsx";
import css from "./App.module.css";

export default function App() {
	const [formUserList, setFormUserList] = useState({
		userToSearch: "",
		isCheckedActive: false,
		sortBy: "0"
	});

	let users = filterUsersByState(USERS, formUserList.isCheckedActive);
	users = filterUsersByName(users, formUserList.userToSearch);
	users = sortUsersBy(users, formUserList.sortBy);

	return (
		<section className={css.app}>
			<h1>Listado de usuarios</h1>
			<FormUserList
				formUserList={formUserList}
				setFormUserList={setFormUserList}
			/>
			<UserList users={users} />
		</section>
	);
}

const filterUsersByName = (users, name) => {
	if (!name) return users;
	return users.filter(user => user.name.includes(name));
};
const filterUsersByState = (users, state) => {
	if (!state) return users;
	return users.filter(user => user.state);
};
const sortUsersBy = (users, sortBy) => {
	switch (sortBy) {
		case "1":
			return sortUsersByName(users);

		default:
			return users;
	}
};
const sortUsersByName = users => {
	return users.toSorted((a, b) => {
		if (a.name > b.name) return 1;
		else if (a.name < b.name) return -1;
		return 0;
	});
};
