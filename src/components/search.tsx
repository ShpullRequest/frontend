import {useApiStore} from '@/store/useApiStore'
import {Cell, Group, Search, useAppearance} from '@vkontakte/vkui'
import {useEffect, useState} from 'react'
import {mockSearchData} from '@/models'

// Интпут. Пишу текст. с задержкой отсылаю запрос Кириллу. Они мне присылает ТИП1: Упрощенная инфа, только названия
// Когда кликаю, то отсылается запрос на подробную информацию об объекте, Она отображается в нижней части.

// Лэйаут будет менять в зависимости от того, где мы находимся

//

export const SimpleSearch = ({mobile}: any) => {
	const setQ = useApiStore.use.setQ()

	const [visibleQ, setVisibleQ] = useState<string>(useApiStore.use.q())
	const [searchRes, setSearchRes] = useState<mockSearchData[]>([])
	const appearance = useAppearance()

	const data: mockSearchData[] = [
		{
			id: 1,
			name: 'ВДНХ',
			coords: '12.123443,15.123125',
		},
		{
			id: 2,
			name: 'Красная Площадь',
			coords: '12.123443,15.123125',
		},
		{
			id: 3,
			name: 'Музей современного искусства МАРС',
			coords: '12.123443,15.123125',
		},
		{
			id: 4,
			name: 'Московский зоопарк',
			coords: '12.123443,15.123125',
		},
		{
			id: 5,
			name: 'Москвариум',
			coords: '12.123443,15.123125',
		},
		{
			id: 6,
			name: 'Александровский сад',
			coords: '12.123443,15.123125',
		},
		{
			id: 7,
			name: 'Эрмитаж',
			coords: '12.123443,15.123125',
		},
		{
			id: 8,
			name: 'Парк искусств Музеон',
			coords: '12.123443,15.123125',
		},
		{
			id: 9,
			name: 'Московский планетарий',
			coords: '12.123443,15.123125',
		},

	]

	const fakeData = () => data.filter((place) => place.name.toLowerCase().indexOf(visibleQ.toLowerCase()) > -1)

	useEffect(() => {
		const TypingDelay = 100
		let timer = setTimeout(() => {
			if (visibleQ) {
				setQ(visibleQ)
				setSearchRes(fakeData())
			} else {
				setSearchRes([])
			}
		}, TypingDelay)

		return () => clearTimeout(timer)
	}, [visibleQ])

	const pick = (res: any) => {
		console.log(res)
		setVisibleQ('')
	}

	return (
		<Group
			id="searchField"
			separator="hide"
			style={{maxWidth: mobile ? '100%' : '50%', padding: 0}}
		>
			<Search
				// noPadding={true}
				value={visibleQ}
				onChange={(e) => setVisibleQ(e.target.value)}
			/>
			{searchRes.length > 0 &&
				searchRes.map((res) => (
					<Cell
						onClick={() => pick(res)}
						style={{backgroundColor: appearance === 'dark' ? '#19191A' : 'white'}}
						key={res.id}
					>
						{res.name}
					</Cell>
				))}
			{searchRes.length === 0 && !!visibleQ.length && (
				<Cell
					disabled
					style={{backgroundColor: appearance === 'dark' ? '#19191A' : 'white'}}
				>
					Ничего не найдено
				</Cell>
			)}
		</Group>
	)
}
