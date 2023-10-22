import React from 'react'
import {FC} from 'react'
import './home.css'
import {
	Card,
	CardGrid,
	CardScroll,
	Div,
	Group,
	Headline,
	HorizontalCell,
	HorizontalScroll,
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
import {useQuery, useQueryClient} from '@tanstack/react-query'
import {ApiService} from '@/services'
import {BannerMain} from '@/components/BannerMain'
import {Components} from '../components'

const Banners = [
	{
		title: 'SkyView Rentals',
		url: 'https://images.unsplash.com/photo-1625476903534-ae531b76e8c9?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		subtitle:
			'Желаете жить в облаках? SkyView Rentals поможет вам осуществить мечту о жилье с потрясающим видом на городскую панораму. Наши апартаменты предлагают роскошь, комфорт и простор, а также доступ к лучшим видам вашего города. Поднимитесь выше с нами!',
		button: 'Перейти',
	},
	{
		title: 'Urban Dwelling Solutions',
		url: 'https://images.unsplash.com/photo-1694032007593-8ead82259b11?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		subtitle:
			'Urban Dwelling Solutions - это ваш ключ к комфортному городскому образу жизни. Наши жильцы наслаждаются удобствами и доступом ко всему, что делает город привлекательным. Не упустите шанс настроить ваш идеальный городской дом с нами!',
		button: 'Перейти',
	},
	{
		title: 'HarborSide Properties',
		url: 'https://images.unsplash.com/photo-1620332372374-f108c53d2e03?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		subtitle:
			'Приветствуем вас в гавани счастья и комфорта! HarborSide Properties предоставляет вам возможность обнаружить свой уголок счастья в недвижимости. Наши объекты находятся на берегу воды и предоставляют умиротворяющий и уникальный опыт жизни. Поднимите паруса к новой жизни с HarborSide Properties!',
		button: 'Перейти',
	},
	{
		title: 'Солнечное Бистро',
		url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		subtitle:
			'Приглашаем вас на незабываемое путешествие в мир вкусов в Солнечное Бистро. У нас вы найдете уютную атмосферу и изысканные блюда, приготовленные с любовью. Наслаждайтесь яркими вкусами и солнечным настроением в каждой тарелке. Откройте для себя гастрономические радости вместе с нами!',
		button: 'Перейти',
	},
	{
		title: 'Морские вкусы Гавани',
		url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		subtitle:
			'Проникнитесь атмосферой морской Гавани в нашем ресторане. Морские вкусы Гавани - это путь к идеальной гастрономической приключение на берегу океана. У нас вы насладитесь свежими морепродуктами и великолепным видом на море. Погрузитесь в атмосферу путешествия с каждым укусом!',
		button: 'Перейти',
	},
	{
		title: 'Пикантный Скатертью',
		url: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		subtitle:
			'Поднимите страсть к жизни и отправьтесь в кулинарное путешествие с Пикантным Скатертью. Наш ресторан предлагает вам уникальное сочетание пряных и вкусных блюд, которые покорят ваш вкус. Не ограничивайтесь обыденностью, попробуйте что-то новое и захватывающее!',
		button: 'Перейти',
	},
]

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
			{platform !== Platform.VKCOM && <PanelHeader>Prisma</PanelHeader>}
			{/* {platform !== Platform.VKCOM && (
				<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Название страницы</PanelHeader>
			)} */}
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
