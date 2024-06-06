import css from "./FormUserList.module.css";

export default function FormUserList({
	userToSearch,
	isCheckedActive,
	sortBy,
	setUserToSearch,
	setIsCheckedActive,
	setSortBy
}) {
	return (
		<form className={css.form}>
			<input
				value={userToSearch}
				onChange={e => setUserToSearch(e.target.value)}
			/>
			<label className={css.active}>
				<input
					type="checkbox"
					checked={isCheckedActive}
					onChange={e => setIsCheckedActive(e.target.checked)}
				/>
				activos
			</label>
			<select
				className={css.order}
				value={sortBy}
				onChange={e => setSortBy(e.target.value)}
			>
				<option value="0">defecto</option>
				<option value="1">nombre</option>
			</select>
		</form>
	);
}
