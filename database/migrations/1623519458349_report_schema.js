'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.string('location')
      table.string('time')
      table.string('reporter')
      table.string('phone')
      table.integer('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportSchema
