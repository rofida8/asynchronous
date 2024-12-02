//  const fetchPockemon =()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout( resolve({data:{name:"picatchu", power:20}}),2000)
//     // reject("an error will happen")
// })
//  }

//  console.log("starting");
//  const usePockemon=async () => {
//    try {
//     const data= await fetchPockemon();
//     console.log(data);
//    } catch (error) {
//     console.error(error);
//    }
//  }
//  usePockemon();
//  console.log("done");

//ex2

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { user: "Monkey", admin: true } });
//     }, 3000);
//   });
// };

// const login = (user) => {
//   user.admin = true
//     ? console.log("successfully logged in")
//     : console.log("failed to log in");
// };

// console.log("start");
// const useData = async () => {
//   const result = await fetchUser();
//   console.log(result);
//   login(result.data);
// };
// useData();
// console.log("ends");

// ex3

// const fetchFast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("fast Done");
//     }, 2000);
//   });
// };
// const fetchSlow = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("slow Done");
//     }, 6000);
//   });
// };
// console.log("starting...");
// const firstTime = new Date();
// const useData = async () => {
//   console.log("async. starts");
//   const fast = await fetchFast();
//   console.log("fast", fast);
//   const slow = await fetchSlow();
//   console.log("slow", slow);
//   const secondTime = new Date();
//   const timeTakes = secondTime - firstTime; // to measure what time exactly the program takes we put a time detect in the first of the code running and one after finish and subtract them
//   console.log("compelete!", timeTakes);
// };

// useData();

//  ex4
const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour key", quentity: 10 });
    }, 2000);
  });
};

const sellCandies = (candies) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(25 * candies.quentity);
    }, 3000);
  });
};

// const excute = async (data) => {
//   const candies = await goGetCandies();
//   console.log(candies);
//   const sells = await sellCandies(candies);
//   console.log(sells);
// };
// excute();
const candies = goGetCandies().then((value) => {
  return value;
});
const sells = sellCandies().then((candies) => {
  console.log(candies);
});
console.log(sells);
