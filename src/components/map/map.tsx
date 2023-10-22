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
import {parseCoordinates} from '@/helpers'

interface Map extends React.HTMLAttributes<HTMLDivElement> {
	isPanelNav?: boolean
	minified?: boolean
}

export const Map = ({isPanelNav = false, minified = false, ...props}: Map) => {
	const user = useUserStore.use.user()
	const selectedGeo = useUserStore.use.selectedGeo()
	const router = useRouteNavigator()
	const platform = usePlatform()

	var userPointData = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [37.6165, 55.7505],
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [37.4165, 55.7505],
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [37.6165, 55.8505],
				},
			},
		],
	}

	// Map Будет всегда отображать значки, если они есть глобальном стейте
	// В зависомости от того, что мы хотим отобразить: Список точек или маршрут, мы будем отсылать
	// запросы к SDK
	useEffect(() => {
		mmrgl.accessToken = ENV.VKMAPSAPIKEY

		const map = new mmrgl.Map({
			container: 'map',
			zoom: 8,
			center: selectedGeo ? parseCoordinates(selectedGeo) : [37.4165, 55.7505],
			style: 'mmr://api/styles/main_style.json',
			hash: false,
		})

		map.on('load', () => {
			map.loadImage('https://maps.vk.com/api/styles/pins/blue_target.png', function (error: any, image: any) {
				if (error) throw error
				map.addImage('custom_pin', image)
				map.addLayer({
					id: 'points',
					type: 'symbol',
					source: {
						type: 'geojson',
						data: userPointData,
					},
					layout: {
						'icon-image': 'custom_pin',
						'icon-size': 1,
					},
				})
			})
		})

		return () => {
			if (map) map.remove()
		}
	}, [])

	// Мобильное и десктопное отображение для полей
	return platform !== Platform.VKCOM ? (
		<div
			id="map"
			className={minified ? 'mapLayout--mobMini' : 'mapLayout--mob'}
		>
			<div className="mapNavWrapper">
				<div className="mapNav--mob">{isPanelNav && <SimpleSearch mobile={true} />}</div>
			</div>
			{/* <Avatar
				className="mapNavButton"
				style={{cursor: 'pointer'}}
				size={40}
				fallbackIcon={<Icon28LocationOutline />}
				src="#"
				gradientColor={5}
				withBorder={false}
			/> */}
		</div>
	) : (
		<div
			id="map"
			className={minified ? 'mapLayoutMini' : 'mapLayout'}
		>
			<div className="mapNavWrapper">
				<div className="mapNav">
					{isPanelNav && <SimpleSearch mobile={false} />}
					<Group separator="hide">
						<div
							className="navIconWrapper"
							style={{borderRadius: '10px'}}
						>
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
								fallbackIcon={
									<Icon28SlidersOutline
										width={24}
										height={24}
									/>
								}
								src="#"
							/>
						</div>
					</Group>
				</div>
			</div>
			{/* <Avatar
				className="mapNavButton"
				style={{cursor: 'pointer'}}
				size={40}
				fallbackIcon={<Icon28LocationOutline />}
				src="#"
				gradientColor="blue"
			/> */}
		</div>
	)
}
