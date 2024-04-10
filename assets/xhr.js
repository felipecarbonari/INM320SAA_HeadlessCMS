const subheadertitles = JSON.parse(sub);

//for each loop 
Object.entries(subheadertitles).forEach((entry) => {
  const [key, value] = entry;
  console.log(`${key}: ${value}`);
});

//1. fetch demo + my brave attempt to insert json directly to html
fetch("assets/data/content.json")
.then (response => response.json())
.then (data => {
  console.log(data)
  document.querySelector("#it1").innerText = data.resolved;
  document.querySelector("#it2").innerText = data.received;
  document.querySelector("#it3").innerText = data.average1;
  document.querySelector("#it4").innerText = data.average2;
  document.querySelector("#it5").innerText = data.resolution;

})
.catch (errors => console.log("errors: ", errors))

//2. XHR demo
//const xhr = new XMLHttpRequest();
//xhr.open('GET', "assets/data/content.json");
//xhr.send();

//xhr.addEventListener('load',function(){
//    try {
//        console.log("XHR response: ", this.responseText);
//    } catch (error) {
//        console.log("error: ", error);

//    }
//})

//3. async/await demo
//async function demoFunction(){
//    try {
//        const navHolder = document.getElementById('listId')

//        const temp = await fetch("assets/data/content.json")
//        const data = await temp.json();

//       data.mainnav.forEach(menuItem=>{
//        const listItem = document.createElement('li');
//        listItem.innerHTML = `<a href="${menuItem.url}">${menuItem.text}</a>`
//       navHolder.append(listItem);
//})

//    } catch (error) {
//        console.log("error: ", error);
//    }
//}

//demoFunction();

//let test = {
  //  "employees":[
   // {"firstName":"John", "lastName":"Doe"},
   // {"firstName":"Anna", "lastName":"Smith"},
 //   {"firstName":"Peter", "lastName":{
   // "temp": 123
  //  }}
  //  ]}
