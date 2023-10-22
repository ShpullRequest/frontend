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

export const ContentsForModalCard = ({selected = 'placeholder'}: ContentsForModalParams) => {
	return (
		<>
			{selected === 'actualEvents' && (
				<List>
					<Cell>
						<MeroCard />
					</Cell>
					<Cell>
						<MeroCard />
					</Cell>
					<Cell>
						<MeroCard />
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
