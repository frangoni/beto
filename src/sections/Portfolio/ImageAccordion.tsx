import { useState } from 'react';
import { PortfolioContent } from './content';
import { ImageAccordionBg, ImageAccordionWrapper } from './components';
import PortfolioItem from './ImageAccordionItem';

export const ImageAccordion = () => {
	const [active, setActive] = useState<number>(0);

	return (
		<>
			<ImageAccordionBg
				style={{ backgroundImage: `url(${PortfolioContent[active].bgImage})` }}
			></ImageAccordionBg>
			<ImageAccordionWrapper>
				{PortfolioContent.map((item, index) => {
					return (
						<PortfolioItem
							key={item.bgImage}
							item={item}
							index={index}
							active={active}
							setActive={setActive}
						/>
					);
				})}
			</ImageAccordionWrapper>
		</>
	);
};
