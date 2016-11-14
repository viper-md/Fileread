var fs=require("fs");
var product = require("../models/product");
var result={} ; 


fs.readFile("filllist",'utf8',function(err,data){

    
        
    setInterval(function(){  
                    var t1 = data.split("\n");
                for( var i=0 ; i < t1.length ; i++){
                    var t2=t1[i].split("|");
                    for(var j=0 ; j<t2.length ; j++){
                        t3 = t2[j].split("=");
                        t3[1] && ( result[t3[0]]=t3[1]);

                        }  
            
                var sin = parseInt(result[54]);
                var pos ;
                if(sin==1){
                    pos= parseInt(result[32]);
                    }
                if(sin==2){
                        pos=-parseInt(result[32]);
                 }

                var obj = {
                    pid: parseInt(result[48]),
                    sin: sin,
                    pos :pos
                 }

                product.create(obj).then(p=>{
                    console.log("sucees");
                        }).catch(err=>{
                             console.log(err);
                    })


    }},1200);
 });