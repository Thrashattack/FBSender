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
    post = (req, res) => {
        if (req.body.token == Token) {
            res.status(200);
            res.send("Facebook Send API is Ready! You are Authenticated.");
            res.end();
        } else {
            res.status(403);
            res.send("You are NOT Authenticated. IP is registered.");
            res.end();
        }
    }
}