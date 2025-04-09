import { styled } from 'styled-components';

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.mainBackground};
	color: ${({ theme }) => theme.text};
	text-align: center;
`;

export const FooterContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	gap: 1rem;
	transition: all 0.3s ease;
	padding: 1rem;
	border-radius: 1rem;

	.logo-year {
		display: flex;
		align-items: center;
		gap: 1rem;

		.logo {
			height: 2rem;
		}
	}

	.social {
		display: flex;
		gap: 1rem;

		.social-link {
			img {
				height: 2rem;
			}
		}
	}

	.made-with {
		display: flex;
		gap: 1rem;
		justify-self: end;

		img {
			height: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.logo-year {
			flex-direction: column;
		}
	}
`;
