'use strict';

const cheerio = require('cheerio');

	function webRaw (req, res){

		req.webParsed(function (err, data) {
			// console.log(data)
			if(err) return res.send(err);
			const $ = cheerio.load(data);
			
			console.log('something')
			$('table').filter(function(){
				
				const matricula = req.body.matricula;
				const data = $(this);
				console.log('data', `${data}`)
				const match = `${data}`.match(/4999fpx/g)
				if(match)
					console.log('car stolen')
				else
					console.log('car not stolen')

			})



			// console.log('cheeeeeeeerio ===========>:', $('span').html())

			

			res.send({
				
			})

			
		})

	}




	module.exports = webRaw