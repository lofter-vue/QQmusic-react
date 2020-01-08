import { SAVEUSERINFO ,SAVEDISHINFO} from '../action_type.js';

export const saveUserInfo = value => ({ type: SAVEUSERINFO, data: value })
export const saveDishInfo = value => ({ type: SAVEDISHINFO, data: value })
