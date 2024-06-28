import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { USERFORM_TYPES } from "../../constants/userformTypes.js";

const initialCurrentUserForm = {
	name: USERFORM_TYPES.filter,
	payload: {}
};

export const useCurrentUserForm = create(
	devtools(
		set => ({
			...initialCurrentUserForm,

			setFormToCreate: () => set({ name: USERFORM_TYPES.create }),
			setFormToFilter: () => set({ name: USERFORM_TYPES.filter })
		}),
		{ name: "useCurrentUserForm" }
	)
);
