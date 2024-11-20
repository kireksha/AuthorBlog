import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="publishedAt">
				<Icon size="18px" id="fa-calendar-o" margin="0 7px 0 0" onClick={() => {}} />
				{publishedAt}
			</div>
			<div className="buttons">
                {editButton}
				<Icon size="25px" id="fa-trash-o" margin="0" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: ${({ margin }) => margin}
	font-size: 18px;

    & .buttons {
		display: flex;
		align-items: center;
	}

    & i {
		position: relative;
		top: -1px;
	}

	& .publishedAt {
		display: flex;
		align-items: center;
	}
`;
