import { FC } from 'react'
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui'

import { ErrorPlaceholder, VoidPlaceholder } from '@/components'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

export const Components: FC<NavIdProps> = (props) => {
  const router = useRouteNavigator()

  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>
        Компоненты
      </PanelHeader>

      <Group>
        <VoidPlaceholder />
      </Group>

      <Group>
        <ErrorPlaceholder />
      </Group>
    </Panel>
  )
}
