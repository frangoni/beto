import styled from 'styled-components';
import { CardStyle } from '../../shared/styles';

export const MainWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 4rem;

	@media screen and (max-width: 768px) {
		gap: 2rem;
		h1 {
			text-align: center;
		}
	}
`;

export const CardsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div:nth-child(odd) {
		border: 0.4rem solid ${({ theme }) => theme.primary['20']};
	}
	& > div:nth-child(even) {
		border: 0.4rem solid ${({ theme }) => theme.secondary['20']};
	}
`;

export const Card = styled.div<{ $top: string; $marginbottom: string }>`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 1rem;
	position: sticky;
	position: -webkit-sticky;
	top: ${({ $top }) => $top};
	margin-bottom: ${({ $marginbottom }) => $marginbottom};
	overflow: hidden;
	${CardStyle}
	width: 75%;
	padding: 3rem 2rem;

	img {
		position: absolute;
		top: 0rem;
		right: 0rem;
		height: 4rem;
	}

	svg {
		height: 3rem;
		color: ${({ theme }) => theme.text};
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 3rem 1rem 2rem;

		img {
			height: 3rem;
		}
	}
`;

export const CardGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
