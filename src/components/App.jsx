import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Buttons from './Buttons'
import Number from './Number'
import "../styles.css"

const App = () => {

    const initialState = {
        number: 0,
        theme: "dark"
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "plus":
                return {
                    ...state, number: state.number + 1
                }
            case "minus":
                if (state.number > 0) {
                return {
                    ...state, number: state.number - 1
                }}
            case "break":
                return {
                    ...state, number: state.number = 0
                }
                break;
        
            default:
                return state;
        }
    }

    const store = createStore(reducer)

    return (
        <div className='body'>
            <Provider store={store}>
                <Number />
                <Buttons />
            </Provider>
        </div>
    )
}

export default App
