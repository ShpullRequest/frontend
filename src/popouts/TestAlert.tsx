import {FC} from 'react'

import {Alert, NavIdProps} from '@vkontakte/vkui'
import {usePopoutStore} from '@/store'

export const TestAlert: FC<NavIdProps> = () => {
	const clearPopout = usePopoutStore.use.clearPopout()

	return (
		<Alert
			actions={[
				{
					title: 'Отмена',
					autoClose: true,
					mode: 'cancel',
				},
				{
					title: 'Да',
					autoClose: true,
					mode: 'default',
				},
			]}
			actionsLayout="horizontal"
			onClose={clearPopout}
			header="Подтверждение действия"
			text="Вы уверены, что вам стоило открывать это предупреждение?"
		/>
	)
}
