import { ThemeProvider, styled } from 'styled-components';
import theme, { ThemeMode } from './settings/theme';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/Hero';

function App() {
	const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

	function toggleTheme() {
		setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	}

	return (
		<ThemeProvider theme={theme[themeMode]}>
			<button style={{ display: 'none' }} onClick={toggleTheme}>
				Toggle Theme
			</button>
			<Navbar />
			<MainWrapper>
				<Hero />
			</MainWrapper>
		</ThemeProvider>
	);
}

const MainWrapper = styled.div`
	background-color: ${({ theme }) => theme.mainbackground};
	color: ${({ theme }) => theme.text};
	min-height: 200vh;
`;

export default App;
