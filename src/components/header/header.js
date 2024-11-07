import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Description = styled.div`
	font-style: italic;
	font-size: 11px;
`;

const HeaderContainer = ({ className }) => (
	<div className={className}>
		<Logo />
		<Description>
			Веб-технологии <br />
			Написание кода <br />
			Разбор ошибок
		</Description>
		<ControlPanel />
	</div>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	height: 120px;
	padding: 20px 40px;
	position: fixed;
	top: 0;
	width: 80vw;
	box-shadow: 0 0 10px #000;
	background-color: #fff;
`;
