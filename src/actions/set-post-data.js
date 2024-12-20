import { ACTION_TYPES } from './action-types';

export const setPostData = (postData) => ({
	type: ACTION_TYPES.SET_POST_DATA,
	payload: postData,
});
