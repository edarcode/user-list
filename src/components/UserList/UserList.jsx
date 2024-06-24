import { useUsers } from "../../stores/users/userUsers.jsx";
import User from "../User/User.jsx";
import css from "./css.module.css";
const UserList = () => {
	const display = useUsers(users => users.display);

	if (display.length <= 0) return <p>No hay asuarios</p>;

	const usersRendered = display.map(user => <User key={user.id} {...user} />);
	return <section className={css.list}>{usersRendered}</section>;
};

export default UserList;
