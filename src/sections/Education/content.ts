interface Education {
	institution: string;
	location: string;
	date: string;
	description: string;
}

const EDUCATION: Education[] = [
	{
		institution: 'Universidad de Buenos Aires',
		location: 'Buenos Aires, Argentina',
		date: '2013 - 2019',
		description: 'Bachelor s Degree in Business Administration',
	},
	{
		institution: 'Berlin school of Economics and Law',
		location: 'Berlin, Germany',
		date: '2018 - 2019',
		description: 'Erasmus Exchange Program in Business Administration',
	},
	{
		institution: 'Plataforma 5',
		location: 'Buenos Aires, Argentina',
		date: '2020',
		description: 'Introduction to Web Development.HTML, CSS, Javascript, JQuery and AJAX',
	},
	{
		institution: 'Plataforma 5',
		location: 'Buenos Aires, Argentina',
		date: '2020',
		description:
			'Full Stack Developement course with a Javascript focus. The main technologies used where React and Redux for Front End and Node.js, Express, Mongoose and Sequelize for Back End',
	},
];

export default EDUCATION;
