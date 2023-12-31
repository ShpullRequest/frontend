import {RoutesConfig, createHashRouter, createPanel, createRoot, createView} from '@vkontakte/vk-mini-apps-router'

// Будем обращаться к маршрутам через переменные, чтобы избежать мисспелов
export enum URL {
	homeView = 'home',
	personalProfileView = 'personalProfile',
	organizationProfileView = 'organizationProfile',

	homePanel = '/',
	personalPanel = '/personal',
	organizationPanel = '/organization',
	filtersPanel = '/filters',
	prizmaPanel = '/prizma',
	routePanel = '/route',
	favoritesPanel = '/favorites',
	historyPanel = '/history',
	locationPanel = '/location',

	// old delete later
	persikPanel = '/persik',
	componentsPanel = '/components',
	infoPanel = '/info',
	testGPTPanel = '/test',
	testGPTView = 'testGPT',
}

export const routes = RoutesConfig.create([
	createRoot('root', [
		createView(URL.homeView, [
			createPanel(URL.homePanel, URL.homePanel, []), // Тут основной интерфейс, в который приходит то, что мы отображаем в конкретный момент. Тут будут все кнопочки, блоки и логика
			createPanel(URL.componentsPanel, URL.componentsPanel, []),
			createPanel(URL.organizationPanel, URL.organizationPanel, []),
			createPanel(URL.prizmaPanel, URL.prizmaPanel, []),
			createPanel(URL.routePanel, URL.routePanel, []),
			createPanel(URL.favoritesPanel, URL.favoritesPanel, []),
			createPanel(URL.filtersPanel, URL.filtersPanel, []),
			createPanel(URL.historyPanel, URL.historyPanel, []),
			createPanel(URL.locationPanel, URL.locationPanel, []),
			createPanel(URL.personalPanel, URL.personalPanel, []), // Тут страница пользователя
		]),
	]),
])

export const router = createHashRouter(routes.getRoutes())
