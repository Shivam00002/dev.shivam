import { useTheme } from 'next-themes';

import { Status } from '~/components';
import { usePersistantState, useStatus } from '~/lib';

import { NavigationItemType, Theme } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticMenuItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:home',
			text: 'Home',
			href: '/',
		},
		// {
		// 	type: NavigationItemType.LINK,
		// 	icon: 'feather:edit-3',
		// 	text: 'Blog',
		// 	href: '/blog',
		// },
		{
			type: NavigationItemType.LINK,
			icon: 'feather:copy',
			text: 'Projects',
			href: '/projects',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:clock',
			text: 'Exprience',
			href: '/exprience',
		},
		// {
		// 	type: NavigationItemType.LINK,
		// 	icon: 'feather:link',
		// 	text: 'Referrals',
		// 	href: '/referrals',
		// },
		{
			type: NavigationItemType.LINK,
			href: '/contact',
			icon: 'material-symbols:contact-page-outline',
			text: 'Contact',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:linkedin',
			text: 'Linkedin',
			href: 'https://www.linkedin.com/in/ankit-panchal-a46ba4242/',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:github',
			text: 'GitHub',
			href: 'https://github.com/ankitpanchaal',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'solar:document-bold',
			text: 'Resume',
			href: 'https://docs.google.com/document/d/1q2IvvZ9HE8OXxETbpondCAYmf7q-IHNcU03jDbq8QMM/edit?usp=sharing',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			external: true,
			icon: "mdi:linkedin",
			href: 'https://www.linkedin.com/in/ankit-panchal-a46ba4242/',
			text: 'Linkedin',
		},
	],
];

export function useNavigation(): {
	menu: NavigationItems;
	settings: NavigationItems;
} {
	const state = usePersistantState();
	const { animations: background, sound } = state.get();
	const { color, loading, status } = useStatus();
	const { theme, setTheme } = useTheme();

	const menuItems: NavigationItems = [
		...staticMenuItems,
		...(!loading && status.discord_status !== 'offline'
			? [
				[
					{
						type: NavigationItemType.LINK,
						icon: <Status.Indicator color={color} pulse />,
						text: 'Status',
						href: '/status',
					} as NavigationItem,
				],
			]
			: []),
	];

	const settingsItems: NavigationItems = [
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:image',
				endIcon: background ? 'feather:check-circle' : 'feather:circle',
				text: `Animations ${background ? 'On' : 'Off'}`,
				onClick: () =>
					state.set((settings) => ({
						...settings,
						animations: !settings.animations,
					})),
			},
			{
				type: NavigationItemType.ACTION,
				icon: sound ? 'feather:volume-2' : 'feather:volume-x',
				endIcon: sound ? 'feather:check-circle' : 'feather:circle',
				text: `Sounds ${sound ? 'On' : 'Off'}`,
				onClick: () =>
					state.set((settings) => ({
						...settings,
						sound: !settings.sound,
					})),
			},
			{
				type: NavigationItemType.DIVIDER,
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:monitor',
				endIcon: theme === Theme.SYSTEM ? 'feather:check-circle' : undefined,
				text: 'System Theme',
				onClick: () => setTheme(Theme.SYSTEM),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:sun',
				endIcon: theme === Theme.LIGHT ? 'feather:check-circle' : undefined,
				text: 'Light Theme',
				onClick: () => setTheme(Theme.LIGHT),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:moon',
				endIcon: theme === Theme.DARK ? 'feather:check-circle' : undefined,
				text: 'Dark Theme',
				onClick: () => setTheme(Theme.DARK),
			},
		],
	];

	return {
		menu: menuItems,
		settings: settingsItems,
	};
}
