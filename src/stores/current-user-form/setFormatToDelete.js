import { USERFORM_TYPES } from "../../constants/userformTypes.js";

export const setFormatToDelete = ({ set, user }) => {
	set({
		name: USERFORM_TYPES.delete,
		payload: { id: user.id, name: user.name }
	});
};
