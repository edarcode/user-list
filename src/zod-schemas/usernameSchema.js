import { z } from "zod";

export const usernameSchema = z
	.string()
	.min(6, { message: "Min 6 dígitos" })
	.max(10, { message: "Max 10 dígitos" });
