'use strict'

const User = use('App/Models/User')
const View = use('View')

class UserController {

    async index({ request, response, view }){
        const user = await User.where({'id': 1}).first()
        return view.render('index', { data: user })
    }

}

module.exports = UserController
