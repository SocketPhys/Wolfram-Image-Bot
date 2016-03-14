var login = require("facebook-chat-api");
var fs = require('fs');
const exec = require('child_process').execFile;
var math = require('mathjs');
var numbers = require('numbers');
var prettyjson = require('prettyjson');
var wolfram = require('wolfram').createClient("YQVGHA-PA8PG92GAG");
var  request = require('request');
// Create simple echo bot
 var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
 
login({email: "titrateacids@gmail.com", password: "Boombox@asd123"}, function callback (err, api) {
    if(err) return console.error(err);
       api.listen(function callback(err, message) {

				console.log(message);
	  			var mes=message.body;
				console.log(mes);         
				if(mes.startsWith('/wolf')){	
				try{
				       mes = mes.substring(6);
					console.log(mes);	
					wolfram.query(mes, function(err, result) {
									  console.log(JSON.stringify(result));
								var counter=0;
								
								
								var interval = setInterval(function(){
									if(counter==result.length-1){
										clearInterval(interval);
									}	
									everything(result,counter,api,message);
									counter+=1;
												
								 },500);
						
					});
				}catch(err){};
				}	
	});
	
});

	
function everything(result,i,api,message){
download(result[i].subpods[0].image, 'google.jpg', function(){
          	                                                                                              var msg = {
                                                                                                                        attachment: fs.createReadStream('google.jpg')
                                                                                                                }
                                                                                                                api.sendMessage( msg,message.threadID,function(){
                                                                                                                });                                                                                        
                                                                                                        });


}

