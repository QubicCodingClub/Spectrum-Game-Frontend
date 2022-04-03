import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Techwood.css";

const Techwood = () => {
  const dispatch = useDispatch();

  // const [word, setWord] = useState("Techingo");
  // const [string, setString] = useState("Shivang");
  // const [string6, setString6] = useState("Kalpeshbhai");
  // const [string3, setString3] = useState("Patel");
  // const [string4, setString4] = useState("Vignesh");
  // const [string5, setString5] = useState("Darshanaben");
  // const [cstring, setCstring] = useState("S__v___")
  // const [cstring2, setCstring2] = useState("K____sh_h__")
  // const [cstring3, setCstring3] = useState("P__e_")
  // const [cstring4, setCstring4] = useState("V__n__h")
  // const [cstring5, setCstring5] = useState("D__s__n___n")
  // const [input, setInput] = useState();

  const { string, life, score } = useSelector(state => state.Techwood);
  console.log(string, life);

  const [words, Setwords] = useState([
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Netflix",
  ]);
  const [dwords, setdwords] = useState([
    "G__g__",
    "M__r___f_",
    "A__l_",
    "A_a__n",
    "N__f__x",
  ]);
  const [ans, setAns] = useState(string);
  const [incorrect, setIncorrect] = useState(life)
  const [letter, setLetter] = useState();
  const [count, setCount] = useState(score);

  useEffect(() => {
    for(var i=0; i<incorrect.length; i++){
      if(incorrect[i] >= 8){
        document.getElementsByClassName('abc')[i].setAttribute("style", "background-color: rgba(255, 0, 0, 0.5);");
      }
    }
  }, [incorrect])
  
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }
  const reveal = (key, letter) => {
    if(words[key].includes(letter)){
      for(let i=0; i<words[key].length; i++){
        if(words[key][i] === letter){
          var str = ans[key]; 
          str = setCharAt(str, i, letter);
          var w = ans;
          w[key] = str;
          setAns([...w]);
          dispatch({type : 'SET_ANS', payload: ans})
          console.log(ans[key] === words[key])
          if(ans[key] === words[key]){
            document.getElementsByClassName('abc')[key].setAttribute("style", "background-color: rgba(0, 255, 13, 0.5);");
          }
        }
      }
    }
    else{
      setCount(count-10);
      var i = incorrect;
      i[key]+=1;
      setIncorrect([...i]);
      dispatch({type: 'SET_INCORRECT', payload: incorrect})
      dispatch({type: 'SET_SCORE', payload: count})
    }
  }

  const reset = () => {
    dispatch({type: 'SET_ANS', payload: dwords})
    dispatch({type: 'SET_INCORRECT', payload: [0,0,0,0,0]})
    dispatch({type: 'SET_SCORE', payload: 400})
  }

  const submitHandler = (key, letter) => (e) => {
    e.preventDefault();
    reveal(key, letter);
  }
  // var str = string;

  // const { life } = useSelector((state) => state.Bollywood);
  // console.log(life);
  // const { s } = useSelector((state) => state.Bollywood);
  // const [incorrect, setIncorrect] = useState(life);

  // let ans = new Map();
  // for (let i = 0; i < string.length; i++) {
  //   ans.set(string[i], 0);
  // }
  // for (let i = 0; i < string.length; i++) {
  //   let k = ans.get(string[i]);
  //   ans.set(string[i], k + 1);
  // }

  // var max = Math.round((string.length * 30) / 100);
  // var mapAsc = new Map([...ans.entries()].sort((a, b) => a[1] - b[1]));
  // // var mapAsc = ans;
  // // console.log(ans)
  // // console.log(mapAsc)

  // var cnt = 0;
  // for (let [key, value] of mapAsc) {
  //   if (cnt < max) {
  //     cnt++;
  //     continue;
  //   } else {
  //     str = str.replaceAll(key, "_");
  //     cnt++;
  //   }
  // }


  // const reveal = (input, s, mapAsc) => {
  //   if (mapAsc.get(input) === undefined) {
  //     setIncorrect(incorrect + 1);
  //     if (incorrect > 8) {
  //       var element = document.getElementById("btn1");
  //       element.setAttribute("disabled", "disabled");
  //     }
  //   } else {
  //     for (let i = 0; i < string.length; i++) {
  //       if (string[i] === input) {
  //         s = setCharAt(s, i, input);
  //       }
  //     }
  //     dispatch({ type: "UPDATE_STRING", payload: s });
  //   }
  //   return s;
  // };

  // const [string2, setString2] = useState(s);
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setString2(reveal(input, string2, mapAsc));
  //   dispatch({ type: "INCORRECT", payload: incorrect });
  // };

  // const reset = () => {
  //   dispatch({ type: "INCORRECT", payload: 0 });
  //   dispatch({ type: "UPDATE_STRING", payload: str });
  // }

  return (
    <div>
      <input type="submit" value='Reset' onClick={reset}/>
      <h1>SCORE: {score}</h1>
      {string.map((val, key) => {
        return (
          <div className="abc">
            <div className="tech">
              {"Techwood".split("").map((c) => {
                return <p className="techctr">{c}</p>;
              })}
            </div>
            <div className="str">
              {val.split("").map((val, key) => {
                return <p className="ctr">{val}</p>;
              })}
            </div>
            <form onSubmit={submitHandler(key, letter)} className="form">
              <input
                id="btn"
                className="in"
                type="text"
                maxLength="1"
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                required
              />
              {(incorrect[key] >= 8) ? (
                <input type="submit" id="btn1" disabled/>
              ) : (
                <input type="submit" id="btn1" />
              )}
            </form>
            <h1>{incorrect[key]}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Techwood;
