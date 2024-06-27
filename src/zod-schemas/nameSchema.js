import { z } from "zod";
import { REGEX } from "../constants/regex.js";

export const nameSchema = z
	.string()
	.min(1, { message: "Min 1 dígito" })
	.max(30, { message: "Max 30 dígitos" })
	.refine(name => REGEX.onlyLetters.test(name), {
		message: "Solo letras"
	})
	.refine(name => !name.startsWith(" "), { message: "No inicie con espacio" })
	.refine(name => !name.includes("  "), { message: "Max 1 espacio" });
