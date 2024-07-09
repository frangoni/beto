import Section, { MainWrapper } from '../../components/layout/Section';
import { StickyTimeline } from './Timeline';

export default function Education() {
	return (
		<Section isLarge id='education'>
			<MainWrapper>
				<StickyTimeline />
			</MainWrapper>
		</Section>
	);
}
