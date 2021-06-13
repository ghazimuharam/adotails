'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Report = use('App/Models/Report')
const Article = use('App/Models/Article')
const { validate } = use('Validator')

/**
 * Resourceful controller for interacting with landings
 */
class LandingController {
  /**
   * Show a list of all landings.
   * GET landings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return view.render('landing.index')
  }

  /**
   * Display a single landing.
   * GET landings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showAbout ({ params, request, response, view }) {
    return view.render('landing.about')
  }

  /**
   * Display a single landing.
   * GET landings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showArticle ({ params, request, response, view }) {
    const articles = await Article.all()

    return view.render('landing.article', {articles: articles.toJSON()})
  }

  /**
   * Display a single landing.
   * GET landings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showReport ({ params, request, response, view }) {
    return view.render('landing.report')
  }

  /**
   * Display a single landing.
   * GET landings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   * @param {Session} ctx.Session
   */
   async storeReport ({ params, request, response, view, session }) {
    const requestData = request.body

    const rules = { 
      title: 'required', 
      description: 'required' 
    }
    
    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        .flashAll()

      session.flash({errorMessage: 'Report not added!'})

      return response.redirect('back')
    }

    const report = new Report()

    report.title = requestData.title
    report.description = requestData.description
    report.location = requestData.location
    report.time = requestData.time
    report.reporter = requestData.reporter
    report.phone = requestData.phone
    report.status = 1
    
    await report.save()

    session.flash({successMessage: 'Report added successfully!'})
    
    return response.route('get.successreport')
  }

  /**
   * Render a form to update an existing landing.
   * GET landings/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async successReport ({ params, request, response, view }) {
     return view.render('landing.send')
  }
}

module.exports = LandingController
