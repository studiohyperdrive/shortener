import { validate } from "./validate";

import { targetValidator } from "./targetValidator";
import { urlValidator } from "./urlValidator";
import { lengthValidator } from "./lengthValidator";
import { alphabetValidator } from "./alphabetValidator";

export {
	targetValidator as target,
	urlValidator as url,
	lengthValidator as length,
	alphabetValidator as alphabet,
};

export default validate;
