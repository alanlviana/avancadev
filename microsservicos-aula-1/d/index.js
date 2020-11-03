var http = require('http');
var qs = require('querystring');

http.createServer(function (req, res) {
	if (req.method = "POST"){
		var body = "";
		req.on("data", function(data){
			body += data;
		});

		req.on("end", function (){
			var post = qs.parse(body);
			reduzirEstoqueCupom(post.coupon);
			res.writeHead(200, {'Content-Type': 'application/json'});
  			res.write(JSON.stringify({Status: "ok"}));
			res.end();
		})

	}else{
		res.writeHead(404);
		res.end();
	}


  	
}).listen(9093);

let reduzirEstoqueCupom = (coupon) => {
	// Todo
	console.log("Coupon: " + coupon);
}