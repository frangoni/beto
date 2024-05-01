import { css, styled } from 'styled-components';

export const HeroLayout = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	gap: 2rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding-top: 15rem;
	}
`;

const ProfessionStyle = css`
	font-size: 4rem;
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
	flex-grow: 1;

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
		}
	}
	.typed-cursor {
		${ProfessionStyle}
	}

	@media screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
		width: 100%;
	}
`;

export const HeroCardWrapper = styled.div`
	position: relative;
	flex-shrink: 1;
`;
