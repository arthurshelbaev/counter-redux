import React from 'react'
import { Provider } from 'react-redux'
import Buttons from './Buttons'
import Number from './Number'
import "../styles.css"
import { createStore } from 'redux'

const App = () => {

    const reducer = (state, action) => {

    }

    const store = createStore(reducer)

    return (
        <div className='body'>
            <Provider store={store}>
                <Number />
            </Provider>
            <Buttons />
        </div>
    )
}

export default App