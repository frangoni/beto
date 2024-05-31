import Section, { MainWrapper } from '../../components/layout/Section';
import { ImageAccordion } from './ImageAccordion';
import { AccordionWrapper } from './components';

export default function Portfolio() {
	return (
		<Section isLarge>
			<MainWrapper>
				<h1>My Portfolio</h1>
				<AccordionWrapper>
					<ImageAccordion />
				</AccordionWrapper>
			</MainWrapper>
		</Section>
	);
}
