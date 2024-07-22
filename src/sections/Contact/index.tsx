import { gsap } from 'gsap';
import Section, { MainWrapper } from '../../components/layout/Section';
import { BorderWrapper, CTAContainer, Glow } from './components';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Logo } from '../../components/icons';
import MainButton from '../../components/buttons/MainButton';
import { ScrollTrigger } from 'gsap/all';

export default function Contact() {
	const glowRef = useRef<HTMLDivElement>(null);
	const borderWrapperRef = useRef<HTMLDivElement>(null);

	const sendEmail = () => window.open('mailto:fran.goni96@gmail.com');

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const borderWrapperElement = borderWrapperRef.current;
		const glowElement = glowRef.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: borderWrapperElement,
				start: 'top center',
				toggleActions: 'play none none none',
			},
		});

		tl.fromTo(
			borderWrapperElement,
			{ y: '10%', scale: 0.9, opacity: 0 },
			{ y: 0, scale: 1, opacity: 1, duration: 1 }
		).fromTo(
			'.cta-logo path',
			{ strokeDashoffset: 60, strokeDasharray: 60 },
			{ strokeDashoffset: 0, duration: 1, ease: 'linear' }
		);

		if (!glowElement || !borderWrapperElement) return;

		const moveGlow = (e: MouseEvent) => {
			const rect = borderWrapperElement.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			gsap.to(glowElement, {
				x: x,
				y: y,
				ease: 'power3.out',
			});
		};

		borderWrapperElement.addEventListener('mousemove', moveGlow);

		return () => borderWrapperElement.removeEventListener('mousemove', moveGlow);
	});

	return (
		<Section isLarge id='contact'>
			<MainWrapper>
				<BorderWrapper ref={borderWrapperRef}>
					<Glow ref={glowRef} />
					<CTAContainer>
						<Logo className='cta-logo' />
						<h3>Let's build together🚀</h3>
						<MainButton content='Send email' onClick={sendEmail} />
					</CTAContainer>
				</BorderWrapper>
			</MainWrapper>
		</Section>
	);
}
