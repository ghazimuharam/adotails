'use strict'

class HomeController {

    index({ request, response, view }){
        return view.render('landing.index', { nama:"ghazi" })
    }
}

module.exports = HomeController
