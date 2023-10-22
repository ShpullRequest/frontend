import {FC} from 'react'
import React from 'react'

import {Fragment} from 'react'

import {
	Icon20AddCircleOutline,
	Icon20ArticleOutline,
	Icon20FollowersOutline,
	Icon20LinkCircleOutline,
	Icon20Stars,
	Icon24Done,
	Icon28Like,
} from '@vkontakte/icons'
import {
	Button,
	Card,
	Cell,
	ContentCard,
	Div,
	Group,
	HorizontalCell,
	HorizontalScroll,
	List,
	MiniInfoCell,
	ModalPage,
	ModalPageHeader,
	NavIdProps,
	PanelHeaderButton,
	Paragraph,
	Platform,
	Separator,
	SimpleCell,
	Tabs,
	TabsItem,
	UsersStack,
	WriteBarIcon,
	usePlatform,
} from '@vkontakte/vkui'
import {useModalStore, useSnackbarStore} from '@/store'
import {ErrorSnackbar, SuccessSnackbar} from '@/components'
import {MeroCard} from '@/pages/MeroCard'
import {ContentsForModalCard} from '@/components/ContentsForModalCard'

// TODO: после получения запросов и всякой шняги добавить логику подгрузки и шняги с самоопределением типа карточки и показывания доп. иконок и функций!!!
//Починить кнопку для спец действия (фиксированную)
export const TestModalCard: FC<NavIdProps> = (props) => {
	const clearModal = useModalStore.use.clearModal()
	// const cardModalData = useModalStore.use.cardModalData()
	const setModal = useModalStore.use.setModal()
	// const [mode, setMode] = React.useState('default')
	const [selected, setSelected] = React.useState('paths')
	const platform = usePlatform()
	const setSnackbar = useSnackbarStore.use.setSnackbar()

	const PlateForMero = () => {
		return (
			<>
				<SimpleCell
					before={
						<Div>
							<UsersStack
								photos={[
									'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
									'https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80&w=1889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
									'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
									'https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80&w=1889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
									'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
								]}
								size="m"
							>
								Иван и ещё 2 ваших друга подписаны
							</UsersStack>
						</Div>
					}
				></SimpleCell>
				<SimpleCell
					after={
						<>
							<WriteBarIcon
								aria-label="Я пойду"
								onClick={() => {
									if (platform === Platform.ANDROID || platform === Platform.VKCOM) {
										clearModal()
									}
									setTimeout(() => {
										setSnackbar(<SuccessSnackbar>Вы успешно отметились на мероприятии!</SuccessSnackbar>)
									}, 1500)
								}}
								type="button"
							>
								<Icon20AddCircleOutline />
							</WriteBarIcon>
							<WriteBarIcon
								aria-label="Поделиться"
								type="button"
								onClick={() => {
									if (platform === Platform.ANDROID || platform === Platform.VKCOM) {
										clearModal()
									}
									setTimeout(() => {
										setSnackbar(<ErrorSnackbar>Что-то пошло не так...</ErrorSnackbar>)
									}, 1500)
								}}
							>
								<Icon20LinkCircleOutline />
							</WriteBarIcon>
						</>
					}
				>
					<Button
						align="left"
						appearance="accent"
						size="s"
						onClick={() => {
							if (platform === Platform.ANDROID || platform === Platform.VKCOM) {
								clearModal()
							}
							setTimeout(() => {
								setSnackbar(<ErrorSnackbar>Что-то пошло не так...</ErrorSnackbar>)
							}, 1500)
						}}
					>
						Купить билеты
					</Button>
				</SimpleCell>
			</>
		)
	}

	const PlateForOrganization = () => {
		return (
			<>
				<SimpleCell
					after={
						<>
							<WriteBarIcon
								aria-label="Поделиться"
								type="button"
								onClick={() => {
									if (platform === Platform.ANDROID || platform === Platform.VKCOM) {
										clearModal()
									}
									setTimeout(() => {
										setSnackbar(<ErrorSnackbar>Что-то пошло не так...</ErrorSnackbar>)
									}, 1500)
								}}
							>
								<Icon20LinkCircleOutline />
							</WriteBarIcon>
						</>
					}
				>
					<Button
						align="left"
						appearance="accent"
						size="s"
						onClick={() => {
							if (platform === Platform.ANDROID || platform === Platform.VKCOM) {
								clearModal()
							}
							setTimeout(() => {
								setSnackbar(<ErrorSnackbar>Что-то пошло не так...</ErrorSnackbar>)
							}, 1500)
						}}
					>
						Подписаться
					</Button>
				</SimpleCell>
				<SimpleCell
					before={
						<MiniInfoCell
							before={<Icon20FollowersOutline />}
							after={
								<UsersStack
									photos={[
										'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
										'https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80&w=1889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
										'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
										'https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80&w=1889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
									]}
								/>
							}
						>
							514,7K подписчиков · 77 друзей
						</MiniInfoCell>
					}
				></SimpleCell>
			</>
		)
	}

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

			{/* <PlateForMero /> */}
			{/* <PlateForOrganization /> */}
			{/* ToDO: Закинуть только для мероприятий */}

			{/* <Separator /> */}

			<ContentCard
				header={
					<MiniInfoCell
						before="Название"
						after={
							<HorizontalCell>
								<Paragraph>4.7</Paragraph>
								<Icon20Stars />
							</HorizontalCell>
						}
					></MiniInfoCell>
				}
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
					<HorizontalScroll>
						<HorizontalCell>
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
								Другие события
							</TabsItem>

							<TabsItem
								// before={mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />}
								status={23}
								selected={selected === 'lastEvents'}
								onClick={() => setSelected('lastEvents')}
							>
								Прош. соб
							</TabsItem>

							<TabsItem
								// before={mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />}
								status={23}
								selected={selected === 'tasks'}
								onClick={() => setSelected('tasks')}
							>
								Задания
							</TabsItem>
						</HorizontalCell>
					</HorizontalScroll>
				</Tabs>
				<Separator />

				<ContentsForModalCard selected={selected} />
			</Group>
		</ModalPage>
	)
}
