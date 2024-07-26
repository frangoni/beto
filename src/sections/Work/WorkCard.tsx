import WORK_EXPERIENCE, { WorkExperience } from './content';
import { Enter } from '../../components/icons';
import { CardGroup, Card } from './components';

interface WorkCardProps {
	work: WorkExperience;
	index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
	const cardsLength = WORK_EXPERIENCE.length;
	const isMobile = window.innerWidth <= 768;
	const imgHeight = isMobile ? 3 : 4;
	const top = 12 + index * cardsLength + 'rem';
	const marginBottom = imgHeight * (cardsLength - index - 1) + 'rem';
	return (
		<Card key={index} $top={top} $marginbottom={marginBottom}>
			<img src={work.image} alt={work.company} />
			<CardGroup>
				<h2>{work.company}</h2>
				<a href={work.url} target='_blank' rel='noreferrer'>
					<Enter />
				</a>
			</CardGroup>
			<h4>{work.position}</h4>
			<CardGroup>
				<p>{work.location}</p>
				<p>{work.date}</p>
			</CardGroup>
			<p>
				<b>Responsibilities: </b>
				{work.description}
			</p>
		</Card>
	);
}
