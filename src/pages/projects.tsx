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
			homepage: 'https://google-keeps-lovat.vercel.app/',
			icon: (
				<Image
					src={'https://cdn-icons-png.flaticon.com/128/2965/2965358.png'}
					height={48}
					width={48}
				/>
			),
			language: ['Next.js 13', 'GraphQL', 'Apollo Client', 'Tailwind CSS', 'Typescript'],
		},


		{
			name: 'ShoeVista ',
			description:
				'By using this website store, users can choose their favourite footware, and to process the order.',
			url: 'https://github.com/Shivam00002/shoevista',
			homepage: 'https://shoevista.vercel.app/',
			icon: (
				<Image
					src={'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww'}
					height={48}
					width={48}
				/>
			),
			language: [
				
				'Next.js 13',
				'TypeScript',
				'Tailwind css',
				
			],
		},





		{
			name: 'Bigbasket-Clone (E-commerce Website)',
			description:
				'By using this website store, users can choose their favourite Items, and to process the order.',
			url: 'https://github.com/Shivam00002/bigbasket-clone',
			homepage: 'https://big-blow.vercel.app/',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/0*jZE_N0ak40Vl3rLf.png'}
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
					src={'https://cdn-images-1.medium.com/max/1600/1*uuUl2A-aEjYm3F0Tks4Erw.png'}
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
					src={'https://cdn-images-1.medium.com/max/1600/1*uuUl2A-aEjYm3F0Tks4Erw.png'}
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
					src={'https://cdn-images-1.medium.com/max/1600/0*tfVXz6dFq7ksnK5E.jpg'}
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
