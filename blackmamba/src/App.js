import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category" element={<ItemListContainer />}></Route>
            <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
          </Routes>
          <ItemListContainer greetings={"WELCOME TO MAMBA GANG"}/>
        </header>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
