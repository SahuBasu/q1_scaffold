import React, { useState } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = () => {
  // Initialize state for balance, income, and expense
  const [balance, setBalance] = useState(0); // Replace with actual calculation
  const [income, setIncome] = useState(0); // Replace with actual calculation
  const [expense, setExpense] = useState(0); // Replace with actual calculation

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${balance}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;



// export default class ExpenseInfo extends React.Component {
//   render() {
//     return (
//       <div className={styles.expenseInfoContainer}>
//         <div className={styles.balance}>
//           <h4>YOUR BALANCE</h4>
//           <h1>${/* Grand total should be displayed here */}</h1>
//         </div>
//         <div className={styles.incomeExpenseContainer}>
//           <div>
//             <h4>Income</h4>
//             <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
//               +${/*Total Profit Amount should be displayed here */}
//             </p>
//           </div>
//           <div>
//             <h4>Expense</h4>
//             <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
//               -${/* Total expense amount should be displayed here */}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
