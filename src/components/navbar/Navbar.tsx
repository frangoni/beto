import { ContainerLarge, PaddingGlobal } from '../layout/Section';
import Button from '../buttons/MainButton';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import { Logo, Work, Portfolio, Education, Menu } from '../icons';
import { Nav, NavContainer } from './components';

export default function Navbar() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => (window.scrollY > 100 ? setHasScrolled(true) : setHasScrolled(false));
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	function handleOpen() {
		setIsOpen(!isOpen);
	}

	function navigateToSection(section: string) {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
	}
	const cls = hasScrolled ? 'scrolled' : '';
	return (
		<Nav>
			<PaddingGlobal>
				<ContainerLarge>
					<NavContainer className={cls}>
						<a onClick={() => navigateToSection('hero')}>
							{/* <img className='beto-logo' src={logo} alt='Beto dev' /> */}
							<Logo className='beto-logo' />
						</a>
						<div className='icons-wrapper'>
							<a onClick={() => navigateToSection('work')} className='nav-icon'>
								<Work />
							</a>
							<a onClick={() => navigateToSection('portfolio')} className='nav-icon'>
								<Portfolio />
							</a>
							<a onClick={() => navigateToSection('education')} className='nav-icon'>
								<Education />
							</a>
						</div>
						<Button content='Contact me' onClick={() => navigateToSection('contact')} />
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
