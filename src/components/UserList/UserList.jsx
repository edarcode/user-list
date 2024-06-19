import User from "../User/User.jsx";
import css from "./css.module.css";
const UserList = ({ users }) => {
	if (users.length <= 0) return <p>No hay asuarios</p>;

	const usersRendered = users.map(user => <User key={user.id} {...user} />);
	return <section className={css.list}>{usersRendered}</section>;
};

export default UserList;
