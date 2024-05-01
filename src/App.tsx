import { ThemeProvider, styled } from 'styled-components';
import theme, { ThemeMode } from './settings/theme';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/Hero';

function App() {
	const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

	return (
		<ThemeProvider theme={theme[themeMode]}>
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
