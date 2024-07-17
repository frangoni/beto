import { ThemeProvider, createGlobalStyle, styled } from 'styled-components';
import { generateTheme } from './settings/theme';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Portfolio from './sections/Portfolio';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Background from './components/background';
import { ReactLenis } from '@studio-freight/react-lenis';
import PaletteSelector from './components/palette/PaletteSelector';
import Footer from './sections/Footer';

function App() {
	const palletteIndexLS = localStorage.getItem('paletteIndex');
	const [paletteIndex, setPaletteIndex] = useState(Number(palletteIndexLS) || 0);

	useEffect(() => {
		localStorage.setItem('paletteIndex', paletteIndex.toString());
	}, [paletteIndex]);

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
				<Footer />
			</ReactLenis>
		</ThemeProvider>
	);
}

const MainWrapper = styled.main`
	background-color: ${({ theme }) => theme.mainBackground};
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
