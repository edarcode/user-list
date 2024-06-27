import { z } from "zod";
import { REGEX } from "../constants/regex.js";

export const usernameSchema = z
	.string()
	.min(6, { message: "Min 6 dígitos" })
	.max(10, { message: "Max 10 dígitos" })
	.refine(username => REGEX.onlyLettersAndNums.test(username), {
		message: "Solo letras minúsculas y números"
	})
	.refine(username => !REGEX.startWithNum.test(username), {
		message: "No empieces por números"
	});
