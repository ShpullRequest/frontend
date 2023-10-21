import {FC} from 'react'
import {CardGrid, Group, NavIdProps, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui'

import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {MeroCard} from './MeroCard'

export const Components: FC<NavIdProps> = (props) => {
	const router = useRouteNavigator()

	return (
		<Panel {...props}>
			<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Карточки</PanelHeader>

			<Group>
				<CardGrid size="l">
					<MeroCard />
				</CardGrid>
			</Group>
		</Panel>
	)
}
