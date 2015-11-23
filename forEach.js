var array = [
	{
		id: 38,
		name: "Jalangi"
	},
	{
		id: 49,
		name: "Ilmi 2.0"
	}
];

var getElem = function(index) {
	return array[index];
}

// array.forEach(function (value,index,arrayTemp){
// 	console.log(index + " call");
// 	arrayTemp.push(2*value);
// });
console.log(JSON.stringify(array));
var test = getElem(0);
test.name = 'Masaud';
console.log(test);
console.log(JSON.stringify(array));

// console.log(array);

