import React from 'react'

export const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="formControl">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="formControl">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="button">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction;
