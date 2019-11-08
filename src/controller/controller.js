const Token = require('../../.env');
module.exports = app => {
    get = (req, res) => {
        if (req.query.token == Token) {
            res.status(200);
            res.send("Facebook Send API is Ready! You are Authenticated.");
            res.end();
            return;
        } else {
            res.status(200);
            res.send("Facebook Send API is Ready! However... You are NOT Authenticated.");
            res.end();
        }
    }
    post = (req, res) => {
        if (req.query.token == Token) {

            app.src.service.FBSender(req.body.ids, req.body.msg, req.body.login, req.body.pass, (result) => {
                if (result == 0) {
                    console.log("Erro 400 result = 0")
                    res.status(400)
                    res.send("Erro!, verifique credenciais e autorizações do perfil");
                    res.end();
                    return;
                } else if (result.error) {
                    console.log("Erro 500 result with error")
                    res.status(500)
                    res.send("Erro! Mensagem:" + result.error);
                    res.end();
                    return;
                } else {
                    console.log("Sucesso")
                    res.status(200);
                    res.send(result + " Message(s) was sent !!");
                    res.end();
                    return;
                }
            });

        } else {
            res.status(403);
            res.send("You are NOT Authenticated. IP was registered.");
            res.end();
        }
    }
    return { get, post }
}