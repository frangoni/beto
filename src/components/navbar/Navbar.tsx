import { css, keyframes, styled } from 'styled-components';
import logo from '/svgs/beto.svg';
import Portfolio from './icons/portfolio';
import Work from './icons/work';
import Education from './icons/education';
import Menu from './icons/menu';
import { ContainerLarge, PaddingGlobal } from '../../layout/Section';
import Button from '../buttons/MainButton';

import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);

	useEffect(() => {
		const handleScroll = () => (window.scrollY > 100 ? setHasScrolled(true) : setHasScrolled(false));
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	function handleOpen() {
		setIsOpen(!isOpen);
	}
	const cls = hasScrolled ? 'scrolled' : '';
	return (
		<Nav>
			<PaddingGlobal>
				<ContainerLarge>
					<NavContainer className={cls}>
						<a href='#root' className='nav-icon'>
							<img className='beto-logo' src={logo} alt='Beto dev' />
						</a>
						<div className='icons-wrapper'>
							<a href='#work' className='nav-icon'>
								<Work />
							</a>
							<a href='#portfolio' className='nav-icon'>
								<Portfolio />
							</a>
							<a href='#education' className='nav-icon'>
								<Education />
							</a>
						</div>
						<Button
							content='Contact me'
							onClick={() => {
								console.log('pressed');
							}}
						/>
						<span className='nav-icon mobile' onClick={handleOpen}>
							<Menu />
						</span>
					</NavContainer>
					<MobileMenu isOpen={isOpen} handleOpen={handleOpen} />
				</ContainerLarge>
			</PaddingGlobal>
		</Nav>
	);
}

const Nav = styled.nav`
	position: fixed;
	width: 100vw;
	z-index: 100;
`;

const drawStroke = keyframes`
	to {
		stroke-dashoffset: 0;
	}
`;

const IconStyle = css`
	color: ${({ theme }) => theme.text};
	width: 2.5rem;
	height: 2.5rem;
	transition: all 0.3s ease-in-out;
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

		button {
			display: none;
		}
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
