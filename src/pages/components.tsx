import {FC} from 'react'
import {CardGrid, Div, Group, Headline, NavIdProps, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui'

import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {MeroCard} from './MeroCard'

const CardVariation = [
	{
		title: 'Концерт',
		subtitle: '4.8',
		header: 'Выступление Певца',
		text: 'Последний в этом сезоне, для вас выступает <вставьте имя певца>! Заключительный концерт во всероссийском туре.',
		caption: 'СПб, А2 Green',
		url: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		type: 'mero',
	},

	{
		title: 'Кофейня',
		subtitle: '4.8',
		header: 'Пара чашек',
		text: 'Молодая кофейня за ближайшим дубом',
		caption: 'СПб, Гражданский пр., ближайший к метро Дуб',
		url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		type: 'org',
	},

	{
		title: 'Место',
		subtitle: '4.8',
		header: 'Парк Дубовый',
		text: 'Красивое место для прогулок и отдыха',
		caption: 'СПб, колодец двора в центре',
		url: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		type: 'place',
	},
]

export const Components: FC<NavIdProps> = (props) => {
	const router = useRouteNavigator()

	return (
		<Panel {...props}>
			{/* <PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Карточки</PanelHeader> */}

			<Group>
				<CardGrid size="l">
					{CardVariation.map((card, key) => {
						return (
							<MeroCard
								key={key}
								title={card.title}
								subtitle={card.subtitle}
								header={card.header}
								text={card.text}
								caption={card.caption}
								url={card.url}
								type={card.type}
							/>
						)
					})}
				</CardGrid>
			</Group>
		</Panel>
	)
}
