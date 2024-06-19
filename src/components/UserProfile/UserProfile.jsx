import css from "./UserProfile.module.css";

export default function UserProfile({ name, username }) {
	return (
		<div className={css.profile}>
			<p className={css.name}>{name}</p>
			<p className={css.username}>@{username}</p>
		</div>
	);
}
