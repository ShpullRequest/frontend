import {FC} from 'react'
import {Div, Headline, HorizontalCell, HorizontalScroll, NavIdProps, Panel, PanelHeader, PanelHeaderBack, usePlatform} from '@vkontakte/vkui'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {Map} from '@/components/map'
import {Content} from '@/components/content'
import { Banners } from '@/const'
import { BannerMain } from './BannerMain'

export const Favorites: FC<NavIdProps> = (props) => {
	const platform = usePlatform()
	const router = useRouteNavigator()
	return (
		<Panel {...props}>
			{/* {platform !== Platform.VKCOM && <PanelHeader>Prisma</PanelHeader>} */}
			<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Избранное</PanelHeader>
			<Map minified />
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
			</Content>
		</Panel>
	)
}
