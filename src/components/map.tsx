import mmrgl from 'mmr-gl'
import {useEffect} from 'react'
import 'mmr-gl/dist/mmr-gl.css'
import {ENV} from '@/env'

export const Map = ({children, ...props}: any) => {
	useEffect(() => {
		console.log('Map-xyap')
		mmrgl.accessToken = ENV.VKMAPSAPIKEY

		const map = new mmrgl.Map({
			container: 'map',
			zoom: 8,
			center: [37.6165, 55.7505],
			style: 'mmr://api/styles/main_style.json',
			hash: false,
		})

		return () => {
			if (map) map.remove()
		}
	}, [])

	return (
		<div
			id="map"
			style={{width: '900px', height: '300px', position: 'relative'}}
		>
			{children}
		</div>
	)
}
