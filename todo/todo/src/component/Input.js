import { useState } from "react";

const Input = (props) => {

    const [inputText, setInputText] = useState('')

    return (
        <div className="input-wrapper">
            <input className="input-area" type="text" placeholder="Enter Text..." value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
            <button className="btn"
                onClick={() => {
                    props.addList(inputText)
                    setInputText("")
                }}>
                Create</button>
        </div >
    )
}
export default Input;