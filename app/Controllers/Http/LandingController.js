'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Report = use('App/Models/Report')
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
   * Render a form to be used for creating a new landing.
   * GET landings/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new landing.
   * POST landings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
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
  async show ({ params, request, response, view }) {
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
    return view.render('landing.article')
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

  /**
   * Render a form to update an existing landing.
   * GET landings/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update landing details.
   * PUT or PATCH landings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a landing with id.
   * DELETE landings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LandingController
