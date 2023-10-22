import {send} from '@vkontakte/vk-bridge'

export const AppInit = () => {
  // @ts-ignore
  send('VKWebAppShowSlidesSheet', {
    slides: [
      {
        media: {
          blob: 'data:image/png;base64,[IMAGE_DATA]',
          type: 'image'
        },
        title: 'Ваш ключ к развлечениям!',
        subtitle: 'Добро пожаловать в EventHive - вашему новому проводнику в мир развлечений и открытий вокруг вас.' +
          ' Подготовьтесь к невероятным приключениям!'
      },
      {
        media: {
          blob: 'data:image/png;base64,[IMAGE_DATA]',
          type: 'image'
        },
        title: 'Ваша неусидчивость - топливо для EventHive',
        subtitle: 'Ищите и находите ближайшие мероприятия, отличные места для посещения и вкусную еду, всё в одном месте!'
      },
      {
        media: {
          blob: 'data:image/png;base64,[IMAGE_DATA]',
          type: 'image'
        },
        title: 'Попробуй работу с Призмой Восприятия!',
        subtitle: 'Используйте "Призму восприятия", чтобы настроить ваш опыт и находить именно то, что вас интересует!'
      },
      {
        media: {
          blob: 'data:image/png;base64,[IMAGE_DATA]',
          type: 'image'
        },
        title: 'Путешествуйте с друзьями',
        subtitle: 'С приложением [Имя вашего приложения] вы можете делиться своими планами с друзьями,' +
          ' исследовать вместе новые места и создавать незабываемые моменты!'
      },
      {
        media: {
          blob: 'data:image/png;base64,[IMAGE_DATA]',
          type: 'image'
        },
        title: ' Давайте начнем!',
        subtitle: 'Вперед к новым вызовам и приключениям!'
      }
    ]})
    .then((data) => {
      if (data!.result) {
        // Слайды показаны
      }
    })
    .catch((error) => {
      // Ошибка
      console.log(error);
    });
}