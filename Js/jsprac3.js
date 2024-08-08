let student ={
  Fname:"Alvin",
  Lname:"Abarquez",
  grade:{
  math:87,
  english:78,
  science:85,
  pe:77,
  tle:79
  }
};
let average=0;
console.log(`Name: ${student.Fname} ${student.Lname}`)
for(let k in student.grade){
  console.log(`${k} :${student.grade[k]}`)
  average+=student.grade[k]
}
average/=Object.keys(student.grade).length
console.log(`average : ${average}`)



 

//let person=[
  //{
    //Fname:"Alvin",
    //Lname:"Abarquez",
    //average:87
  //},
  //{ 
    //Fname:"Eric",
    //Lname:"Abarquez",
    //average:78
  //},
  //{
    //Fname:"Aia",
    //Lname:"Abarquez",
    //average:77
  //}
  
//];
//console.log(person[2].average)
//let person={
  //  fName:"Alvin",
    //lName:"Abarquez",
    //sex:"Male",
    //age:22,
    //bloodtype:"o",
    //hobbies:["coding","eating","sleeping"],
    //pet:{
      //0:{
       // name:"duling",
        //type:"cat",
        //breed:"shitzu"
      //},
      //1:{
       // name:"tiger",
        //type:"cat",
        //bread:"pusakal"
      //}

    //}
//};
//let strPerson =JSON.stringify(person)
//console.log(`${person.fName} wow ${person.lName} ${person.hobbies[0]}`);
//person.midleInitial="navas"
//person.hobbies[3]="loving"
//console.log(person.hobbies);
//console.log(person.pet[0].name);
//console.log(person.midleInitial)
