// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.

// Write your code here

const students =[
                    {   name: "Prabir",subj1 : "Grammer",subj1Score : 60,subj2 : "Accounts",subj2Score: 70 },
                    {   name: "Jha",subj1 : "Physics",subj1Score : 80,subj2 : "Accounts",subj2Score: 90 }
                ]
let  final = getResult(students);
final.forEach(element => {
    console.log(`The Student "${element.name}" has Studied Subjects : ${element.subject1} and ${element.subject2} and Scored ${element.percent}% . `);  
});


function getResult(students)
{
    let studentMapOfMap = new Map();
    students.forEach(element => {
      let totalMarkForStudet= element.subj1Score + element.subj2Score; 
      let percentageForStudent = (totalMarkForStudet * 100)/200;
      const eachStudents =
            {   name : element.name,subject1 : element.subj1,subject2 : element.subj2,percent : percentageForStudent
            }
        studentMapOfMap.set(element.name,eachStudents );
         
        });    
    return studentMapOfMap;
}