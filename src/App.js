import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import AddCategorie from './Component/AddCategorie';
import EditCategorie from './Component/EditCategorie';
import ShowCategories from './Component/ShowCategories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
        <Route path='/editCategory/:id' element={<EditCategorie />}></Route>
        <Route path='/addCategory' element={<AddCategorie />}></Route>
        <Route path='/showCategories' element={<ShowCategories />}></Route> 
      </Routes>

    </>
  );
}

export default App
