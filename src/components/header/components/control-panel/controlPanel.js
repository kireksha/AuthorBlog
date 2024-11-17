import { Link, useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../selectors';
import { logout } from '../../../../actions';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-right: 10px;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon id="fa-sign-out" margin="0" onClick={() => dispatch(logout(session))} />
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon id="fa-backward" margin="0 20px 0 0" onClick={() => navigate(-1)} />
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
