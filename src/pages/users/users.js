import { PrivateContent, H2 } from '../../components';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { checkAccess } from '../../utils';
import { ROLE } from '../../constants';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectUserRole);

	const requestServer = useServerRequest();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<table>
					<tbody>
						<TableRow>
							<th className="login-column">Логин</th>
							<th className="registeredAt-column">Дата регистрации</th>
							<th className="role-column">Роль</th>
						</TableRow>
						{users.map(({ id, login, registeredAt, roleId }) => (
							<UserRow
								key={id}
								id={id}
								login={login}
								registeredAt={registeredAt}
								roleId={roleId}
								roles={roles.filter(({ id: roleId }) => Number(roleId) !== ROLE.GUEST)}
								onUserRemove={() => onUserRemove(id)}
							/>
						))}
					</tbody>
				</table>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;
`;
