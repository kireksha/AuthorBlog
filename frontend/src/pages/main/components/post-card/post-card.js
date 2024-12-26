import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<div className="comments-count">
								<Icon cursor="default" id="fa-comment-o" margin="0 7px 0 0" size="18px" />
								{commentsCount}
							</div>
							{publishedAt}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;

	& img {
		display: block;
	}

	& .post-card-footer {
		border-top: 1px solid #000;
        padding: 5px;
	}

	& h4 {
		margin: 0;
	}

	& .post-card-info {
		display: flex;
        justify-content: space-between;
        margin-top: 5px;
	}

	& .published-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
}
