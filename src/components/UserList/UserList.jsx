import { useState } from "react";
import { useUsers } from "../../stores/users/useUsers.jsx";
import { addAllClassName } from "../../utils/addAllClassName.js";
import User from "../User/User.jsx";
import Grid from "../icons/Grid.jsx";
import Lines from "../icons/Lines.jsx";
import css from "./css.module.css";
const UserList = () => {
	const allUsers = useUsers(users => users.allUsers);
	const loading = useUsers(users => users.loading);
	const err = useUsers(users => users.err);
	const [isUserGrid, setIsUserGrid] = useState(false);

	if (loading) return <p>Cargando usuarios...</p>;
	if (err) return <p className={css.err}>Err al cargar usuarios 😢</p>;
	if (allUsers.length <= 0) return <p>No hay usuarios</p>;

	const users = allUsers.map(user => (
		<User key={user.id} isUserGrid={isUserGrid} {...user} />
	));

	const finalClassName = addAllClassName([
		css.list,
		isUserGrid && css.listUserGrid
	]);
	const finalClassNameGrid = addAllClassName([
		css.grid,
		isUserGrid && css.gridActive
	]);

	const finalClassNameLines = addAllClassName([
		css.lines,
		!isUserGrid && css.linesActive
	]);

	return (
		<section className={finalClassName}>
			<div className={css.viewMode}>
				<Grid
					className={finalClassNameGrid}
					onClick={() => setIsUserGrid(true)}
				/>
				<Lines
					className={finalClassNameLines}
					onClick={() => setIsUserGrid(false)}
				/>
			</div>
			{users}
		</section>
	);
};

export default UserList;
