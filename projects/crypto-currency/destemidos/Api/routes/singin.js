import app from "./app_export.js";

app.get('/singin', function (req, res) {
    res.send('Usar para o login dos usuarios')

})

export default app