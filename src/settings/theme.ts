export const PALETTES = [
	['rgba(242, 0, 137, 1)', 'rgba(0, 242, 195, 1)'],
	['rgba(251, 86, 7, 1)', 'rgba(131, 56, 236, 1)'],
	['rgba(158, 0, 89, 1)', 'rgba(27, 231, 255, 1)'],
	['rgba(171, 196, 171, 1)', 'rgba(109, 76, 61, 1)'],
	['rgba(7, 9, 13, 1)', 'rgba(245, 208, 197, 1)'],
];

export const generateTheme = (paletteIndex: number): Theme => {
	const [PRIMARY, SECONDARY] = PALETTES[paletteIndex];
	return {
		primary: {
			...generatePalette(PRIMARY),
		},
		secondary: {
			...generatePalette(SECONDARY),
		},
		mainbackground: '#040404',
		secondaryBackground: '#252525',
		text: '#ebebeb',
		button: {
			background: '#252525',
			text: '#ebebeb',
		},
		card: {
			background: ' rgba(111, 111, 111, 0.3)',
			border: 'rgba(255, 255, 255, 0.18)',
		},
	};
};

function generatePalette(color: string) {
	return {
		'100': color,
		'80': color.replace('1)', '0.8)'),
		'60': color.replace('1)', '0.6)'),
		'40': color.replace('1)', '0.4)'),
		'20': color.replace('1)', '0.2)'),
	};
}

interface Theme {
	primary: {
		'100': string;
		'80': string;
		'60': string;
		'40': string;
		'20': string;
	};
	secondary: {
		'100': string;
		'80': string;
		'60': string;
		'40': string;
		'20': string;
	};
	mainbackground: string;
	secondaryBackground: string;
	text: string;
	button: {
		background: string;
		text: string;
	};
	card: {
		background: string;
		border: string;
	};
}
