module.exports = {
    entrada: JSON.stringify({
        ids: ["profile.id"],
        msg: "Hello world",
        login: "username",
        pass: "password"
    }),
    entrada_token: JSON.stringify({
        ids: ["profile.id"],
        msg: "Hello world",
        login: "username",
        pass: "password"
    }),
    entrada_get_token: "current.token",
    saida: {
        status: 403,
        data: "You are NOT Authenticated. IP was registered."
    },
    saida_token: {
        status: 200,
        data: "1 Message(s) was sent !!"
    },
    saida_get_token: {
        status: 200,
        data: "Facebook Send API is Ready! You are Authenticated."
    },
    saida_get: {
        status: 200,
        data: "Facebook Send API is Ready! However... You are NOT Authenticated."
    }
}