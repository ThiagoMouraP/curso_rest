module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos dando um GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de atendimentos e dando um POST')
    })
}