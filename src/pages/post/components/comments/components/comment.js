import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../actions';
import { Icon } from '../../../../../components';
import { useServerRequest } from '../../../../../hooks';

const CommentContainer = ({ className, id, author, publishedAt, content, postId }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="18px" onClick={() => {}} />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" size="18px" onClick={() => {}} />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={() => onCommentRemove(id)} />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin: 10px 0 0;
	width: 100%;

	& .comment {
		padding: 5px 10px;
		width: 550px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
