import { useState } from "react";
import { FORM_TYPES } from "../constants/formTypes.js";

export const useCurrentForm = () => {
	const [currentForm, setCurrentForm] = useState(FORM_TYPES.filter);

	const setFilterForm = () => setCurrentForm(FORM_TYPES.filter);
	const setCreateForm = () => setCurrentForm(FORM_TYPES.create);
	const setEditForm = () => setCurrentForm(FORM_TYPES.edit);
	const setDeleteForm = () => setCurrentForm(FORM_TYPES.delete);

	return {
		currentForm,
		setFilterForm,
		setCreateForm,
		setEditForm,
		setDeleteForm
	};
};
