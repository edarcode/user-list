import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import Cross from "../icons/Cross.jsx";

export default function UserCreationForm({ setFilterForm }) {
	return (
		<form>
			<p>Crear usuario</p>
			<BtnIcon
				type="button"
				icon={Cross}
				kind={BTN__ICON_KIND.fillBlack}
				onClick={setFilterForm}
			/>
		</form>
	);
}
