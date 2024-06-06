import { useState } from "react";
import { USERS } from "../../constants/users.js";
import FormUserList from "../FormUserList/FormUserList.jsx";
import UserList from "../UserList/UserList.jsx";
import css from "./App.module.css";

export default function App() {
	const {
		userToSearch,
		isCheckedActive,
		sortBy,
		setUserToSearch,
		setIsCheckedActive,
		setSortBy
	} = useFormUserList();

	let users = filterUsersByState(USERS, isCheckedActive);
	users = filterUsersByName(users, userToSearch);
	users = sortUsersBy(users, sortBy);

	return (
		<section className={css.app}>
			<h1>Listado de usuarios</h1>
			<FormUserList
				userToSearch={userToSearch}
				isCheckedActive={isCheckedActive}
				sortBy={sortBy}
				setUserToSearch={setUserToSearch}
				setIsCheckedActive={setIsCheckedActive}
				setSortBy={setSortBy}
			/>
			<UserList users={users} />
		</section>
	);
}

const useFormUserList = () => {
	const [formUserList, setFormUserList] = useState({
		userToSearch: "",
		isCheckedActive: false,
		sortBy: "0"
	});

	const setUserToSearch = newUserToSearch => {
		setFormUserList({ ...formUserList, userToSearch: newUserToSearch });
	};
	const setIsCheckedActive = newIsCheckedActive => {
		setFormUserList({ ...formUserList, isCheckedActive: newIsCheckedActive });
	};
	const setSortBy = newSortBy => {
		setFormUserList({ ...formUserList, sortBy: newSortBy });
	};

	return { ...formUserList, setUserToSearch, setIsCheckedActive, setSortBy };
};

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
