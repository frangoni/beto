import { Palette } from '../../settings/theme';
import { IconWrapper, ColouredIcon, Tooltip } from './components';

interface PaletteIconProps {
	index: number;
	palette: Palette;
	setPaletteIndex: (index: number) => void;
}

export default function PaletteIcon({ setPaletteIndex, index, palette }: PaletteIconProps) {
	const { name, colors } = palette;
	const [PRIMARY, SECONDARY] = colors;

	return (
		<IconWrapper>
			<ColouredIcon
				$index={index}
				className='palette-icon'
				onClick={() => setPaletteIndex(index)}
				style={{
					opacity: 0,
					background: `linear-gradient(45deg, ${PRIMARY} 45%,  ${SECONDARY} 45%)`,
				}}
			/>
			<Tooltip $index={index}>
				<p> {name}</p>
			</Tooltip>
		</IconWrapper>
	);
}
