import {FC} from 'react'
import React from 'react'

import {Fragment} from 'react'

import {
	Icon20AddCircleOutline,
	Icon20ArticleOutline,
	Icon20LinkCircleOutline,
	Icon24Done,
	Icon24SadFaceOutline,
	Icon28Like,
} from '@vkontakte/icons'
import {
	Button,
	Card,
	Cell,
	ContentCard,
	Div,
	Group,
	GroupProps,
	HorizontalScroll,
	List,
	MiniInfoCell,
	ModalPage,
	ModalPageHeader,
	NavIdProps,
	PanelHeaderButton,
	Placeholder,
	Platform,
	Separator,
	SimpleCell,
	Tabs,
	TabsItem,
	UsersStack,
	WriteBarIcon,
	usePlatform,
} from '@vkontakte/vkui'

import {MeroCard} from '@/pages/MeroCard'

interface ContentsForModalParams extends GroupProps {
	selected?: string
}

const card = {
	title: 'Концерт',
	subtitle: '4.8',
	header: 'Выступление Певца',
	text: 'Последний в этом сезоне, для вас выступает <вставьте имя певца>! Заключительный концерт во всероссийском туре.',
	caption: 'СПб, А2 Green',
	url: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	type: 'mero',
}

export const ContentsForModalCard = ({selected = 'placeholder'}: ContentsForModalParams) => {
	return (
		<>
			{selected === 'actualEvents' && (
				<List>
					<Cell>
						<MeroCard
							title={card.title}
							subtitle={card.subtitle}
							header={card.header}
							text={card.text}
							caption={card.caption}
							url={card.url}
							type={card.type}
						/>
					</Cell>
					<Cell>
						<MeroCard
							title={card.title}
							subtitle={card.subtitle}
							header={card.header}
							text={card.text}
							caption={card.caption}
							url={card.url}
							type={card.type}
						/>
					</Cell>
					<Cell>
						<MeroCard
							title={card.title}
							subtitle={card.subtitle}
							header={card.header}
							text={card.text}
							caption={card.caption}
							url={card.url}
							type={card.type}
						/>
					</Cell>
				</List>
			)}

			{(selected === 'placeholder' || 'paths' || 'facts' || 'reviews' || 'lastEvents') && (
				<>
					<Placeholder icon={<Icon24SadFaceOutline />}>Ой, контент пока в разработке!</Placeholder>
				</>
			)}
		</>
	)
}
