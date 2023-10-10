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
    infoView = "info",
    persikPanel = "/persik",
    homePanel = "/",
    componentsPanel = "/components",
    infoPanel = "/info",
}

export const routes = RoutesConfig.create([
    createRoot("root", [
      createView(URL.homeView, [
        createPanel(URL.homePanel, URL.homePanel, []),
        createPanel(URL.persikPanel, URL.persikPanel, []),
        createPanel(URL.componentsPanel, URL.componentsPanel, []),
      ]),
      createView(URL.infoView, [
        createPanel(URL.infoPanel, URL.infoPanel, []),
      ])
    ]),
  ])

export const router = createHashRouter(routes.getRoutes())