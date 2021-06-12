'use strict'

const User = use('App/Models/User')

class UserController {

    async index({ request, view }){
        return view.render('login')
    }

    async authenticate({request, response, auth}){
        const requestData = request.body

        await auth.attempt(requestData.email, requestData.password)
        
        return response.route('get.dashboard')
    }

    async destroy({auth, response}){
        await auth.logout()

        return response.route('get.login')
    }
}

module.exports = UserController
