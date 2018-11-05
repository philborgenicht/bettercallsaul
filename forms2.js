document.addEventListener("DOMContentLoaded", function(){
  let firstName=document.getElementById("first-name")
  let lastName=document.getElementById("last-name")
  let emailAddress=document.getElementById("email")
  let phoneNumber=document.getElementById("phone-number")
  let userName=document.getElementById("username")
  let submitButton=document.getElementById("submit")
  let returningClient=document.getElementById("signup")



let recap=document.getElementById("recap")
  let accountInfo=document.getElementById("acctInfo")

recap.addEventListener("click", function(){

  let acctFirstName=JSON.stringify(localStorage.getItem("client first name"))
  let acctLastName=JSON.stringify(localStorage.getItem("client last name"))
  let acctEmail=JSON.stringify(localStorage.getItem("client email address"))
  let acctPhone=JSON.stringify(localStorage.getItem("client phone number"))
  let acctUserName=JSON.stringify(localStorage.getItem("client username"))
  let formerClient=document.createElement("p")

  let p1=document.createElement("p")
  let p2=document.createElement("p")
  let p3=document.createElement("p")
  let p4=document.createElement("p")
  let p5=document.createElement("p")
  let p6=document.createElement("p")
  p1.innerText=`First Name: ${acctFirstName}`
  p2.innerText=`Last Name: ${acctLastName}`
  p3.innerText=`Email Address: ${acctEmail}`
  p4.innerText=`Phone Number: ${acctPhone}`
  p5.innerText=`Username: ${acctUserName}`



  accountInfo.appendChild(p1)
  accountInfo.appendChild(p2)
  accountInfo.appendChild(p3)
  accountInfo.appendChild(p4)
  accountInfo.appendChild(p5)


})



})
