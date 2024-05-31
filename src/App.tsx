import { ThemeProvider, styled } from 'styled-components';
import theme, { ThemeMode } from './settings/theme';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Portfolio from './sections/Portfolio';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Background from './components/background';

function App() {
	const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

	function toggleTheme() {
		setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	}

	return (
		<ThemeProvider theme={theme[themeMode]}>
			<Background />
			<button style={{ display: 'none' }} onClick={toggleTheme}>
				Toggle Theme
			</button>
			<Navbar />
			<MainWrapper>
				<Hero />
				<Work />
				<Portfolio />
				<Education />
				<Contact />
			</MainWrapper>
		</ThemeProvider>
	);
}

const MainWrapper = styled.div`
	background-color: ${({ theme }) => theme.mainbackground};
	color: ${({ theme }) => theme.text};
	a {
		color: ${({ theme }) => theme.text};
	}
`;

export default App;
