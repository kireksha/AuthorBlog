import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				onChange={onChange}
				placeholder="Поиск по заголовкам..."
				value={searchPhrase}
			/>
			<Icon cursor="default" id="fa-search" margin="0" size="22px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	position: relative;
	display: flex;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;

	& > div {
		position: absolute;
		right: 9px;
		top: 3px;
	}

	& > input {
		padding: 10px 32px 10px 10px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
