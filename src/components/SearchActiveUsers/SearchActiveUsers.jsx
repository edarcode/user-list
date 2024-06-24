import { useUsers } from "../../stores/users/useUsers.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";

export default function SearchActiveUsers() {
	const isCheckedActive = useUsers(users => users.isCheckedActive);
	const searchActiveUsers = useUsers(users => users.searchActiveUsers);

	return (
		<InputCheckbox
			text="activos"
			checked={isCheckedActive}
			onChange={e => searchActiveUsers(e.target.checked)}
		/>
	);
}
