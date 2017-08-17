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


#### Для того, чтобы создать новую страницу необходимо в консоле перейти в папку pages и написать makevue "pageName"
#### Для того, чтобы создать компонент необходимо сделать то же самое, только в папке components

# Развернуть окружение проекта
## Клонировать текущий репозиторий
git clone git@gitlab.tigrio.ru:a.r.v/web-app-kit-webpack.git MyApp
cd MyApp

## Реинициализировать Git
rm -rf .git
git init
git remote add origin git@gitlab.tigrio.local:tigrio/my-app.git
git add *
git commit -m "Initialized with Web App Kit"
git push -u origin/master
