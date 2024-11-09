import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";


export default class App extends React.Component {
  // Create state for the expenses here

  render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          
          <div className="expenseContainer">
            <ExpenseForm/>
            <ExpenseList/>
          </div>
        </div>
      </>
    );
  }
}



// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <script
//       crossorigin
//       src="https://unpkg.com/react@18/umd/react.development.js"
//     ></script>
//     <script
//       crossorigin
//       src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
//     ></script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

//     <title>React App</title>
//   </head>

//   <body>
//     <div id="root"></div>

//     <script type="text/babel">
//       var show = true;
//       function setShow() {
//         show = !show;
//         rootElement.render(<App />);
//       }
//       const App = () => (
//         <>
//           <h1>Coding Ninjas</h1>
//           <button onClick= {setShow}>{show ? "Hide Element Below" : "Show Element Below"}</button>

//           {show && <p>Hello ninjas, I am here. </p>}
//         </>
//       );

//       const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//       rootElement.render(<App />);
//     </script>
//   </body>
// </html>
