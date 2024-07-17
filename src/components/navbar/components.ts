import { css, keyframes, styled } from 'styled-components';
import { CardStyle } from '../../shared/styles';

export const Nav = styled.nav`
	position: fixed;
	width: 100vw;
	z-index: 100;
`;

const drawStroke = keyframes`
	to {
		stroke-dashoffset: 0;
	}
`;

export const IconStyle = css`
	color: ${({ theme }) => theme.text};
	width: 2.5rem;
	height: 2.5rem;
	transition: all 0.3s ease-in-out;
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;

	transition: all 0.3s ease-in-out;

	@media screen and (max-width: 768px) {
		padding: 0.5rem 1rem;

		button {
			display: none;
		}
	}

	&.scrolled {
		${CardStyle}
		margin-top: 1rem;
	}

	.icons-wrapper {
		display: flex;
		gap: 2rem;
		@media screen and (max-width: 768px) {
			gap: 1rem;
		}

		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	.nav-icon {
		text-decoration: none;
		padding: 0.5rem;
		cursor: pointer;

		svg {
			${IconStyle}
			path,circle {
				stroke-dasharray: 1000;
				stroke-dashoffset: 1000;
				animation: ${drawStroke} 1s forwards;
			}

			&:hover {
				transform: scale(1.1);
				filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.primary['100']});
			}
		}
		&.mobile {
			display: none;
			@media screen and (max-width: 768px) {
				display: block;
			}
		}
	}

	.beto-logo {
		width: 3rem;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		&:hover {
			transform: scale(1.1);
			rotate: -30deg;
			filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.primary['100']});
		}

		@media screen and (max-width: 768px) {
			width: 2rem;
		}
	}
`;

export const Drawer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 0;
	height: 100vh;
	transition: width 0.3s;
	background-color: ${({ theme }) => theme.secondaryBackground};
	z-index: 100;

	&.open {
		width: 100vw;
	}

	.close-icon {
		position: absolute;
		right: -20rem;
		top: 0;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&.open {
			top: 2rem;
			right: 2rem;
		}

		svg {
			width: 2.5rem;
			height: 2.5rem;
			color: ${({ theme }) => theme.text};
		}
	}
`;

export const MobileNav = styled.nav`
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	gap: 2rem;
	min-width: 15rem;

	a {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 1rem 0;
		cursor: pointer;
		color: ${({ theme }) => theme.text};
		font-size: 1.5rem;

		svg {
			width: 2.5rem;
			height: 2.5rem;
		}

		&:hover {
			color: ${({ theme }) => theme.primary['100']};
		}
	}
`;
