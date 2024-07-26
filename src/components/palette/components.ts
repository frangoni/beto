import { styled } from 'styled-components';
import { IconStyle } from '../navbar/components';

export const FloatingIcon = styled.div`
	position: fixed;
	z-index: 101;
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

export const ColouredIcon = styled.div<{ $index: number }>`
	position: fixed;
	left: 3rem;
	bottom: ${({ $index }) => `calc(8rem + ${$index} * 2.5rem)`};
	cursor: pointer;
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	z-index: 101;
	transition: scale 0.3s;
	overflow: hidden;
	&:hover {
		scale: 1.1 !important;
	}

	@media screen and (max-width: 768px) {
		left: 1.1rem;
		bottom: ${({ $index }) => `calc(5rem + ${$index} * 2.5rem)`};
	}
`;

export const Tooltip = styled.div<{ $index: number }>`
	position: fixed;
	left: 4rem;
	bottom: ${({ $index }) => `calc(8rem + ${$index} * 2.5rem)`};
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.secondaryBackground};
	padding: 0rem 0.5rem;
	height: 2rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.card.border};
	color: ${({ theme }) => theme.text};
	transition: all 0.5s ease-in-out;
	z-index: 100;
	transform: rotateY(-90deg);
	transform-origin: left;

	@media screen and (max-width: 768px) {
		bottom: ${({ $index }) => `calc(5rem + ${$index} * 2.5rem)`};
		left: 1rem;
	}
`;

export const IconWrapper = styled.div`
	position: relative;
	transition: all 0.5s ease-in-out;

	&:hover {
		${Tooltip} {
			opacity: 1;
			transform: rotateY(0deg);
			left: 6rem;

			@media screen and (max-width: 768px) {
				left: 4rem;
			}
		}
	}
`;
