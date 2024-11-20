import { useState } from 'react';
import { Comment } from './components';
import { selectUserId } from '../../../../selectors';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAsync } from '../../../../actions';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 0 0 10px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		margin: 20px 0 0;
		width: 100%;
	}

	& .new-comment textarea {
		width: 550px;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`;
