import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';

import type { ListAction, Project } from '~/types';
import Image from 'next/image';

export default function ProjectsPage(): JSX.Element {
	const projects: Project[] = [
		{
			name: 'Google Keepes (Full stack)',
			description:
				'By using this web app, users can create notes and access them from anywhere because the data is uploaded to the cloud.',
			url: 'https://github.com/Shivam00002/google-keeps',
			homepage: 'https://google-keeps-three.vercel.app/',
			icon: (
				<Image
					src={'https://e7.pngegg.com/pngimages/704/688/png-clipart-google-google.png'}
					height={48}
					width={48}
				/>
			),
			language: [
				'React.js',
				'Express.js',
				'Firebase admin-SDK',
				'Tailwind CSS',
				'Typescript',
				'Node.js',
				'MongoDb',
			],
		},

		{
			name: 'ShoeVista ',
			description:
				'By using this website store, users can choose their favourite footware, and to process the order.',
			url: 'https://github.com/Shivam00002/shoevista',
			homepage: 'https://shoevista.vercel.app/',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pWafZ0JwWBLGBprZTcHjc8ROd2pLfqocIA&s'
					}
					height={48}
					width={48}
				/>
			),
			language: ['Next.js 13', 'TypeScript', 'Tailwind css'],
		},

		{
			name: 'Shadcn Dashboard',
			description:
				'By using this website users can choose their favourite webinar and book slot.',
			url: 'https://github.com/Shivam00002/react-dashboard',
			homepage: 'https://react-dashboard-eight-ashy.vercel.app',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOVEp_HYIMWVJBHgCIz3gOi2Jt4A8ueLvuA&s'
					}
					height={48}
					width={48}
				/>
			),
			language: ['React-Vite', 'TypeScript', 'Tailwind css', 'Shadcn'],
		},

		{
			name: 'Webinar',
			description:
				'By using this website users can choose their favourite webinar and book slot.',
			url: 'https://github.com/Shivam00002/webinar',
			homepage: 'https://webinar-ten.vercel.app/',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpmcIulRb9kJJXv4vfhmNkx0wFnLnXRWtEQ&s'
					}
					height={48}
					width={48}
				/>
			),
			language: ['Next.js 13', 'TypeScript', 'Tailwind css', 'Express JS', 'Mongo Db'],
		},

		{
			name: 'Bigbasket-Clone (E-commerce Website)',
			description:
				'By using this website store, users can choose their favourite Items, and to process the order.',
			url: 'https://github.com/Shivam00002/bigbasket-clone',
			homepage: 'https://big-blow.vercel.app/',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ypR2KCJIrOOayN2utw7WTu5nr2RR8Wjp-w&s'
					}
					height={48}
					width={48}
				/>
			),
			language: [
				'Collaborative',
				'React',
				'JavaScript',
				'Redux',
				'CSS',
				'NodeJs',
				'Express',
				'ChakraUi',
			],
		},

		{
			name: 'Aqua-shop (E-commerce Website)',
			description:
				'This Project was a collaborative project build by team of 5 members in 5 days. It is an E-commerce website.',
			url: 'https://github.com/NarayandasGanesh/Aquashop.com/tree/main/shop',
			homepage: 'https://tranquil-granita-3b97e2.netlify.app/',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNml9rYcq7-Mons108l6IletjpwjNAIhPhPg&s'
					}
					height={40}
					width={48}
				/>
			),
			language: ['Collaborative', 'React', 'JavaScript', 'CSS', 'ChakraUi'],
		},
		{
			name: 'Tata Cliq-Clone (E-commerce Website)',
			description:
				'This Project was a collaborative project build by team of 5 members in 5 days. It is an E-commerce website',
			url: 'https://github.com/blackcode1996/Tata-Cliq-clone',
			homepage: 'https://formalclick.netlify.app/',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKrPaK3pU1Q1sQIIcgRDiAIqFOKo0Mkgfjw&s'
					}
					height={40}
					width={48}
				/>
			),
			language: ['Collaborative', 'React', , 'JavaScript', 'Redux', 'CSS', 'ChakraUi'],
		},
		{
			name: 'Licious-Clone ',
			description: 'This is a clone of Licious with it  simple and eye-cathcing UI.',
			url: 'https://github.com/Shivam00002/radioactive-lip-3578',
			homepage: 'https://subtle-piroshki-2fe672.netlify.app/',
			icon: (
				<Image
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8vpugTdWVzgmZ0VVDcja_WI6kGSmngaDqQ&s'
					}
					height={50}
					width={48}
				/>
			),
			language: ['Collaborative', 'HTML', 'CSS', 'JavaScript', 'ES-6', 'LocalStorage'],
		},
	];

	return (
		<Layout.Default seo={{ title: 'Shivam ─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects?.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									key={index}
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: []),
										{
											type: ListActionType.LINK,
											href: project.url,
											icon: 'feather:github',
											label: 'GitHub Repository',
										},
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
									language={project.language}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
