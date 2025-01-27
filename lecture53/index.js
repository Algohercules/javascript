//browser events :---

//  event :---
//  the process in which any announcement is made to the document i.e. mouseover, scroll, click etc is called an event


// event-target :---
// the position at which event happens in a document is called as event target....


// event listener :---
// the location at which the code is written to execute the happening event is called the event listener
// this is done by the addEventListener()and removeEventListener

// <event-target>.addEventListener(<eventtype>,<function>)


function changeText(){
    let fPara = document.getElementById('fpara');
    fPara.textContent = "hello babbar"
}

let fPara = document.getElementById('fpara')

fPara.addEventListener('click', changeText)