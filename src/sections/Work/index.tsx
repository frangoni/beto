import { styled } from 'styled-components';
import Section from '../../layout/Section';
import WORK_EXPERIENCE from './content';
import { CardStyle } from '../../shared/styles';

export default function Work() {
	return (
		<Section isLarge>
			<MainWrapper>
				<h1>Work Experience</h1>
				<CardsWrapper>
					{WORK_EXPERIENCE.map((work, index) => (
						<Card key={index} top={12 + index * 4 + 'rem'}>
							<h2>{work.company}</h2>
							<p>{work.position}</p>
							<p>{work.location}</p>
							<p>{work.date}</p>
							<img src={work.image} alt={work.company} />
							<a href={work.url} target='_blank' rel='noreferrer'>
								{work.url}
							</a>
							<p>{work.description}</p>
						</Card>
					))}
				</CardsWrapper>
			</MainWrapper>
		</Section>
	);
}

const MainWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 4rem;
`;

const CardsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 200vh;
	gap: 2rem;

	& > div:nth-child(odd) {
		border: 0.4rem solid ${({ theme }) => theme.primary['40']};
	}
	& > div:nth-child(even) {
		border: 0.4rem solid ${({ theme }) => theme.secondary['40']};
	}
`;

const Card = styled.div<{ top: string }>`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 1rem;
	position: sticky;
	position: -webkit-sticky;
	top: ${({ top }) => top};

	${CardStyle}
	width: 75%;
	padding: 3rem 2rem;

	img {
		position: absolute;
		top: 0rem;
		right: 0rem;
		height: 4rem;
		/* border top right radius */
		border-top-right-radius: 0.6rem;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
