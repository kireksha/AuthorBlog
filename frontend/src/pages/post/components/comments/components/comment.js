import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../actions';
import { Icon } from '../../../../../components';
import { selectUserRole } from '../../../../../selectors';
import { ROLE } from '../../../../../constants';

const CommentContainer = ({ className, id, author, publishedAt, content, postId }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="18px" cursor="default" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" size="18px" cursor="default" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={() => onCommentRemove(id)} />
			)}
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

Comment.propTypes = {
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	postId: PropTypes.string.isRequired,
};
