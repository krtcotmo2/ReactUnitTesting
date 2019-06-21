import React from "react";

export default function Counter(props){
    return(
        <>
            <p>Counter Piece {props.stateValue.counter}</p>
            <button type="button" onClick={() => props.clickEventI()}>Increment</button>
            <button type="button" onClick={() => props.clickEventD()}>Decrement</button>
        </>
    );
}