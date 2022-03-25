//Promisify
// setTimeout(() => {
//   console.log(`Ha pasado 1 segundo`);
//   setTimeout(() => {
//     console.log(`Han pasado 2 segundos adicionales`);
//     setTimeout(() => {
//       console.log(`Han pasado 3 segundos adicionales`);
//       setTimeout(() => {
//         console.log(`Han pasado 4 segundos adicionales`);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

const waitPromise = new Promise((resolve, reject));
const wait = (segundos) => {
  return Promise((resolve) => {
    setTimeout(() => {
      resolve(`Ha pasado ${segundos} segundos`);
    }, segundos * 1000);
  });
};

wait(1)
  .then((data) => {
    console.log(data);
    return wait(2);
  })
  .then((data) => {
    console.log(data);
    return wait(3);
  })
  .then((data) => {
    console.log(data);
    return wait(4);
  });

// const promesa = new Promise(function (resolve, reject) {});

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Promesa iniciada`);
//   setTimeout(
//     () =>
//       Math.random() > 0.5 ? resolve("Ganaste") : reject(new Error("Perdiste")),
//     5000
//   );
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// console.log(`Test start`);
// setTimeout(() => {
//   console.log(`Timer de 0 segundos`);
// }, 0);

// Promise.resolve("Resolve promise 1").then((res) => console.log(res));
// Promise.resolve("Resolve promise 2").then((res) => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });

// console.log(`Test end`);
