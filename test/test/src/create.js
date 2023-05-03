import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () =>{

    const [model, setModel] = useState('');
    const [carname, setCarname] = useState('');
    const [avg, setAvg] = useState('');
    const [article, setArticle] = useState('');
    const [pending, setPending] = useState(false);
    const history = useHistory();

    const submitevents = (e) => {
        const blog = {model, carname, avg, article};
        e.preventDefault();
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
        console.log("new blogs")
        setPending(false);
        history.push('/');
    })
    }

    return(
        <div>
            <div className="article">
                <h1 className="car-title">Add New Article</h1>
                <form className="form-page container" onSubmit={submitevents}>
                    <div className="wrapper">
                    <div className="left">
                        <label>Model Name:</label>
                        <input type="text" rquired value={model} onChange={(e) => setModel(e.target.value)} required />
                    </div>
                    <div className="left">
                        <label>Car Name:</label>
                        <input type="text" rquired value={carname} onChange={(a) => setCarname(a.target.value)} required/>
                    </div>
                    <div className="left">
                        <label>Avg:</label>
                        <input type="text" rquired value={avg} onChange={(a) => setAvg(a.target.value)} required/>
                    </div>
                    <div className="left">
                        <label>Text Area</label>
                        <textarea cols={85} rows={6}
                        required value={article} onChange={(t) => setArticle(t.target.value)}></textarea>
                    </div>
                    </div>
                    {!pending && <button className="btn">Submit</button>}
                    {pending && <button className="btn" disabled></button>}
                    </div>
                </form>
                <p>{model}</p>
                <p>{carname}</p>
                <p>{avg}</p>
                <p>{article}</p>
            </div>
        </div>
    )
}

export default Create;