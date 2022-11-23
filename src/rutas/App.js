import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../componentes/Menu';
import { NavBar } from '../componentes/NavBar';
import { HomePage } from "../paginas/HomePage";
import { ContactPage } from "../paginas/ContactoPage";
import { BlogPage } from '../paginas/BlogPage';
import { NotFound } from '../paginas/NotFound';
import { PruebaPage } from "../paginas/Productos";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import React from 'react';
import { TablaProductos } from '../componentes/TablaProductos';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contacto' element={<ContactPage></ContactPage>}/>
        <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
        <Route path='/productos' element={<TablaProductos></TablaProductos>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
