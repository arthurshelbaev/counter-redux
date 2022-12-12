import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Number = () => {

    const dispatch = useDispatch()

    const breeak = () => {
        dispatch({type: "break"})
    }

    const number = useSelector((state) => state.number)
    const theme = useSelector((state) => state.theme)
    
    return (
        <div className='number' onClick={breeak}>{number}</div>
    );
};

export default Number;
