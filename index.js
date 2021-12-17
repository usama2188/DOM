// let con = document.getElementById("container");
// console.log(con);

// function clicked() {
//   elem = document.getElementById("btn").innerText;
//      elem+=1;
//      console.log(elem)
// return elem;
// }

// let elem = document.getElementById("container");
// elem.style.backgroundColor="green";
// let elem = document.getElementsByClassName("container")
// elem[0].classList.add("newclass")

// sel=document.querySelectorAll('.container')
// console.log(sel)

// add new class in DOM

// let elem = document.getElementsByTagName("p")
//  elem[1].classList.add("newclass")
// elem[1].style.color="white";

//////////////adding a child in a exiting class///////////
//   tn = document.getElementById("container")
//    let elem = document.createElement('p');
//    elem.innertext="this text is added using JS";
//   tn[0].appendChild(elem);
//  i will srarch it tomorrow...........................

// get inner text and inner html in dom/////////////////
// let inn = document.getElementById("container")
// console.log(inn.innerTexnt);
// console.log(inn.innerHTML)

// selection using query 
// also this tomorrow...................................

/////////////////////////event listner////////////////

//  document.getElementById("container")
//  window.onload = function(){
//      console.log("page is loaded")
//  }

//  document.getAnimations("container")
// let elem=addEventListener("click", function ()
//  { alert("Hello World!"); });

//  document.getElementById("container")
//  container.addEventListener('mouseover',function(){
//      console.log("mouse entered")
//  })
// document.getElementById("container")
//  container.addEventListener('mouseup',function(){
//      console.log("mouse up")
//  })
// document.getElementById("container")
//  container.addEventListener('mousedown',function(){
    //      console.log("mouse down")
    // previoushtml = "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, rerum facere repellat possimus eligendi</p>"
    
    // container.addEventListener('mouseover',function(){
        //     document.querySelectorAll('.container')[0].innerText=previoushtml;
//     console.log('ok');
// })

// btn.addEventListener('click',function(){
//      document.querySelectorAll('.container')[0].innerText="hello button is clicked"
//  })



// .............set time interval and time out...............
// sett=()=>{
//     document.querySelectorAll('.para')[0].innerText="set timeout";
// }
// setTimeout(sett,3000);

// setint=()=>{
//     console.log("time interval has been set")
// }
// clr=setInterval(setint,3000)


//.............local starage in.................
// localStorage.setItem('usama','rasheed')
// localStorage.getItem('usama')
// console.log(localStorage)
// localstorage.removeItem('')
// loxcalstorage.clear

//.........JSON...........
/*obj={name:'usama',Fname:'rasheed',Age:'21',Address:'usfjfj'}
jos=JSON.stringify(obj) //convert obj into string
console.log(jos)

convrt=JSON.parse(jos)  //convert string back into obj
console.log(convrt)*/



//////dom
//append child
let newElem=document.createElement("p");
newElem.textContent="lorem is a good dummy text"
let elem=document.getElementById("primary")
elem.append(newElem)


let tableRow=document.createElement("tr")
let tableData=document.createElement("td")
tableData.textContent="maryam";
let tableData1=document.createElement("td")
tableData1.textContent="madsd";
tableRow.appendChild(tableData)
tableRow.appendChild(tableData1)
console.log(tableRow)

let table=document.getElementById('table')
trr=table.childNodes[1];
trr.append(tableRow)
