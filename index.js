//var: supports hoisting: call a variable before declaration 
//let: does not support hoisting:you cannot call a variable
// before it has bee declared
//const: you can not declare without initializing, you
// cannot reasign

//var
  console.log( username );  //example of a declaration
  var username = "Amogelang";
  username = "Amo"
  console.log( username );

//let 
  console.log( age );  //this is not allowed
  let age = 22;
  age = 35
  console.log( age );

//const
  const surname = "Tsie";
  surname = "Khoza" //(you are not allowed to have both(reassigning))
  console.log( surname );

