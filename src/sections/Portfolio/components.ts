import { styled } from 'styled-components';

export const AccordionWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 4rem;
	margin-top: 2rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ImageAccordionBg = styled.div`
	position: absolute;
	inset: -1rem;
	z-index: 1;
	background-size: contain;
	background-position: center;
	filter: blur(04x);
	transition: 0.3s;
	border-radius: 1rem;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgb(0 0 0 / 50%);
	}
`;

export const ImageAccordionWrapper = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	gap: 1rem;
	cursor: pointer;
	width: 100%;
`;

export const ImageAccordionItem = styled.div`
	position: relative;
	overflow: hidden;
	width: 10%;
	height: 500px;
	border-radius: 2rem;
	display: flex;
	align-items: flex-end;
	opacity: 0.4;
	transition: 0.5s;
	border: 0.2rem solid ${({ theme }) => theme.card.border};

	&:hover {
		opacity: 0.8;
	}

	&.active {
		width: 100%;
		opacity: 1;

		.content {
			opacity: 1;
			visibility: visible;
		}

		.thumbnail {
			bottom: 50%;
		}
	}

	.content {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 1;
		opacity: 0;
		visibility: hidden;
		padding: 1rem;
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		gap: 1rem;
		background: linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 80%));
		transition: 0.25s;

		.stack {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
		}
	}

	.bg {
		position: absolute;
		z-index: 0;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		height: 100%;
		filter: grayscale(0.3);
	}

	.thumbnail {
		position: absolute;
		z-index: 1;
		bottom: 5%;
		left: 50%;
		translate: -50% -50%;
		width: 90%;
		max-width: 5rem;
		transition: 0.5s;
	}
`;

export const StackLogo = styled.a<{ dropShadow: string }>`
	&:hover {
		filter: drop-shadow(0 0 0.5rem ${({ dropShadow }) => dropShadow});
	}
	img {
		height: 2rem;
	}

	@media screen and (max-width: 768px) {
		img {
			height: 1.5rem;
		}
	}
`;
