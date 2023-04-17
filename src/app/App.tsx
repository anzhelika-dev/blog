import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { MainPage }  from "pages/Main";
import { AboutPage }  from "pages/About";
import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />}/>
          <Route path={"/about"} element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;