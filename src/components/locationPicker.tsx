import {mockSearchData} from '@/models'
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
								value="moscow"
								defaultChecked
							>
								Москва
							</Radio>
							<Radio
								name="town"
								value="spb"
							>
								Санкт-Петербург
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
			</Group>
		</Panel>
	)
}
