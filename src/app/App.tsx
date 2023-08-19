import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames({
      cls: 'app', 
      additional: [theme]
    })}>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;