import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledFooterDescriptionLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weaterDescription, setWeatherDescription] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Saransk&lang=ru&units=metric&appid=0e0e24e93d011ec6b7898510fba82756',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeatherDescription(weather[0].description);
			});
	}, []);
	return (
		<footer className={className}>
			<StyledFooterDescriptionLeft>
				<span>Блог веб-разработчика</span>
				<span>web@developer.ru</span>
			</StyledFooterDescriptionLeft>
			<div>
				<div>
					{city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градус(-ов), {weaterDescription}
				</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: #fff;
	box-shadow: rgb(0, 0, 0) 0px 2px 17px;
`;
