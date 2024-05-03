import { keyframes, styled } from 'styled-components';

interface AppButtonProps {
	content: string;
	onClick: () => void;
}

export default function MainButton({ content, onClick }: AppButtonProps) {
	return (
		<AppButton role='button' onClick={onClick}>
			{content}
		</AppButton>
	);
}

const glowingButton = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const AppButton = styled.button`
	padding: 0.6rem 2rem;
	border: none;
	outline: none;
	color: ${({ theme }) => theme.button.text};
	background: ${({ theme }) => theme.button.background};
	text-transform: uppercase;
	cursor: pointer;
	position: relative;
	z-index: 0;
	border-radius: 0.8rem;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;

	&:before {
		content: '';
		background: linear-gradient(
			45deg,
			${({ theme }) => theme.primary['100']},
			${({ theme }) => theme.secondary['100']}
		);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		-webkit-filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: ${glowingButton} 6s linear infinite;
		transition: opacity 0.3s ease-in-out;
		border-radius: 0.8rem;
	}

	&:after {
		content: '';
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.button.background};
		left: 0;
		top: 0;
		border-radius: 0.8rem;
	}
	@media screen and (max-width: 768px) {
		padding: 0.6rem 1rem;
	}
`;
