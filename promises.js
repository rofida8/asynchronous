//ex1
// console.log ("program started");
//  const myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("program compelete");
//  },3000)
//  setTimeout(()=>{
//     reject("program rejected");
//  },2000)
//  })
 
//  myPromise.then((value)=>{
//     console.log(value)
//  }).catch((value)=>{
//     console.log(value)
//  })

//ex2:


// console.log("program started");
// const myPromise= new Promise((resolve,reject)=>{
//  setTimeout(()=>{resolve("step 1 in program completed")}
// ,3000)})
// console.log(myPromise)

// myPromise.then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{setTimeout(() => {resolve("step 2 compeleted")}
//      ,3000)})
// }).then((comp)=>{console.log(comp)})



//ex3:
// console.log("program started");
// const myPromise= new Promise((resolve,reject)=>{
//  setTimeout(() => {
//     resolve({data:"hello",error:null})
//  }, 5000);
// })
//  console.log(myPromise)
//  console.log("program in progress")

//  myPromise.then((value)=>{console.log(value)
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("the first chain compelete")
//         }, 2000);
//     })
//  }).then((val)=>{console.log(val);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("the second chain compelete")
//         }, 10000);
//     })
//  }).then((valu)=>{console.log(valu)})


//ex4:
const myFirstNumber= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
const mySecondNumber= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(20)
    }, 5000);
})

myFirstNumber.then ((val)=>{console.log(val)});
mySecondNumber.then ((value)=>{console.log(value)});
Promise.all([myFirstNumber, mySecondNumber]).then(([value,val]) => {
    console.log(value+val);
  });






























