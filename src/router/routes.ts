import {RoutesConfig, createHashRouter, createPanel, createRoot, createView} from '@vkontakte/vk-mini-apps-router'

// Будем обращаться к маршрутам через переменные, чтобы избежать мисспелов
export enum URL {
	homeView = 'home',
	personalProfileView = 'personalProfile',
	organizationProfileView = 'organizationProfile',

	homePanel = '/',
	personalPanel = '/personal',
	organizationPanel = '/organization',

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
			createPanel(URL.testGPTPanel, URL.testGPTPanel, []),
		]),
		createView(URL.personalProfileView, [
			createPanel(URL.personalPanel, URL.personalPanel, []), // Тут страница пользователя
		]),
		createView(URL.organizationProfileView, [
			createPanel(URL.organizationPanel, URL.organizationPanel, []), // Тут страница организатора
		]),
	]),
])

export const router = createHashRouter(routes.getRoutes())
