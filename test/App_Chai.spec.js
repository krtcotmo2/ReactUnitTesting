import { doIncrement, doDecrement } from '../src/App';

describe("BASIC CHAI TEST Local State", () =>{
    it("should increment the counter in the state", () =>{
        const state = { counter: 0 };
        const newState = doIncrement(state); 
        expect(newState.counter).to.equal(1);
    }),
    it("should decrement the counter in the state", () =>{
        const state = { counter: 0 , extraValue:[0,1]};
        const newState = doDecrement(state);
        expect(newState.counter).to.equal(-1);
    })
})