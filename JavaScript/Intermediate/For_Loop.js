/*for (var i = 0; i < 10; i++) {
	console.log(i);
}*/

const myStates=["Uttarakhand", "Delhi", "Mumbai", "Assam", 1947, "Sikkim"];
for (let i = 0; i < myStates.length; i++) {
	if(typeof myStates[i]!= 'string') continue;
	console.log(myStates[i]);
}

console.log("Break Statement: ");
for (let i = 0; i < myStates.length; i++) {
	if(typeof myStates[i]!= 'string') break;
	console.log(myStates[i]);
}
