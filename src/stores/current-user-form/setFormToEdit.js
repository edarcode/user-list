import { USERFORM_TYPES } from "../../constants/userformTypes.js";

export const setFormToEdit = ({ set, user }) => {
	set({ name: USERFORM_TYPES.edit, payload: user });
};
