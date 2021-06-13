'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'LandingController.index').as('get.home')
Route.get('/about', 'LandingController.showAbout').as('get.about')
Route.get('/article', 'LandingController.showArticle').as('get.article')
Route.get('/report', 'LandingController.showReport').as('get.report')
Route.post('/report', 'LandingController.storeReport').as('post.report')
Route.get('/send', 'LandingController.successReport').as('get.successreport')

Route
    .group(() => {
        Route.get('/login', 'UserController.index').as('get.login')
        Route.post('/login', 'UserController.authenticate').as('post.login')
    }).middleware(['guest'])

Route
    .group(() => {
        Route.get('/dashboard', 'DashboardController.index').as('get.dashboard')
        Route.get('/dashboard/articles', 'DashboardController.article').as('get.dashboard.article')
        Route.get('/dashboard/addArticle', 'DashboardController.addArticle').as('get.dashboard.addArticle')
        Route.get('/dashboard/editArticle', 'DashboardController.editArticle').as('get.dashboard.editArticle')
        Route.get('/dashboard/delArticle', 'DashboardController.delArticle').as('get.dashboard.delArticle')
        Route.get('/dashboard/report', 'DashboardController.report').as('get.dashboard.report')
        Route.get('/dashboard/setting', 'DashboardController.setting').as('get.dashboard.setting')
        Route.get('/logout', 'UserController.destroy').as('post.logout')
        Route.get('/me', 'UserController.me')
    }).middleware(['auth'])
