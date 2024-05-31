import { useState } from 'react';
import { PortfolioContent } from './content';
import { ImageAccordionBg, ImageAccordionItem, ImageAccordionWrapper, StackLogo } from './components';

export const ImageAccordion = () => {
	const [active, setActive] = useState<number>(0);

	const handleToggle = (index: number) => setActive(index);

	return (
		<>
			<ImageAccordionBg
				style={{ backgroundImage: `url(${PortfolioContent[active].bgImage})` }}
			></ImageAccordionBg>
			<ImageAccordionWrapper>
				{PortfolioContent.map((item, index) => {
					const isActive = active === index ? 'active' : '';
					return (
						<ImageAccordionItem
							key={item.bgImage}
							className={`image-accordion-item ${isActive}`}
							onClick={() => handleToggle(index)}
						>
							<img className='bg' src={item.bgImage} />
							<img className='thumbnail' src={item.thumbnail} />
							<div className='content'>
								<h2>{item.title}</h2>
								<div className='stack'>
									{item.stack.map((tech, index) => (
										<StackLogo
											href={tech.url}
											key={index}
											target='_blank'
											rel='noopener noreferrer'
											dropShadow={tech.color}
										>
											<img src={tech.image} alt={tech.url} />
										</StackLogo>
									))}
								</div>
							</div>
						</ImageAccordionItem>
					);
				})}
			</ImageAccordionWrapper>
		</>
	);
};
