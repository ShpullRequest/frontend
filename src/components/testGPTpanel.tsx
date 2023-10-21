import React from 'react'
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import {
	Card,
	CardGrid,
	Checkbox,
	FormItem,
	FormLayoutGroup,
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	// ModalPage,
	Search,
	Select,
	SelectMimicry,
} from '@vkontakte/vkui'

const SearchBar: React.FC = () => (
	<FormLayoutGroup>
		<Search />
	</FormLayoutGroup>
)

const CategoryFilters: React.FC = () => (
	<FormLayoutGroup>
		<SelectMimicry>
			<Select
				placeholder="Выберите категорию"
				options={[]}
			/>
		</SelectMimicry>
	</FormLayoutGroup>
)

const SmallIconsBlock: React.FC = () => (
	<CardGrid>
		<Card>Icon 1</Card>
		<Card>Icon 2</Card>
		{/* ... Добавь еще 4 карточки с иконками */}
	</CardGrid>
)

const ExpandableFilters: React.FC = () => (
	<FormLayoutGroup>
		<FormItem>
			<Checkbox>Фильтр 1</Checkbox>
			<Checkbox>Фильтр 2</Checkbox>
			{/* ... Добавь еще несколько чекбоксов */}
		</FormItem>
	</FormLayoutGroup>
)

const EntertainmentCards: React.FC = () => (
	<CardGrid>
		<Card>История 1</Card>
		<Card>История 2</Card>
		{/* ... Добавь еще карточки историй */}
	</CardGrid>
)

// const ModalContent: React.FC = () => <ModalPage>{/* Здесь покажи контент модалки */}</ModalPage>

const TestGPTPanel: React.FC<NavIdProps> = (props) => {
	const router = useRouteNavigator()

	return (
		<Panel {...props}>
			<PanelHeader before={<PanelHeaderBack onClick={() => router.back()} />}>Фильтры</PanelHeader>
			<SearchBar />
			<CategoryFilters />
			<SmallIconsBlock />
			<ExpandableFilters />
			<EntertainmentCards />
			{/* В зависимости от действий пользователя, показывай ModalContent */}
		</Panel>
	)
}

export default TestGPTPanel
