import { useUsers } from "../../stores/users/useUsers.jsx";
import User from "../User/User.jsx";
import css from "./css.module.css";
const UserList = () => {
	const allUsers = useUsers(users => users.allUsers);

	if (allUsers.length <= 0) return <p>No hay asuarios</p>;

	const usersRendered = allUsers.map(user => <User key={user.id} {...user} />);
	return <section className={css.list}>{usersRendered}</section>;
};

export default UserList;
