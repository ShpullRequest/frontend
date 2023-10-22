import {mockSearchData} from '@/models'
import {ApiService} from '@/services'
import {useUserStore} from '@/store'
import {Icon28LocationOutline} from '@vkontakte/icons'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {
	NavIdProps,
	usePlatform,
	Panel,
	Platform,
	PanelHeader,
	PanelHeaderBack,
	Search,
	Group,
	Cell,
	useAppearance,
	SimpleCell,
	FormItem,
	FormLayout,
	Radio,
	RadioGroup,
} from '@vkontakte/vkui'
import {FC, useEffect, useState} from 'react'

export const LocationPicker: FC<NavIdProps> = (props) => {
	const platform = usePlatform()
	const router = useRouteNavigator()
	const appearance = useAppearance()
	const selectedGeo = useUserStore.use.selectedGeo()
	const currentGeo = useUserStore.use.currentGeo()
	const setSelectedGeo = useUserStore.use.setSelectedGeo()

	const [visibleQuery, setVisibleQuery] = useState<string>('')
	const [locations, setLocations] = useState<mockSearchData[]>([])

	useEffect(() => {
		const TypingDelay = 100
		let timer = setTimeout(() => {
			if (visibleQuery) {
				let res = ApiService.getlocation({params: {q: visibleQuery}})
				console.log(res)
				setLocations([]) // Получение данных с VKMAPS
			} else {
				setLocations([])
			}
		}, TypingDelay)

		return () => clearTimeout(timer)
	}, [visibleQuery])

	const pick = (res: any) => {
		console.log(res)
		setSelectedGeo(res)
	}

	return (
		<Panel {...props}>
			<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Ваше местоположение</PanelHeader>
			<Group>
				<FormLayout>
					<FormItem top="Ваш город">
						<RadioGroup>
							<Radio
								name="town"
								value="spb"
								defaultChecked
							>
								Санкт-Петербург
							</Radio>
							<Radio
								name="town"
								value="moscow"
							>
								Москва
							</Radio>
							<Radio
								name="town"
								value="rostovnadonu"
							>
								Ростов-на-Дону
							</Radio>
						</RadioGroup>
					</FormItem>
				</FormLayout>
				{/* <Search
					value={visibleQuery}
					onChange={(e) => setVisibleQuery(e.target.value)}
				/>
				{locations.length > 0 &&
					locations.map((res) => (
						<Cell
							onClick={() => pick(res)}
							style={{backgroundColor: appearance === 'dark' ? '#19191A' : 'white'}}
							key={res.id}
						>
							{res.name}
						</Cell>
					))}
				{selectedGeo && !visibleQuery.length && (
					<SimpleCell
						before={<Icon28LocationOutline />}
						style={{backgroundColor: appearance === 'dark' ? '#19191A' : 'white'}}
					></SimpleCell>
				)}
				{locations.length === 0 && !!visibleQuery.length && (
					<Cell
						disabled
						style={{backgroundColor: appearance === 'dark' ? '#19191A' : 'white'}}
					>
						Ничего не найдено
					</Cell>
				)} */}
			</Group>
		</Panel>
	)
}
