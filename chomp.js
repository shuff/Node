// gm - Copyright Aaron Heckmann <aaron.heckmann+github@gmail.com> (MIT Licensed)

var express = require('express');
var app = express.createServer();
app.listen(3434);
var gm = require('gm')

 app.get('/', function(req, res){
 	
   dir = __dirname + '/imgs'
 // file = __dirname + '/node_modules/gm/examples/imgs/photo2.jpg'
 // var stuff = gm.identify(file);
 var x = 1632;//440//1632;
 var y = 976;//488//976;
 
 var i = 0;
 var iw = 100;
 var iy = 100;
 var col_i = 1;
 var message = '<div style="position:relative;width:1632px;height:976px;">'
 for (i = 0;i<10;)
 {
iy = 100;
col_i =1;
 for (col_i = 1;col_i<17;)
 {
 gm(dir + '/room.jpg')

//.gravity('NorthEast')
 .crop(100,100,iy,iw)
  
  .write(dir + '/chop/'+iw+'_'+iy+'.jpg', function(err)
  {
    if (err) return console.dir(arguments);
    
    console.log(this.outname + " created  ::  " + arguments[3]+'<br>')
   //	console.log(stuff)
  });
  
 message = message + '<div id="'+iw+'_'+iy+'" class="pix" style="position:relative;float:left;"><img class="pix_img" src="http://50.56.236.40/imgs/chop/'+iw+'_'+iy+'.jpg"/></div>';
 
  col_i = col_i + 1;
  iy = iy + 100;
 }
 iw = iw + 100;
 i  = i +1;
 }
  
   
   gm(dir + '/chop/100_500.jpg')
  .label("sold").fill('red')
  .write(dir + '/chop/100_500.jpg', function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + ' created  :: ' + arguments[3])
    })
  
//   .draw("10,10").text('Sold');
   
    res.send(message);
  // exec('echo '+message+'> index2.html');
//x = (x + 10);
//y = (x * 1.114);
//y = Math.round(y);
//console.log(y);
//i = x;
//} 
});