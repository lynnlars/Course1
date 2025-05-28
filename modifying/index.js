// id = #header #body 

//select h1 element and save it to a variable 

//var text = document.querySelector("#header").textContent 
//change p text to be same as h1 
//document.querySelector("#body").textContent = text



//modifying styles 

var header = document.getElementById("header")
console.log(typeof header.style) //typeof is to see the data type something is "what type of data is header.style" 

header.style.color = "blue"

//unlike CSS, styling in javascript requires camelCasing because the - is seen as a minus sign in JS

document.body.style.backgroundColor = "pink"