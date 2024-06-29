import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { USERFORM_TYPES } from "../../constants/userformTypes.js";
import { setFormToEdit } from "./setFormToEdit.js";
import { setFormatToDelete } from "./setFormatToDelete.js";

const initialCurrentUserForm = {
	name: USERFORM_TYPES.filter,
	payload: null
};

export const useCurrentUserForm = create(
	devtools(
		set => ({
			...initialCurrentUserForm,

			setFormToCreate: () => set({ name: USERFORM_TYPES.create }),
			setFormToFilter: () => set({ name: USERFORM_TYPES.filter }),
			setFormToEdit: user => setFormToEdit({ set, user }),
			setFormToDelete: user => setFormatToDelete({ set, user })
		}),
		{ name: "useCurrentUserForm" }
	)
);
