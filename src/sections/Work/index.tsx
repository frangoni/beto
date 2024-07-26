import Section from '../../components/layout/Section';
import WORK_EXPERIENCE from './content';
import { Enter } from '../../components/icons';
import { CardGroup, CardsWrapper, MainWrapper, Card } from './components';

export default function Work() {
	const cardsLength = WORK_EXPERIENCE.length;
	const isMobile = window.innerWidth <= 768;
	const imgHeight = isMobile ? 3 : 4;

	return (
		<Section isLarge id='work'>
			<MainWrapper>
				<h1>Work Experience</h1>
				<CardsWrapper>
					{WORK_EXPERIENCE.map((work, index) => {
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
					})}
				</CardsWrapper>
			</MainWrapper>
		</Section>
	);
}
