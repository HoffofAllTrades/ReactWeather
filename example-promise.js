// promise handles only one response for a callback and makes things more readable
// // Standard callback
// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Philadelpha', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });
//
// // Exact same functionality using promise
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000); // milliseconds
//   });
// }
//
// getTempPromise('Philadelpha').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.console.log('promise error', err);
// })



// Challenge Area
function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === "number") {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers')
    }
  });
}

// This passes
addPromise(5, 7).then(function (sum) {
  console.log('success', sum)
}, function (err) {
  console.log('error', err)
})

// This fails
addPromise(5, 7).then(function (sum) {
  console.log('success', sum)
}, function (err) {
  console.log('error', err)
})
// run in terminal with node example-promise.js
