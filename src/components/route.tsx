import {FC} from 'react'
import {
	Div,
	Group,
	Headline,
	HorizontalCell,
	HorizontalScroll,
	MiniInfoCell,
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	PanelHeaderButton,
	Platform,
	SimpleCell,
	Title,
	usePlatform,
} from '@vkontakte/vkui'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {Map} from '@/components/map'
import {
	Icon28PawOutline,
	Icon28ChevronRightOutline,
	Icon28CompassOutline,
	Icon28ErrorOutline,
	Icon20CommunityName,
	Icon20GestureOutline,
	Icon20WriteOutline,
} from '@vkontakte/icons'
import {Content} from '@/components/content'
import { Banners } from '@/const'
import { Components } from '@/pages'
import { BannerMain } from './BannerMain'

export const Route: FC<NavIdProps> = (props) => {
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
			<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Сценарий</PanelHeader>
			<Map minified />
			<Content>
				<Div>
					<MiniInfoCell
						before={<Icon20GestureOutline />}
						textWrap="full"
					>
						<Title
							level="2"
							weight="2"
						>
							{'Название маршрута'}
						</Title>
					</MiniInfoCell>
					<MiniInfoCell
						before={<Icon20CommunityName />}
						textWrap="full"
					>
						{'Описание этого замечательного маршрута'}
					</MiniInfoCell>
					<MiniInfoCell
						before={<Icon20WriteOutline />}
						textWrap="full"
					>
						{'Создатель'}
					</MiniInfoCell>
				</Div>
								<Div>
					<Headline
						level="1"
						weight="2"
					>
						Открывайте новое
					</Headline>
				</Div>

				<HorizontalScroll
					showArrows
					getScrollToLeft={(i) => i - 120}
					getScrollToRight={(i) => i + 120}
				>
					{Banners.map((banner, key) => {
						return (
							<>
								<HorizontalCell size="l">
									<BannerMain
										key={key}
										//@ts-ignore
										header={banner.title}
										subheader={banner.subtitle}
										url={banner.url}
									/>
								</HorizontalCell>
							</>
						)
					})}
				</HorizontalScroll>

				<Div>
					<Headline
						level="1"
						weight="2"
					>
						Рекомендуем посетить
					</Headline>
				</Div>
				<Components />
			</Content>
		</Panel>
	)
}
