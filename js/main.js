import {makeIntroTemplate} from './modules/templates/intro.js';
import {centralContainer} from "./modules/module-constructor";
import {insertIntoContainer} from "./modules/module-constructor";
export const introTemplate = makeIntroTemplate();
insertIntoContainer(introTemplate, centralContainer);
