import { styled } from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Atropos from 'atropos/react';
import { useMemo, useState } from 'react';
import 'atropos/css';
import { randomNumberFromRange } from '../../shared/utils';

function generateRandomShape() {
	const top = randomNumberFromRange(10, 90);
	const left = randomNumberFromRange(10, 90);
	const size = randomNumberFromRange(2, 5);
	const bgColor = randomNumberFromRange(0, 1) === 0 ? 'primary' : 'secondary';
	const offset = randomNumberFromRange(25, 200);

	return (
		<Shape
			className='shape'
			width={size + 'rem'}
			left={left}
			top={top}
			bgColor={bgColor}
			key={top}
			data-atropos-offset={offset}
		/>
	);
}

export default function Card() {
	const [isHovering, setIsHovering] = useState(false);
	useGSAP(() => {
		const tl = gsap.timeline({ delay: 0.5, ease: 'power1.inOut' });

		tl.from('.blob-wrapper', {
			duration: 0.5,
			y: -40,
			opacity: 0,
		})
			.from('.beto-img', {
				duration: 0.5,
				y: '10%',
				opacity: 0,
			})
			.from('.shape', {
				duration: 0.5,
				y: -20,
				opacity: 0,
				stagger: 0.25,
			})
			.from('.shape', {
				duration: 1,
				y: 10,
				repeat: -1,
				yoyo: true,
				stagger: 0.25,
			});
	});

	const shapes = useMemo(() => Array.from({ length: 10 }, generateRandomShape), []);

	return (
		<Wrapper>
			<Atropos
				activeOffset={10}
				shadowScale={1.05}
				onEnter={() => setIsHovering(true)}
				onLeave={() => setIsHovering(false)}
				duration={500}
				className='my-atropos'
			>
				<CardWrapper data-atropos-offset='-5'>
					{...shapes}
					<BlobWrapper className='blob-wrapper' data-atropos-offset='-10'>
						<img src='/pngs/fran.png' alt='Fran' className={`beto-img ${isHovering ? 'hovered' : ''}`} />
					</BlobWrapper>
				</CardWrapper>
			</Atropos>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.atropos-inner {
		overflow: visible;
	}
`;

const CardWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	border-radius: 2rem;
	border: 1px solid ${({ theme }) => theme.secondaryBackground};
	background: rgba(0, 0, 0, 0.25);
	box-shadow: 0 8px 32px 0 ${({ theme }) => theme.primary['20']};
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
`;

const BlobWrapper = styled.div`
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.primary['100']} 10%,
		${({ theme }) => theme.secondary['100']} 100%
	);
	overflow: hidden;

	img {
		transition: filter 0.5s;
		transform: translateY(5%);
		&.hovered {
			filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.secondaryBackground});
		}

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;

const Shape = styled.div<{ top: number; left: number; width: string; bgColor: string }>`
	position: absolute;
	aspect-ratio: 1;
	border-radius: 50%;
	z-index: 2;
	top: ${({ top }) => top}%;
	left: ${({ left }) => left}%;
	width: ${({ width }) => width};
	background-color: ${({ theme, bgColor }) => theme[bgColor]['60']};
	box-shadow: 0 0 5rem ${({ theme }) => theme.secondaryBackground};
	border: 1px solid ${({ theme }) => theme.secondaryBackground};
`;
