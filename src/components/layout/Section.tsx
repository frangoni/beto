import React from 'react';
import { styled } from 'styled-components';

interface SectionProps {
	isLarge?: boolean;
	children: React.ReactNode;
	style?: React.CSSProperties;
	id?: string;
}

export default function Section(props: SectionProps) {
	const { style, children, id, isLarge = true } = props;
	const content = <ContainerLarge>{children}</ContainerLarge>;

	return (
		<section id={id} style={style}>
			<PaddingGlobal>
				{isLarge ? <PaddingSectionLarge>{content}</PaddingSectionLarge> : <>{content}</>}
			</PaddingGlobal>
		</section>
	);
}

export const PaddingGlobal = styled.div`
	padding-inline: 2.5rem;
	width: 100%;

	@media (max-width: 768px) {
		padding-inline: 2rem;
	}

	@media (max-width: 480px) {
		padding-inline: 1.25rem;
	}
`;

export const PaddingSectionLarge = styled.div`
	padding-block: 8rem;

	@media (max-width: 768px) {
		padding-block: 6rem;
	}

	@media (max-width: 480px) {
		padding-block: 4rem;
	}
`;

export const ContainerLarge = styled.div`
	margin-inline: auto;
	max-width: 80rem;
`;

export const MainWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	@media screen and (max-width: 768px) {
		gap: 2rem;
		h1 {
			text-align: center;
		}
	}
`;
