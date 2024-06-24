import { processingUsersToDisplay } from "../../utils/processingUsersToDisplay.js";

export const getUsersToDisplay = state => {
	const { processedUsers, totalPages } = processingUsersToDisplay(state);
	return { display: processedUsers, totalPages };
};
