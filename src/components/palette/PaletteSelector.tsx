import { useState, useEffect } from 'react';
import { PALETTES } from '../../settings/theme';
import { Brush } from '../icons';
import gsap from 'gsap';
import { FloatingIcon } from './components';
import PaletteIcon from './PaletteIcon';

interface PaletteSelectorProps {
	setPaletteIndex: (index: number) => void;
}

export default function PaletteSelector({ setPaletteIndex }: PaletteSelectorProps) {
	const [showPalettes, setShowPalettes] = useState(false);

	function togglePaletteIcons() {
		setShowPalettes(prev => !prev);
	}

	useEffect(() => {
		if (showPalettes) {
			gsap.to('.palette-icon', {
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 1,
				ease: 'bounce.out',
				display: 'block',
			});
		} else {
			gsap.to('.palette-icon', {
				opacity: 0,
				y: 20,
				duration: 0.3,
				ease: 'power1.in',
				stagger: 0.1,
				display: 'none',
			});
		}
	}, [showPalettes]);

	const cls = showPalettes ? 'active' : '';
	return (
		<>
			<FloatingIcon className={cls} onClick={togglePaletteIcons}>
				<Brush />
			</FloatingIcon>
			{PALETTES.map((palette, index) => (
				<PaletteIcon key={index} index={index} palette={palette} setPaletteIndex={setPaletteIndex} />
			))}
		</>
	);
}
