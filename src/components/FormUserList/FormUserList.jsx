import css from "./FormUserList.module.css";

export default function FormUserList({ formUserList, setFormUserList }) {
	const { userToSearch, isCheckedActive, sortBy } = formUserList;
	return (
		<form className={css.form}>
			<input
				value={userToSearch}
				onChange={e =>
					setFormUserList({ ...formUserList, userToSearch: e.target.value })
				}
			/>
			<label className={css.active}>
				<input
					type="checkbox"
					checked={isCheckedActive}
					onChange={e =>
						setFormUserList({
							...formUserList,
							isCheckedActive: e.target.checked
						})
					}
				/>
				activos
			</label>
			<select
				className={css.order}
				value={sortBy}
				onChange={e =>
					setFormUserList({ ...formUserList, sortBy: e.target.value })
				}
			>
				<option value="0">defecto</option>
				<option value="1">nombre</option>
			</select>
		</form>
	);
}
