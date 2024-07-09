import { EducationCard, EducationCardWrapper, StickyHeader, StickyWrapper, Timeline, TimelineLine } from './components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import EDUCATION from './content';

export const StickyTimeline = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.timeline',
				start: 'top 35%',
				end: 'bottom 50%',
				scrub: true,
			},
		});
		tl.to('.timeline-line', { height: '100%' });

		const cards = document.querySelectorAll('.education-card');
		cards.forEach(card => {
			gsap.from(card, {
				scrollTrigger: {
					trigger: card,
					start: 'top 65%',
					toggleActions: 'play pause none reverse',
				},
				y: 100,
				opacity: 0,
				duration: 1,
			});
		});
	});

	return (
		<StickyWrapper className='timeline'>
			<StickyHeader>
				<h1>My Education</h1>
			</StickyHeader>
			<Timeline>
				<TimelineLine className='timeline-line' />
				<EducationCardWrapper>
					{EDUCATION.map((education, index) => (
						<EducationCard key={index} className='education-card'>
							<h2>{education.institution}</h2>
							<h3>{education.location}</h3>
							<b>{education.date}</b>
							<p>{education.description}</p>
						</EducationCard>
					))}
				</EducationCardWrapper>
			</Timeline>
		</StickyWrapper>
	);
};
