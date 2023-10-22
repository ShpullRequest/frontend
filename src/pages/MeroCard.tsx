import {FC} from 'react'
import React from 'react'
import {useModalStore} from '@/store'
import {Icon28Like} from '@vkontakte/icons'
import {ContentCard, GroupProps, NavIdProps, Platform, WriteBarIcon, usePlatform} from '@vkontakte/vkui'
import './MeroCard.css'

interface ContentsForCard extends GroupProps {
	title: string
	subtitle: string
	header: string
	text: string
	caption: string
	url: string
	type: string
}

export const MeroCard = ({title, subtitle, header, text, caption, url, type}: ContentsForCard) => {
	const cardStyle: React.CSSProperties = {
		position: 'relative',
	}

	const platform = usePlatform()

	const cardIconStyle: React.CSSProperties = {
		position: 'absolute',
		top: platform !== Platform.VKCOM ? 'unset' : '15px',
		right: '20px',
		zIndex: '100',
	}

	const setModal = useModalStore.use.setModal()
	const setCurrentCardInfo = useModalStore.use.setCardModalData()

	// TODO: после запросов обязательно передавать в currentcardinfo все хуйни про карточку, приходящую с апишки
	return (
		<>
			<ContentCard
				style={cardStyle}
				src={url}
				alt="Picture of person's left hand with pink paint"
				subtitle={subtitle}
				header={header}
				text={text}
				caption={caption}
				maxHeight={500}
				onClick={() => {
					setCurrentCardInfo({
						src: url,
						subtitle: subtitle,
						header: header,
						text: text,
						caption: caption,
						type: type,
						title: title,
					})
					setModal('TestModalCard')
				}}
			/>
			<WriteBarIcon
				aria-label="Добавить в избранное"
				style={cardIconStyle}
				type="button"
			>
				<Icon28Like />
			</WriteBarIcon>
		</>
		// <Group
		// 	className="card"
		// 	mode="card"
		// 	style={cardStyle}
		// >
		// 	<Div className="card__img">
		// 		<Image
		// 			borderRadius="l"
		// 			size={96}
		// 			src="https://images.unsplash.com/photo-1573152958734-1922c188fba3?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		// 		/>
		// 	</Div>
		// 	<Group
		// 		className="card__description"
		// 		style={cardDescriptionStyle}
		// 		mode="plain"
		// 	>
		// 		<Header
		// 			mode="primary"
		// 			// size="l"
		// 		>
		// 			Название места/меро/организации
		// 		</Header>

		// 		<Group header={<Header mode="secondary">Настройки</Header>}>
		// 			<SimpleCell
		// 				Component="label"
		// 				after={<Switch defaultChecked />}
		// 			>
		// 				Сжимать фотографии
		// 			</SimpleCell>
		// 			<SimpleCell
		// 				Component="label"
		// 				after={<Switch />}
		// 			>
		// 				Сжимать видео
		// 			</SimpleCell>
		// 		</Group>
		// 	</Group>
		// </Group>

		// <ContentCard
		// 	style={cardStyle}
		// 	disabled
		// 	src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
		// 	alt="Picture of person's left hand with pink paint"
		// 	subtitle="unsplash"
		// 	header="Person's left hand with pink paint"
		// 	text="Five hours of makeup and paint to achieve the human anatomy photoshoot. Thank you Steph and Shay. See more and official credit on @jawfox.photography."
		// 	caption="Photo by Alexander Jawfox on Unsplash"
		// 	maxHeight={500}
		// />
	)
}
