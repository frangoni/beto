import { css, keyframes, styled } from 'styled-components';

export default function Background() {
	return (
		<div>
			{' '}
			<Blob1 />
			<Blob2 />
		</div>
	);
}
const BlobStyle = css`
	position: fixed;
	width: 40rem;
	height: 40rem;
	filter: blur(2rem);
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.primary['40']} 10%,
		${({ theme }) => theme.secondary['40']} 100%
	);
	z-index: 0;

	@media screen and (max-width: 768px) {
		width: 20rem;
		height: 20rem;
	}
`;

const BlobAnimation1 = keyframes`
	0% {
		transform: translate(0%, 0%) rotate(0deg);
	}
	100% {
		transform: translate(50%, 50%) rotate(270deg);
	}
`;

const BlobAnimation2 = keyframes`
	0% {
		transform: translate(0%, 0%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-270deg);
	}
`;

const Blob1 = styled.div`
	${BlobStyle}
	top: 0%;
	left: 0%;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	animation: ${BlobAnimation1} 15s infinite alternate;
`;

const Blob2 = styled.div`
	${BlobStyle}
	bottom: 0%;
	right: 0%;
	border-radius: 50% 30% 60% 30% / 50% 40% 70% 50%;
	animation: ${BlobAnimation2} 20s infinite alternate;
`;
