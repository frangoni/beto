import { styled } from 'styled-components';
import Button from '../buttons/MainButton';
import { Close, Work, Portfolio, Education } from '../icons';
import { Drawer, MobileNav } from './components';

interface MobileMenuProps {
	isOpen: boolean;
	handleOpen: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, handleOpen }) => {
	function navigateToSection(section: string) {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
		handleOpen();
	}

	return (
		<Drawer className={isOpen ? 'open' : ''}>
			<span className={`close-icon ${isOpen ? 'open' : ''}   `} onClick={handleOpen}>
				<Close />
			</span>
			<MobileNav>
				<a onClick={() => navigateToSection('work')}>
					<Work />
					Work
				</a>
				<a onClick={() => navigateToSection('portfolio')}>
					<Portfolio />
					Projects
				</a>
				<a onClick={() => navigateToSection('education')}>
					<Education />
					Education
				</a>
				<Button content='Contact me' onClick={() => navigateToSection('contact')} />
			</MobileNav>
		</Drawer>
	);
};

export default MobileMenu;
