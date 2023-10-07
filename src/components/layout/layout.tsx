import {FC, useEffect} from 'react'

import {Epic, Match, View, block, matchPopout, replace, useParams} from '@itznevikat/router'
import {PanelHeader, Platform, ScreenSpinner, SplitCol, SplitLayout, usePlatform, ModalRoot} from '@vkontakte/vkui'

import {Components, Fallback, Home, Info, Persik} from '../../pages'
import {TestModalCard} from '@/popouts'

import {LayoutNav} from './nav'
import {LayoutSidebar} from './sidebar'
import {LayoutTabbar} from './tabbar'

import './layout.css'
import {TestService} from '@/services'
import {testValidation, TestPayload} from '@/models'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useModalStore, usePopoutStore, useSnackbarStore} from '@/store'

export const Layout: FC = () => {
	const platform = usePlatform()
	const popout = usePopoutStore.use.popout()
	const setPopout = usePopoutStore.use.setPopout()
	const snackbar = useSnackbarStore.use.snackbar()
  const modal = useModalStore.use.modal()

	const queryClient = useQueryClient()
	const {isLoading, isError, data, mutate} = useMutation({
		mutationKey: ['test'],
		mutationFn: (testPayload: TestPayload) => {
			setPopout(<ScreenSpinner state="loading" />)
			return TestService.test(testPayload)
		},
		onSuccess: (data) => {
			console.log(data)
		},
		onError: (error) => {
			console.error('there was an error', error)
		},
		onSettled: () => {
		  setPopout(null)
			queryClient.invalidateQueries({queryKey: ['test']})
		},
	})

	// Мы имеем вохсожность использовать функцию mutate в люой части кода
	// isLoading можно использовать для отрисовки лоадера
	// data для отображения результата
	useEffect(() => {
		if (!testValidation.safeParse({email: 'rik2>'}).success) {
			return console.error('Произошла ошибка при валидации. Запрос не будет отправлен')
		}
		mutate({email: 'rikk@gmail.com'})
	}, [])

	return (
		<Match fallbackURL="/404">
			<SplitLayout
				header={platform !== Platform.VKCOM && <PanelHeader separator={false} />}
				modal={
					<ModalRoot activeModal={modal}>
						<TestModalCard id="TestModalCard" />
					</ModalRoot>
				}
				/* eslint-disable react/jsx-key */
				popout={popout}
				aria-live="polite"
				aria-busy={!!popout}
			>
				<SplitCol
					autoSpaced
					width={650}
					maxWidth={650}
				>
					<Epic
						nav="/"
						tabbar={
							platform !== Platform.VKCOM && (
								<LayoutTabbar>
									<LayoutNav mode="tabbarItem" />
								</LayoutTabbar>
							)
						}
					>
						<View nav="/">
							<Home nav="/" />
							<Persik nav="/persik" />
							<Components nav="/components" />

							<Fallback nav="/404" />
						</View>

						<View nav="/info">
							<Info nav="/" />
						</View>
					</Epic>

					{snackbar}
				</SplitCol>

				{platform === Platform.VKCOM && (
					<LayoutSidebar>
						<LayoutNav mode="cell" />
					</LayoutSidebar>
				)}
			</SplitLayout>
		</Match>
	)
}
