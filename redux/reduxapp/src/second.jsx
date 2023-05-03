import React from 'React'
import { useSelector } from 'react-redux';



const OutPut = () => {
    const todo = useSelector(state => state.enterTheText)


    return (
        <div>
            <h1>OutPut</h1>
            <h2>{todo}</h2>
        </div>
    )
}

export default OutPut
