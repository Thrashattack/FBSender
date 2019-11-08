module.exports = app => {
    app.route('/')
        .get(app.src.controller.controller.get)
    app.route('/v1/sender')
        .post(app.src.controller.controller.post)
        .get(app.src.controller.controller.info)
}