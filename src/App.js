
import { useState } from 'react';
import './App.css';
import InputItem from './components/input';
import ItemList from './components/itemlist';
import SubmitBtn from './components/submitbtn';

function App() {

  const [currentText, setCurrentText] = useState([
    {id: 0, title: 'Text Add List', checked : false}
  ]);

  const onSubmitBtn = (event) => {
    event.preventDefault();
    const el = event.target.querySelector('.fuck');
    const txt = el.value;
    console.log(txt)
 
    if(txt === '') {
      return;
    }

    const todo = currentText[currentText.length -1];
    console.log(todo, "::::::::::::");
    const todoId = todo && todo.id >= 0 ? todo.id + 1 : 0;

    console.log(todoId, "::::::::::::");
    setCurrentText([...currentText, {id: todoId, title: txt, checked : false} ])

    el.value = ''
  }
  
  const handleDeleteBtn = (id) => {
    const delList = currentText.filter((item) => (item.id !== id));
    console.log(delList);
    setCurrentText(delList);

  }

  return (
    <div className="App">
      <h1>todo</h1>
      <form onSubmit={onSubmitBtn}>
        <InputItem />
        <SubmitBtn  title={'입력하기'} />
      </form>
      <div>
        <ItemList arrayText={currentText} deletBtn={handleDeleteBtn} />
      </div>

    </div>
  );
}

export default App;
