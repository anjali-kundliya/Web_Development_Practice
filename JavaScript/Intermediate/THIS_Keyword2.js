console.log(this);

var user={
	firstName:"Anjali",
	courseCount:5,
	getCourseCount:function() {
		console.log("Line 7:", this.courseCount);
	},
};

user.getCourseCount();