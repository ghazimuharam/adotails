'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const LucidMongo = use('lucid-mongo/src/LucidMongo/Model')

class Article extends LucidMongo {
    static get objectIDs() { return ['_id', 'authorId'] } //default return ['_id']
}

module.exports = Article
