import Section, { MainWrapper } from '../../components/layout/Section';
import { StickyTimeline } from './Timeline';
import { StickyHeader } from './components';

export default function Education() {
	return (
		<Section isLarge id='education'>
			<MainWrapper>
				<StickyHeader>
					<h1>My Education</h1>
				</StickyHeader>
				<StickyTimeline />
			</MainWrapper>
		</Section>
	);
}
