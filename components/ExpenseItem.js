import React from 'react';
import './ExpenseItem.css';
const ExpenseItem = () => {

    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 248.22;

    return (

        <div className='ExpenseItem'>
            <div className='ExpenseItem_description'>
                <div className='Expense_date'>{expenseDate.toLocaleDateString()}</div>
                <h2>{expenseTitle}</h2>
            </div>
            <div className='ExpenseItem_price'>{expenseAmount}</div>
        </div>
    );
};

export default ExpenseItem;
