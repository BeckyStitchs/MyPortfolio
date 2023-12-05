//Copyright Year
const d = new Date();
<<<<<<< Updated upstream
document.getElementById("year").innerHTML = d.getFullYear();
=======
document.getElementById("demo").innerHTML = d.getFullYear();
>>>>>>> Stashed changes

//btn-alert + onmouseevent
btnalert = document.getElementById("btn-alert");
btnalert.onclick = function() {myFunction()};
function myFunction() {
    alert("GYM is fun!");
    console.log("GYM is fun!");
}
function mouseOver() {
    btnalert.style.color = "pink";
}
function mouseOut() {
    btnalert.style.color = "RoyalBlue";
}

//btn-alert2 + onmouseevent2
btnalert2 = document.getElementById("btn-alert2");
btnalert2.onclick = function() {myFunction2()};
function myFunction2() {
    alert("Cooking is relaxing!");
    console.log("Cooking is relaxing!");
}
function mouseOver2() {
    btnalert2.style.color = "pink";
  }
  function mouseOut2() {
    btnalert2.style.color = "RoyalBlue";
  }

//btn-alert3 + onmouseevent3
btnalert3 = document.getElementById("btn-alert3");
btnalert3.onclick = function() {myFunction3()};
function myFunction3() {
    alert("Let's Watching video!");
    console.log("Let's Watching video!");
}
function mouseOver3() {
    btnalert3.style.color = "pink";
}
function mouseOut3() {
    btnalert3.style.color = "RoyalBlue";
}

//btn-alert4 + onmouseevent4
btnalert4 = document.getElementById("btn-alert4");
btnalert4.onclick = function () {myFunction4()};
function myFunction4() {
    alert("Learning by reading!");
    console.log("Learning by reading!");
}
function mouseOver4() {
    btnalert4.style.color = "pink";
}
function mouseOut4() {
    btnalert4.style.color = "RoyalBlue";
}

<<<<<<< Updated upstream
// press button to count numbers and show text "even" & "odd"
=======
// true if count is perfectly divisible by 2
>>>>>>> Stashed changes
let count = 0;
document.getElementById("btn-counter").onclick = function() {
    const txtcounter = document.getElementById("txt-counter");
    count += 1;
    txtcounter.innerHTML = "Number: " + count;

if (count % 2 == 0) {
    txtcounter.innerHTML = "Number: " + count + " " + 'even';
    //txtcounter.classList.add("even");
    console.log(`Number: ${count} ${'even'}`);
} else {
    txtcounter.innerHTML = "Number: " + count + " " + 'odd';
    //txtcounter.classList.add("odd");
    console.log(`Number: ${count} ${'odd'}`);
}
}

let numbers = document.getElementById("numbers");
for (let i = 1; i <= 100; i++){    
    let listItem = document.createElement('li');
    listItem.textContent += i;
    numbers.appendChild(listItem);
}

<<<<<<< Updated upstream
//create button and generate 1~100 numbers into table
function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    for (let i = 1; i < 11; i++) {
      const row = document.createElement("tr");
  
      for (let j = 1; j < 11; j++) {
=======
function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 1; i < 11; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 1; j < 11; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
>>>>>>> Stashed changes
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${i*j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
<<<<<<< Updated upstream
      tblBody.appendChild(row);
    }
  
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
=======
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '0'
    //tbl.setAttribute("border", "0");
>>>>>>> Stashed changes
  }
}