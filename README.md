# Развернуть окружение проекта
## Клонировать текущий репозиторий
* git clone git@gitlab.tigrio.ru:a.r.v/web-app-kit-webpack.git MyApp
* cd MyApp

## Реинициализировать Git
* rm -rf .git
* git init
* git remote add origin git@gitlab.tigrio.local:tigrio/my-app.git
* git add *
* git commit -m "Initialized with Web App Kit Webpack"
* git push -u origin/master


## Cоздать новую страницу или компонент
* Для страницы в консоли перейти в папку pages, написать makevue pageName (название страницы)
* Для страницы в консоли перейти в папку components, написать makevue comnonentName (название компонента)

## Заголовок проекта
Открыть файл index, найти title, внутри него написать название проекта

# web-app-kit-webpack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

