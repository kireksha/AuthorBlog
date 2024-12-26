import { ACTION_TYPES } from './action-types';

export const removeComment = (commentId) => ({
	type: ACTION_TYPES.REMOVE_COMMENT,
	payload: commentId,
});
