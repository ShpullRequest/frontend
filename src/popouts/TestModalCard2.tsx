import { FC } from 'react'

import { Icon56GhostOutline } from '@vkontakte/icons'
import { Button, ModalCard, NavIdProps } from '@vkontakte/vkui'
import { useModalStore } from '@/store'

export const TestModalCard2: FC<NavIdProps> = (props) => {
  const clearModal = useModalStore.use.clearModal()

  return (
    <ModalCard
      {...props}
      onClose={clearModal}
      icon={<Icon56GhostOutline />}
      header="Добро пожаловать gblfhfc"
      subheader="SpbFun - ваш личный гид по развлечениям в Санкт-Петербурге. Поможем вам найти самые интересные маршруты и мероприятия в нашем городе!"
      actions={
        <Button size="l" mode="primary" stretched onClick={clearModal}>
          Интересненько!
        </Button>
      }
    />
  )
}
