interface WorkExperience {
	company: string;
	position: string;
	location: string;
	date: string;
	image: string;
	url: string;
	description: string;
}

const WORK_EXPERIENCE: WorkExperience[] = [
	{
		company: 'Amply',
		position: 'Webflow Developer',
		location: 'Utah. USA',
		date: '2023 - Present',
		image: '/svgs/amply.svg',
		url: 'https://www.joinamply.com/',
		description: 'Institutional sites and Web apps development with Webflow and Wized.',
	},
	{
		company: 'JLS Trading Co',
		position: 'Front End Developer',
		location: 'North Carolina, USA',
		date: '2021 - 2023',
		image: '/webp/jls.webp',
		url: 'https://www.jlstradingco.com/',
		description: 'Development of an inventory management system and a campaign manager tool for Amazon sellers.',
	},
	{
		company: 'Quiena',
		position: 'Back End Developer',
		location: 'Buenos Aires, Argentina',
		date: '2021',
		image: '/webp/quiena.webp',
		url: 'https://www.quiena.com/',
		description:
			'Developer for an automated investment platform. KYC microservice and main API migration to GraphQL.',
	},
	{
		company: 'Plataforma 5',
		position: 'Mentor',
		location: 'Buenos Aires, Argentina',
		date: '2021',
		image: '/webp/p5.webp',
		url: 'https://www.plataforma5.la/',
		description:
			'Mentor for the Full Stack Web Development Bootcamp (Professional project). Technologies: React, Node.js, Express, MongoDB.',
	},
];

export default WORK_EXPERIENCE;
