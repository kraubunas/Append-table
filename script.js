"use strict";

// inputai
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var age = document.getElementById("age");

// mygtukai
var add = document.getElementById("add");
var removeFirst = document.getElementById("removeFirst");
var removeLast = document.getElementById("removeLast");

// lentele
var table = document.getElementsByTagName("table")[0];
var tableHeader = document.getElementsByTagName("tr")[0];
var tableRow = document.getElementsByTagName("tr");

//ivedimas i lentele
add.addEventListener("click", function () {
    var tableRow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText = `${fName.value}`;
    td2.innerText = `${lName.value}`;
    td3.innerText = `${age.value}`;

    tableRow.append(td1, td2, td3);
    if (fName.value == 0 || lName.value == 0 || age.value <= 0) {
        alert("Įveskite duomenis!!!");
    } else {
        table.append(tableRow);
        fName.value = "";
        lName.value = "";
        age.value = "";
    }
})

//istrina pirma lenteles eilute
removeFirst.addEventListener("click", function () {

    if (tableRow.length > 1) {
        tableRow[1].remove();
    } else {
        alert("Nebera ka trinti");
    }
});

//istrina paskutine lenteles eilute
removeLast.addEventListener("click", function () {
    if (tableRow.length > 1) {
        tableRow[tableRow.length - 1].remove();
    } else {
        alert("Nebera ka trinti");
    }
});
