app.listen(3042);
var gm = require('gm')

 app.get('/', function(req, res){
 	
   dir = __dirname + '/imgs'
 // file = __dirname + '/node_modules/gm/examples/imgs/photo2.jpg'
 // var stuff = gm.identify(file);
 var x = 440;//440;
 var y = 488;//488;
 
 var i = 10;
 var ix = 10;
 var iy = 10;
 var row_i = 1;
 var message = '<div style="position:relative;margin:auto,0;top:0;">'
 for (i = 0;i<=44;)
 {
var ix = 10;
iy = iy + 10;
row_i =1;
 for (row_i = 1;row_i<Math.round(y/10);)
 {
 gm(dir + '/photo2.jpg')

//.gravity('SouthEast')
 .crop(10,10,ix,iy)
  
  .write(dir + '/chop/'+ix+'_'+iy+'.jpg', function(err)
  {
    if (err) return console.dir(arguments);
    
    console.log(this.outname + " created  ::  " + arguments[3]+'<br>')
   	//console.log(stuff)
  });
  
 message = message + '<div id="'+ix+'_'+iy+'" class="pix" style="position:relative;left:'+ix+'px;top:'+iy+'px;"><img class="pix_img" src="http://apps.thewoodlandsumc.org/dev/nodes/imgs/chop/'+iw+'_'+iy+'.jpg"/></div>';
 
  row_i = row_i + 1;
  ix = ix + 10;
   
 }

 i = i + 10;
 }
 message = message + '</div>'
   res.send(message)
//x = (x + 10);
//y = (x * 1.114);
//y = Math.round(y);
//console.log(y);
//i = x;
//} 
});