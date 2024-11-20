import { H2 } from '../../../../components';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="publishedAt">
					<Icon size="18px" id="fa-calendar-o" margin="0 7px 0 0" onClick={() => {}} />
				{publishedAt}
				</div>
				<div className="buttons">
					<Icon size="24px" id="fa-pencil-square-o" margin="0 10px 0 0" onClick={() => {}} />
					<Icon size="25px" id="fa-trash-o" margin="0" onClick={() => {}} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}

	& .publishedAt {
		display: flex;
		align-items: center;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
		align-items: center;
	}

	& .post-text {
		font-size: 18px;
	}
`;
