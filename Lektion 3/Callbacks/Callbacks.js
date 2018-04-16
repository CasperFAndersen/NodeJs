// var someFunc = function (condition, cb) {
//     if (condition) {
//         // First parameter is the error
//         // If you have more callbacks in a method, always make sure to 
//         //return, so that the same callback is not called multiple times.         
//         return cb("error");
//     }
//     cb(null, "success");
// };
// // Later we call someFunc using the error style callback pattern
// // where the first parameter is error, and the 2nd is the result
// someFunc(false, (err, result) => {
//     // Handle error    
//     if (err) console.log(err);
//     // do something with result    
//     console.log(result);
// });


//Without Arrow Function

// function someFunc (condition, cb) {
//     if (condition) {
//         return cb("error");
//     }
//     cb(null, "success");
// };

// someFunc(false, function (err, result){
//     if (err){ console.log(err)
//     }
//     else{
//     console.log(result)
//     }
// });


//excersise: make the following async
function doWork(callback) {
    var ran = Math.random();
    callback(ran);
}
// ES6 fat arrow function
setTimeout(function () { doWork( (data) => console.log('The lucky number is ' + data)); }, 3000);

setTimeout(function () { console.log("1") }, 1000);
setTimeout(function () { console.log("2") }, 2000);
setTimeout(function () { console.log("3") }, 3000);
setTimeout(function () { console.log("4") }, 4000);
setTimeout(function () { console.log("5") }, 5000);

function doWork2(n, callback) {
    var result = n + n;
    callback(result);
}

doWork2(2, (result) => console.log('resultat = ' + result));


