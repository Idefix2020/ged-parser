const fs = require('fs')
const gedParse = require('./src/main.js');

fs.readFile('./data/musterdatei.ged', {encoding:'utf8'} , (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	// console.log(data);

	[d3Data, missingBirthdates] = gedParse(data);

	console.log(d3Data);
	console.warn(missingBirthdates);
	
	fs.writeFile("./data/result.json", JSON.stringify(d3Data), 'utf8', function(err) {
		if(err) {
			return console.error(err);
		}
	}); 
})
