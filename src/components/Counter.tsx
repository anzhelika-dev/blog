import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={classes.btn}>
      <button onClick={() => setCount(prev => prev + 1)}>{count} +</button>
    </div>
  );
}