const PRIMARY = 'rgba(242, 0, 137, 1)';
const SECONDARY = 'rgba(0, 242, 195, 1)';

function generatePalette(color: string) {
	return {
		'100': color,
		'80': color.replace('1)', '0.8)'),
		'60': color.replace('1)', '0.6)'),
		'40': color.replace('1)', '0.4)'),
		'20': color.replace('1)', '0.2)'),
	};
}

const theme: Record<ThemeMode, Theme> = {
	dark: {
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
	},
	light: {
		primary: {
			...generatePalette(PRIMARY),
		},
		secondary: {
			...generatePalette(SECONDARY),
		},
		mainbackground: '#ebebeb',
		secondaryBackground: '#cdcdcd',
		text: '#040404',
		button: {
			background: '#cdcdcd',
			text: '#040404',
		},
	},
};

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
}

export type ThemeMode = 'dark' | 'light';

export default theme;
