import { useGSAP } from '@gsap/react';
import { ImageAccordionItem, StackLogo } from './components';
import { Portfolio } from './content';
import { gsap } from 'gsap';

interface ItemProps {
	index: number;
	item: Portfolio;
	active: number;
	setActive: (index: number) => void;
}

export default function PortfolioItem({ item, index, active, setActive }: ItemProps) {
	const handleToggle = (index: number) => setActive(index);
	const isActive = active === index ? 'active' : '';

	useGSAP(() => {
		const tl = gsap.timeline({ delay: 0.5, ease: 'power1.inOut' });

		tl.fromTo(
			`.image-accordion-item.active .stack img`,
			{
				y: '100%',
				opacity: 0,
			},
			{
				y: '0%',
				opacity: 1,
				stagger: 0.1,
				duration: 0.5,
				ease: 'power2.out',
			}
		);
	}, [isActive]);

	return (
		<ImageAccordionItem
			key={item.bgImage}
			className={`image-accordion-item ${isActive} ${index}`}
			onClick={() => handleToggle(index)}
		>
			<img className='bg' src={item.bgImage} />
			<img className='thumbnail' src={item.thumbnail} />
			<div className='content'>
				<a href={item.url} target='_blank' rel='noopener noreferrer' className='url'>
					<h2>{item.title}</h2>
				</a>
				<div className='stack'>
					{item.stack.map((tech, index) => (
						<StackItem tech={tech} index={index} key={index} />
					))}
				</div>
			</div>
		</ImageAccordionItem>
	);
}

function StackItem({ tech, index }: { tech: Portfolio['stack'][0]; index: number }) {
	return (
		<StackLogo href={tech.url} key={index} target='_blank' rel='noopener noreferrer' dropShadow={tech.color}>
			<img src={tech.image} alt={tech.url} />
		</StackLogo>
	);
}
