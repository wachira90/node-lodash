#!node
const _ = require('lodash');

let user = [
	{ id: 1, 'user': 'barney', 'age': 36, 'active': true, ord: 4 },
	{ id: 2, 'user': 'cohen', 'age': 40, 'active': false, ord: 3 },
	{ id: 3, 'user': 'sam', 'age': 22, 'active': true, ord: 1 },
	{ id: 4, 'user': 'fred', 'age': 12, 'active': false, ord: 3 },
	{ id: 5, 'user': 'sick', 'age': 4, 'active': false, ord: 3 },
	{ id: 6, 'user': 'monday', 'age': 7, 'active': true, ord: 4 },
	{ id: 7, 'user': 'fri', 'age': 9, 'active': false, ord: 3 }
];

//FILTER ord = 3 ONLY FROM 
let arr1 = _.filter(user, (om) => {
	return (om.ord == 3);
});

let prod = [
	{ id: 1, 'product': 'milk', 'price': 36, 'flag': 1, ord: 4 },
	{ id: 2, 'product': 'tea', 'price': 40, 'flag': 0, ord: 2 },
	{ id: 3, 'product': 'snack', 'price': 22, 'flag': 1, ord: 1 },
	{ id: 4, 'product': 'rice_new', 'price': 14, 'flag': 0, ord: 3 },
	{ id: 5, 'product': 'coke', 'price': 3, 'flag': 1, ord: 6 }
];

_.mixin({
	'mergeByKey':  (arr1, prod, key) => {
		let criteria = {};
		criteria[key] = null;
		return _.map(arr1,  (item) => {
			criteria[key] = item[key];
			return _.merge(item, _.find(prod, criteria));
		});
	}
});

let arr3 = _.mergeByKey(arr1, prod, 'ord');

console.log(JSON.stringify(arr3, null, 4));
