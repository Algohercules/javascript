//browser events :---

//  event :---
//  the process in which any announcement is made to the document i.e. mouseover, scroll, click etc is called an event


// event-target :---
// the position at which event happens in a document is called as event target....


// event listener :---
// the location at which the code is written to execute the happening event is called the event listener
// this is done by the addEventListener()and removeEventListener

// <event-target>.addEventListener(<eventtype>,<function>)


// function changeText(){
//     let fPara = document.getElementById('fpara');
//     fPara.textContent = "hello babbar"
// }

// let fPara = document.getElementById('fpara')

// fPara.addEventListener('click', changeText)



// //remove event lisener :---
// fPara.removeEventListener('click', changeText)

//the function passed  in addevent listener must be as same as that of used in the remove event listener then only it will work otherwise not


//phases of an event :---
// capturing phase  --->  trying to reach our root elment
// at target phase ---> reached our root element
// bubbling phase  ---> again coming out of the  root directory


// addevent listener is applied in bubbling phase by default



// event object :---
//  triggerred event is accomodated in listener then we can utilise its data


// default action :---
//  it is defined as the most basic event of a tag or element

// how to change default action :--

// let anchorElement = document.getElementById('fanchor')

// anchorEvent.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "click done bhai"
// });



// avoiding too many listeners

// let paras = document.querySelectorAll('p');

// function alertPara(){
//     alert("you have clicked on para:" + event.target.textContent)
// }

// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara)
//
