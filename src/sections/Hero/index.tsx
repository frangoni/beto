import { useEffect, useRef } from 'react';
import Section from '../../layout/Section';
import { HeroCardWrapper, HeroLayout, HeroText } from './components';
import Typed from 'typed.js';
import Card from './Card';
import Background from './Background';

export default function Hero() {
	const el = useRef(null);
	const strings = ['Front End Developer', 'Back End Developer', 'Webflow Developer', 'Business Administrator'];

	useEffect(() => {
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
		<>
			<Background />
			<Section isLarge={false}>
				<HeroLayout>
					<HeroText>
						<h1>Nice to meet you!</h1>
						<h1>I am Beto, a ...</h1>
						<span className='typed'>
							<p ref={el} />
						</span>
					</HeroText>
					<HeroCardWrapper>
						<Card />
					</HeroCardWrapper>
				</HeroLayout>
			</Section>
		</>
	);
}
