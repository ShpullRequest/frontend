import { FC, useEffect, useState } from 'react'

import { send } from '@vkontakte/vk-bridge'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Platform,
  platform
} from '@vkontakte/vkui'
import { BREAKPOINTS } from '@vkontakte/vkui/dist/shared/breakpoints'

import { Layout } from '../'

import '@vkontakte/vkui/dist/vkui.css'
import './app.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const App: FC = () => {
  // INFO: VKUI не умеет нормально определять desktop вне фрейма,
  // INFO: поэтому если планируете использовать приложение только внутри ВК — этот код можно удалить.
  // INFO: Если определение desktop нужно, но изменять платформу при изменении размеров окна - нет,
  // INFO: то этот код можно удалить и в ConfigProvider прокинуть platform={currentPlatform()}
  const [platform, setPlatform] = useState<Platform>(currentPlatform)

  // INFO: Изменяем платформу при изменении размеров окна
  useEffect(() => {
    const onResize = () => {
      setPlatform(currentPlatform)
    }

    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  // INFO: Отсылаем событие инициализации
  useEffect(() => {
    send('VKWebAppInit')
  }, [])


  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider platform={platform}>
        <AdaptivityProvider>
          <AppRoot>
                <Layout />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

const currentPlatform = () => {
  if (
    window.innerWidth >= BREAKPOINTS.TABLET &&
    window.matchMedia('(orientation: landscape)').matches
  ) {
    return Platform.VKCOM
  }

  return platform() as Platform
}
