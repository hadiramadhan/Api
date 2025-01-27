const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())
// routes /url / endpoint utama methods get
app.get('/home', (req,res) =>{
    const sql = "SELECT * FROM name"
    db.query(sql,(error, result) =>{
        // hasil dari mysql
        response(200,result, "get all data from name", res)
    })
}) 
app.get('/utama', (req, res) => {
    const sql = `SELECT nama_lengkap FROM name WHERE nomor_hp =${req.query.nomor_hp}`
    db.query(sql, (error, result) => {
        response(200, result, "find nama", res)
    })
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body})
    res.send("login berhasil")
    })

app.put('/username', (req, res) => {
    console.log({updateData: req.body})
    res.send("update berhasil")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})