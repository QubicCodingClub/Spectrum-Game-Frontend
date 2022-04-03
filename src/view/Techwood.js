import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../css/Techwood.css'

const Techwood = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("Techingo");
  const [string, setString] = useState("Bollywood");
  const [input, setInput] = useState();
  
  var str = string;
  
  const { life } = useSelector((state) => state.Bollywood);
  console.log(life);
  const { s } = useSelector((state) => state.Bollywood);
  const [incorrect, setIncorrect] = useState(life);

  let ans = new Map();
  for (let i = 0; i < string.length; i++) {
    ans.set(string[i], 0);
  }
  for (let i = 0; i < string.length; i++) {
    let k = ans.get(string[i]);
    ans.set(string[i], k + 1);
  }

  var max = Math.round((string.length * 30) / 100);
  var mapAsc = new Map([...ans.entries()].sort((a, b) => a[1] - b[1]));
  // var mapAsc = ans;
  // console.log(ans)
  // console.log(mapAsc)

  var cnt = 0;
  for (let [key, value] of mapAsc) {
    if (cnt < max) {
      cnt++;
      continue;
    } else {
      str = str.replaceAll(key, "_");
      cnt++;
    }
  }

  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  const reveal = (input, s, mapAsc) => {
    if (mapAsc.get(input) === undefined) {
      setIncorrect(incorrect + 1);
      if (incorrect > 8) {
        var element = document.getElementById("btn1");
        element.setAttribute("disabled", "disabled");
      }
    } else {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === input) {
          s = setCharAt(s, i, input);
        }
      }
      dispatch({ type: "UPDATE_STRING", payload: s });
    }
    return s;
  };

  const [string2, setString2] = useState(s);
  const submitHandler = (e) => {
    e.preventDefault();
    setString2(reveal(input, string2, mapAsc));
    dispatch({ type: "INCORRECT", payload: incorrect });
  };

  const reset = () => {
    dispatch({ type: "INCORRECT", payload: 0 });
    dispatch({ type: "UPDATE_STRING", payload: str });
  }

  return (
    <div className="Techwood">
      <div className="tech">
        {word.split("").map((c) => {
          return <p className="techctr">{c}</p>;
        })}
      </div>
      <div className="str">
        {s.split("").map((c) => {
          return <p className="ctr">{c}</p>;
        })}
      </div>
      <form onSubmit={submitHandler} className="form">
        <input
          id="btn"
          className="in"
          type="text"
          maxLength="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <input type="submit" id="btn1" />
      </form>
      <h1>{incorrect}</h1>
      <input type="submit" onClick={reset} value='Reset'/>
    </div>
  );
};

export default Techwood;
