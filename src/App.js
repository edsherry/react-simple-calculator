// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const [result, setResult] = useState(0);

//   function plus(e) {
//     e.preventDefault();
//     console.log(result)
//     setResult((result) => result + Number(inputRef.current.value));
//   }

//   function minus(e) {
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//   }

//   function times(e) {
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//   }

//   function divide(e) {
//     e.preventDefault();
//     setResult((result) => result / Number(inputRef.current.value));
//   }

//   function resetInput(e) {
//     e.preventDefault();
//     inputRef.current.value = 0
//   }

//   function resetResult(e) {
//     e.preventDefault();
//     setResult(() => Number(0));
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Simplest Working Calculator</h1>
//       </div>
//       <form>
//         <p ref={resultRef}>{result}</p>
//         <input
//           pattern="[0-9]"
//           ref={inputRef}
//           type="number"
//           placeholder="Type a number"
//         />
//         <button onClick={plus}>add</button>
//         <button onClick={minus}>subtract</button>
//         <button onClick={times}>times</button>
//         <button onClick={divide}>divide</button>
//         <button onClick={resetInput}>reset input</button>
//         <button onClick={resetResult}>reset result</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// // ELPIDA DASY
// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const [result, setResult] = useState(0);

//   function plus(e) {
//     e.preventDefault();
//     setResult((result) => result + Number(inputRef.current.value));
//     resetInput();
//   }

//   function minus(e) {
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//     resetInput();
//   }

//   function times(e) {
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//     resetInput();
//   }

//   function divide(e) {
//     e.preventDefault();
//     if (!Number(inputRef.current.value) == 0)
//       setResult((result) => result / Number(inputRef.current.value));
//     resetInput();
//   }

//   function resetInput(e) {
//     inputRef.current.value = "";
//   }

//   function resetResult(e) {
//     setResult(0);
//     resetInput();
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Simplest Working Calculator</h1>
//       </div>
//       <form>
//         <p ref={resultRef}>Result: {result}</p>
//         <input
//           pattern="[0-9]"
//           ref={inputRef}
//           type="number"
//           placeholder="Type a number"
//         />
//         <button onClick={plus}>add</button>
//         {/* Add the subtract button */}
//         <button onClick={minus}>minus</button>
//         {/* Add the multiply button */}
//         <button onClick={times}>multiply</button>
//         {/* Add the divide button */}
//         <button onClick={divide}>divide</button>
//         {/* Add the resetInput button */}
//         <button onClick={resetInput}>reset input</button>
//         {/* Add the resetResult button */}
//         <button onClick={resetResult}>reset result</button>
//       </form>
//     </div>
//   );
// }

// export default App; 


// Gabby Messino
// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const [result, setResult] = useState(0);

//   function plus(e) {
//     e.preventDefault();
//     setResult((result) => result + Number(inputRef.current.value));
//   }

//   function minus(e) {
//     // Add the code for the minus function
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//   }

//   function times(e) {
//     // Add the code for the plus function
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//   }

//   function divide(e) {
//     // Add the code for the divide function
//     e.preventDefault();
//     setResult((result) => result / Number(inputRef.current.value));
//   }

//   function resetInput(e) {
//     // Add the code for the resetInput function
//     e.preventDefault();
//     inputRef.current.value = 0;
//   }

//   function resetResult(e) {
//     // Add the code for the resetResult function
//     e.preventDefault();
//     setResult((prevVal) => prevVal * 0);
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Simplest Working Calculator</h1>
//       </div>
//       <form>
//         <p ref={resultRef}>{result}</p>
//         <input
//           pattern="[0-9]"
//           ref={inputRef}
//           type="number"
//           placeholder="Type a number"
//         />
//         <button onClick={plus}>Add</button>
//         <button onClick={minus}>Subtract</button>
//         <button onClick={times}>Multiply</button>
//         <button onClick={divide}>Divide</button>
//         <button onClick={resetInput}>New Input</button>
//         <button onClick={resetResult}>New Result</button>
//       </form>
//     </div>
//   );
// }

// export default App; 


// Alex Rodrigo Valenzuela Monje
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
