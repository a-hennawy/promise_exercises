//////////////Part1////////////////

// numArray = [13, 45, 785, 34];
// factPromiseArr = [];
// function getFact(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let url = `http://numbersapi.com/${arr[i]}?json`;
//     factPromiseArr.push(axios.get(url));
//   }

//   Promise.all(factPromiseArr).then((factArr) =>
//     factArr.forEach((fact) => {
//       console.log(fact.data.text);
//     })
//   );
// }
// getFact(numArray);
//1.
let favNum = 13;
let baseURL = "http://numbersapi.com";

// $.getJSON(`${baseURL}/${favNum}?json`).then((data) => {
//   console.log(data.text);
// });

//2.
let favNums = [12, 234, 23, 32];

// $.getJSON(`${baseURL}/${favNums}?json`).then((data) => {
//   console.log(data);
// });

//3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNum}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}<p>`));
});

////////////Part2/////////////////
