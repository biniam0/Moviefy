import "./App.css"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorite/>}></Route>
        </Routes>
      </main>
    </>
  );
}


export default App;
