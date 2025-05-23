import { styled } from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Atropos from 'atropos/react';
import { useState } from 'react';
import 'atropos/css';
import { Earth, Terminal, Surf } from '../../components/icons';

export default function Card() {
	const [isHovering, setIsHovering] = useState(false);
	useGSAP(() => {
		const tl = gsap.timeline({ delay: 0.5, ease: 'power1.inOut' });

		tl.from('.blob-wrapper', {
			duration: 0.5,
			y: -10,
			opacity: 0,
		})
			.from('.beto-img', {
				duration: 0.5,
				y: '5%',
				opacity: 0,
			})
			.to('.icon-1', {
				duration: 0.5,
				top: '10%',
				left: '10%',
				opacity: 1,
			})
			.to('.icon-2', {
				duration: 0.5,
				top: '20%',
				right: '5%',
				opacity: 1,
			})
			.to('.icon-3', {
				duration: 0.5,
				bottom: '10%',
				right: '60%',
				opacity: 1,
			})
			.to('.icon path, .icon rect', {
				stagger: 0.2,
				duration: 1,
				strokeDashoffset: 0,
			});
	});

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
					<IconWrapper className={`icon icon-1 ${isHovering ? 'hovered' : ''}`} data-atropos-offset='50'>
						<Surf />
					</IconWrapper>
					<IconWrapper className={`icon icon-2 ${isHovering ? 'hovered' : ''}`} data-atropos-offset='100'>
						<Earth />
					</IconWrapper>
					<IconWrapper className={`icon icon-3 ${isHovering ? 'hovered' : ''}`} data-atropos-offset='200'>
						<Terminal />
					</IconWrapper>

					<BlobWrapper className='blob-wrapper' data-atropos-offset='-10'>
						<img src='/webp/beto.png' alt='Fran' className={`beto-img ${isHovering ? 'hovered' : ''}`} />
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

const IconWrapper = styled.div`
	position: absolute;
	width: 5rem;
	aspect-ratio: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: ${({ theme }) => theme.secondaryBackground};
	box-shadow: 0 0 1rem ${({ theme }) => theme.primary['40']};
	z-index: 10;
	opacity: 0;

	transition: all 0.5s;
	&.hovered {
		box-shadow: 0 0 0.5rem ${({ theme }) => theme.secondary['60']},
			0 0 0.8rem ${({ theme }) => theme.secondary['60']}, 0 0 1.2rem ${({ theme }) => theme.secondary['60']},
			0 0 1.6rem ${({ theme }) => theme.secondary['60']}, 0 0 2rem ${({ theme }) => theme.secondary['60']};
	}
	svg {
		width: 2.5rem;
		rect,
		path {
			stroke-dasharray: 2000;
			stroke-dashoffset: 2000;
			stroke: ${({ theme }) => theme.text};
		}
	}

	&.icon-1 {
		svg {
			rect,
			path {
				stroke-dasharray: 50;
				stroke-dashoffset: 50;
			}
		}
	}

	@media screen and (max-width: 768px) {
		width: 5rem;
		svg {
			width: 2.5rem;
		}
	}
`;

const CardWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	border-radius: 2rem;
	border: 1px solid ${({ theme }) => theme.card.border};
	background: ${({ theme }) => theme.mainBackground};
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
	aspect-ratio: 1;

	img {
		transition: filter 0.5s;
		width: 20rem;

		&.hovered {
			filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.secondaryBackground});
		}

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;
