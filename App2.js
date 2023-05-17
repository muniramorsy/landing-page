let sectiosVa= document.querySelectorAll("section")
console.log(sectiosVa)
/** i will make an array from html element section dinamically due to if i add another section to html the code work correctly**/
let arrSection = []
for(i=0;i<=sectiosVa.length-1;i++){
arrSection.push(sectiosVa[i])}
console.log(arrSection)

//now i get ul to append child li to her i will creat
let navList=document.getElementById("navbar__list")
console.log(navList)

//creating li and a
/*i have 4 section i want 4 a to them
i can creat them by my self but if the section increased i shoud make another a by my self solution :using loop is best here 
*/
/*1:make aloop start from 1 to lenth of array
2:creat li and a 
3:add class meun link to take the style fromm style sheet
4:append the elements i created to  parent
5:creat attribut href and add it to a elemant 6:add # to href due to if i press any linke in nav it will go to his section inthe page 7:add name to link by using inner text*/

for(let i=1;i<=arrSection.length;i++){
 let liElement= document.createElement("li")
 let aElement=document.createElement("a")
 let hrefAtt = document.createAttribute("href")
 
 aElement.className="menu__link"
 liElement.className="menu_li"
 navList.appendChild(liElement)
 liElement.appendChild(aElement)
 aElement.setAttributeNode(hrefAtt)
 aElement.href="#section"+[i]
aElement.innerText="section"+[i]
}
/*creat an array from all a element
to use it to make behaviour smooth*/
let allaElement=document.querySelectorAll("a")
let arraElement = []
for(i=0;i<=allaElement.length-1;i++){
arraElement.push(allaElement[i])}


  
  arraElement[3].onclick=function(){
  arrSection[3].classlist.add("your-active-class")
  arrSection[0].classlist.remove("your-active-class")
  arrSection[1].classlist.remove("your-active-class")

  arrSection[2].classlist.remove("your-active-class")

  }
  
 arraElement
   arrSection[3].classlist.add("your-active-class")
  arrSection[0].classlist.remove("your-active-class")
  arrSection[1].classlist.remove("your-active-class")

  arrSection[2].classlist.remove("your-active-class")
   
   
   
   /* creat button to scroll up and style it
1: creat div by hrml to be parent of button and.give it position relative
2:creat btn by js 
3:make it clickable*/
//let footerEle=document.querySelector("footer")
let divBtn= document.querySelector(".btn")
let upBtn=document.createElement("button")
//footerEle.before(upBtn)
divBtn.appendChild(upBtn)
upBtn.innerHTML="up"
upBtn.style.cssText="background-color:deepSkyBlue;border-radius:5px;border:none;width:60px; height:50px; position:fixed;bottom: 0;right:0;"
divBtn.style.position="relative"
upBtn.onclick=function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
