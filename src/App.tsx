import { ThemeProvider, createGlobalStyle, styled } from 'styled-components';
import { generateTheme } from './settings/theme';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Portfolio from './sections/Portfolio';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Background from './components/background';
import { ReactLenis } from '@studio-freight/react-lenis';
import PaletteSelector from './components/palette/PaletteSelector';

function App() {
	const [paletteIndex, setPaletteIndex] = useState(0);

	return (
		<ThemeProvider theme={generateTheme(paletteIndex)}>
			<GlobalStyle />
			<PaletteSelector setPaletteIndex={setPaletteIndex} />
			<Background />
			<Navbar />

			<ReactLenis root>
				<MainWrapper>
					<Hero />
					<Work />
					<Portfolio />
					<Education />
					<Contact />
				</MainWrapper>
			</ReactLenis>
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

const GlobalStyle = createGlobalStyle`	
	::-webkit-scrollbar {
		width: 0.5rem;
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primary['60']};
		border-radius: 1rem;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: ${({ theme }) => theme.primary['80']};
	}
	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.secondaryBackground};
	}
	
	
	`;

export default App;
