function getUserName(name, role){                      //var getUserRole=function(name,role)
	switch(role){
		case "admin":
		return `${name} is admin with all access`;
		break; //This is not necessary
		case "subadmin":
		return `${name} is subadmin with access to create and delete courses`;
		break;
		case "testprep":
		return `${name} is testprep with access to create and delete tests`;
		break;
		case "user":
		return `${name} is user to consume courses`;
		break;
		default:
		return `${name} is a trial user`;
		break;
	}
}

console.log(getUserName("Anjali","subadmin"));

var getRole=getUserName("Sammy","user");
console.log(getRole);