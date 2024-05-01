import { css, styled } from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Atropos from 'atropos/react';
import { useState } from 'react';
import 'atropos/css';

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
				stagger: 0.1,
			});
	});

	return (
		<Atropos
			activeOffset={10}
			shadowScale={1.05}
			onEnter={() => setIsHovering(true)}
			onLeave={() => setIsHovering(false)}
			duration={500}
		>
			<CardWrapper data-atropos-offset='-5'>
				<Shape1 data-atropos-offset='50' className='shape shape-1' />
				<Shape2 data-atropos-offset='100' className='shape shape-2' />
				<Shape3 data-atropos-offset='200' className='shape shape-3' />
				<BlobWrapper className='blob-wrapper' data-atropos-offset='-10'>
					<img src='/pngs/fran.png' alt='Fran' className={`beto-img ${isHovering ? 'hovered' : ''}`} />
				</BlobWrapper>
			</CardWrapper>
		</Atropos>
	);
}

const CardWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
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
	}
`;

const Shape = css`
	position: absolute;
	width: 7.5rem;
	height: 7.5rem;
	z-index: 2;
`;

const Shape1 = styled.div`
	${Shape}
	left: 10%;
	top: 10%;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	background: linear-gradient(
		35deg,
		${({ theme }) => theme.primary['100']} 10%,
		${({ theme }) => theme.secondary['100']} 100%
	);
`;

const Shape2 = styled.div`
	${Shape}
	right: 10%;
	top: 25%;
	border-radius: 42% 58% 54% 46% / 66% 51% 49% 34%;
	background: linear-gradient(
		5deg,
		${({ theme }) => theme.primary['100']} 10%,
		${({ theme }) => theme.secondary['100']} 100%
	);
`;

const Shape3 = styled.div`
	${Shape}
	bottom: 10%;
	right: 25%;
	border-radius: 63% 37% 68% 32% / 37% 65% 35% 63%;
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.primary['100']} 10%,
		${({ theme }) => theme.secondary['100']} 100%
	);
`;
