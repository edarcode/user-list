import { useState } from "react";
import { useGetUsers } from "../../hooks/useGetUsers.jsx";
import { useUsers } from "../../stores/users/useUsers.jsx";
import { addAllClassName } from "../../utils/addAllClassName.js";
import User from "../User/User.jsx";
import Grid from "../icons/Grid.jsx";
import Lines from "../icons/Lines.jsx";
import css from "./css.module.css";
const UserList = () => {
	useGetUsers();
	const [isGrid, setIsGrid] = useState(false);
	const loading = useUsers(users => users.loading);
	const err = useUsers(users => users.err);
	const allUsers = useUsers(users => users.allUsers);

	if (loading) return <p>Cargando usuarios...</p>;
	if (err) return <p className={css.err}>Err al cargar usuarios 😢</p>;
	if (allUsers.length <= 0) return <p>No hay usuarios</p>;

	const finalClassName = addAllClassName([
		css.list,
		isGrid && css.listUserGrid
	]);
	const finalClassNameGrid = addAllClassName([
		css.grid,
		isGrid && css.gridActive
	]);

	const finalClassNameLines = addAllClassName([
		css.lines,
		!isGrid && css.linesActive
	]);

	const users = allUsers.map(user => (
		<User key={user.id} isUserGrid={isGrid} {...user} />
	));

	return (
		<section className={finalClassName}>
			<div className={css.viewMode}>
				<Grid className={finalClassNameGrid} onClick={() => setIsGrid(true)} />
				<Lines
					className={finalClassNameLines}
					onClick={() => setIsGrid(false)}
				/>
			</div>
			{users}
		</section>
	);
};

export default UserList;
