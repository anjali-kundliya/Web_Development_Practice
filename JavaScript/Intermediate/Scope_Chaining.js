var name="Anjali";
console.log("My Name is: ",name);

function sayName(){
	var name="Miss Anjali";
	console.log("Name is: ",name);
	sayNameTwo();

	function sayNameTwo(){
		var name="Miss Anjali Kundliya";
		console.log("Name: ",name);
}
}
sayName();