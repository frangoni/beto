import { keyframes, styled } from 'styled-components';
import logo from '/svgs/beto.svg';
import Portfolio from './icons/portfolio';
import Work from './icons/work';
import Education from './icons/education';
import { ContainerLarge, PaddingGlobal } from '../../layout/Section';
import Button from '../buttons/MainButton';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => (window.scrollY > 100 ? setHasScrolled(true) : setHasScrolled(false));
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const cls = hasScrolled ? 'scrolled' : '';
	return (
		<Nav>
			<PaddingGlobal>
				<ContainerLarge>
					<NavContainer className={cls}>
						<a href='#root'>
							<img className='beto-logo' src={logo} alt='Beto dev' />
						</a>
						<div className='icons-wrapper'>
							<a href='#work'>
								<Work />
							</a>
							<a href='#portfolio'>
								<Portfolio />
							</a>
							<a href='#education'>
								<Education />
							</a>
						</div>
						<Button
							content='Contact me'
							onClick={() => {
								console.log('pressed');
							}}
						/>
					</NavContainer>
				</ContainerLarge>
			</PaddingGlobal>
		</Nav>
	);
}

const Nav = styled.nav`
	position: fixed;
	width: 100vw;
	z-index: 100;

	@media screen and (max-width: 768px) {
	}
`;

export const drawStroke = keyframes`
	to {
		stroke-dashoffset: 0;
	}
`;

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4rem 2rem;
	height: 5rem;
	transition: all 0.3s ease-in-out;

	@media screen and (max-width: 768px) {
		padding: 2rem 1rem;
	}

	&.scrolled {
		background: rgba(111, 111, 111, 0.3);
		box-shadow: 0 8px 32px 0 ${({ theme }) => theme.primary['20']};
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-radius: 0.8rem;
		border: 1px solid rgba(255, 255, 255, 0.18);
		margin-top: 1rem;
	}

	.icons-wrapper {
		display: flex;
		gap: 2rem;
		@media screen and (max-width: 768px) {
			gap: 1rem;
		}

		a {
			text-decoration: none;
			padding: 0.5rem;
		}
		svg {
			color: ${({ theme }) => theme.text};
			width: 2.5rem;
			height: 2.5rem;
			transition: all 0.3s ease-in-out;
			path {
				stroke-dasharray: 1000;
				stroke-dashoffset: 1000;
				animation: ${drawStroke} 1s forwards;
			}

			&:hover {
				transform: scale(1.1);
				filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.primary['100']});
			}
			@media screen and (max-width: 768px) {
				width: 2rem;
			}
		}
	}

	.beto-logo {
		width: 3rem;
		transition: all 0.3s ease-in-out;

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
