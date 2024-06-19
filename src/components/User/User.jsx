import UserRole from "../UserRole/UserRole.jsx";
import UserState from "../UserState/UserState.jsx";
import css from "./User.module.css";

const User = ({ name, state, role }) => {
	return (
		<article className={css.user}>
			<p className={css.name}>{name}</p>
			<UserState state={state} />
			<UserRole role={role} />
		</article>
	);
};

export default User;
