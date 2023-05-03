import { useState } from "react";


const View = () => {

    const [title, setTitle] = useState('');
    const [blogs, setBlogs] = useState(null);
    const [list, setList] = useState(
        [
            {
                "full_name": "hyundai"
            }
        ]
    )


    const pokClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + title)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }
    return (
        <div className="bg-dark">
            <div className="row">
                <div className="col-6">
                    <div className="d-flex justify-content-center vh-100">
                        <div className="d-flex align-items-center">
                            <form className="wrapper form form-control gx-4">
                                <label className="fw-500 me-3">Enter Name</label>
                                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                            </form>
                            <button className="ms-4 btn btn-primary px-4 px-2" onClick={pokClick}>Click</button>
                            <div className="dropdown">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-center vh-100">
                        <div className="d-flex align-items-center w-100 me-5 pe-5">
                            {blogs && <img className="img-fluid" src={blogs} alt="pokemon" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View;    