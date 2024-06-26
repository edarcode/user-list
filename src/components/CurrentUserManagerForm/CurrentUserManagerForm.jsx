import { FORM_TYPES } from "../../constants/formTypes.js";
import { useCurrentForm } from "../../hooks/useCurrentForm.jsx";
import UserCreationForm from "../UserCreationForm/UserCreationForm.jsx";
import UserListFilterForm from "../UserListFilterForm/UserListFilterForm.jsx";

export default function CurrentUserManagerForm() {
	const { currentForm, setCreateForm, setFilterForm } = useCurrentForm();

	if (currentForm === FORM_TYPES.filter)
		return <UserListFilterForm setCreateForm={setCreateForm} />;
	if (currentForm === FORM_TYPES.create)
		return <UserCreationForm setFilterForm={setFilterForm} />;

	return null;
}
