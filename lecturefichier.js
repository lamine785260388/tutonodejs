let http= require('http');
let fs=require('fs');
let server=http.createServer();
server.on('request',(request,response)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err) throw err
        response.writeHead(200,{
            'content-type':'text/html;charset=utf-8'
           });
           response.end(data)
    })
  
   

})
server.listen(8080);