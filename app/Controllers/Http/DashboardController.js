'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Report = use('App/Models/Report')

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
    return view.render('admin.article')
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
   async setting ({ request, response, view }) {
    return view.render('admin.setting')
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
