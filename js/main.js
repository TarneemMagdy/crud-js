var Name=document.getElementById("name")
var age = document.getElementById("age")
var address= document.getElementById("address")
var email =document.getElementById("email")
var count =document.getElementById("count")
var addContainer=[];

 if (localStorage.getItem("product")===null) {
   addContainer=[]
   
 }
 else {
   addContainer=JSON.parse(localStorage.getItem("product"))
   displayData()
 }

var mood ="create"
var old;
 
function addPerson() {
   var person = {
      pName:Name.value,
      pAge:age.value,
      pAddress:address.value,
      pEmail:email.value,
      pCount:count.value
   }
  if(mood==="create"){
  
 addContainer.push(person)
    localStorage.setItem("product",JSON.stringify(addContainer))
  displayData()
  
}
else {
  addContainer[old] = person
  mood="create"
  document.getElementById("adding").innerHTML="add person"
   localStorage.setItem("product",JSON.stringify(addContainer))
   displayData()
}
   
}

function displayData() {

   personList=""
   for (var i = 0; i < addContainer.length; i++) {
         personList +=`
         <tr>
         <td>${i+1}</td>
         <td>${addContainer[i].pName}</td>
         <td>${addContainer[i].pAge}</td>
         <td>${addContainer[i].pAddress}</td>
         <td>${addContainer[i].pEmail}</td>
         <td>${addContainer[i].pCount}</td>
         <td>
         <button class="btn btn-info" onclick="deleteRow(${i})">delete</button>
         <button class="btn btn-warning" onclick="updateRow(${i})">update</button>
         </td>
         </tr>
         `
      
   }
   document.getElementById("tBody").innerHTML=personList
  
   
}
function clear() {
  Name.value="";
  age.value="";
 address.value="";
  email.value="";
  count.value=''

  
}
function clearAll() {
addContainer.splice(0)
displayData();
}
function pop() {
addContainer.pop()

displayData()

  
}
function deleteRow(i) {
if(addContainer[i].pCount>0) 
{addContainer[i].pCount--}
else {
   
    addContainer.splice(i,1)
}
 localStorage.setItem("product",JSON.stringify(addContainer))
  displayData()

  
}
function updateRow(i) {
Name.value=addContainer[i].pName
age.value =addContainer[i].pAge
address.value=addContainer[i].pAddress
email.value=addContainer[i].pEmail
count.value=addContainer[i].pCount
document.getElementById("adding").innerHTML="update"
mood="update"
 old=i;

  
}

function validateForm() {

   if (Name.value == "" || age.value =="" || address.value =="" || email.value =="" || count.value=="") {

    alert("Name must be filled out");
    

clear()
pop()
      
   } else {
      clear()
   }
}

//  different bettwen nodelist and collection html

//  HTMLCollection

// The element methods getElementsByClassName() and getElementsByTagName() return a live HTMLCollection. It only includes the matching elements (e.g. class name or tag name) and does not include text nodes, it provides only two methods item and namedItem

// . NodeList

// The element method *querySelectorAll()* returns a static NodeList. They look like arrays but are not.

// NodeLists have a defined forEach method as well as a few other methods including item, entries, keys, and values.

// NodeLists behave differently depending on how you access them; if you access elements using childNodes, the returned list is live and will update as more elements are added to the node. If it’s accessed using querySelectorAll(), the returned list is static and will not update if more elements are added to the node.


