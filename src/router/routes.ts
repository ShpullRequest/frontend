import {
    RoutesConfig,
    createHashRouter,
    createPanel,
    createRoot,
    createView,
  } from '@vkontakte/vk-mini-apps-router'

// Будем обращаться к маршрутам через переменные, чтобы избежать мисспелов
export enum URL {
    homeView = "home",
    perosnalProfileView = "perosnalProfile",
    organizationProfileView = "organizationProfile",

    homePanel = "/",
    personalPanel = "/",
    organizationPanel = "/",

    persikPanel = "/persik",

    componentsPanel = "/components",
    infoPanel = "/info",
}

export const routes = RoutesConfig.create([
    createRoot("root", [
      createView(URL.homeView, [ 
        createPanel(URL.homePanel, URL.homePanel, []),  // Тут основной интерфейс, в который приходит то, что мы отображаем в конкретный момент. Тут будут все кнопочки, блоки и логика
        
      ]),
      createView(URL.perosnalProfileView, [ 
        createPanel(URL.organizationProfileView, URL.personalPanel, []), // Тут страница пользователя
      ]),
      createView(URL.homeView, [
        createPanel(URL.organizationPanel, URL.organizationPanel, []), // Тут страница организатора
      ]),
    ]),
  ])

export const router = createHashRouter(routes.getRoutes())