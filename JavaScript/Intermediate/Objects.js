var user= {
	firstName:"Anjali",
	lastName:"Kundliya",
	role:"Admin",
	loginCount:30,
	facebookSignedIn:true
};
console.log(user.role);
console.log(user["lastName"]);

user.loginCount=40;
console.log(user);
console.table(user);