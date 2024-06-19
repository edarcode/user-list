import css from "./css.module.css";

const ROLES = {
	profesor: css.teacher,
	estudiante: css.student
};

const UserRole = ({ role }) => {
	const classNameRole = ROLES[role] || css.other;
	return <p className={`${css.role} ${classNameRole}`}>{role}</p>;
};

export default UserRole;
