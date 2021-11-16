var User= function(firstName, courseCount){
	this.firstName=firstName;
	this.courseCount=courseCount;
	this.getCourseCount=function(){
		console.log(`Course Count is: ${this.courseCount}`);
	};
};

User.prototype.getfirstName = function() {
	console.log(`Your first name is: ${this.firstName}`);
};

var anjali=new User("Anjali", 5);
anjali.getCourseCount();
anjali.getfirstName();

var ayushi=new User("Ayushi", 2);
ayushi.getCourseCount();
ayushi.getfirstName();
