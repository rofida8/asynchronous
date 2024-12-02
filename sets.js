
//1st example
// let number= new Set()

// number.add(1)
// number.add(2)
// number.add(3)
// number.add(4)
// number.add(5)
// number.add(2)
// number.add(3)
// number.add(4)
//  console.log (number)



////2nd example

//  let array=[10,20,30,40,50,10,20,30];
//  const unique=new Set()
//  for (let i=0 ;i<array.length;i++){
//     if (unique.has(array[i])){
//         console.log("hello",array[i]);
//         break;}
//     unique.add(array[i]);
//  }

 

//3rd example

const items=[{name:"banana",quantity:1,price:1.75},
    {name:"apple",quantity:1,price:2.58},
    {name:"banana",quantity:10,price:3.15},
    {name:"candy",quantity:3,price:3.75}
];
let result=[];
let duplicate=new Set();

for (let i=0;i<items.length ;i++){

    result.push(items[i])
if (duplicate.has((items[i].name))){
    duplicate.delete(items[i])
    result.pop(items[i])
   
}

  duplicate.add(items[i].name)
  
}
console.log(result)