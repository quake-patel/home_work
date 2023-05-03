import React from 'react';
import {Link} from "react-router-dom";  

const Log = (props)=>{
    let article = props.article;
    return(
        <div>
            {article.map((car)=>(
                <div className="article-body" key={car.id}>
                    <Link to={`/blogs/${car.id}`}>
                        <div className="car-title">
                            <h3>{car.model}</h3>
                            <p>{car.carname}</p>
                            <p>{car.avg}</p>
                        </div>
                        <p className="article-section">{car.article}</p>
                    </Link>
                </div>
            ))} 
        </div>
    )
}
export default Log;