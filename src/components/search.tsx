import {useApiStore} from '@/store/useApiStore'
import {Icon24Filter, Icon24Cancel, Icon24Done} from '@vkontakte/icons'
import {
	usePlatform,
	Group,
	Search,
	Cell,
	Footer,
	PanelHeader,
	Platform,
	PanelHeaderBack,
	SimpleCell,
	Avatar,
	SplitLayout,
	ModalRoot,
	ModalPage,
	ModalPageHeader,
	PanelHeaderButton,
	FormItem,
	SelectMimicry,
	Radio,
	SplitCol,
	View,
	Panel,
} from '@vkontakte/vkui'
import {ChangeEventHandler, FC, Fragment, useEffect, useRef, useState, useTransition} from 'react'
import {mockSearchData} from '@/models'
const thematics = [
	{id: 3201, name: 'Аренда автомобилей'},
	{id: 3273, name: 'Автотовары'},
	{id: 3205, name: 'Автосалон'},
	{id: 3282, name: 'Автосервис'},
	{id: 3283, name: 'Услуги для автовладельцев'},
	{id: 3284, name: 'Велосипеды'},
	{id: 3285, name: 'Мотоциклы и другая мототехника'},
	{id: 3286, name: 'Водный транспорт'},
	{id: 3287, name: 'Автопроизводитель'},
	{id: 3288, name: 'Автомойка'},
	{id: 3117, name: 'Автошкола'},
	{id: 3118, name: 'Детский сад'},
	{id: 3119, name: 'Гимназия'},
	{id: 3120, name: 'Колледж'},
	{id: 3121, name: 'Лицей'},
	{id: 3122, name: 'Техникум'},
	{id: 3123, name: 'Университет'},
	{id: 3124, name: 'Школа'},
	{id: 3125, name: 'Институт'},
	{id: 3126, name: 'Обучающие курсы'},
	{id: 3276, name: 'Дополнительное образование'},
	{id: 3275, name: 'Тренинг, семинар'},
	{id: 3127, name: 'Танцевальная школа'},
]

interface Filter {
	filter?: {
		sort: string
		query: string
	}
	setFilter?: React.Dispatch<React.SetStateAction<{sort: string; query: string}>>
	inputValue: string
	setInputValue: React.Dispatch<React.SetStateAction<string>>

	query: {q: string; _page: string; _order: string; _sort: string; _limit: string}
	setQuery: React.Dispatch<
		React.SetStateAction<{q: string; _page: string; _order: string; _sort: string; _limit: string}>
	>
}

// Интпут. Пишу текст. с задержкой отсылаю запрос Кириллу. Они мне присылает ТИП1: Упрощенная инфа, только названия
// Когда кликаю, то отсылается запрос на подробную информацию об объекте, Она отображается в нижней части.

// Лэйаут будет менять в зависимости от того, где мы находимся

//

export const SimpleSearch: FC = () => {
	const setQ = useApiStore.use.setQ()

	const [visibleQ, setVisibleQ] = useState<string>(useApiStore.use.q())
	const [searchRes, setSearchRes] = useState<mockSearchData[]>([])
	const filters = useApiStore.use.filters()

	const data: mockSearchData[] = [
		{
			id: 1,
			name: 'Севкабель',
			coords: '12.123443,15.123125',
		},
		{
			id: 2,
			name: 'Аннеса',
			coords: '12.123443,15.123125',
		},
		{
			id: 3,
			name: 'Аннекирхе',
			coords: '12.123443,15.123125',
		},
		{
			id: 4,
			name: 'Севчик',
			coords: '12.123443,15.123125',
		},
		{
			id: 5,
			name: 'Авангард',
			coords: '12.123443,15.123125',
		},
		{
			id: 6,
			name: 'Сева',
			coords: '12.123443,15.123125',
		},
	]

	const fakeData = () => data.filter((place) => place.name.toLowerCase().indexOf(visibleQ.toLowerCase()) > -1)

	useEffect(() => {
		const TypingDelay = 200
		let timer = setTimeout(() => {
			if (visibleQ) {
				setQ(visibleQ)
				setSearchRes(fakeData())
				console.log(visibleQ)
			} else {
				setSearchRes([])
			}
		}, TypingDelay)

		return () => clearTimeout(timer)
	}, [visibleQ])

	return (
		<Group
			padding="s"
			style={{maxWidth: '300px', padding: "0"}}
		>
			<Search
				value={visibleQ}
				onChange={(e) => setVisibleQ(e.target.value)}
				after
			/>
			{searchRes.length > 0 && searchRes.map((res) => <Cell key={res.id}>{res.name}</Cell>)}
			{searchRes.length === 0 && !!visibleQ.length && <Cell>Ничего не найдено</Cell>}
		</Group>
	)
}
