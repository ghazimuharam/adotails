const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
    const Exception = use('Exception')

    Exception.handle('InvalidSessionException', async (error, {response, session}) => {
        return response.route('get.login')
    })

    Exception.handle('HttpException', async (error, {response, session}) => {
        return response.route('get.dashboard')
    })
})