import {FC, useEffect} from 'react'
import {useActionRef} from '@/hooks'
import {
	Icon24Spinner,
	Icon28ArticleOutline,
	Icon28CancelCircleOutline,
	Icon28CheckCircleOutline,
	Icon28ChevronRightOutline,
	Icon28CompassOutline,
	Icon28ErrorOutline,
	Icon28GhostOutline,
	Icon28PawOutline,
	Icon28WarningTriangleOutline,
} from '@vkontakte/icons'
import {send} from '@vkontakte/vk-bridge'
import {
	Avatar,
	Gradient,
	Group,
	NavIdProps,
	Panel,
	PanelHeader,
	Platform,
	ScreenSpinner,
	SimpleCell,
	Text,
	Title,
	usePlatform,
} from '@vkontakte/vkui'
import {classNamesString} from '@vkontakte/vkui/dist/lib/classNames'
import {classNamesString} from '@vkontakte/vkui/dist/lib/classNames'

import {ErrorSnackbar, SimpleSearch, SuccessSnackbar} from '@/components'
import {useModalStore, usePopoutStore, useSnackbarStore, useUserStore} from '@/store'

import './home.css'
import {TestActionSheet, TestAlert, TestModalCard} from '@/popouts'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {Map} from '@/components/map'

export const Home: FC<NavIdProps> = (props) => {
	const platform = usePlatform()
	const platform = usePlatform()

	const user = useUserStore.use.user()
	const setUser = useUserStore.use.setUser()
	const setSnackbar = useSnackbarStore.use.setSnackbar()
	const clearPopout = usePopoutStore.use.clearPopout()
	const user = useUserStore.use.user()
	const setUser = useUserStore.use.setUser()
	const setSnackbar = useSnackbarStore.use.setSnackbar()
	const clearPopout = usePopoutStore.use.clearPopout()
	const setPopout = usePopoutStore.use.setPopout()
	const setModal = useModalStore.use.setModal()

	const {setActionRefHandler} = useActionRef(() => setPopout(<TestActionSheet />))
	const {setActionRefHandler} = useActionRef(() => setPopout(<TestActionSheet />))

	useEffect(() => {
		send('VKWebAppGetUserInfo').then((value) => setUser(value))
		console.log(window.location.href)
	}, [])
	useEffect(() => {
		send('VKWebAppGetUserInfo').then((value) => setUser(value))
		console.log(window.location.href)
	}, [])

	const setLoadingScreenSpinner = () => {
		setPopout(<ScreenSpinner state="loading" />)
		setTimeout(clearPopout, 2000)
	}
	const setLoadingScreenSpinner = () => {
		setPopout(<ScreenSpinner state="loading" />)
		setTimeout(clearPopout, 2000)
	}

	const router = useRouteNavigator()
	const router = useRouteNavigator()

	return (
		<Panel {...props}>
			<Map>
				<div style={{position: 'absolute', zIndex: '1020123', width: '100%'}}>
					<div style={{padding: '20px 30px 0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<SimpleSearch />
						<div style={{display: 'flex', gap: "20px", alignItems: 'center'}}>
							<Icon28SlidersOutline />
							<Avatar
								src={user?.photo_100}
								size={28}
							/>
						</div>
					</div>
				</div>
			</Map>

			<Group style={{backgroundColor: 'transparent'}}>
				<Group mode="plain">
					<SimpleCell
						before={<Icon28PawOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(URL.persikPanel)}
					>
						Перейти к Персику
					</SimpleCell>

					<SimpleCell
						before={<Icon28CompassOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(URL.componentsPanel)}
					>
						Перейти к компонентам
					</SimpleCell>
					<SimpleCell
						before={<Icon28CompassOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(URL.componentsPanel)}
					>
						Перейти к компонентам
					</SimpleCell>

					<SimpleCell
						before={<Icon28ErrorOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(`/abobus`)}
					>
						Перейти к 404 странице
					</SimpleCell>
				</Group>
			</Group>
					<SimpleCell
						before={<Icon28ErrorOutline />}
						after={<Icon28ChevronRightOutline />}
						onClick={() => router.push(`/abobus`)}
					>
						Перейти к 404 странице
					</SimpleCell>
				</Group>
			</Group>

			<Group>
				<SimpleCell
					before={<Icon28GhostOutline />}
					onClick={() => setModal('TestModalCard')}
				>
					Показать модальную карточку
				</SimpleCell>
			</Group>
			<Group>
				<SimpleCell
					before={<Icon28GhostOutline />}
          onClick={() => {
            console.log(Добавляем в глобальный стейт)
            setModal('TestModalCard')
          }}
				>
					Показать модальную карточку
				</SimpleCell>
			</Group>

			<Group>
				<SimpleCell
					before={<Icon28ArticleOutline />}
					onClick={setActionRefHandler}
				>
					Показать действия
				</SimpleCell>
			<Group>
				<SimpleCell
					before={<Icon28ArticleOutline />}
					onClick={setActionRefHandler}
				>
					Показать действия
				</SimpleCell>

				<SimpleCell
					before={<Icon28WarningTriangleOutline />}
					onClick={() => setPopout(<TestAlert />)}
				>
					Показать предупреждение
				</SimpleCell>
				<SimpleCell
					before={<Icon28WarningTriangleOutline />}
					onClick={() => setPopout(<TestAlert />)}
				>
					Показать предупреждение
				</SimpleCell>

				<SimpleCell
					before={<Icon24Spinner width={28} />}
					onClick={setLoadingScreenSpinner}
				>
					Показать экран загрузки
				</SimpleCell>
			</Group>
				<SimpleCell
					before={<Icon24Spinner width={28} />}
					onClick={setLoadingScreenSpinner}
				>
					Показать экран загрузки
				</SimpleCell>
			</Group>

			<Group>
				<SimpleCell
					before={<Icon28CheckCircleOutline />}
					onClick={() => setSnackbar(<SuccessSnackbar>Произошёл успех</SuccessSnackbar>)}
				>
					Показать добрый снекбар
				</SimpleCell>
			<Group>
				<SimpleCell
					before={<Icon28CheckCircleOutline />}
					onClick={() => setSnackbar(<SuccessSnackbar>Произошёл успех</SuccessSnackbar>)}
				>
					Показать добрый снекбар
				</SimpleCell>

				<SimpleCell
					before={<Icon28CancelCircleOutline />}
					onClick={() => setSnackbar(<ErrorSnackbar>Произошла ошибка</ErrorSnackbar>)}
				>
					Показать злой снекбар
				</SimpleCell>
			</Group>
		</Panel>
	)
				<SimpleCell
					before={<Icon28CancelCircleOutline />}
					onClick={() => setSnackbar(<ErrorSnackbar>Произошла ошибка</ErrorSnackbar>)}
				>
					Показать злой снекбар
				</SimpleCell>
			</Group>
		</Panel>
	)
}
