import { styled } from 'styled-components';
import Section from '../../components/layout/Section';
import WORK_EXPERIENCE from './content';
import { CardStyle } from '../../shared/styles';
import Web from './icons/web';

export default function Work() {
	return (
		<Section isLarge id='work'>
			<MainWrapper>
				<h1>Work Experience</h1>
				<CardsWrapper>
					{WORK_EXPERIENCE.map((work, index) => (
						<Card
							key={index}
							top={12 + index * 4 + 'rem'}
							marginBottom={(WORK_EXPERIENCE.length - index - 2) * 4 + 'rem'}
						>
							<CardGroup>
								<img src={work.image} alt={work.company} />
								<h2>{work.company}</h2>
								<a href={work.url} target='_blank' rel='noreferrer'>
									<Web />
								</a>
							</CardGroup>
							<h4>{work.position}</h4>
							<CardGroup>
								<p>{work.location}</p>-<p>{work.date}</p>
							</CardGroup>
							<p>
								<b>Responsibilities: </b>
								{work.description}
							</p>
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

	@media screen and (max-width: 768px) {
		gap: 2rem;
		h1 {
			text-align: center;
		}
	}
`;

const CardsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div:nth-child(odd) {
		border: 0.4rem solid ${({ theme }) => theme.primary['20']};
	}
	& > div:nth-child(even) {
		border: 0.4rem solid ${({ theme }) => theme.secondary['20']};
	}
`;

const Card = styled.div<{ top: string; marginBottom: string }>`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 1rem;
	position: sticky;
	position: -webkit-sticky;
	top: ${({ top }) => top};
	margin-bottom: ${({ marginBottom }) => marginBottom};
	overflow: hidden;
	${CardStyle}
	width: 75%;
	padding: 3rem 2rem;

	img {
		position: absolute;
		top: 0rem;
		right: 0rem;
		height: 4rem;
	}

	svg {
		height: 3rem;
		color: ${({ theme }) => theme.text};
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 3rem 1rem 2rem;

		img {
			height: 3rem;
		}
	}
`;

const CardGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
