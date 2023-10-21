var num = Number(prompt("Enter even number"));

if (num > 2 && num < 50 && num % 2 === 0) {
    alert("Even number");
} else {
    alert("Number is not even");
}

var num = Number(prompt("Enter odd number"));

if (num > 3 && num < 50 && num % 3 === 0) {
    alert("odd number");
} else {
    alert("Number is not odd");
}


for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      document.write("Even: " + i);
    } else {
      document.write("Odd: " + i);
    }
  }


var n = 10; 

for (var i = 1; i <= n; i++) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += j + " ";
  }
  document.write(line);
  document.write("<br>")
}


var students = [
    { name: "Amir", age: 19, grade: "A" },
    { name: "Rashid", age: 20, grade: "B" },
    { name: "Rizwan", age: 21, grade: "A+" },
    
];

for (var i = 0; i < students.length; i++) {
    document.write("Student " + (i + 1));
    document.write("<br>")
    document.write("Name: " + students[i].name);
    document.write("<br>")
    document.write("Age: " + students[i].age);
    document.write("<br>")
    document.write("Grade: " + students[i].grade);
    document.write("<br>")
    document.write("-----------");
}





