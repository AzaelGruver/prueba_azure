import app from './app'
// import './database/conexion'

app.listen(app.get('port'))

console.log(`Servidor corriendo en el puerto ${ app.get('port') }`)

// console.log('Desde index')

//hoisting de javascript

