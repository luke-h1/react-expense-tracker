import React, { useState } from 'react';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        id='text'
                        placeholder='enter text...'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative - expense, postive - income){' '}
                    </label>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type='number'
                        id='amount'
                        placeholder='Enter amount...'
                    />
                    <button className='btn'>Add transaction</button>
                </div>
            </form>
        </>
    );
};
