document.addEventListener("DOMContentLoaded", function(){

let michael=document.getElementById("mike")

let peter=document.getElementById("pete")

let brandon=document.getElementById("badger")

let kuby=document.getElementById("huell")

let addText=document.getElementById("pictures")

let top=document.getElementById("top")
let bottom=document.getElementById("bottom")

let mikeDesc=document.createElement("p")
let mikeQuote=document.createElement("h6")

mikeDesc.innerText="Michael Ehrmantraut was one of Saul's first clients, but certainly not the last. Mr. Ehrmantraut is a former police officer for both the city of New York, as well as Philadelphia. Unfortunately, after retiring from the force, he made some bad decisions and got involved with some undesirable characters and found himself on the wrong side of the law for the first time in his untarnished life. Luckily, Saul was there to help. Mike was able to get acquitted of all charges of tax evasion, and return to caring for his daughter and granddaughter, Kaylie Ehrmantraut. Mr. Ehrmantraut was so grateful to Saul, that he wanted to repay him and now does private security and loss prevention for one of Saul's associates, Gustavo Fring, a local business owner, both of a laundromat, and a fried chicken restaurant."
mikeQuote.innerText="I wouldn't be where I am today, living and loving every day of my life with my family without the help of Saul Goodman!-- Mike Ehrmantraut"


let peteDesc=document.createElement("p")

peteDesc.innerText="Peter grew up in southern Arizona, in a suburb outside of Phoenix. Always a studious young man and an athlete, unfortunatley he fell into a rough crowd as he neared his High School years. His father had become hooked on methamphetamine, a growing epidemic in the southwest. While Peter was and still is an intelligent young man, he made some poor choices that led to him getting involved with drugs himself. He was facing 10 years in Las Lunas Correctional Center, for possession of a felony quantity of methamphetamine, but sought the counsel of Saul, and was able to get all charges dismissed. Ever regretful of the poor choices he made and the people with whom he got involved, Peter still attends support groups for recovering addicts to this day. He also has taken up classes in classical music and piano, always a passion of his, and is on the road to becoming a music teacher."

let peteQuote=document.createElement("h6")
peteQuote.innerText="Saul Goodman gave me my life back. Don't let one mistake ruin your life. --Peter"

let huellDesc=document.createElement("p")
huellDesc.innerText="Originally a resident of Louisiana, Huell was always heavily involved with his community and an active member of his church. Unfortunately, one day he was in the wrong place at the wrong time and found guilty of a crime he did not commit. Once again, Saul was able to collect the necessary evidence and show the judge and jury that a lovely, God fearing man, such as Huell would not commit such a heinous act. As it can be difficult for those accused of a crime to find work, Saul hired Huell and his associate Peter Kuby as private security and they still maintain a great professional and perosnal relationship to this day."

let huellQuote=document.createElement("h6")
huellQuote.innerText="God is good and so is Saul. I continue to pray for him every day and I know he does for me too. --Huell Babineaux"

let brandonDesc=document.createElement("p")
brandonDesc.innerText="Brandon Mayhew was another classic non violent offender of whom the prosecutors tried to 'make an example'. He was caught with an ounce of marijuana for medicinal use but his doctor prescribed THC card had expired a week prior. It was an election year and the local politicians were cracking down on mandatory minimum sentencinc laws and they tried to put Brandon away for 5 years. Saul would not let such a blatant display of injustic go unquestioned and was able to show the courts Brandon's exemplary record, including community service, working with Habitat for Humanity, and volunteering at local animal shelters and hospitals, and once again, all charges were dropped."

let brandonQuote=document.createElement("h6")
brandonQuote.innerText="If you are in need of legal counsel, don't even think about hiring anyone but Saul Goodman. BETTER CALL SAUL! --Brandon Mayhew"


michael.addEventListener("mouseover", function (){
  peter.style.display="none"
  kuby.style.display="none"
  brandon.style.display="none"
  addText.appendChild(mikeDesc)
  mikeDesc.appendChild(mikeQuote)
})
michael.addEventListener("mouseout", function(){
  peter.style.display="initial"
  kuby.style.display="initial"
  brandon.style.display="initial"
  addText.removeChild(mikeDesc)
})

brandon.addEventListener("mouseover", function (){
  peter.style.display="none"
  michael.style.display="none"
  kuby.style.display="none"
  addText.appendChild(brandonDesc)
  brandonDesc.appendChild(brandonQuote)
})
brandon.addEventListener("mouseout", function(){
  peter.style.display="initial"
  michael.style.display="initial"
  kuby.style.display="initial"
  addText.removeChild(brandonDesc)
  brandonDesc.removeChild(brandonQuote)
})

peter.addEventListener("mouseover", function(){
  kuby.style.visibility="hidden"
  bottom.appendChild(peteDesc)
  peteDesc.appendChild(peteQuote)
})

peter.addEventListener("mouseout", function(){
  kuby.style.visibility="visible"
  bottom.removeChild(peteDesc)
  peteDesc.removeChild(peteQuote)

})

kuby.addEventListener("mouseover", function (){
  peter.style.visibility="hidden"
  michael.style.visibility="hidden"
  brandon.style.visibility="hidden"
  bottom.appendChild(huellDesc)
  huellDesc.appendChild(huellQuote)
})
kuby.addEventListener("mouseout", function(){

  peter.style.visibility="visible"
  brandon.style.visibility="visible"
  michael.style.visibility="visible"
  bottom.removeChild(huellDesc)
  huellDesc.removeChild(huellQuote)
})








})
