export const addAllClassName = arrClassName => {
	const allClassName = arrClassName.filter(Boolean).join(" ");
	if (!allClassName) return null;
	return allClassName;
};
