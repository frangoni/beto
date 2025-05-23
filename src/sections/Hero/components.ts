import { css, styled } from 'styled-components';

export const HeroLayout = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	min-height: 100dvh;
	padding-top: 8rem;
	gap: 2rem;

	@media screen and (max-width: 768px) {
		padding-top: 6rem;
		gap: 0;
		flex-flow: column-reverse nowrap;
		max-height: 100dvh;
	}
`;

const ProfessionStyle = css`
	font-size: 3rem;
	font-family: 'Grandstander';
	font-weight: 900;
	line-height: 1.2;
	@media screen and (max-width: 768px) {
		font-size: 3rem;
	}
`;

export const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 2;
	width: 50%;

	span {
		${ProfessionStyle};
		font-size: 4rem;
	}

	.typed {
		display: flex;
		p {
			${ProfessionStyle};
			background: linear-gradient(
				-135deg,
				${({ theme }) => theme.primary['100']} 10%,
				${({ theme }) => theme.secondary['100']} 100%
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			white-space: pre;

			@media screen and (max-width: 768px) {
				white-space: break-spaces;
				min-height: 10rem;
			}
		}
	}
	.typed-cursor {
		${ProfessionStyle}
	}

	@media screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
		width: 100%;
		flex-grow: 1;
		margin-top: 0;
	}
`;

export const HeroCardWrapper = styled.div`
	position: relative;
	max-width: 30rem;

	@media screen and (max-width: 768px) {
		width: 90%;
		max-width: 25rem;
	}
`;
