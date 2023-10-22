import {FC} from 'react'
import './home.css'
import {
	Card,
	CardGrid,
	CardScroll,
	Div,
	Group,
	Headline,
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	PanelHeaderButton,
	Platform,
	SimpleCell,
	Spacing,
	usePlatform,
} from '@vkontakte/vkui'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {Map} from '@/components/map'
import {Icon28ChevronRightOutline, Icon28CompassOutline, Icon28ErrorOutline, Icon28PawOutline} from '@vkontakte/icons'
import {Content} from '@/components/content'

export const Home: FC<NavIdProps> = (props) => {
	const platform = usePlatform()
	const router = useRouteNavigator()
	return (
		// Меняем панельку в соответствии с нуждами
		// Панелька как минимум плохо работает с IOS. Для Главное не нужна кнопка назад
		// Она НУЖНА там, где будет кнопка назад
		// В before добавляем кнопку назад. Через роутер добавляем ссылку назад

		// В Contet запихиваем контент, который будет в нижней части
		<Panel {...props}>
			{/* {platform !== Platform.VKCOM && <PanelHeader>Prisma</PanelHeader>} */}
			{platform !== Platform.VKCOM && (
				<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Название страницы</PanelHeader>
			)}
			<Map isPanelNav />
			<Spacing size={8}></Spacing>
			<Content>
				<Div>
					<Headline
						level="1"
						weight="2"
					>
						Открывайте новое
					</Headline>
				</Div>
				<CardScroll size="s">
					<Card>
						<div style={{paddingBottom: '66%'}} />
					</Card>
					<Card>
						<div style={{paddingBottom: '66%'}} />
					</Card>
					<Card>
						<div style={{paddingBottom: '66%'}} />
					</Card>
				</CardScroll>
				<Group>Info</Group>
			</Content>
		</Panel>
	)
}
