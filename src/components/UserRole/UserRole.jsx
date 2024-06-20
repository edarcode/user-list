import { ROLES } from "../../constants/roles.js";
import css from "./css.module.css";

const ROLES_STYLES = {
	[ROLES.teacher]: css.teacher,
	[ROLES.student]: css.student,
	[ROLES.other]: css.other
};

const UserRole = ({ role }) => {
	const classNameRole = ROLES_STYLES[role];
	return <p className={`${css.role} ${classNameRole}`}>{role}</p>;
};

export default UserRole;
