import { css } from 'styled-components';

export const CardStyle = css`
	background: ${({ theme }) => theme.card.background};
	box-shadow: 0 8px 32px 0 ${({ theme }) => theme.primary['20']};
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 0.8rem;
	border: 1px solid ${({ theme }) => theme.card.border};
`;
