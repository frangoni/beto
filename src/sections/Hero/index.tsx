import { useEffect, useRef } from 'react';
import Section from '../../components/layout/Section';
import { HeroCardWrapper, HeroLayout, HeroText } from './components';
import Typed from 'typed.js';
import Card from './Card';

export default function Hero() {
	const el = useRef(null);

	useEffect(() => {
		const strings = ['Front End Developer', 'Back End Developer', 'Webflow Developer', 'Business Administrator'];
		const typed = new Typed(el.current, {
			strings,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 1000,
			loop: true,
		});
		return () => typed.destroy();
	}, []);

	return (
		<Section isLarge={false} style={{ overflow: 'hidden' }} id='hero'>
			<HeroLayout>
				<HeroText>
					<h1>Nice to meet you!</h1>
					<h1>
						I am <span>Beto</span>, a ...
					</h1>
					<span className='typed'>
						<p ref={el} />
					</span>
				</HeroText>
				<HeroCardWrapper>
					<Card />
				</HeroCardWrapper>
			</HeroLayout>
		</Section>
	);
}
