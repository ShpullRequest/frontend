import {FC, useEffect} from 'react'

import {
	ModalRoot,
	PanelHeader,
	Platform,
	Root,
	ScreenSpinner,
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
import {History, LocationPicker} from '@/components'
import { Favorites } from '../favorites'
import { Filters } from '../filters'
import { Route } from '../route'

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
						<User nav={URL.personalPanel} />
						<Favorites nav={URL.favoritesPanel} />
						<History nav={URL.historyPanel} />
						<Filters nav={URL.filtersPanel} />
						<Route nav={URL.routePanel} />
					</View>
				</Root>

				{snackbar}
			</SplitCol>
		</SplitLayout>
	)
}
