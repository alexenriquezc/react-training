import React, { useState } from 'react'
import './counter.css';
import { CounterWithCustomHook } from './CounterWithCustomHook';

export const CounterApp = () => {

    // const [state, setState] = useState({
    //     counter1: 10,
    //     counter2: 20,
    //     counter3: 30,
    //     counter4: 40
    // })

    // const {counter1, counter2} = state;

    // const handleCounterEvent = () => {
    //     setState({
    //         ...state,
    //         counter1: counter1 + 1
    //     });
    // }
    // return (
    //     <>
    //       <h1>Counter: {counter1}</h1>
    //       <h1>Counter: {counter2}</h1>
    //       <br/>
          
    //       <button className="btn btn-primary" onClick={ handleCounterEvent }> +1 </button>
    //     </>
    // )

    return (
        <CounterWithCustomHook/>
    )
}
