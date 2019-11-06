const login = require("facebook-chat-api");
module.exports = app => {
    send = (ids, msg, login, pass) => {
        login({ email: login, password: pass }, (err, api) => {
            if (err) return console.error(err);
            if (ids.length == 1) {
                const yourID = ids[0];
                api.sendMessage(msg, yourID);
                // const msg = {
                //     body: "Hey!",
                //     attachment: fs.createReadStream(__dirname + '/image.jpg')
                // }
            } else {
                for (i = 0; i < ids.length; i++) {
                    const yourID = ids[i];
                    api.sendMessage(msg, yourID);
                }
            }
        });
    }
}