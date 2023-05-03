import React from 'react';
import Log from "./log";
import useFetch from "./useFetch";

const Article = () =>{
    const {data:articles, loading, error} = useFetch('http://localhost:8000/blogs')
  

    return(
        <div className="article">
            {error && <div className="errors">{error}</div>}
            {loading && <div className="errors">loading...</div>}
            {articles && <Log article={articles}/>} 
        </div>
    )   
}
export default Article;