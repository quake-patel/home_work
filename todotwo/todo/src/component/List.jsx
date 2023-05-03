const List = ({ blogs }) => {

    const deleteData = () => {
        fetch(url + 1, {
            method: 'DELETE'
        }).then(() => {
            console.log('delete blog')
        })
    }

    return (
        <div className="list-wrapper">
            {blogs && blogs.length > 0 ? blogs.map((blog) => (
                <div className="list-item" key={blog.id}>
                    <div>{blog.todoInput}</div>
                    <button className="btn" onClick={deleteData}>Delete</button>
                </div>
            )) : <div>No Data</div>}
        </div>
    )
}

export default List