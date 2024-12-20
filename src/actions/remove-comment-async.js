import { setPostData } from './set-post-data';

export const removeCommentAsync = (requestServer, postId, id) => (dispatch) => {
	requestServer('removePostComment', id, postId).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
