import { useEffect, useState } from "react";
import "./styles.css";

export const Config = {
  green: 3000,
  yellow: 500,
  red: 4000
};
export default function App() {
  const [curr, setCurr] = useState(0);

  const getKeys = () => {
    const temp = [];
    for (let key in Config) {
      temp.push(key);
    }
    //  console.log(temp);
    return temp;
  };

  const keys = getKeys();

  useEffect(() => {
    const currDelay = Config[keys[curr]];
    // console.log(Config[keys[curr]]);
    const id = setTimeout(() => {
      // console.log(curr);
      setCurr((curr + 1) % keys.length);
      start();
    }, currDelay);
    return () => {
      clearTimeout(id);
    };
  }, [curr]);
  return (
    <div className="App">
      {keys.map((_, index) => {
        return (
          <div
            style={{
              marginBottom: "20px",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              background: curr === index ? `${keys[index]}` : "ghostwhite"
            }}
          ></div>
        );
      })}
    </div>
  );
}
