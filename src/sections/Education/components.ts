import { styled } from 'styled-components';
import { CardStyle } from '../../shared/styles';

export const StickyWrapper = styled.div`
	position: relative;
	align-items: start;
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const StickyHeader = styled.div`
	position: sticky;
	flex-shrink: 0;
	top: 10rem;
	position: -webkit-sticky;
	overflow: hidden;

	@media (max-width: 768px) {
		position: relative;
		top: 0;
	}
`;

export const Timeline = styled.div`
	position: relative;
`;

export const TimelineLine = styled.div`
	width: 1rem;
	height: 0%;
	border-radius: 5rem;
	position: absolute;
	top: 0;
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.primary['100']} 10%,
		${({ theme }) => theme.secondary['100']} 100%
	);
`;

export const EducationCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 4rem;
	margin-left: 2rem;

	@media (max-width: 768px) {
		gap: 2rem;
	}
`;

export const EducationCard = styled.div`
	${CardStyle}
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
