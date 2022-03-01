import { pickBy } from "lodash";
export const filterObjEmpty = (obj) => {
	if (Object.prototype.toString.call(obj) !== "[object Object]") return obj;
	return pickBy(obj, (val) => {
		return val !== "" && val !== null && val !== undefined;
	});
};
