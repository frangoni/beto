import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { PALETTES } from '../../settings/theme';
import Brush from './icons/brush';
import { IconStyle } from '../navbar/Navbar';
import gsap from 'gsap';

interface PaletteSelectorProps {
	setPaletteIndex: (index: number) => void;
}

export default function PaletteSelector({ setPaletteIndex }: PaletteSelectorProps) {
	const [showPalettes, setShowPalettes] = useState(false);

	function togglePaletteIcons() {
		setShowPalettes(prev => !prev);
	}

	function changePalette(index: number) {
		setPaletteIndex(index);
	}

	useEffect(() => {
		if (showPalettes) {
			gsap.to('.palette-icon', {
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.3,
				ease: 'power1.out',
			});
		} else {
			gsap.to('.palette-icon', {
				opacity: 0,
				y: 20,
				duration: 0.3,
				ease: 'power1.in',
				stagger: 0.1,
			});
		}
	}, [showPalettes]);

	return (
		<>
			<FloatingIcon onClick={togglePaletteIcons}>
				<Brush />
			</FloatingIcon>
			{PALETTES.map((palette, index) => (
				<PaletteIcon
					index={index}
					key={index}
					className='palette-icon'
					onClick={() => changePalette(index)}
					style={{ opacity: 0 }}
				>
					<ColorIcon style={{ background: `linear-gradient(45deg, ${palette[0]} 50%, ${palette[1]} 50%)` }} />
				</PaletteIcon>
			))}
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

const PaletteIcon = styled.div<{ index: number }>`
	position: fixed;
	left: 3.3rem;
	bottom: ${({ index }) => `calc(8rem + ${index} * 2.5rem)`};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	overflow: hidden;
	width: 2rem;
	height: 2rem;
	background: ${({ theme }) => theme.secondaryBackground};
	border: 2px solid ${({ theme }) => theme.card.border};
	z-index: 100;
	transition: scale 0.3s;

	&:hover {
		scale: 1.1 !important;
	}

	@media screen and (max-width: 768px) {
		left: ${({ index }) => `calc(4rem + ${index} * 2.5rem)`};
		bottom: 1.5rem;
	}
`;

const ColorIcon = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
