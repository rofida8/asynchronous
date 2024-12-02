// const points = [10, 15, 20, 30, 5];
// const pointedCopy = [...points, 50, 75];
// console.log(pointedCopy);
// console.log(points);

// ex2:
// const view = [
//   [5, 10, 20],
//   [10, 20, 30],
// ];
// const viewCopy = [...view, [100, 300]];

// viewCopy[1].pop();
// viewCopy[0].push(48);
// console.log(view);
// console.log("--------------");
// console.log(viewCopy);

// ex3
// const animal = {
//   name: "koala",
//   kingdom: "australia",
//   cute: true,
//   friends: { name: "kangarue" },
// };
// const koala = { ...animal, tail: false, cute: false };
// console.log(animal);
// console.log("---------------");
// console.log(koala);

// ex4
const superhero = {
  name: "Bruce Wane ",
  alias: "batman",
  enemies: ["jocker", "catwoman", "bane"],
  bestmovie: { title: "the Dark Knight", rating: 95 },
};
const copysuperhero = { ...superhero };
console.log(copysuperhero);
