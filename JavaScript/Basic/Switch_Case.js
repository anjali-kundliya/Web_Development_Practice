var user= "testprep";
switch(user){
	case "admin":
	console.log("You get the full access.");
	break;

	case "subadmin":
	console.log("You get the access to create/delete courses.");
	break;

	case "testprep":
	console.log("You get the access to create/delete tests.");
	break;

	case "user":
	console.log("You get the access to consume the content.");
	break;

	default:
	console.log("Trial User!");
	break;
}