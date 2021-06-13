'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Report = use('App/Models/Report')
const Article = use('App/Models/Article')
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Resourceful controller for interacting with dashboards
 */
class DashboardController {
  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const total_user = await User.all()
    const open_report = await Report.where({status: 1}).fetch()
    const close_report = await Report.where({status: 0}).fetch()

    const stats = {total_user: total_user.toJSON().length, open_report: open_report.toJSON().length, close_report: close_report.toJSON().length}
    return view.render('admin.dashboard', {stats: stats})
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async article ({ request, response, view }) {
    const articles = await Article.all()

    return view.render('admin.article', {articles: articles.toJSON()})
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async report ({ request, response, view }) {
    const reports = await Report.all()

    return view.render('admin.report', {reports: reports.toJSON()})
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async createSetting ({ request, auth, view }) {
    const user = await auth.user
    return view.render('admin.setting', {user: user.toJSON()})
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async storeSetting ({ request, response, session, auth, view }) {
    const user = await auth.user

    const validPassword = await bcrypt.compare(
      request.body.password, // the plane text password that we get from the client
      user.password,     // the hashed password from our database
    )
    
    if(!validPassword){
      session.flash({failedMessage: 'Invalid password!'})
    }else{
      user.username = request.body.username
      user.email = request.body.email

      await user.save()

      session.flash({successMessage: 'Data has changed!'})
    }
    
    return response.redirect('back')
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async createArticle ({ request, response, view }) {
    return view.render('admin.addArticle')
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async storeArticle ({ request, response, auth, session }) {
    const dataArticle = request.body
    const article = new Article()

    article.authorId = auth.user._id
    article.title = dataArticle.title
    article.article = dataArticle.description
    article.url = dataArticle.url

    await article.save()

    session.flash({successMessage: 'Article added successfully!'})

    return response.redirect('back')
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async createEditArticle ({ request, response, view }) {
    const article = await Article.find(request.params._id)
    return view.render('admin.editArticle', {article: article.toJSON()})
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async storeEditArticle ({ request, response, session }) {
    const article = await Article.find(request.params._id)
    
    article.url = request.body.url
    article.title = request.body.title
    article.article = request.body.description

    await article.save()

    session.flash({successMessage: 'Article edited successfully!'})

    return response.redirect('back')
  }

  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async delArticle ({ request, response, view }) {
    const article = await Article.findOrFail(request.params._id)

    article.delete()

    return response.redirect('back')
  }

  /**
   * Render a form to be used for creating a new dashboard.
   * GET dashboards/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new dashboard.
   * POST dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single dashboard.
   * GET dashboards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing dashboard.
   * GET dashboards/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update dashboard details.
   * PUT or PATCH dashboards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a dashboard with id.
   * DELETE dashboards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DashboardController
