const axios = require('axios');
//clients can be node or frontend react
axios.get('http://localhost:3000/get-test')
  .then((res) => {
    console.log(res.data);
  })
  .catch(console.log);

console.log('here');

const myAsyncTest = async () => {
  try{
    const anyObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    const res = await axios.post('http://localhost:3000/post-test?a=b', anyObject);
    console.log(res.data);
  }catch(e){
    console.log(e);
  }
};

myAsyncTest();