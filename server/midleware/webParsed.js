const request = require('request');


function webScraped(req,res,next){
	
    let param = req.body
    // console.log(param)
    param = '0087-gdg'
    const url = `https://www.encontrarvehiculo.com/index.php`
	req.body.matricula = '4999FPX'
	req.webParsed = function webToScrape (callback){
        request.post(url, {form:{fabrik_list_filter_all_3_com_fabrik_3:'499a9FPX'}}, function(err,response,body){ return callback(false, body); })
		// request(url, function(error, response, body){
		// 	return callback(false, body);	

		// })
    }
    

	next()
}

module.exports = webScraped