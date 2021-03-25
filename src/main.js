const { d3ize, parse } = require('gedcom-d3')

module.exports = function gedParse(data) {
	const d3DataUnchanged = d3ize(parse(data));

	// console.log(d3DataUnchanged);

	// Necessary to deep clone variable: 
	var d3Data = { };
	d3Data.nodes = JSON.parse(JSON.stringify(d3DataUnchanged.nodes));
	d3Data.links = JSON.parse(JSON.stringify(d3DataUnchanged.links));

	// console.log(d3Data);

	d3Data.nodes.forEach(node => {
		Object.keys(node).forEach((key) => ['id','name','dob'].includes(key) || delete node[key]);
		node.value = new Date(node.dob).getFullYear();
		delete node.dob;
	});

	d3Data.links = d3Data.links.filter(link => link.targetType == 'CHIL');

	d3Data.links.forEach(link => {
		Object.keys(link).forEach((key) => ['source','target'].includes(key) || delete link[key]);
		link.directed = true;
	});

	// console.log(d3Data);

	const missingBirthdates = d3Data.nodes.filter(node => node.value !== node.value).map(n => [n.id, n.name, d3DataUnchanged.nodes.find(nt => nt.name == n.name).dob]);

	return [d3Data, missingBirthdates];
}
