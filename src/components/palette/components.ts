import { styled } from 'styled-components';
import { IconStyle } from '../navbar/components';

export const FloatingIcon = styled.div`
	position: fixed;
	z-index: 100;
	border-radius: 1rem;
	background: ${({ theme }) => theme.secondaryBackground};
	bottom: 2rem;
	left: 2rem;
	cursor: pointer;
	padding: 0.75rem;
	border: 1px solid ${({ theme }) => theme.card.border};

	svg {
		${IconStyle}
	}

	&.active {
		transform: translateY(-10%);

		svg {
			transform: rotate(30deg);
		}
	}
	transition: all 0.3s;

	@media screen and (max-width: 768px) {
		bottom: 0.5rem;
		left: 0.5rem;
		padding: 0.5rem;
		svg {
			width: 2rem;
			height: 2rem;
		}
	}
`;

export const PaletteIcon = styled.div<{ $index: number }>`
	position: fixed;
	left: 3.1rem;
	bottom: ${({ $index }) => `calc(8rem + ${$index} * 2.5rem)`};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	overflow: hidden;
	width: 2rem;
	height: 2rem;
	background: ${({ theme }) => theme.secondaryBackground};
	border: 2px solid ${({ theme }) => theme.card.border};
	z-index: 100;
	transition: scale 0.3s;

	&:hover {
		scale: 1.1 !important;
	}

	@media screen and (max-width: 768px) {
		left: 1.1rem;
		bottom: ${({ $index }) => `calc(5rem + ${$index} * 2.5rem)`};
	}
`;

export const ColorIcon = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
