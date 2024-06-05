import { useState } from "react";
import { ACTIVE, INACTIVE } from "../../constants/states.js";
import UserRole from "../UserRole/UserRole.jsx";
import UserState from "../UserState/UserState.jsx";
import css from "./User.module.css";

const User = ({ name, state, role }) => {
	const [isActive, setIsActive] = useState(state);
	return (
		<article className={css.user}>
			<p className={css.name}>{name}</p>
			<UserState state={isActive} />
			<UserRole role={role} />
			<button onClick={() => setIsActive(!isActive)}>
				{isActive ? ACTIVE : INACTIVE}
			</button>
		</article>
	);
};

export default User;
