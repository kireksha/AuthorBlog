import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = ({ className, id, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	margin: ${({ margin = '0' }) => margin};
	font-size: ${({ size = '20px' }) => size};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};

	&:hover {
		cursor: ${({ cursor = 'pointer' }) => cursor};
	}
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
};
