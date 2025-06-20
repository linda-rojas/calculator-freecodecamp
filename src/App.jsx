import './App.scss';
import { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleClick(value) {
    setInput(e => e + value);
  }

  function calculateResult() {
    try {
      const equalresult = new Function(`return ${input.replace(/x/g, '*')}`)();
      setResult(equalresult);
    }
    catch {
      setResult("Error al calcular");
    }
  }

  function resetCalculator() {
    setInput("");
    setResult("");
  }

  return (
    <div className='container'>
    <div className='container-main-calculator'>
      <article className='article-calculator'>
        <section className='response-calculator'>
          <span>{input}</span>
          <span>{result}</span>
        </section>
        <section>
          <div className='section-operators'>
            <button className='reset' onClick={resetCalculator}>AC</button>
            <button className='operator' onClick={() => handleClick("/")}>/</button>
            <button className='operator' onClick={() => handleClick("x")}>x</button>
          </div>
          <div className='section-numbers'>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button className='operator' onClick={() => handleClick("-")}>-</button>
          </div>
          <div className='section-numbers'>
              <button onClick={() => handleClick("4")}>4</button>
              <button onClick={() => handleClick("5")}>5</button>
              <button onClick={() => handleClick("6")}>6</button>
              <button className='operator' onClick={() => handleClick("+")}>+</button>
          </div>
          <div className='section-numbers section-operator-equal'>
              <button onClick={() => handleClick("1")}>1</button>
              <button onClick={() => handleClick("2")}>2</button>
              <button onClick={() => handleClick("3")}>3</button>
              <button className='number-0' onClick={() => handleClick("0")}>0</button>
              <button onClick={() => handleClick(".")}>.</button>
              <button className='operator-equal' onClick={calculateResult}>=</button>
          </div>
        </section>
      </article>
    </div>
      <footer className='footer-calculator'>
        <span>Designed and Coded By </span>
        <span className='name'>LRojas</span>
      </footer>

    </div>
  )
}

export default App
