import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense, useContext, useState } from "react";
import { MainAsync }  from "./pages/Main/Main.async";
import { AboutAsync }  from "./pages/About/About.async";
import { Link } from "react-router-dom";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
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