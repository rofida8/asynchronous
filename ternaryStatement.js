// ex1
// const hungry = true;
// hungry ? console.log("Have a cookie") : console.log("no cookies for you");

// ex2
// function over9000(num) {
//   //   if (num > 9000) {
//   //     return console.log("it's over 9000");
//   //   } else {
//   //     return console.log("taking a nape");
//   //   }

//   num > 9000 ? console.log("it's over 9000") : console.log("taking a nape");
// }
// over9000(900);
// over9000(9009);

// // ex3
// const wizard = ["Gandalf", "Voldombor", "Harry", "Saruman", "Jafar", "Marlin"];
// wizard.map((i) => {
//   if (i.includes("n")) {
//     return console.log(i.replace(/a/g, "n"));
//   } else {
//     return console.log(i.toUpperCase());
//   }
// });
//
// ex4:

// const character = ["Han Solo", "Spock", "Darth Vader", "Yado", "neo", "Sarah"];
// const filter = character.filter((i) => {
//   if (i.includes(" ")) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filter);

// switchstatement:
// ex1"
// const food = "Donuts";

// switch (food) {
//   case "fish": {
//     console.log("sounds fishy...");
//     break;
//   }
//   case "Donuts": {
//     console.log("wants chips..");
//     break;
//   }
//   case "sushi": {
//     console.log("wants seeweeds ...");
//     break;
//   }
// }

// ex2
// const activities = ["Swimming", "Hiking", "Rock Climing", "Biking", "Running"];
// for (const i of activities) {
//   switch (i) {
//     case "Swimming": {
//       console.log("like a fish");
//       break;
//     }
//     case "Rock Climing": {
//       console.log("like a mountain goat");
//       break;
//     }
//     case "Running": {
//       console.log("like a cheetah");
//       break;
//     }
//     default: {
//       console.log("i am sure some animal does that");
//     }
//   }
// }

// ex4:
const enemies = {
  rat: { atk: 3, def: 2, hp: 20, class: 1 },
  goblin: { atk: 10, def: 6, hp: 50, class: 1 },
  troll: { atk: 30, def: 20, hp: 200, class: 2 },
  gain: { atk: 50, def: 40, hp: 500, class: 2 },
};

for (const i of Object.values(enemies)) {
  switch (i.class) {
    case 1: {
      console.log("this is an easy fight");
      break;
    }
    case 2: {
      console.log("this is require some training");
      break;
    }
    default: {
      console.log("no impelented yet...");
    }
  }
}
