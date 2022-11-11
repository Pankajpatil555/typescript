var student={
    names:"pankaj",
    score:250
}
for (var e in student) {
    console.log(e);
    
    
}
// var emp = {
//     name: "Dnyanesh",
//     score: 250
// }


// for(var e in emp)
// {
//    console.log(e);
//    console.log(emp[e]);
// }
var course:any=["angular","java",".net","python"]
for (let i = 0; i < course.length; i++) {
    console.log(course[i]);
    
    
}
var [a,b,c]=course;
console.log(a);
console.log(b);
console.log(c);

var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);
