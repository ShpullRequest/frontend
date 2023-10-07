import { FC } from 'react'

import { useActionRef } from '@itznevikat/router'
import { ActionSheet, ActionSheetItem, NavIdProps } from '@vkontakte/vkui'
import { usePopoutStore } from '@/store'

export const TestActionSheet: FC<NavIdProps> = () => {
  const { actionRef } = useActionRef()
  const clearPopout = usePopoutStore.use.clearPopout()
  return (
    <ActionSheet
      onClose={clearPopout}
      iosCloseItem={
        <ActionSheetItem autoClose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={actionRef}
    >
      <ActionSheetItem autoClose >Первое действие</ActionSheetItem>
      <ActionSheetItem autoClose>Второе действие</ActionSheetItem>
      <ActionSheetItem autoClose mode="destructive">
        Опасное действие
      </ActionSheetItem>
    </ActionSheet>
  )
}
