let sec1=document.getElementById("section1")
let sec2=document.getElementById("section2")
let sec3=document.getElementById("section3")
let sec4=document.getElementById("section4")
/*i can use another way to get all section
document.querySelector All("section") */
let arrsec=[sec1,sec2,sec3,sec4]
//l make an array from all section


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
4:append the elements i created to  parent*/

for(let i=1;i<=arrsec.length;i++){
 let liElement= document.createElement("li")
 let aElement=document.createElement("a")
 aElement.className="menu__link"
 liElement.className="menu_li"
 navList.appendChild(liElement)
 liElement.appendChild(aElement)
}
/*now i want to add href attribute to a element
this step need to use the id of section to conect the href by every part of sit*/
let allaElemant=document.querySelectorAll("a")


allaElemant[0].href="#section1"
allaElemant[1].href="#section2"
allaElemant[2].href="#section3"
allaElemant[3].href="#section4"

/*add the name ef section on his li*/
allaElemant[0].innerHTML="section1"
allaElemant[1].innerHTML="section2"
allaElemant[2].innerHTML="section3"
allaElemant[3].innerHTML="section4"

/*now the time to make behaviour smooth
by using scrollto*/
let arrLiElement=[allaElemant[0],allaElemant[1],allaElemant[2],allaElemant[3]]
for(let j=0;j<=arrLiElement.length-1;j++){
  arrLiElement.onclick=function(){
   arrsec.scrollIntoView({behavior: "smooth" });
  }
}
  


/*adding active class to oncliced section*/
sec2.className="your-active-class"


/* creat button to scroll up and style it
1: creat div by hrml to be parent of button and.give it position relative
2:creat btn by js 
3:make it clickable*/
//let footerEle=document.querySelector("footer")that is bad idea i cant add btn before footer without parent i want add to btn position fixed
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
};

console.log(window.screenY)
