import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';
import Image from 'next/image';

// interface ProjectProps {
// 	stringifiedProjects: string;
// }

// export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
// 	const projects = await fetchProjects();

// 	return {
// 		props: {
// 			stringifiedProjects: JSON.stringify(projects),
// 		},
// 		revalidate: 3600,
// 	};
// };

export default function ProjectsPage(): JSX.Element {
	// const projects = JSON.parse(stringifiedProjects) as Array<Project>;
	const projects: Project[] = [
		{
			name: 'Note Keeper (Full stack)',
			description:
				'By using this web app, users can create notes and access them from anywhere because the data is uploaded to the cloud.',
			url: 'https://github.com/ankitpanchaal/note-keeper',
			homepage: 'https://notes-keeper-task.vercel.app/',
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
			name: 'Anime T-Shirts (E-commerce Web App)',
			description:
				'By using this website store, users can choose their favourite anime T-shirts, and to process the order, I have setup WhatsApp API to covert users to connet me and buy .',
			url: 'https://github.com/ankitpanchaal/AnimeStore',
			homepage: 'https://anime-t-shirts.vercel.app/',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/0*jZE_N0ak40Vl3rLf.png'}
					height={48}
					width={48}
				/>
			),
			language: ['Next.js 13', 'Sanity.io', 'GROQ query', 'Tailwind CSS', 'Typescript'],
		},
		{
			name: 'Easy Salon (Client Side -  Mobile App)',
			description:
				'A slot booking app where people can book their slots at registered salons. The app will save users time and serve as a guide for customers looking to book appointments at the best salons. Customers can also see the service price and salon ratings.',
			url: '/private-code',
			homepage:
				'https://drive.google.com/file/d/1zo3BOYHIFjlSAQn6jBcY-2L0szgnVTwo/view?usp=sharing',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/1*uuUl2A-aEjYm3F0Tks4Erw.png'}
					height={40}
					width={48}
				/>
			),
			language: ['React Native', 'GraphQl API', 'Apollo Client', 'Typescript'],
		},
		{
			name: 'Easy Salon (Vendor Side - Mobile App)',
			description:
				'A service provider app where salon owners can list their services and get the orders from interested customers.',
			url: '/private-code',
			homepage:
				'https://drive.google.com/file/d/1zo3BOYHIFjlSAQn6jBcY-2L0szgnVTwo/view?usp=sharing',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/1*uuUl2A-aEjYm3F0Tks4Erw.png'}
					height={40}
					width={48}
				/>
			),
			language: ['React Native', 'GraphQl API', 'Apollo Client', 'Typescript'],
		},
		{
			name: 'I-Sneakers (E-commerce Web App)',
			description:
				' An online platform where I can sell shoes world wide. In this website, users can easily make orders and can search or filter the products by their categories.',
			url: 'https://github.com/ankitpanchaal/isneaker-nextjs',
			homepage: 'https://isneakers.vercel.app/',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/0*tfVXz6dFq7ksnK5E.jpg'}
					height={50}
					width={48}
				/>
			),
			language: ['Next.js 13', 'Stripe', ' React.js', 'Sanity.io', 'GROQ query', 'SCSS'],
		},
		{
			name: 'Tree Store (Web App)',
			description:
				'I designed this website for a college hackathon competition and secured the second position. The competition had a nature theme, and I created a visually appealing, responsive frontend for the website.',
			url: 'https://github.com/ankitpanchaal/svim-hackaton',
			homepage: 'https://svim-hackaton.vercel.app/',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/0*H3QnDrsDAq7PGUN7'}
					height={50}
					width={48}
				/>
			),
			language: ['Next.js 13', ' React.js', 'Tailwind CSS', 'Typescript'],
		},
		{
			name: 'Recipe APP (Mobile App)',
			description: 'Used the edamam API to get recipes and integrate with the frontend',
			url: 'https://github.com/ankitpanchaal/Recipe',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/0*8gbftLka9-UG8efM.jpg'}
					height={50}
					width={48}
				/>
			),
			language: ['React Native', 'Expo', 'Edamam Rest API'],
		},
		{
			name: 'NFT APP (Mobile App)',
			description: 'Desinged Cool Front-end Mobile UI using react native',
			url: 'https://github.com/ankitpanchaal/NFT',
			homepage: 'https://youtube.com/shorts/YwiT7VxjSHY?feature=shared',
			icon: (
				<Image
					src={'https://cdn-images-1.medium.com/max/1600/0*4CvV4KMOt91jRa_4'}
					height={50}
					width={48}
				/>
			),
			language: ['React Native', 'Expo'],
		},
	];

	return (
		<Layout.Default seo={{ title: 'Ankit─ projects' }}>
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
