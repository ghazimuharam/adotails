'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = new User()
    user.username = 'admin'
    user.email = 'admin@hygeia.io'
    user.password = 'admin@123'

    await user.save()
  }
}

module.exports = UserSeeder
