# Facebook Message Sender API

# Instalação 

* Requisito: Node.js >= v10

> npm i 

# .env

* Define o token da API , apenas restrito ao tamanho máximo de URL. 
* Deve estar na raiz do projeto

> module.exports = "SEU_TOKEN"


# Produção 
* pm2 daemon 

> npm run prod <br />
> npm run prod_stop 


# Desenvolvimento
* nodemon 

> npm run dev

# Testes 
* axios 

> npm run test

# Exemplo de Uso 

* POST - /v1/sender?token=SEU_TOKEN

```javascript
    { 
        "ids": ["maria.joana", "carlos.antonio", "pedro.paulo"],
        "msg": "Vem pro churraso sábado!",
        "login": "seu login facebook",
        "pass": "sua senha facebook"
    }
```

* HTTP 200 - Ok 
```javascript
    {
        status: 200,
        data: "3 Message(s) was sent !!"
    }
```

# Erros

* HTTP 403 - Forbidden 

```javascript 
    {
        status: 403,
        data: "You are NOT Authenticated. IP was registered."
    }
```

* HTTP 400 - Bad Request

```javascript 
    {
        status: 400,
        data: "Erro!, verifique credenciais e autorizações do perfil"
    }
```

* HTTP 500 - Interal Server Error 

```javascript 
    {
        status: 500,
        data: "Erro!, Mensagem ${StackTrace}"
    }
```

# DevOps 

* Atualizar pra ultima versão 
<br />
> $ git pull 


* Reiniciar serviço da API (Produção)
<br />
> $ pm2 restart main.js 
 ou 
<br />
> $ npm run prod_restart 


* Iniciar o servidor de desenvolvimento (Necessário parar o produção ou alterar a porta em main.js)
<br />
> $ npm run dev 

* Ao alterar o código 
<br />
> $ git add .
<br />
> $ git commit -m "O que foi alterado?" 
<br />
> $ git push 




