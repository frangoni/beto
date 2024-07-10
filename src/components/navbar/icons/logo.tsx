import { useTheme } from 'styled-components';

export default function Logo({ className = '' }) {
	const theme = useTheme();
	return (
		<svg className={className} viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.5 1.62066C9.5 0.620667 10.5 4.12067 4 6.62066'
				stroke={theme.primary['100']}
				strokeWidth='0.8'
				strokeLinecap='round'
			/>
			<path
				d='M3.5 7.62067C9 7.62067 9.5 11.6207 3.5 13.1207'
				stroke={theme.primary['100']}
				strokeWidth='0.8'
				strokeLinecap='round'
			/>
			<path d='M3 1.5V13.3' stroke={theme.secondary['100']} strokeWidth='0.5' strokeLinecap='square' />
			<path d='M1 1.5C13 -0.999998 9 6.5 3.5 6.99998' stroke='#E1E1E1' strokeWidth='0.5' strokeLinecap='round' />
			<path
				d='M2 13.6207C11.5 12.1207 9 7.12067 3.5 7.12067'
				stroke='#E1E1E1'
				strokeWidth='0.5'
				strokeLinecap='round'
			/>
			<path d='M3.5 1.12067V13.1207' stroke='#E1E1E1' strokeWidth='0.5' strokeLinecap='round' />
		</svg>
	);
}
