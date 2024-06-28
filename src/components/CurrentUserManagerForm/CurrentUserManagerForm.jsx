import { USERFORM_TYPES } from "../../constants/userformTypes.js";
import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import UserCreationForm from "../UserCreationForm/UserCreationForm.jsx";
import UserEditForm from "../UserEditForm/UserEditForm.jsx";

import UserListFilterForm from "../UserListFilterForm/UserListFilterForm.jsx";

export default function CurrentUserManagerForm() {
	const nameCurrentForm = useCurrentUserForm(state => state.name);

	const FINAL_RENDER = {
		[USERFORM_TYPES.filter]: <UserListFilterForm />,
		[USERFORM_TYPES.create]: <UserCreationForm />,
		[USERFORM_TYPES.edit]: <UserEditForm />,
		default: null
	};

	return FINAL_RENDER[nameCurrentForm];
}
