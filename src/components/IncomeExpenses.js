import React from 'react'

export const IncomeExpenses = () => {
  return (
    <div className="incomeExpenses">
      <div>
        <h4>Income</h4>
        <p className="moneyClass plusClass">+$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="moneyClass minusClass">-$0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses;
