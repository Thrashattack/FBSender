const Token = require('../../.env');
module.exports = app => {
    get = (req, res) => {
        if (req.body.token == Token) {
            res.status(200);
            res.send("Facebook Send API is Ready! You are Authenticated.");
            res.end();
        } else {
            res.status(200);
            res.send("Facebook Send API is Ready! However... You are NOT Authenticated.");
            res.end();
        }
    }
    post = async (req, res) => {
        if (req.body.token == Token) {
            const result = await app.src.service.FBSender.send(body.ids, body.msg, body.login, body.pass);
            if (result == 0) {
                res.status(500)
                res.send("Erro!, verifique credenciais e autorizações do perfil.");
                res.end();
            }
            res.status(200);
            res.send(result + " Messages was sent !!");
            res.end();
        } else {
            res.status(403);
            res.send("You are NOT Authenticated. IP was registered.");
            res.end();
        }
    }

    return { get, post }
}