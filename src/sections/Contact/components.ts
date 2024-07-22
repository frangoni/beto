import { keyframes, styled } from 'styled-components';

const DESKTOP_BORDER_RADIUS = '12rem';
const MOBILE_BORDER_RADIUS = '8rem';

export const BorderWrapper = styled.div`
	background-color: ${({ theme }) => theme.secondaryBackground};
	padding: 4px;
	border-radius: ${DESKTOP_BORDER_RADIUS};
	position: relative;
	overflow: hidden;
	width: 75%;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 100%;
		border-radius: ${MOBILE_BORDER_RADIUS};
	}
`;

const MoveBG = keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
`;
export const CTAContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	padding: 4rem 2rem;
	align-items: center;
	height: 100%;
	border-radius: calc(${DESKTOP_BORDER_RADIUS} - 4px);
	background-color: ${({ theme }) => theme.mainBackground};
	z-index: 2;
	position: relative;
	background-image: url('/svgs/noise.svg');
	animation: ${MoveBG} 5s linear infinite;

	.cta-logo {
		width: 4rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		padding: 4rem 1rem;
		border-radius: calc(${MOBILE_BORDER_RADIUS} - 4px);
		background-size: 50%;
	}
`;

export const Glow = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 90%;
	height: 90%;
	transform: translate(-50%, -50%);
	filter: blur(6rem);
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.primary['100']} 10%,
		${({ theme }) => theme.secondary['100']} 100%
	);

	z-index: 1;
`;
