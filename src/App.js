import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListItems from './ListItems';
import AddItem from './AddItem';
import Contact from "./contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EditItem from './EditItem';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 🔥 Redux setup
const initialState = {
  items: [
    { id: 1, title: "Python Class", description: "Have to take a python class tomorrow", status: false },
    { id: 2, title: "Python Class Thursday", description: "Have to take a python class tomorrow", status: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "Yoga", description: "Take a class at the studio" },
    { id: 1, title: "Cookies", description: "Pick-up cookies from the grocery store" },
    { id: 1, title: "Design Book", description: "Grab graphic design book from the library" },
    { id: 1, title: "Car Wash", description: "Go to get my car detailed" }
  ]);

  function addItem(item) {
    const newItem = { ...item, id: Date.now() };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }

  function updateItem(updated) {
    const updatedItems = items.map((item) =>
      item.id === updated.id ? updated : item
    );
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ListItems items={items} onDelete={deleteItem} />} />
            <Route path="/add" element={<AddItem onAdd={addItem} />} />
            <Route path="/edit/:id" element={<EditItem items={items} onUpdate={updateItem} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
