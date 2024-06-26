import { useGetUsers } from "../../hooks/useGetUsers.jsx";
import { useUsers } from "../../stores/users/useUsers.jsx";
import InputSearch from "../forms/InputSearch/InputSearch.jsx";

export default function SearchUserByName() {
	const userToSearch = useUsers(users => users.userToSearch);
	const changeUserToSearch = useUsers(users => users.changeUserToSearch);

	useGetUsers(userToSearch);

	return (
		<InputSearch
			placeholder="Nombre"
			value={userToSearch}
			onChange={e => changeUserToSearch(e.target.value)}
		/>
	);
}
