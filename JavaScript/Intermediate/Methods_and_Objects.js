var user= {
	firstName:"Anjali",
	lastName:"Kundliya",
	role:"Admin",
	loginCount:30,
	facebookSignedIn:true,
	courseList:[],
	buyCourse: function(courseName){
		this.courseList.push(courseName);
	},
	getCourseCount: function(){
		return `${this.firstName} is enrolled in total of ${this.courseList.length} course.`
	}
};
var courseList=true;
console.log(user.role);
console.log(user.getCourseCount());
user.buyCourse("JavaScript Course");
user.buyCourse("React Course");
console.log(user.getCourseCount());