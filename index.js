//Arrays of students 
let listOFStudents = [ "Amo", "Bod", "Kyle"]
console.log(listOfStudents);
console.log(listOFStudents.length);

//add an Item to arry
listOFStudents.push("Bob")
console.log( listOFStudent);

//remove an item from an array
listOFStudents.splice(0, 1)
console.log(listOFStudents);

for(let i = 0; i <listOFStudents.length;i++) {
    console.log("for loop: ", listOFStudents)
}

// working with objects 

let student = {
    name: "Amo",
    surname: "Tsie",
    age: 22,
    isFacilitator: true
}

console,log( student );

// edit values in an object
student.name = "Amo"
console.log("after editing: ", student);

//adding values in an object

student.isPrison = false;
student["isInSchool"] = false;
delete student.age // this removes 

console.log("after adding: ", student);
