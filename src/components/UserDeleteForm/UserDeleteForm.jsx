import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { BTN_KIND } from "../../constants/btnKind.js";
import { deleteUser } from "../../fetch/deleteUser.js";
import { useSubmitUser } from "../../hooks/useSubmitUser.jsx";
import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import Btn from "../buttons/Btn/Btn.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import Cross from "../icons/Cross.jsx";
import css from "./css.module.css";

export default function UserDeleteForm({ user }) {
	const setFormToFilter = useCurrentUserForm(state => state.setFormToFilter);

	const { submitUser, setSubmitUser } = useSubmitUser(deleteUser);

	const handleSubmit = async e => {
		e.preventDefault();
		if (submitUser.loading) return;

		setSubmitUser({ loading: true, err: "", userId: user.id });
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<BtnIcon
				className={css.cross}
				type="button"
				icon={Cross}
				kind={BTN__ICON_KIND.fillBlack}
				onClick={setFormToFilter}
			/>

			<p className={css.quote}>
				¿Estás seguro de que quieres eliminar al usuario {user.name}?
			</p>
			<Btn kind={BTN_KIND.white} onClick={setFormToFilter}>
				Calcelar
			</Btn>
			<Btn className={css.btnDelete} disabled={submitUser.loading}>
				{submitUser.loading ? "eliminando..." : "eliminar usuario"}
			</Btn>
			{submitUser.err && <p className={css.submitErr}>{submitUser.err}</p>}
		</form>
	);
}
