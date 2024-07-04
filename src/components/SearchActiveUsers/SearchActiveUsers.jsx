import { useUsers } from "../../stores/users/useUsers.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";

export default function SearchActiveUsers({ className }) {
	const isCheckedActive = useUsers(users => users.isCheckedActive);
	const changeIsChekedActive = useUsers(users => users.changeIsChekedActive);

	return (
		<InputCheckbox
			className={className}
			text="activos"
			checked={isCheckedActive}
			onChange={e => changeIsChekedActive(e.target.checked)}
		/>
	);
}
