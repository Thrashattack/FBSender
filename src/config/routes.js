module.exports = app => {
    app.route('/')
        .post(app.src.controller.controller.post)
    // app.route('/v1/sender')
    //     .post(app.src.controller.controller.post)
    //     .get(app.src.controller.controller.info)
}