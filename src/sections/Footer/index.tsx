import { useGSAP } from '@gsap/react';
import { Logo } from '../../components/icons';
import Section from '../../components/layout/Section';
import { StackItem } from '../Portfolio/ImageAccordionItem';
import { React, Vite, GSAP } from '../Portfolio/content';
import { Footer, FooterContainer } from './components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SOCIALS } from './content';

export default function WebFooter() {
	const year = new Date().getFullYear();

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const fadeIn = { opacity: 0, y: '10%' };
		const fadeInStagger = { opacity: 1, y: '0%', stagger: 0.1 };

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.footer',
				start: 'top bottom',
				toggleActions: 'play pause none reverse',
			},
		});

		tl.fromTo('.logo-year *', fadeIn, fadeInStagger)
			.fromTo('.social a', fadeIn, fadeInStagger)
			.fromTo('.made-with *', fadeIn, fadeInStagger);
	});

	return (
		<Footer className='footer'>
			<Section isLarge={false}>
				<FooterContainer className='footer-container'>
					<span className='logo-year'>
						<Logo className='logo' />
						<strong>&copy; {year} Beto dev.</strong>
					</span>

					<span className='social'>
						{SOCIALS.map(({ name, link, img }) => (
							<a
								key={`${name}-${link}`}
								href={link}
								target='_blank'
								rel='noreferrer'
								className='social-link'
							>
								<img src={img} alt={name} />
							</a>
						))}
					</span>

					<span className='made-with'>
						<p>
							M
							<span role='img' aria-label='heart'>
								❤️
							</span>
							de with:
						</p>
						<StackItem tech={React} index={0} />
						<StackItem tech={Vite} index={1} />
						<StackItem tech={GSAP} index={2} />
					</span>
				</FooterContainer>
			</Section>
		</Footer>
	);
}
