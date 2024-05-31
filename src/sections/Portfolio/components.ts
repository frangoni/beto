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
		padding: 1rem;
		height: 60vh;
	}
`;

export const ImageAccordionBg = styled.div`
	position: absolute;
	inset: -1rem;
	z-index: 1;
	background-size: contain;
	background-position: center;
	filter: blur(0.5rem);
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
	gap: 0.25rem;
	cursor: pointer;
	width: 100%;

	@media screen and (max-width: 768px) {
		gap: 0rem;
		flex-direction: column;
		height: 100%;
	}
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

	h4 {
		display: none;
		@media screen and (max-width: 768px) {
			margin-left: 1rem;
			display: block;
		}
	}

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
		align-items: flex-start;
		gap: 1rem;
		background: linear-gradient(to bottom, rgb(0 0 0 / 2.5%), rgb(0 0 0 / 80%));
		transition: 0.25s;

		.stack {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
		}
		.url {
			transition: 0.25s;
		}
		.url:hover {
			transform: translateX(0.5rem);
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

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 10%;

		&.active {
			height: 100%;
			.content {
				opacity: 1;
				visibility: visible;
			}

			.thumbnail {
				bottom: 50%;
			}
		}
	}
`;

export const StackLogo = styled.a<{ dropshadow: string }>`
	&:hover {
		filter: drop-shadow(0 0 0.5rem ${({ dropshadow }) => dropshadow});
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
