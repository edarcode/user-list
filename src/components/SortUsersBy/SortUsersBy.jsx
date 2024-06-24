import { SORT_BY } from "../../constants/sortBy.js";
import { useUsers } from "../../stores/users/useUsers.jsx";
import Select from "../forms/Select/Select.jsx";

export default function SortUsersBy() {
	const sortBy = useUsers(users => users.sortBy);
	const sortUsersBy = useUsers(users => users.sortUsersBy);

	return (
		<Select value={sortBy} onChange={e => sortUsersBy(e.target.value)}>
			<option value={SORT_BY.default}>defecto</option>
			<option value={SORT_BY.name}>nombre</option>
			<option value={SORT_BY.role}>role</option>
			<option value={SORT_BY.state}>estado</option>
		</Select>
	);
}
