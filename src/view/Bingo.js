import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../css/Bingo.css'

const Bingo = () => {
  const dispatch = useDispatch();
  const [ans, setAns] = useState();
  
  const { life } = useSelector((state) => state.Bingo);
  const [incorrect, setIncorrect] = useState(5);
  console.log(life)


  const questions = [
    {
      question: "Where does the SUN rise from ?",
      options: {
        a: "EAST",
        b: "WEST",
        c: "NORTH",
        d: "SOUTH",
      },
      ans: "a",
    },
    {
      question: "Where does the SUN rise from ?",
      options: {
        a: "EAST",
        b: "WEST",
        c: "NORTH",
        d: "SOUTH",
      },
      ans: "b",
    },
    {
      question: "Where does the SUN rise from ?",
      options: {
        a: "EAST",
        b: "WEST",
        c: "NORTH",
        d: "SOUTH",
      },
      ans: "c",
    },
    {
      question: "Where does the SUN rise from ?",
      options: {
        a: "EAST",
        b: "WEST",
        c: "NORTH",
        d: "SOUTH",
      },
      ans: "d",
    },
    {
      question: "Where does the SUN rise from ?",
      options: {
        a: "EAST",
        b: "WEST",
        c: "NORTH",
        d: "SOUTH",
      },
      ans: "b",
    },
    {
      question: "Where does the SUN rise from ?",
      options: {
        a: "EAST",
        b: "WEST",
        c: "NORTH",
        d: "SOUTH",
      },
      ans: "b",
    },
  ];

    var nums = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ],
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    // console.log(ranNums);
    // dispatch({ type: "STORE_NUM", payload: ranNums });


  const checkans = (key, ans) => {
    if (questions[key].ans === ans) {
      var s = (ranNums[key]).toString();
      document
        .getElementById('b'+s)
        .setAttribute("style", "background-color: mediumseagreen;");
    } else {
      setIncorrect(incorrect - 1);
      dispatch({ type: "REDUCE_LIFE", payload: incorrect });
      if (incorrect === 0) alert("Try again later");
    }
  };

  const submitHandler = (key, ans) => (e) => {
    e.preventDefault();
    checkans(key, ans);
  };

  return (
    <div className="Bingo">
      <div className="lifeContainer">
        <h1>{life}</h1>
        <div className="life" id="l1">
          &#10084;
        </div>
        <div className="life" id="l2">
          &#10084;
        </div>
        <div className="life" id="l3">
          &#10084;
        </div>
        <div className="life" id="l4">
          &#10084;
        </div>
        <div className="life" id="l5">
          &#10084;
        </div>
      </div>
      <div className="bingo">
        <table className="bingoContainer">
          <thead>
            <tr>
              <td>B</td>
              <td>I</td>
              <td>N</td>
              <td>G</td>
              <td>O</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="b1">1</td>
              <td id="b2">2</td>
              <td id="b3">3</td>
              <td id="b4">4</td>
              <td id="b5">5</td>
            </tr>
            <tr>
              <td id="b6">6</td>
              <td id="b7">7</td>
              <td id="b8">8</td>
              <td id="b9">9</td>
              <td id="b10">10</td>
            </tr>
            <tr>
              <td id="b11">11</td>
              <td id="b12">12</td>
              <td id="b13">13</td>
              <td id="b14">14</td>
              <td id="b15">15</td>
            </tr>
            <tr>
              <td id="b16">16</td>
              <td id="b17">17</td>
              <td id="b18">18</td>
              <td id="b19">19</td>
              <td id="b20">20</td>
            </tr>
            <tr>
              <td id="b21">21</td>
              <td id="b22">22</td>
              <td id="b23">23</td>
              <td id="b24">24</td>
              <td id="b25">25</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <form onSubmit={submitHandler}>
            <div class="questionBox">
                <p class="title">Question</p>
                <p class="question">Where does the SUN rise from?</p>
                <div class="option" id="a">
                    <input type="radio" name="answer" value="a" onChange={(e) => setAns(e.target.value)}/> EAST
                </div>
                <div class="option incorrect" id="b">
                    <input type="radio" name="answer" value="b" onChange={(e) => setAns(e.target.value)}/> WEST
                </div>
                <div class="option incorrect" id="c">
                    <input type="radio" name="answer" value="c" onChange={(e) => setAns(e.target.value)}/> NORTH
                </div>
                <div class="option incorrect" id="d">
                    <input type="radio" name="answer" value="d" onChange={(e) => setAns(e.target.value)}/> SOUTH
                </div>
                <input className="Bingosubmit" type="submit" value="Submit" />
            </div>
        </form> */}
      {questions.map((question, key) => (
        <form onSubmit={submitHandler(key, ans)}>
          <div className="questionBox">
            <p className="title">Question</p>
            <p className="question">{question.question}</p>
            <div className="option incorrect" id="a">
              <input
                type="radio"
                name="answer"
                value="a"
                onChange={(e) => setAns(e.target.value)}
              />{" "}
              {question.options.a}
            </div>
            <div className="option incorrect" id="b">
              <input
                type="radio"
                name="answer"
                value="b"
                onChange={(e) => setAns(e.target.value)}
              />{" "}
              {question.options.b}
            </div>
            <div className="option incorrect" id="c">
              <input
                type="radio"
                name="answer"
                value="c"
                onChange={(e) => setAns(e.target.value)}
              />{" "}
              {question.options.c}
            </div>
            <div className="option incorrect" id="d">
              <input
                type="radio"
                name="answer"
                value="d"
                onChange={(e) => setAns(e.target.value)}
              />{" "}
              {question.options.d}
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      ))}
    </div>
  );
};

export default Bingo;
