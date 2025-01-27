// performance:---
// the measure of efficienvy and measurement of the code is called as performance

//code 1

// const t1 = performance.now()

// for (let i = 1; i<100; i++){
//     let para = document.createElement('p')
//     para.textContent = "this is para" +i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now()

// console.log("total time taken by code 1:", + (t2 - t1));

// //code 2

// const t3 = performance.now()
// let myDiv = document.createElement('div')

// for( let i = 1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = "this ia para" +i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now()

// console.log("total time taken by code 2:", + (t3 - t4));



//reflow and repaint :---


// reflow is the process of calculating the dimension or position of elements. it is much time consuming and computational process

// repaint is the process of displaying th econtent pixel by pixel

//repaint is faster because it is only printing the code



//code 1 has the most reflow and repaint bcz we are directly attaching the every paragraph to the document 


//code 2 is faster bcz  there is very less reflow needed here due to the fact that we are first inserting the 100 paragraphhs in our div which requires no reflow and then we just simply painted that value on the web so it takes less reflow and repaint



// document fragment :---
//  it is a light weight document object where no reflow and repaint is done 


//best code using document fragment:--

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100;  i++){
    let para = document.createElement('p');
    para.textContent = "this is para" +i;
    fragment.appendChild(para);
}

//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);