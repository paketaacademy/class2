import app from './index.js'

const { DOOR } = process.env

app.listen(DOOR, ()=>{
    console.log('Server on')
})