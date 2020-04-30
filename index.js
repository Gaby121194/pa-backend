import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  
  

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  var idCliente = req.url.split('/')[2];
  var idContrato = req.url.split('/')[4];

  if(req.method=='GET'){
    
    switch (req.url) {    
      case '/':
        res.statusCode = 200;
        res.end("Solicita index de la raiz");
        break;
  
      case '/clients':
        res.statusCode = 200;
        res.end("Solicita lista de clientes");
        break;
      
      case '/clients/'+idCliente:
        res.statusCode = 200;
        res.end("Solicita cliente numero "+ idCliente); 
        break;
  
      case '/contracts':
        res.statusCode = 200;
        res.end("Solicita lista de contratos");  
        break;
  
      case '/clients/'+idCliente+'/contracts':
        res.statusCode = 200;
        res.end("Solicita contratos del cliente numero "+ idCliente);    
        break;
  
      case '/clients/'+idCliente+'/contracts/'+idContrato:
        res.statusCode = 200;
        res.end("Solicita contrato numero "+idContrato+" del cliente numero "+ idCliente);    
        break;
  
      default:
        res.end("No existe el recurso");
      }
    }

    if(req.method=='POST'){
    
      switch (req.url) {
        case '/clients':
          res.statusCode = 200;
          res.end("Se agrega a la lista de clientes");
          break;

      
        case '/clients/' + idCliente + '/contracts/':
          res.statusCode = 200;
          res.end("Solicita agregar un nuevo contrato al cliente numero " + idCliente);
          break;
      }
    }

    if(req.method=='PUT'){
    
      switch (req.url) {
        case '/clients/' + idCliente:
          res.statusCode = 200;
          res.end("Se actualiza la informacion del cliente numero:" + idCliente);
          break;

      
        case '/clients/' + idCliente + '/contracts/' + idContrato:
          res.statusCode = 200;
          res.end("se actualiza la informacion del contrato numero:"+ idContrato + " del cliente nro: " + idCliente);
          break;
      }
    }

    if(req.method=='DELETE'){
    
      switch (req.url) {
        case '/clients/' + idCliente:
          res.statusCode = 200;
          res.end("Se elimina el cliente numero:" + idCliente);
          break;

      
        case '/clients/' + idCliente + '/contracts/' + idContrato:
          res.statusCode = 200;
          res.end("Se elimina el contrato numero:"+ idContrato + " del cliente nro: " + idCliente);
          break;
      }
    }



}      
        
    );

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

