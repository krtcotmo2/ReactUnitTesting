import { doIncrement, doDecrement } from '../src/App';

describe("Local State", () =>{
    it("should increment the counter in the state", () =>{
        const state = { counter: 0 };
        const newState = doIncrement(state); 
        console.log(state.counter, newState.counter);   
        expect(newState.counter).to.equal(1);
    }),
    it("should decrement the counter in the state", () =>{
        const state = { counter: 0 , extraValue:[0,1]};
        const newState = doDecrement(state);
        console.log(state.counter, newState.counter);
        expect(newState.counter).to.equal(-1);
    })
})