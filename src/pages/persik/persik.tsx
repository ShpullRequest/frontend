import { FC } from 'react'

import {
  Div,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui'

import './persik.css'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

export const Persik: FC<NavIdProps> = (props) => {
  const router = useRouteNavigator()

  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>
        Персик
      </PanelHeader>

      <Group>
        <Div>
          <img className="Persik" src="/persik.png" />
        </Div>
      </Group>
    </Panel>
  )
}
