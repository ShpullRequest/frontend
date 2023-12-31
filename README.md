## Explaining the process of creating and using .env files and consts

- Переменные окружения в Vite начинаются с префикса `VITE_`
- Для переменных окружения используется файл `.env.local` (они загружаются в любых случаях и игнорируются git'ом)
- Загруженные env переменные также доступны клиентскому исходному коду через `import.meta.env` (например `import.meta.env.VITE_API_URL;`)
- Файл `env.d.ts` в корне проекта для типизации переменных окружения, это необязательно, но позволит предотвратить часть ошибок, если вы пишете на ts
- если есть файл типизации (пункт выше), то импорт в ts происходит так `const apiUrl: string = import.meta.env.VITE_API_URL;`

## &nbsp;

## Этапы прекоммита и самого коммита

1.  (`npm run lint`/ `npm run format` / `npm run lint:fix`) по желанию
2.  (`npm run prepare`) первый запуск
3.  `git rebase develop` - При выполнении этой команды, Git применяет все коммиты с вашей ветки поверх последнего коммита в ветке `develop`
    (Важно понимать, что перебазирование изменяет историю коммитов. Поэтому, если вы делаете перебазирование ветки, которая уже была опубликована (например, синхронизирована с удаленным репозиторием), будьте осторожны, так как это может привести к проблемам с другими членами команды, использующими эту ветку.)

4.  `git add . `
5.  `npm run commit` (выбор в терминале нужных пунктов и названий, дописывание комментариев)
6.  При необходимости, самостоятельная публикация ветки (если ее еще нет в общем репозитории), либо синхронизация с репозиторием ветки
7.  Создание pull request'а по изменениям и запрос merg'а в ветку develop

## &nbsp;

## Merge при pull request

Чтобы история коммитов была линейной и понятной, при merg'е в pull request'е обязательно выбирайте вариант
Rebase and Merge. Так получится избежать запутывания истории коммитов.

Документация: https://docs.github.com/ru/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github

## &nbsp;

# ВАЖНО!

- Нельзя напрямую отправлять изменения в develop и main, создавайте локальные ветки для изменений, а затем закидывайте их в pull request для merg'a!!!

- Как можно чаще подтягивайте изменения с ветки develop

## &nbsp;

### Порядок подтягивания изменений:

1. Обновите вашу локальную копию основной ветки:
   `git fetch origin develop`
   (Эта команда загрузит последние изменения из удаленного репозитория ветки develop, но не применит их к вашей локальной ветке.)
2. `git rebase origin/develop`
   Эта команда перебазирует вашу ветку на последний коммит из ветки develop.
   Важно помнить, что перебазирование изменяет историю коммитов, поэтому будьте осторожны, если ваша ветка уже была опубликована и использована другими членами команды.

3. Если Git обнаружит конфликты при слиянии или перебазировании, вам придется разрешить их вручную.

4. Коммит
   `git add . `
   `git commit -m "Rebase with develop"`

## &nbsp;

### ИЛИ

1. Использование команды git pull
   `git pull --rebase origin develop` (с перебазированием)

Эта команда сначала выполняет git fetch для загрузки последних изменений из удаленной ветки develop, а затем автоматически объединяет их с вашей текущей веткой.

2. Коммит
   `git add . `
   `git commit -m "Merge (или Rebase) with develop"`

## &nbsp;

Это все позволит избежать появления и накапливания конфликтов)))
