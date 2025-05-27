//id = #grocery-list
//class = .item 

//select one element

// var result = document.querySelector("#grocery-list")
// console.log(result)

//select all elements 

// var result = document.querySelectorAll("ol#grocery-list > li")
// console.log(Array.from(result)) //Array.from changes node list into something that looks more like an array 

//select all elements and change text to REDACTED 

var result = document.querySelectorAll("ol#grocery-list > li")
console.log(result)

for (var i = 0; i < result.length; i++){
    result[i].textContent = "REDACTED"
}

