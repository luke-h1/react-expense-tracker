import React from 'react'



// // anything that is income is green (turnary operator)
export const Transaction = ({ transaction }) => { 
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>  
    {transaction.text}
  <span>{sign}£{Math.abs(transaction.amount)}</span>
    <button className='delete-btn'>x</button>
</li>
  )
}
