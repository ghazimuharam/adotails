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

    async me({auth}){
        const user = await User.find(auth.user._id)
        const userProfile = await user.articles().fetch()

        return userProfile
    }
}

module.exports = UserController
