import {FC, useEffect} from 'react'

import {
	PanelHeader,
	Platform,
	SplitCol,
	SplitLayout,
	View,
	usePlatform,
} from '@vkontakte/vkui'

import {Components, Home} from '@/pages'
import {TestModalCard} from '@/popouts'

import './layout.css'
import {useModalStore, usePopoutStore, useSnackbarStore} from '@/store'
import {useActiveVkuiLocation} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {User} from '@pages/user'
import {useQuery, useQueryClient} from '@tanstack/react-query'
import {ApiService} from '@/services'
import {LocationPicker} from '@/components'
import {Route} from '../route'
import {Favorites} from '../favorite'
import {Filters} from '../filters'

export const Layout: FC = () => {
	const platform = usePlatform()
	const popout = usePopoutStore.use.popout()
	const setPopout = usePopoutStore.use.setPopout()
	const snackbar = useSnackbarStore.use.snackbar()
	const modal = useModalStore.use.modal()
	const clearModal = useModalStore.use.clearModal()
	// const clearModal = useModalStore.use.clearModal()
	/** Получаем текущую позицию */
	const {panelsHistory, view: activeView, panel: activePanel} = useActiveVkuiLocation()

	useEffect(() => {
		console.log(activeView, activePanel)
	}, [activeView, activePanel])

	// Временно поставлю коммент, чтобы не тратить время на лоадер
	const queryClient = useQueryClient()
	const query = useQuery({
		retryOnMount: false,
		retry: false,
		queryKey: ['user'],
		queryFn: () => {
			setPopout(<ScreenSpinner state="loading" />)
			return ApiService.getUser()
		},
		onSuccess: (data) => {
			console.log(data)
			if (!data) {
				// Тут смотрим на то, прошел ли User onBording
				// Если нет, то запускаем функцию онбординга
			}
			if (!data) {
				// Если у юзера нет инфы о прошлой локации, то открываем Panel с тем, чтобы он выбрал
				// Если инфа имеется, то октрываем приложение (ничего не делаем)
			}
			setPopout(null)

			console.log(data)
		},
		onError: (error) => {
			setPopout(null)
			console.error('there was an error', error)
		},
	})

	return (
		<SplitLayout
			header={platform !== Platform.VKCOM && <PanelHeader separator={false} />}
			modal={
				<ModalRoot
					activeModal={modal}
					onClose={clearModal}
				>
					<TestModalCard id="TestModalCard" />
				</ModalRoot>
			}
			popout={popout}
			aria-live="polite"
			aria-busy={!!popout}
		>
			<SplitCol autoSpaced>
				<Root activeView={activeView || URL.homeView}>
					<View
						activePanel={activePanel || URL.homePanel}
						nav={URL.homeView}
						history={panelsHistory}
					>
						<Home nav={URL.homePanel} />
						<Components nav={URL.componentsPanel} />
						<LocationPicker nav={URL.locationPanel} />
						<Route nav={URL.routePanel} />
						<Favorites nav={URL.favoritesPanel} />
						<Filters nav={URL.filtersPanel} />
					</View>

					<View
						activePanel={activePanel || URL.personalPanel}
						nav={URL.personalProfileView}
						history={panelsHistory}
					>
						<User nav={URL.personalPanel} />
						{/* <LocationPicker nav={URL.locationPanel}/> */}
					</View>
				</Root>

				{snackbar}
			</SplitCol>
		</SplitLayout>
	)
}
