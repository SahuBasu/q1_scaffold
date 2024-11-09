import React, { useState } from "react";
import styles from "./ExpenseList.module.css";

const ExpenseList = () => {
  // Initialize the state for transactions
  const [transactions, setTransactions] = useState([
    // Example initial data, which you can replace as needed
    { id: 1, name: "Grocery", amount: 50 },
    { id: 2, name: "Utilities", amount: 100 },
  ]);

  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.name}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;


// export default class ExpenseList extends React.Component {
//   render() {
//     return (
//       <div className={styles.expenseListContainer}>
//         <h3>Transactions</h3>
//         <ul className={styles.transactionList}>
//           {/* Display transactions here */}
//         </ul>
//       </div>
//     );
//   }
// }
