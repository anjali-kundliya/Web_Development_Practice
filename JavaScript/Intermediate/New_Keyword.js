var User= function(firstName, courseCount){
	this.firstName=firstName;
	this.courseCount=courseCount;
	this.getCourseCount=function(){
		console.log(`Course Count is: ${this.courseCount}`);
	};
};

var anjali=new User("Anjali", 5);
console.log(anjali);

var ayushi=new User("Ayushi", 2);
console.log(ayushi)