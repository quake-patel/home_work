import { useEffect, useState } from 'react';
import Input from './component/input'
import List from './component/List'
import Title from './component/title'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState(null);

  const url = 'http://localhost:8000/blogs/'

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
  }, [blogs])


  const submitData = (e) => {
    e.preventDefault();
    const blog = { todoInput }

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() =>
      setTodoInput('')
    )
  }

  return (
    <Router>
      <div className="container">
        <Title />
        <switech>
          <Route>
            <Input submitData={submitData} />
          </Route>
          <Route>
            <List blogs={blogs} />
          </Route>
        </switech>
      </div>
    </Router>
  )
}

export default App
