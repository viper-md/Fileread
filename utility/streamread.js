var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var product= require('../models/product');
var instream = fs.createReadStream('filllist');
var outstream = new stream;
var reader = readline.createInterface(instream, outstream);
var result={} 



reader.on('line', function(lin) { 
     
        var t1 = lin.split("\n");
      
        for( var i=0 ; i < t1.length ; i++){
                var t2=t1[i].split("|");
                for(var j=0 ; j<t2.length ; j++){

                     
                        t3 = t2[j].split("=");
                       t3[1] && ( result[t3[0]]=t3[1]);
                      
                }
                    reader.pause();
                        
                        var obj = {
                            pid: parseInt(result[48]),
                            sin: result[54],
                            pos :result[32]
                        }

                       
                     product.findOne({where:{ pid : obj.pid}}).then(prod=>{
                                if(!prod){
                                      product.create(obj).then((newentry)=>{
                                      console.log("created new entry");
                            })
                                }
                                else {
                                  

                                      var updatedpos = prod.pos + obj.pos;
                                      prod.updateAttributes( { pos : updatedpos }).then(()=>{
                                      console.log("succesfully updated");
                                    })
                                }
                            }).catch(error=>{
                                console.log("error");
                            })
                            
                         //data.push(obj);
                       reader.resume();
}
         
  
});



reader.on('close', function() {
   console.log("done reading file");
});
