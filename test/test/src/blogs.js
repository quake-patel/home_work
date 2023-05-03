import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';


const Blogs = () =>{
    const {id} = useParams();
    const {data:articles, loading, error} = useFetch('http://localhost:8000/blogs/' + id)

    const history = useHistory();
    const deleteblog = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }  

    return(
        <div className="article-body">
            {error && <div className="errors">{error}</div>}
            {loading && <div className="errors">loading...</div>}
            {articles && (
                <div className="article-title">
                    <h3>Brand Name:  {articles.model}</h3>
                    <p>Model:  {articles.carname}</p>
                    <p>Avg:  {articles.avg}</p>
                    <p className="article-section">{articles.article}</p>
                    <button onClick={deleteblog}>Delete</button>
                </div>
            )}
        </div>
    )   
}

export default Blogs;