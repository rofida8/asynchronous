class FancyArray extends Array{
    constructor(){
        super()
    }
    mapWithLogging(){
console.log(`Current: . After Callback: `)
    }
}

const array = new FancyArray();
console.log(array);
array.push(1);
array.push(2);
array.push(3);
console.log(array);

const map = array.mapWithLogging(item,I)=>{
    return item+I;}
