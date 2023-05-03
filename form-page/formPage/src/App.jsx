import { useState } from "react"

function App() {
  const [name, setname] = useState('')
  const [desc, setDesc] = useState('')
  const [select, setSelect] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [arrayList, setArrayList] = useState([])
  const [error, setError] = useState(false)
  const [toggleSubmit, setToggleSubmit] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const submitForm = (e) => {
    e.preventDefault()

    if (name.length == 0 || desc.length == 0 || email.length == 0 || select.length == 0 || password.length == 0 || file.length == 0) {
      setError(true)
    }
    if (name && desc && select && email && password && file && toggleSubmit) {
      setArrayList(
        arrayList.map(elem => {
          if (elem.id === editItem) {
            return { ...elem, name: name, desc: desc, select: select, email: email, password: password, file: file }
          }
          return elem
        })
      )
      setname('')
      setDesc('')
      setSelect('')
      setEmail('')
      setPassword('')
      setToggleSubmit(false)
      setEditItem(null)
    }
    else {
      const newarrayList = { id: new Date().getTime().toString(), name: name, desc: desc, select: select, email: email, password: password, file: file }
      setArrayList([...arrayList, newarrayList]);
      console.log(file)
      setname("");
      setDesc("");
      setSelect("");
      setEmail("");
      setPassword("");
      setFile(null);
    }
  }

  const deleteData = (id) => {
    const newarr = arrayList.filter((d) => d.id !== id)
    setArrayList(newarr)
  }
  const editData = (id) => {
    const editar = arrayList.find((d) => {
      return (d.id == id)
    })
    console.log(editar)
    setname(editar.name)
    setDesc(editar.desc)
    setSelect(editar.select)
    setEmail(editar.email)
    setPassword(editar.password)
    setFile(editar.file)
    setToggleSubmit(true)
    setEditItem(id)
    console.log(desc)
  }

  return (
    <div className="container">
      <div className="page-title">Club</div>
      <form className="form-wrapper"
        onSubmit={submitForm} >
        <div className="form-field">
          <label htmlFor="">Title</label>
          <input value={name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter Title...' type="text" className='input-area' name='name' />
          <div></div>
          {error && name.length <= 0 ? <div className="error">name field is not be empty</div> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="">Description:</label>
          <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Enter Desc...' className='input-area' name='desc' id="" cols="30" rows="4"></textarea>
          <div></div>
          {error && desc.length <= 0 ? <div className="error">desc field is not be empty</div> : ""}
        </div>
        <div className="form-field">
          <label>Select:</label>
          <select name='select' value={select} onChange={(e) => { setSelect(e.target.value) }} className='input-area'>
            <option className='option' value="{null}"></option>
            <option className='option' value="Gold">Gold</option>
            <option className='option' value="Silver">Silver</option>
            <option className='option' value="Platinum">Platinum</option>
          </select>
          <div></div>
          {error && select.length <= 0 ? <div className="error">SelecBox not be empty</div> : ""}
        </div>
        <div className="form-field">
          <label >Email:</label>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email...' type="email" className='input-area' name='email' />
          <div></div>
          {error && email.length <= 0 ? <div className="error">Image field is not be empty</div> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="">Password:</label>
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password...' type="password" className='input-area' name='password' />
          <div></div>
          {error && password.length <= 0 ? <div className="error">Password field is not be empty</div> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="">Image:</label>
          <input name='file' onChange={(e) => { setFile(e.target.files[0]) }} type="file" className=' input-area' />
          <div></div>
          {file && file <= 0 ? <div className="error">file is not be empty</div> : ""}

        </div>
        <div className="btn-wrapper">
          {toggleSubmit ?
            <button className='btn'>Edit</button> :
            <button className='btn'>Submit</button>
          }
        </div>
      </form>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Desc</th>
              <th>Select</th>
              <th>Email</th>
              <th>Image</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {arrayList.length ? arrayList.map((item, index) => (
              <tr className="table-data" key={`${item + index}`} >
                <td>
                  {item.name}
                </td>
                <td>
                  {item.desc}
                </td>
                <td>
                  {item.select}
                </td>
                <td>
                  {item.email}
                </td>
                <td>
                  <img src={URL.createObjectURL(item.file)} alt="" />
                </td>
                <td>
                  <button onClick={() => deleteData(item.id)} className="btn">Delete</button>
                </td>
                <td>
                  <button onClick={() => editData(item.id)} className="btn">Edit</button>
                </td>
              </tr>
            )) : <tr className="no-data"><td>No Data</td></tr>}
          </tbody>
        </table>
      </div>
    </div >


  )
}

export default App
