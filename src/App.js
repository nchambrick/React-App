import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ListItems from './ListItems';
import AddItem from './AddItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EditItem from './EditItem';

function App() {

  // const [name, setName] = useState('');
  // const isButtonSuccess = false;
  // const handleInputChange = (event) => {
  //     setName(event.target.value);      
  // }

  // const handleClick = (event) => {
  //    alert(name)
  // }

  const [items , setItems] = useState([
    {id : 1, title: "Oranges" , description: "Test data"}
  ])

  function deleteItem()
  {

  }

  function addItem(item) {
    const newItem = { ...item, id: Date.now() };
    setItems([...items, newItem]);
  }
  
  function deleteItem(id)
  {
      setItems(items.filter((item) => item.id !== id));
  }

  function updateItem(updated)
{
  setItems(items.map((item)=> item.id === updated.id ? updated:item));
}

  return(
    <Router>
        <Layout>
            <Routes>
              
               <Route path="/" element={ <ListItems items={items} onDelete={deleteItem} /> }    />

               <Route path="/add" element={ <AddItem onAdd={addItem} /> }    />
               function updateItem(updated)
               <Route path="/edit/:id" element={ <EditItem items={items} onUpdate={updateItem} />} />

            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
