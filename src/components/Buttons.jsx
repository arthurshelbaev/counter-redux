import React from 'react';
import { useDispatch } from 'react-redux';
import "../styles.css"


const Buttons = () => {

    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch({type: "plus"})
    }

    const handleDec =() => {
        dispatch({ type: "minus" })
    }

    return (
        <div className='buttons'>
            <button className='btn1' onClick={handleDec}>–</button>
            <button className='btn2'onClick={handleInc}>+</button>
        </div>
    );
};

export default Buttons;
