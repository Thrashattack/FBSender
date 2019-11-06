module.exports = app => {
    app.route('/')
        .get(app.controller.controller.get)
        .post(app.controller.controller.post)
}