var express = require('express')
const app = express()
const port = 3000


var idCliente= app.path.name.split('/')[2]
var idContrato= app.path.name.split('/')[4]



//METODOS GET

app.get('/', (req, res) => res.send('Esta es la pagina principal'))
app.get('/clients', (req, res) => res.send(clientes=[{
    idCliente:2,
    nombre: 'gaby',
    apellido: 'catalan'
},
{
    idCliente:3,
    nombre: 'Carlos',
    apellido: 'Asad'
},
{
    idCliente: 4,
    nombre: 'Armando',
    apellido: 'Barrera'
}
]))
app.get('/clients/:idClient', (req, res) => res.send(
{
idCliente: `${req.params.idClient}`,
nombre: 'armando',
apellido: 'sanches'}))

app.get('/clients/:idClient/contracts', (req, res) => res.send(`Se Muestran todos los contratos del cliente nro: ${req.params.idClient}`))
app.get('/clients/:idClient/contracts/:idContrato', (req, res) => res.send(`Se Muestran el contrato: ${req.params.idContrato} del cliente nro: ${req.params.idClient}`))

//Metodos PUT

app.put('/clients', (req, res) => res.send('se ha creado un cliente'))
app.put('/clients/:idClient/contracts', (req, res) => res.send(`Se ha creado un nuevo contrato al cliente nro: ${req.params.idClient}`))

//Metodos DELETE

app.delete('/clients/:idClient', (req, res) => res.send(`Se elimina el cliente nro: ${req.params.idClient}`))
app.delete('/clients/:idClient/contracts/:idContrato', (req, res) => res.send(`Se elimina el contrato: ${req.params.idContrato} del cliente nro: ${req.params.idClient}`))



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))