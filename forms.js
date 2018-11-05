document.addEventListener("DOMContentLoaded", function(){
  let firstName=document.getElementById("first-name")
  let lastName=document.getElementById("last-name")
  let emailAddress=document.getElementById("email")
  let phoneNumber=document.getElementById("phone-number")
  let userName=document.getElementById("username")
  let submitButton=document.getElementById("submit")
  let returningClient=document.getElementById("signup")

// let recap=document.getElementById("recap")
//   let accountInfo=document.getElementById("acctInfo")
//
//
//
//
//
// recap.addEventListener("click", function(){
//   let acctFirstName=JSON.stringify(localStorage.getItem("client first name"))
//   let acctLastName=JSON.stringify(localStorage.getItem("client last name"))
//   let acctEmail=JSON.stringify(localStorage.getItem("client email address"))
//   let acctPhone=JSON.stringify(localStorage.getItem("client phone number"))
//   let acctUserName=JSON.stringify(localStorage.getItem("client username"))
//   let formerClient=document.createElement("p")
//
//   let p1=document.createElement("p")
//   let p2=document.createElement("p")
//   let p3=document.createElement("p")
//   let p4=document.createElement("p")
//   let p5=document.createElement("p")
//   let p6=document.createElement("p")
//   p1.innerText=acctFirstName
//   p2.innerText=acctLastName
//   p3.innerText=acctEmail
//   p4.innerText=acctPhone
//   p5.innerText=acctUserName
//
//
//   accountInfo.appendChild(p1)
//   accountInfo.appendChild(p2)
//   accountInfo.appendChild(p3)
//   accountInfo.appendChild(p4)
//   accountInfo.appendChild(p5)
//
//
// })

// firstName.addEventListener("click", function(){
//   localStorage.setItem("client first name", firstName.value)
// })
//
// lastName.addEventListener("click", function(){
//   localStorage.setItem("client last name", lastName.value)
// })
//
// emailAddress.addEventListener("click", function(){
//   localStorage.setItem("client email address", emailAddress.value)
// })
//
// phoneNumber.addEventListener("click", function(){
//   localStorage.setItem("client phone number", phoneNumber.value)
// })
//
// userName.addEventListener("click", function(){
//   localStorage.setItem("client username", userName.value)
// })

submitButton.addEventListener("click", function(){
  if((firstName.value==="Walter" && lastName.value==="White")||(firstName.value=="Jesse" && lastName.value==="Pinkman")){
    alert("GTFO")
  }
  localStorage.setItem("client first name", firstName.value)
  localStorage.setItem("client last name", lastName.value)
  localStorage.setItem("client email address", emailAddress.value)
  localStorage.setItem("client phone number", phoneNumber.value)
  localStorage.setItem("client username", userName.value)
})

returningClient.addEventListener("click", function(){
  let formEnd=document.getElementById("userinput")
  let secretButton=document.createElement("button")
  let secretLink=document.createElement("a")

  secretButton.setAttribute("id", "secret")
  secretLink.innerText="click here to return"
  secretLink.setAttribute("href","secret.html")
  if(returningClient.checked){
    formEnd.appendChild(secretButton)
    secretButton.appendChild(secretLink)
  } else if (!returningClient.checked) {
    let formEnd=document.getElementById("userinput")
    let secretButton=document.getElementById("secret")
    formEnd.removeChild(secretButton)
    secretButton.removeChild(secretLink)
  }

})





})
