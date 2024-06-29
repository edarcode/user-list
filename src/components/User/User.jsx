import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import { addAllClassName } from "../../utils/addAllClassName.js";
import UserProfile from "../UserProfile/UserProfile.jsx";
import UserRole from "../UserRole/UserRole.jsx";
import UserState from "../UserState/UserState.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import Pencil from "../icons/Pencil.jsx";
import Trash from "../icons/Trash.jsx";
import css from "./css.module.css";

export default function User({ className, isUserGrid, ...user }) {
	const setFormToEdit = useCurrentUserForm(state => state.setFormToEdit);
	const setFormToDelete = useCurrentUserForm(state => state.setFormToDelete);
	const { name, username, state, role } = user;

	const finalClassName = addAllClassName([
		css.user,
		className,
		isUserGrid && css.userGrid
	]);

	return (
		<article className={finalClassName}>
			<UserProfile className={css.profile} name={name} username={username} />
			<UserRole role={role} />
			<UserState state={state} />
			<BtnIcon icon={Pencil} onClick={() => setFormToEdit(user)} />
			<BtnIcon
				className={css.delete}
				icon={Trash}
				onClick={() => setFormToDelete(user)}
			/>
		</article>
	);
}
