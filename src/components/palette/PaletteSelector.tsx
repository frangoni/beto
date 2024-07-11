import { styled } from 'styled-components';
import { PALETTES } from '../../settings/theme';
import Brush from './icons/brush';
import { IconStyle } from '../navbar/Navbar';

interface PaletteSelectorProps {
	setPaletteIndex: (index: number) => void;
}

export default function PaletteSelector({ setPaletteIndex }: PaletteSelectorProps) {
	function changePalette() {
		//@ts-ignore
		setPaletteIndex(prev => (prev + 1) % PALETTES.length);
	}

	return (
		<>
			<FloatingIcon onClick={changePalette}>
				<Brush />
			</FloatingIcon>
		</>
	);
}

const FloatingIcon = styled.div`
	position: fixed;
	z-index: 100;
	border-radius: 2rem;
	background: ${({ theme }) => theme.secondaryBackground};
	bottom: 2rem;
	left: 2rem;
	cursor: pointer;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.card.border};

	svg {
		${IconStyle}
	}

	&:hover {
		transform: translateY(-10%);

		svg {
			transform: rotate(30deg);
		}
	}
	transition: all 0.3s;

	@media screen and (max-width: 768px) {
		bottom: 0.5rem;
		left: 0.5rem;
		padding: 0.5rem;
		svg {
			width: 2rem;
			height: 2rem;
		}
	}
`;
