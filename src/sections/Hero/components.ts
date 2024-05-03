import { css, styled } from 'styled-components';

export const HeroLayout = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
	gap: 2rem;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		padding-top: 6rem;
		height: 100vh;
	}
`;

const ProfessionStyle = css`
	font-size: 3rem;
	font-family: 'Grandstander';
	font-weight: 900;
	@media screen and (max-width: 768px) {
		font-size: 3rem;
	}
`;

export const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

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
	}
`;

export const HeroCardWrapper = styled.div`
	position: relative;
	width: 50%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
