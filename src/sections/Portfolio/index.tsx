import Section, { MainWrapper } from '../../components/layout/Section';
import { ImageAccordion } from './ImageAccordion';
import { AccordionWrapper } from './components';

export default function Portfolio() {
	return (
		<Section isLarge id='portfolio'>
			<MainWrapper>
				<h1>Portfolio</h1>
				<AccordionWrapper>
					<ImageAccordion />
				</AccordionWrapper>
			</MainWrapper>
		</Section>
	);
}
