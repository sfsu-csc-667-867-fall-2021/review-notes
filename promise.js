

// promises are usually coming because of network calls
// ask js to do something when the network call is over
const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { // fake network call
    //resolve('Some Data'); // data from express
    reject('server is down');
  }, 1000);
});


// how we commonly call promises
myPromise()
  .then((data) => { // does not mean run now, it means queue for running after promise is over
    console.log('Network call is done ' + data);
    // if there is a return
    return 'abc'; // pass it onto next promise
  }) // do something at some point after it finishes
  .then((arg) => {
    console.log('This happens second ' + arg);
    // Force an error
    return Promise.reject('asd'); // would happen if you make 2 newtork calls in a row, and second one fails
  })
  .catch((error) => {
    // if network call fails
    console.log('Failed ' + error);
  })
  .then(() => console.log('do more things'));

console.log('Here');


// async/await
const myAsyncFunction = async () => {
    // works same way as promise but makes it look as if it blocks
    console.log('here'); // everything runs in order you see it
    try{
      const data = await myPromise(); // this runs in order
      console.log('After promise is done ' + data);
    }catch(e){
      console.log(e);
    }
};

myAsyncFunction();