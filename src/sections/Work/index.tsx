import Section from '../../components/layout/Section';
import WORK_EXPERIENCE from './content';
import { CardsWrapper, MainWrapper } from './components';
import WorkCard from './WorkCard';

export default function Work() {
	return (
		<Section isLarge id='work'>
			<MainWrapper>
				<h1>Work Experience</h1>
				<CardsWrapper>
					{WORK_EXPERIENCE.map((work, index) => (
						<WorkCard work={work} index={index} />
					))}
				</CardsWrapper>
			</MainWrapper>
		</Section>
	);
}
