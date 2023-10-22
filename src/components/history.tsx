import {FC} from 'react'
import {NavIdProps, Panel, PanelHeader, PanelHeaderBack, usePlatform} from '@vkontakte/vkui'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {Map} from '@/components/map'
import {Content} from '@/components/content'

export const History: FC<NavIdProps> = (props) => {
	const platform = usePlatform()
	const router = useRouteNavigator()
	return (
		<Panel {...props}>
			{/* {platform !== Platform.VKCOM && <PanelHeader>Prisma</PanelHeader>} */}
			<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>История</PanelHeader>
			<Map minified />
			<Content></Content>
		</Panel>
	)
}
