import {FC} from 'react'
import {
	Banner,
	Button,
	CardGrid,
	Group,
	GroupProps,
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderBack,
} from '@vkontakte/vkui'

import {ErrorSnackbar} from '@/components'
import {useSnackbarStore} from '@/store'

import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'

interface ContentsForBanner extends GroupProps {
	header?: string
	subheader?: string
	url?: string
}

export const BannerMain: FC<NavIdProps> = ({header, subheader, url}: ContentsForBanner) => {
	const setSnackbar = useSnackbarStore.use.setSnackbar()
	return (
		<Banner
			mode="image"
			size="s"
			header={header}
			subheader={
				<span>
					{subheader}
					<br />
				</span>
			}
			background={
				<div
					style={{
						opacity: '0.3',
						backgroundColor: '#5b9be6',
						backgroundImage: `url(${url})`,
						backgroundPosition: 'center',
						backgroundSize: '102% auto',
						backgroundRepeat: 'no-repeat',
					}}
				/>
			}
			// asideMode="dismiss"
			actions={
				<Button
					appearance="overlay"
					size="m"
					onClick={() => setSnackbar(<ErrorSnackbar>Что-то пошло не так...</ErrorSnackbar>)}
				>
					Подробнее
				</Button>
			}
		/>
	)
}
