//1st example

// const number=[2,4,6,8,10];
// for(let item of number){
//  console.log(item*item)
// }


//2nd ex:put this ages inside the object
//  const ages =[10,42,15,22,74,39,2];
//  let results=[];
//  let obj={}

//  for(item of ages){
//     obj={age:item,name:"Dragon"}
    
//     results.push(obj)
   
//  }
//  console.log(results)

//3rd ex: 
//  let names= new Set();
//  let capsNames= new Set();
//  names.add("Bilbo");
//  names.add("Hermione");
//  names.add("Spock");
//  names.add("Leia");
//   for (let name of names ){
//     capsNames.add( name.toUpperCase())
//   }
//   console.log(capsNames)



//4th ex:

const backPack= new Map();
backPack.set(1,{name:'sward', value:300});
backPack.set(2,{name:'Banana', value:5});
backPack.set(3,{name:'Nugget', value:500});
backPack.set(4,{name:'Pants', value:100});
let totalValue=0;


for (const item of backPack) {
    console.log(`${item[1].name}:$ ${item[1].value}`);

    totalValue+=item[1].value 
  
  }

  console.log(`Total value:$${totalValue}`);








