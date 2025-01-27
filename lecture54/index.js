// performance:---
// the measure of efficienvy and measurement of the code is called as performance

//code 1

const t1 = performance.now()

for (let i = 1; i<100; i++){
    let para = document.createElement('p')
    para.textContent = "this is para" +i;
    document.body.appendChild(para);
}
const t2 = performance.now()

console.log("total time taken by code 1:", + (t2 - t1));

//code 2

const t3 = performance.now()
let myDiv = document.createElement('div')

for( let i = 1; i<=100; i++){
    let para = document.createElement('p')
    para.textContent = "this ia para" +i;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const t4 = performance.now()

console.log("total time taken by code 2:", + (t3 - t4));
