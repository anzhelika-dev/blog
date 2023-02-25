import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { Suspense } from "react";
import { MainAsync }  from "./pages/Main/Main.async";
import { AboutAsync }  from "./pages/About/About.async";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={"/"} element={<MainAsync />}/>
          <Route path={"/about"} element={<AboutAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;