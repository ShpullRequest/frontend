import mmrgl from 'mmr-gl'
import {useEffect} from 'react'
import 'mmr-gl/dist/mmr-gl.css'
import {ENV} from '@/env'
import './map.css'
import {Icon28LocationOutline, Icon28SlidersOutline} from '@vkontakte/icons'
import {Avatar, Group, Platform, Search, usePlatform} from '@vkontakte/vkui'
import {SimpleSearch} from '@/components'
import {useUserStore} from '@/store'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {ContentPanel} from '@/components/content'

interface Map extends React.HTMLAttributes<HTMLDivElement> {
	isPanelNav?: boolean
}

export const Map = ({isPanelNav = false, ...props}: Map) => {
	const user = useUserStore.use.user()
	const router = useRouteNavigator()
	const platform = usePlatform()

	// Map Будет всегда отображать значки, если они есть глобальном стейте
	// В зависомости от того, что мы хотим отобразить: Список точек или маршрут, мы будем отсылать
	// запросы к SDK
	useEffect(() => {
		mmrgl.accessToken = ENV.VKMAPSAPIKEY

		const map = new mmrgl.Map({
			container: 'map',
			zoom: 8,
			center: [30.316229, 59.938732],
			style: 'mmr://api/styles/main_style.json',
			hash: false,
		})

		return () => {
			if (map) map.remove()
		}
	}, [])

	// Мобильное и десктопное отображение для полей
	return platform !== Platform.VKCOM ? (
		<div
			id="map"
			className="mapLayout--mob"
		>
			<div className="mapNavWrapper">
				<div className="mapNav--mob">
					<SimpleSearch mobile={true} />
				</div>
			</div>
			<Avatar
				className="mapNavButton"
				style={{cursor: 'pointer'}}
				size={40}
				fallbackIcon={<Icon28LocationOutline />}
				src="#"
				gradientColor={5}
				withBorder={false}
			/>
			{isPanelNav && <ContentPanel className="mapBottomNav" />}
		</div>
	) : (
		<div
			id="map"
			className="mapLayout"
		>
			<div className="mapNavWrapper">
				<div className="mapNav">
					<SimpleSearch mobile={false} />
					<Group separator="hide">
						<div className="navIconWrapper">
							{/* <Icon28SlidersOutline
								onClick={() => router.push(URL.filtersPanel)}
								style={{cursor: 'pointer'}}
							/> */}
							<Avatar
								src={user?.photo_100}
								size={36}
								onClick={() => router.push(URL.personalPanel)}
								style={{cursor: 'pointer'}}
							/>
							<Avatar
								style={{cursor: 'pointer'}}
								onClick={() => router.push(URL.filtersPanel)}
								size={36}
								fallbackIcon={<Icon28SlidersOutline />}
								src="#"
							/>
						</div>
					</Group>
				</div>
			</div>
			<Avatar
				className="mapNavButton"
				style={{cursor: 'pointer'}}
				size={40}
				fallbackIcon={<Icon28LocationOutline />}
				src="#"
				gradientColor="blue"
			/>
		</div>
	)
}
