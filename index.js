const express = require('express')
const app = express()

let sucess = (req, res)=>{
    res.send('Tudo funcionando corretamente')
}

let people = [{id: 0, Nome: 'Humaitá', Idade: 23, Curso: 'Engenharia Civil', ProximoCurso: 'Ciências da Computação'}, {id: 1, Nome: 'Elise', Idade: 17, Curso: 'Terminando a escola', ProximoCurso: 'Odontologia'}, {id: 2, Nome: 'Pedro', Idade: 55, Curso: 'Direito', ProximoCurso: 'Aposentadoria'}]

let reqperson = (req, res)=>{
    let person = people[req.body.id]
    res.json(JSON.stringify(person))
}

let reqpeople = (req, res)=>{

    res.json(JSON.stringify(people))

}

app.use(express.urlencoded({extended:false}))

app.get('/', sucess)

app.get('/people', reqpeople)

app.get('/person', reqperson)



app.listen(3000, ()=>{
    console.log('Servidor rodando...')
})