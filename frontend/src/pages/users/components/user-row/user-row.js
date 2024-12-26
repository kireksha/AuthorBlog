import PropTypes from 'prop-types';
import { TableRow } from '../table-row/table-row';
import { useState } from 'react';
import styled from 'styled-components';
import { PROP_TYPE } from '../../../../constants';
import { request } from '../../../../utils';

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

	const onRoleChange = ({ target }) => {
		console.log('target', typeof target.value);
		setSelectedRoleId(target.value);
	};

	const onUserRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
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
	padding-right: 30px;
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

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
