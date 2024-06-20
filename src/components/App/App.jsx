import { useState } from "react";
import { SORT_BY } from "../../constants/sortBy.js";
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
	const { users } = useUsers(USERS);

	let usersFiltered = filterUsersByState(users, isCheckedActive);
	usersFiltered = filterUsersByName(usersFiltered, userToSearch);
	usersFiltered = sortUsersBy(usersFiltered, sortBy);

	return (
		<section className={css.app}>
			<h1 className={css.title}>Listado de usuarios</h1>
			<FormUserList
				userToSearch={userToSearch}
				isCheckedActive={isCheckedActive}
				sortBy={sortBy}
				setUserToSearch={setUserToSearch}
				setIsCheckedActive={setIsCheckedActive}
				setSortBy={setSortBy}
			/>

			<UserList users={usersFiltered} />
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

const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	return { users, setUsers };
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
	if (sortBy === SORT_BY.default) return users;
	return users.toSorted((a, b) => {
		if (a[sortBy] > b[sortBy]) return 1;
		else if (a[sortBy] < b[sortBy]) return -1;
		return 0;
	});
};
