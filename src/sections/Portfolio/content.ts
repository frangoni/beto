export interface Portfolio {
	title: string;
	thumbnail: string;
	bgImage: string;
	url: string;
	stack: Tech[];
}

export interface Tech {
	color: string;
	image: string;
	url: string;
}

const Vite = {
	color: '#646CFF',
	image: '/svgs/stack/vite.svg',
	url: 'https://vitejs.dev/',
};
const React = {
	color: '#61DAFB',
	image: '/svgs/stack/react.svg',
	url: 'https://reactjs.org/',
};
const Webflow = {
	color: '#146ef5',
	image: '/svgs/stack/webflow.svg',
	url: 'https://webflow.com/',
};
const Next = {
	color: '#F4F4F4',
	image: '/svgs/stack/next.svg',
	url: 'https://nextjs.org/',
};
const GSAP = {
	color: '#88CE02',
	image: '/svgs/stack/gsap.svg',
	url: 'https://gsap.com/',
};
const Hubspot = {
	color: '#FF7A59',
	image: '/svgs/stack/hubspot.svg',
	url: 'https://www.hubspot.com/',
};
const Zapier = {
	color: '#FF4D00',
	image: '/svgs/stack/zapier.svg',
	url: 'https://zapier.com/',
};
const Xano = {
	color: '#164DC3',
	image: '/svgs/stack/xano.svg',
	url: 'https://xano.com/',
};

export const PortfolioContent: Portfolio[] = [
	{
		title: 'INDIC',
		thumbnail: '/svgs/sites/indic.svg',
		bgImage: '/webp/sites/indic.webp',
		url: 'https://www.indicelectronics.com/',
		stack: [Webflow, Zapier],
	},
	{
		title: 'Passetto',
		thumbnail: '/svgs/sites/passetto.svg',
		bgImage: '/webp/sites/passetto.webp',
		url: 'https://passetto.webflow.io/',
		stack: [Webflow, GSAP, Hubspot],
	},
	{
		title: 'Enroll ML',
		thumbnail: '/svgs/sites/enrollml.svg',
		bgImage: '/webp/sites/enrollml.webp',
		url: 'https://www.enrollml.com/',
		stack: [Webflow, Xano],
	},
	{
		title: 'FUB',
		thumbnail: '/svgs/sites/fub.svg',
		bgImage: '/webp/sites/fub.webp',
		url: 'https://fub-academy.webflow.io/',
		stack: [Webflow],
	},
	{
		title: 'TM DJs',
		thumbnail: '/svgs/sites/tm.svg',
		bgImage: '/webp/sites/tm.webp',
		url: 'https://tmdj.com.ar/',
		stack: [Next, React, Vite, GSAP],
	},
];
