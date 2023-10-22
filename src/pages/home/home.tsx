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
	usePlatform,
} from '@vkontakte/vkui'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {Map} from '@/components/map'
import {Icon28PawOutline, Icon28ChevronRightOutline, Icon28CompassOutline, Icon28ErrorOutline} from '@vkontakte/icons'
import {Content} from '@/components/content'

export const Home: FC<NavIdProps> = (props) => {
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
			<Content>
				<Group separator="hide">
					<Div>
						<Headline
							level="2"
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
				</Group>
				<Group>
					<Div>
						<Headline
							level="2"
							weight="2"
						>
							Жилье
						</Headline>
					</Div>
					<CardGrid size="s">
						<Card>
							<div style={{paddingBottom: '92%'}} />
						</Card>
						<Card>
							<div style={{paddingBottom: '92%'}} />
						</Card>
						<Card>
							<div style={{paddingBottom: '92%'}} />
						</Card>
					</CardGrid>
				</Group>
				<Group mode="plain">
					<SimpleCell
						before={<Icon28PawOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(URL.persikPanel)}
					>
						Перейти к Персику
					</SimpleCell>

					<SimpleCell
						before={<Icon28CompassOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(URL.componentsPanel)}
					>
						Перейти к компонентам
					</SimpleCell>

					<SimpleCell
						before={<Icon28ErrorOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(`/abobus`)}
					>
						Перейти к 404 странице
					</SimpleCell>
				</Group>
			</Content>
		</Panel>
	)
}
