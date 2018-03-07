function echo(message, duration) {
  var duration = duration ? duration : 1000;
  return new Promise((resolve, reject) => {
    if(duration > 1) {
       setTimeout(() => {
        resolve(message)
      }, duration) 
    }
    else {
      reject("Invalid duration")
    }
  })
}

var log = result => {
  console.log(result);
  return result;
}

var error = e => {
  console.error("Error", e);
  return e;
}

echo('first echo', 200)
.then(log)
.then(log, error)

// // multiple promises
Promise.all([
  echo("First request", 2000),
  echo("Second request", 3000),
  echo("Third Request", 4000),
  echo("Fourth request", 5000)
])
.then(log)

Promise.race([
  echo("First request", 2000),
  echo("Second request", 3000),
  echo("Third Request", 4000),
  echo("Fourth request", 5000)
])
.then(log, error)

//chaining promises
var chain = echo("Chaining")
chain.then(log).then(log, error)
chain.then(log).then(log).then(log, error)
chain.then(log, error).then(log).then(log).then(log, error)
