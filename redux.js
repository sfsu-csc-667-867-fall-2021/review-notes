// redux 

let globalState = {}; // global state is just an object

// actions or action creaters
// like factory
function myActionFactory(a){
  return {
    type: 'TYPE_1',
    a: a,
  };
}

const myActionFactory1 = (a) => {
  return {
    type: 'TYPE_1',
    a: a,
  };
};

// reducers which are functions that can modify state
const myReducer = (existingState, action = {}) => {
  switch (action.type) {
    case 'TYPE_1':
      return {
        ...existingState, // make a shallow copy
        a : action.a,
      };
      // existingState.a = action.a;
      // return existingState;
    default:
      break;
  }
  // if no changes skip
  return existingState; // we did not modify the state
};

const states = [];
states.push(globalState);

// dispatch
states.push(myReducer(globalState));
console.log(states);
console.log(states[0] === states[1]); // no change

const action1 = myActionFactory1('Hello World');
console.log(action1);
states.push(myReducer(globalState, action1));
console.log(states);
states.push(myReducer(globalState, myActionFactory('Goodbye!')));
console.log(states);
console.log(states[2] === states[3]); // change
console.log(states[2]);
console.log(states[3]);


