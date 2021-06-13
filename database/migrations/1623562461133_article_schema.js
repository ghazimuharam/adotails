'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('authorId')
      table.string('title')
      table.string('article')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
