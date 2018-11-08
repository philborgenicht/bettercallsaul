document.addEventListener("DOMContentLoaded", function(){

let jesse=document.getElementById("jesse")
let hank=document.getElementById("hank")
let marie=document.getElementById("marie")
let skyler=document.getElementById("skyler")
let flynn=document.getElementById("flynn")
let jane=document.getElementById("jane")
let hector=document.getElementById("hector")
let victor=document.getElementById("victor")
let gale=document.getElementById("gale")
let gus=document.getElementById("gus")
let gomez=document.getElementById("gomez")
let walter=document.getElementById("walter")

let appendage=document.getElementsByTagName("h4")[0]

let jessep=document.createElement("h1")
let hankp=document.createElement("h1")
let mariep=document.createElement("h1")
let skylerp=document.createElement("h1")
let flynnp=document.createElement("h1")
let janep=document.createElement("h1")
let hectorp=document.createElement("h1")
let victorp=document.createElement("h1")
let galep=document.createElement("h1")
let gusp=document.createElement("h1")
let gomezp=document.createElement("h1")
let walterp=document.createElement("h1")

jessep.innerText="YOU KILLED ME!!!!! double click me to play again"
hankp.innerText="YOU KILLED ME!!!!! double click me to play again"
mariep.innerText="YOU KILLED ME!!!!! double click me to play again"
skylerp.innerText="YOU KILLED ME!!!!! double click me to play again"
flynnp.innerText="YOU KILLED ME!!!!! double click me to play again"
janep.innerText="YOU KILLED ME!!!!! double click me to play again"
hectorp.innerText="YOU KILLED ME!!!!! double click me to play again"
victorp.innerText="YOU KILLED ME!!!!! double click me to play again"
galep.innerText="YOU KILLED ME!!!!! double click me to play again"
gusp.innerText="YOU KILLED ME!!!!! double click me to play again"
gomezp.innerText="YOU KILLED ME!!!!! double click me to play again"
walterp.innerText="YOU KILLED ME!!!!! double click me to play again"

jessep.style.color="white"
hankp.style.color="white"
mariep.style.color="white"
skylerp.style.color="white"
flynnp.style.color="white"
janep.style.color="white"
hectorp.style.color="white"
victorp.style.color="white"
galep.style.color="white"
gusp.style.color="white"
gomezp.style.color="white"
walterp.style.color="white"


jesse.addEventListener("click", function(){

  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(jessep)
})

hank.addEventListener("click", function(){
  jesse.style.visibility="hidden"

  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(hankp)
})

marie.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"

  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(mariep)
})

skyler.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"

  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(skylerp)
})

flynn.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"

  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(flynnp)
})

jane.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"

  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(janep)
})

hector.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"

  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(hectorp)
})

victor.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"

  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(victorp)
})

gale.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"

  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(galep)
})

gus.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"

  gomez.style.visibility="hidden"
  walter.style.visibility="hidden"
  appendage.appendChild(gusp)
})

gomez.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"

  walter.style.visibility="hidden"
  appendage.appendChild(gomezp)
})

walter.addEventListener("click", function(){
  jesse.style.visibility="hidden"
  hank.style.visibility="hidden"
  marie.style.visibility="hidden"
  skyler.style.visibility="hidden"
  flynn.style.visibility="hidden"
  jane.style.visibility="hidden"
  hector.style.visibility="hidden"
  victor.style.visibility="hidden"
  gale.style.visibility="hidden"
  gus.style.visibility="hidden"
  gomez.style.visibility="hidden"
  appendage.appendChild(walterp)

})

jesse.addEventListener("dblclick", function(){

  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(jessep)
})

hank.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"

  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(hankp)
})

marie.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"

  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(mariep)
})

skyler.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"

  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(skylerp)
})

flynn.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"

  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(flynnp)
})

jane.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"

  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(janep)
})

hector.addEventListener("dblclick", function(){
    jesse.style.visibility="visible"
    hank.style.visibility="visible"
    marie.style.visibility="visible"
    skyler.style.visibility="visible"
    flynn.style.visibility="visible"
    jane.style.visibility="visible"
    victor.style.visibility="visible"
    gale.style.visibility="visible"
    gus.style.visibility="visible"
    gomez.style.visibility="visible"
    walter.style.visibility="visible"
    appendage.removeChild(hectorp)
})


victor.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"

  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(victorp)
})

gale.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"

  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(galep)
})

gus.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"

  gomez.style.visibility="visible"
  walter.style.visibility="visible"
  appendage.removeChild(gusp)
})

gomez.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"

  walter.style.visibility="visible"
  appendage.removeChild(gomezp)
})

walter.addEventListener("dblclick", function(){
  jesse.style.visibility="visible"
  hank.style.visibility="visible"
  marie.style.visibility="visible"
  skyler.style.visibility="visible"
  flynn.style.visibility="visible"
  jane.style.visibility="visible"
  hector.style.visibility="visible"
  victor.style.visibility="visible"
  gale.style.visibility="visible"
  gus.style.visibility="visible"
  gomez.style.visibility="visible"
  appendage.removeChild(walterp)

})





})
