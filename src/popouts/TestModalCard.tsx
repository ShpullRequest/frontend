import {FC} from 'react'
import React from 'react'

import {Fragment} from 'react'

import {Icon20ArticleOutline, Icon24Cancel, Icon24Done, Icon28Like} from '@vkontakte/icons'
import {
	Button,
	Card,
	CardScroll,
	Cell,
	ContentCard,
	Group,
	HorizontalScroll,
	List,
	MiniInfoCell,
	ModalPage,
	ModalPageHeader,
	NavIdProps,
	PanelHeaderButton,
	Platform,
	Separator,
	Tabs,
	TabsItem,
	WriteBarIcon,
	usePlatform,
} from '@vkontakte/vkui'
import {useModalStore} from '@/store'
import {MeroCard} from '@/pages/MeroCard'

// TODO: после получения запросов и всякой шняги добавить логику подгрузки и шняги с самоопределением типа карточки и показывания доп. иконок и функций!!!
//Починить кнопку для спец действия (фиксированную)
export const TestModalCard: FC<NavIdProps> = (props) => {
	const clearModal = useModalStore.use.clearModal()
	// const cardModalData = useModalStore.use.cardModalData()
	const setModal = useModalStore.use.setModal()
	// const [mode, setMode] = React.useState('default')
	const [selected, setSelected] = React.useState('paths')
	const platform = usePlatform()

	// const cardIconStyle: React.CSSProperties = {

	// }

	const fixedStyles: React.CSSProperties = {
		position: 'fixed',
		bottom: '3px',
		left: '0',
		right: '0',
		zIndex: '10',
	}

	// const data = useModalStore.use.cardModalData()

	return (
		<ModalPage
			onClose={clearModal}
			{...props}
		>
			{platform !== Platform.VKCOM && (
				<ModalPageHeader
					before={
						<WriteBarIcon
							aria-label="Добавить в избранное"
							// style={cardIconStyle}
							type="button"
						>
							<Icon28Like />
						</WriteBarIcon>
					}
					after={
						<Fragment>
							{(platform === Platform.ANDROID || platform === Platform.VKCOM) && (
								<PanelHeaderButton onClick={clearModal}>
									<Icon24Done />
								</PanelHeaderButton>
							)}
							{platform === Platform.IOS && <PanelHeaderButton onClick={clearModal}>Готово</PanelHeaderButton>}
						</Fragment>
					}
				>
					Залоговок
				</ModalPageHeader>
			)}
			{/* <Group> */}
			<Card>
				<img
					src="https://images.unsplash.com/photo-1573152958734-1922c188fba3?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Picture of person's left hand with pink paint"
					style={{maxHeight: '300px'}}
				/>
			</Card>
			{/* </Group> */}

			<Separator />

			<ContentCard
				// style={cardStyle}
				subtitle="тут рейтинг"
				header="Тут название"
				text="Тут оПисАНие"
				caption="ТУТ АДРЕС"
				maxHeight={500}
			/>

			<MiniInfoCell
				before={<Icon20ArticleOutline />}
				textWrap="full"
			>
				Самый большой цирк во всем Санкт-Петербурге. Много интересных квестов и заданий, которые не всем по силу. При
				первом заходе на локацию, говорили, что вылетают только птицы, а нихуя...
			</MiniInfoCell>

			<Group>
				<Tabs>
					<HorizontalScroll arrowSize="m">
						<TabsItem
							selected={selected === 'paths'}
							onClick={() => setSelected('paths')}
						>
							Маршруты
						</TabsItem>

						<TabsItem
							selected={selected === 'about'}
							onClick={() => setSelected('about')}
						>
							О событии
						</TabsItem>
						<TabsItem
							selected={selected === 'facts'}
							onClick={() => setSelected('facts')}
						>
							Интересные факты
						</TabsItem>

						<TabsItem
							selected={selected === 'actualEvents'}
							onClick={() => setSelected('actualEvents')}
						>
							Актуал.
						</TabsItem>

						<TabsItem
							// before={mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />}
							status={23}
							selected={selected === 'reviews'}
							onClick={() => setSelected('reviews')}
						>
							Отзывы
						</TabsItem>

						<TabsItem
							// before={mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />}
							status={23}
							selected={selected === 'otherEvents'}
							onClick={() => setSelected('otherEvents')}
						>
							Другие события ИЛИ Прош. соб
						</TabsItem>

						<TabsItem
							// before={mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />}
							status={23}
							selected={selected === 'tasks'}
							onClick={() => setSelected('tasks')}
						>
							Задания
						</TabsItem>
					</HorizontalScroll>
				</Tabs>

				<Separator />

				<List>
					<Cell>
						<MeroCard />
					</Cell>
					<Cell>
						<MeroCard />
					</Cell>
					<Cell>
						<MeroCard />
					</Cell>
				</List>
			</Group>

			<div style={fixedStyles}>
				<Separator />
				<Button
					align="center"
					stretched
					size="m"
				>
					Какое-то действие
				</Button>
			</div>
		</ModalPage>
	)
}
