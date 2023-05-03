import { useState } from "react"

const Input = (props) => {
    const [todoInput, setTodoInput] = useState('');

    return (
        <div className="input-wrapper">
            <form onSubmit={props.submitData}>
                <input className="input-area" type="text" placeholder="Enter Text..." value={todoInput} onChange={(e) => { setTodoInput(e.target.value) }} />
                <button className="btn">Create</button>
            </form>
        </div>
    )
}

export default Input