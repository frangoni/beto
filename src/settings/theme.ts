export const PALETTES: Palette[] = [
	{ name: 'Fuchsia and Aqua', colors: ['rgba(242, 0, 137, 1)', 'rgba(0, 242, 195, 1)'] }, // Fuchsia and Aqua
	{ name: 'Mint Green and Cocoa', colors: ['rgba(171, 196, 171, 1)', 'rgba(109, 76, 61, 1)'] }, // Mint Green and Cocoa
	{ name: 'Lime and Electric Purple', colors: ['rgba(192, 255, 0, 1)', 'rgba(111, 0, 255, 1)'] }, // Lime and Electric Purple
	{ name: 'Dark Slate and Peach', colors: ['rgba(7, 9, 13, 1)', 'rgba(245, 208, 197, 1)'] }, // Dark Slate and Peach
	{ name: 'Flame Orange and Teal', colors: ['rgba(255, 79, 0, 1)', 'rgba(23, 190, 187, 1)'] }, // Flame Orange and Teal
	{ name: 'Midnight Blue and Coral', colors: ['rgba(25, 25, 112, 1)', 'rgba(255, 127, 80, 1)'] }, // Midnight Blue and Coral
	{ name: 'Medium Sea Green and Slate Blue', colors: ['rgba(60, 179, 113, 1)', 'rgba(106, 90, 205, 1)'] }, // Medium Sea Green and Slate Blue
	{ name: 'Deep Pink and Gold', colors: ['rgba(255, 20, 147, 1)', 'rgba(255, 215, 0, 1)'] }, // Deep Pink and Gold
	{ name: 'Hot Pink and Deep Sky Blue', colors: ['rgba(255, 105, 180, 1)', 'rgba(0, 191, 255, 1)'] }, // Hot Pink and Deep Sky Blue
	{ name: 'Crimson and Lawn Green', colors: ['rgba(220, 20, 60, 1)', 'rgba(124, 252, 0, 1)'] }, // Crimson and Lawn Green
];

export const generateTheme = (paletteIndex: number): Theme => {
	const [PRIMARY, SECONDARY] = PALETTES[paletteIndex].colors;
	return {
		primary: {
			...generatePalette(PRIMARY),
		},
		secondary: {
			...generatePalette(SECONDARY),
		},
		mainBackground: '#040404',
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
	mainBackground: string;
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

export interface Palette {
	name: string;
	colors: string[];
}

/* const EXTRA_COLORS = [
	['rgba(34, 139, 34, 1)', 'rgba(255, 255, 0, 1)'], // Forest Green and Yellow
	['rgba(75, 0, 130, 1)', 'rgba(238, 130, 238, 1)'], // Indigo and Violet
	['rgba(255, 69, 0, 1)', 'rgba(30, 144, 255, 1)'], // Red Orange and Dodger Blue
	['rgba(255, 140, 0, 1)', 'rgba(147, 112, 219, 1)'], // Dark Orange and Medium Purple
	['rgba(139, 0, 139, 1)', 'rgba(72, 209, 204, 1)'], // Dark Magenta and Medium Turquoise

	['rgba(255, 99, 71, 1)', 'rgba(75, 0, 130, 1)'], // Tomato Red and Indigo
	['rgba(255, 215, 0, 1)', 'rgba(0, 128, 128, 1)'], // Gold and Teal
	['rgba(123, 104, 238, 1)', 'rgba(50, 205, 50, 1)'], // Medium Slate Blue and Lime Green
	['rgba(255, 69, 0, 1)', 'rgba(255, 20, 147, 1)'], // Orange Red and Deep Pink
	['rgba(0, 206, 209, 1)', 'rgba(148, 0, 211, 1)'], // Dark Turquoise and Dark Violet
]; */
