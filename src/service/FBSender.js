FB = require("facebook-chat-api");
module.exports = app => {
    return send = (ids, msg, login, pass, callback) => {
        FB({ email: login, password: pass }, (err, api) => {
            count = 0;
            if (err) return err;
            if (ids.length == 1) {
                const yourID = ids[0];
                api.sendMessage(msg, yourID);
                count++;
                // const msg = {
                //     body: "Hey!",
                //     attachment: fs.createReadStream(__dirname + '/image.jpg')
                // }
            } else {
                for (i = 0; i < ids.length; i++) {
                    const yourID = ids[i];
                    api.sendMessage(msg, yourID);
                    count++;
                }
            }
            callback(count);
        });
    }
}