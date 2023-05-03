const Article = () => {
    return (
        <div className="header">
            <div className="header-section container">
                <div className="logo">Logo</div>
                <div className="nav">
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CAR</a></li>
                    <li><a href="">LOGOUT</a></li>
                    <li className='user-loin-name'></li>
                </div>
            </div>
        </div>
    )
}

export default Article;