import { useUsers } from "../../stores/users/useUsers.jsx";
import InputSearch from "../forms/InputSearch/InputSearch.jsx";

export default function SearchUserByName() {
	const userToSearch = useUsers(users => users.userToSearch);
	const searchUserByName = useUsers(users => users.searchUserByName);
	return (
		<InputSearch
			placeholder="Nombre"
			value={userToSearch}
			onChange={e => searchUserByName(e.target.value)}
		/>
	);
}
