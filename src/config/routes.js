module.exports = app => {
    app.route('/')
        .get(app.src.controller.controller.get)
        .post(app.src.controller.controller.post)
}