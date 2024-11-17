import { TableRow } from '../table-row/table-row';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';

const Icon = styled.i`
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	margin: 0 0 0 10px;
	font-size: 20px;
	&:hover {
		cursor: pointer;
	}
`;

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onUserRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<>
			<TableRow className={className} border={true}>
				<td className="login-column">{login}</td>
				<td className="registeredAt-column">{registeredAt}</td>
				<td className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						className="fa fa-floppy-o"
						disabled={isSaveButtonDisabled}
						onClick={() => onUserRoleSave(id, selectedRoleId)}
					/>
				</td>
				<td className="trash-icon">
					<Icon className="fa fa-trash-o" onClick={onUserRemove} />
				</td>
			</TableRow>
		</>
	);
};

export const UserRow = styled(UserRowContainer)`
	margin-top: 10px;
	padding-right: 10px;
	position: relative;

	& .trash-icon {
		position: absolute;
		right: -35px;
	}

	& select {
		font-size: 16px;
		padding: 0 5px;
	}
`;
