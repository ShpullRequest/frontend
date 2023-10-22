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
		const TypingDelay = 100
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
