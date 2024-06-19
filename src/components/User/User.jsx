import UserProfile from "../UserProfile/UserProfile.jsx";
import UserRole from "../UserRole/UserRole.jsx";
import UserState from "../UserState/UserState.jsx";
import css from "./User.module.css";

const User = ({ name, username, state, role }) => {
	return (
		<article className={css.user}>
			<UserProfile name={name} username={username} />
			<UserState state={state} />
			<UserRole role={role} />
		</article>
	);
};

export default User;
