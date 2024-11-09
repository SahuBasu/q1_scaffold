// import React from "react";
// import styles from "./ExpenseForm.module.css";

import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  // State for the text and amount inputs
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or pass it to a parent component
    console.log("New Transaction:", { text, amount });
    setText("");
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>

      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;



// export default class ExpenseForm extends React.Component {
//   // Create state or ref for the inputs here

//   render() {
//     return (
//       <form className={styles.form} onSubmit={() => {}}>
//         <h3>Add new transaction</h3>
//         <label htmlFor="expenseText">Text</label>
//         <input
//           id="expenseText"
//           className={styles.input}
//           type="text"
//           placeholder="Enter text..."
//           required
//         />
//         <div>
//           <label htmlFor="expenseAmount">Amount</label>
//           <div>(negative - expense,positive-income)</div>
//         </div>
//         <input
//           className={styles.input}
//           id="expenseAmount"
//           type="number"
//           placeholder="Enter amount..."
//           required
//         />
//         <button className={styles.submitBtn}>Add Transaction</button>
//       </form>
//     );
//   }
// }
