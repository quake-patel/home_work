import Title from './component/Title';
import Input from './component/Input';
import { useState } from 'react';
import List from './component/List';


function App() {

  const [arrayList, setArrayList] = useState([])
  const addList = (inputText) => {
    setArrayList([...arrayList, inputText])
  }

  const deleteText = (key) => {
    let newArray = [...arrayList]
    newArray.splice(key, 1);
    setArrayList([...newArray])
    console.log(arrayList)
  }

  return (
    <div className="App">
      <div className="container">
        <Title />
        <Input addList={addList} />
        {arrayList.map((item, id) => (
          <List item={item} key={id} index={id} deleteText={deleteText} />
        ))}
      </div>
    </div >
  );
}

export default App;
