import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import UserRole from "../UserRole/UserRole.jsx";
import UserState from "../UserState/UserState.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import Pencil from "../icons/Pencil.jsx";
import Trash from "../icons/Trash.jsx";
import css from "./css.module.css";

const User = user => {
	const setFormToEdit = useCurrentUserForm(state => state.setFormToEdit);
	const { name, username, state, role } = user;

	return (
		<article className={css.user}>
			<UserProfile name={name} username={username} />
			<UserState state={state} />
			<UserRole role={role} />
			<BtnIcon
				className={css.edit}
				icon={Pencil}
				onClick={() => setFormToEdit(user)}
			/>
			<BtnIcon className={css.delete} icon={Trash} />
		</article>
	);
};

export default User;
