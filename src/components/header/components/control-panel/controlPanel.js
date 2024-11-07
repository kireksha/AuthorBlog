import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	width: 100px;
	height: 32px;
	margin: 0 0 5px;
	padding: 2px;
	border: 1px solid #000;
	text-align: center;
	background-color: #eee;
`;

const StyledDivAsButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyledDivAsButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="0 20px 0 0" />
				</StyledDivAsButton>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="0 20px 0 0" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
