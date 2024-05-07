import { styled } from 'styled-components';
import Close from './icons/close';
import Portfolio from './icons/portfolio';
import Work from './icons/work';
import Education from './icons/education';
import Button from '../buttons/MainButton';

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
			<Nav>
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
				<Button
					content='Contact me'
					onClick={() => {
						console.log('pressed');
					}}
				/>
			</Nav>
		</Drawer>
	);
};

export default MobileMenu;

const Drawer = styled.div`
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

const Nav = styled.nav`
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
