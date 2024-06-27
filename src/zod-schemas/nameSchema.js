import { z } from "zod";

export const nameSchema = z
	.string()
	.min(1, { message: "Min 1 dígito" })
	.max(30, { message: "Max 30 dígitos" });
