var http=require('http');
var fs=require('fs');
var url=require('url');
var server=http.createServer(function(req,res){
  
 current_url = url.parse(req.url).pathname;

    file_path = current_url;    

    var tmp = file_path.lastIndexOf('.');
    var ext = file_path.substring(tmp + 1);

if(ext == 'js'){

fs.readFile('.' + current_url, 'utf8', function (errors, contents) {
    res.end(contents); 
});
 
       
}
 if(ext == 'css') {
       
   fs.readFile('.' + current_url, 'utf8', function (errors, contents) {
    res.end(contents); 
}); 

} 
if(current_url == '/') {
        fs.readFile('./indexppl.html', 'utf8', function (errors, contents) {
            res.end(contents); 
        });
    } 
 
        
   if(ext == 'jpg') {
       
var img = fs.readFileSync('.'+ current_url);
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');
   }
  /*
if(current_url == '/curtainRight.jpg') {
       
var img = fs.readFileSync('./curtainRight.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');
   } 
*/
if(current_url == '/register') {
       


   fs.readFile('./front.html','utf8', function (errors,contents){
    res.end(contents);   
   //var tname=document.getElementById('T_name').value;
   //document.getElementById('ytn').innerHTML=tname;
});
//var tmpn = current_url.lastIndexOf('.');
//var extn = current_url.substring(tmpn + 1);
//if(current_url=='/register/cycle.js'){
//fs.readFile('./cycle.js', 'utf8', function (errors, contents) {
  //  res.end(contents); 
//});

} 

}).listen(8006);

var io=require('socket.io').listen(server);
 io.set('log level', 1); 
io.sockets.on('connection',function(socket){ var tm=1;//var i=1;
//var pics=[['Shane','shane.jpg'],['Dhoni','dhoni.jpg']];

    setInterval(function(){
        socket.emit('date', {'date': tm});
   tm+=1; /*if(tm==10){ socket.emit('img', {'img': pics[0][i]}); 
} i++;*/ }, 1000);

  socket.on('message_to_server',function(data){
   io.sockets.emit('message_to_client', data );
});

});


