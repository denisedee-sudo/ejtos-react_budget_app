import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';



import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget />
                        </div> 
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <ExpenseList />
                        </div>
                        <div className='col-12'>
                            <ExpenseItem />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <AllocationForm />
                        </div>
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
