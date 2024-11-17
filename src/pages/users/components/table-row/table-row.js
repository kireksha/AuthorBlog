import styled from 'styled-components';

const TableRowContainer = ({ children, className }) => (
	<tr className={className}>{children}</tr>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;

	border: ${({ border }) => (border ? '1px solid #000' : 'none')};

	& > th,
	& > td {
		display: flex;
		padding: 0 10px;
	}

	& .login-column {
		width: 172px;
	}

	& .registeredAt-column {
		width: 213px;
	}

	& .role-column {
		width: 185px;
	}
`;
