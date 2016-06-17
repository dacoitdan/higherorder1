// #1.1

function forEach(arr, callback){
	for(var i = 0; i < arr.length; i++){
		callback(arr[i]);
	}
}

// #1.2

console.assert(map([1, 2], function(int1){return int1 + 5})[0] === 6 && map([1, 2], function(int1){return int1 + 5})[1] === 7);

function map(arr, callback){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		result.push(callback(arr[i]));
	}
	return result;
}

// #1.3

console.assert(reduce([1, 2, 3], function(int1, int2){return int1 + int2}) === 6);

function reduce(arr, callback){
	var result = arr[0];
	for(var i = 1; i < arr.length; i++){
		result = callback(result, arr[i]);
	}
	return result;
}

// #1.4

console.assert(filter([1, 5, 1, 6, 1, 7], function(int1){return int1 >= 5}));

function filter(arr, callback){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		if(callback(arr[i])){
			result.push(arr[i]);
		}
	}
	return result;
}

// #1.5

console.assert(sum(1, 2, 3, 4) === 10);

function sum(){
	args = Array.prototype.slice.call(arguments);
	return reduce(args, function (int1, int2){return int1+int2;});
}

var products = [
    {
        name: 'Pita bread (white)',
        price: 7.5,
        category: 'food'
    },
    {
        name: 'Denim jeans',
        price: 22.95,
        category: 'apparel'
    },
    {
        name: 'Bicycle playing cards',
        price: 5,
        category: 'novelties'
    },
    {
        name: 'Red/blue plaid button-down',
        price: 23.95,
        category: 'apparel'
    },
    {
        name: 'Bic lighter',
        price: 3,
        category: 'novelties'
    },
    {
        name: 'Greek yogurt (strawberry)',
        price: 2.25,
        category: 'food'
    },
    {
        name: 'Organic eggs (dozen)',
        price: 6,
        category: 'food'
    }
];

// #2.1

function avgCat(cat){
	var filtered = filter(products, function(obj){return obj.category === cat});
	var prices = map(filtered, function(obj){return obj.price});
	return reduce(prices, function(int1, int2){return int1+int2})/prices.length;
}

// #2.2

console.assert(productTemplate(products[0]) === '<li>Pita bread (white) - $7.5</li>');

function productTemplate(prod){
	return '<li>' + prod.name + ' - $' + prod.price + '</li>'
}

console.assert(render(products) === '<ul><li>Pita bread (white) - $7.5</li><li>Denim jeans - $22.95</li><li>Bicycle playing cards - $5</li><li>Red/blue plaid button-down - $23.95</li><li>Bic lighter - $3</li><li>Greek yogurt (strawberry) - $2.25</li><li>Organic eggs (dozen) - $6</li></ul>')

function render(prods){
	var html = "<ul>";
	forEach(prods, function(obj){html += productTemplate(obj)});
	html += "</ul>";
	return html;
}

