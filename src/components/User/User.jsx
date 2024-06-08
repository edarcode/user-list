import { useContext } from "react";
import { ACTIVATE, DISABLE } from "../../constants/states.js";
import { UsersContext } from "../../contexts/UsersContext.js";
import UserRole from "../UserRole/UserRole.jsx";
import UserState from "../UserState/UserState.jsx";
import css from "./User.module.css";

const User = ({ id, name, state, role }) => {
	const { toggleStateUser } = useContext(UsersContext);

	return (
		<article className={css.user}>
			<p className={css.name}>{name}</p>
			<UserState state={state} />
			<UserRole role={role} />
			<button onClick={() => toggleStateUser(id)}>
				{state ? DISABLE : ACTIVATE}
			</button>
		</article>
	);
};

export default User;
