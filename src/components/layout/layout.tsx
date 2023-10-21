import {FC, useEffect} from 'react'

import {
	Epic,
	ModalRoot,
	PanelHeader,
	Platform,
	Root,
	SplitCol,
	SplitLayout,
	View,
	useAdaptivityConditionalRender,
	usePlatform,
} from '@vkontakte/vkui'

import {Components, Home, Info, Persik} from '@/pages'
import {TestModalCard} from '@/popouts'

import {LayoutNav} from './nav'
import {LayoutSidebar} from './sidebar'
import {LayoutTabbar} from './tabbar'

import './layout.css'
import {useModalStore, usePopoutStore, useSnackbarStore} from '@/store'
import {useActiveVkuiLocation} from '@vkontakte/vk-mini-apps-router'
import {URL} from '@/router'
import {User} from '@pages/user'

export const Layout: FC = () => {
	const platform = usePlatform()
	const popout = usePopoutStore.use.popout()
	const snackbar = useSnackbarStore.use.snackbar()
	const modal = useModalStore.use.modal()
	// const clearModal = useModalStore.use.clearModal()
	/** Получаем текущую позицию */
	const {panelsHistory, view: activeView, panel: activePanel} = useActiveVkuiLocation()
	const {viewWidth} = useAdaptivityConditionalRender()
	// Отрисовка всей навигации производится в роутере через передачу Id в  поля по типу activeModal
	// Если я не хочу иметь какую-то конкретную ссылку на popout или modal. Я могу глобально передавать id в корневой компонент

	useEffect(() => {
		console.log(panelsHistory)
	}, [panelsHistory])

	useEffect(() => {
		console.log(modal)
	}, [modal])
	return (
		<SplitLayout
			header={platform !== Platform.VKCOM && <PanelHeader separator={false} />}
			modal={
				<ModalRoot
					activeModal={modal}
					// onClose={clearModal}
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
					</View>
					<View
						activePanel={activePanel || URL.personalPanel}
						nav={URL.personalProfileView}
						history={panelsHistory}
					>
						<User nav={URL.personalPanel} />
					</View>
				</Root>

				{snackbar}
			</SplitCol>
		</SplitLayout>
	)
}
